import express from "express";
import bodyParser from "body-parser";
import jsonfile from 'jsonfile';
import { v4 as uuidv4 } from 'uuid';



const app = express();
const port = 3000;
let postedData = jsonfile.readFileSync('posts.json') || []; // read existing posts or initialize an empty array


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("images"))

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  try {
    res.render("index.ejs", { posts: postedData });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error");
  }
})






app.get("/about", (req, res) => {
  try {

    res.render("about.ejs")
  } catch (error) {
    console.error(error);
    res.status(500).send("Error: " + error.message);
  }
})



app.get("/contact", (req, res) => {
  try {
    res.render("contact.ejs")
  } catch (error) {
    console.error(error);
    res.status(500).send("Error: " + error.message);
  }
})




app.post("/submit", (req, res) => {

  try {
    const { title, description, content, fName, domain, date } = req.body;
    const newPost = {
      id: generatePostId(), // generate a unique ID for the new post
      title: title,
      description: description,
      content: content,
      fName: fName,
      domain: domain,
      date: date,
    };
    console.log(`New post created by ${fName}  on ${date} with title `);

    postedData.push(newPost); // add new post to the array
    console.log({ newPost })
    jsonfile.writeFileSync('posts.json', postedData);
    res.redirect("/"); // redirect to home page

  }
  catch (err) {
    console.error(err);
    res.status(500).send("Error submitting form");

  }
})
function generatePostId() {
  return uuidv4(); // generates a random UUID (e.g., "123e4567-e89b-12d3-a456-426655440000")
}


app.get('/post/', (req, res) => {
  try {
    res.render("post.ejs", { posts: postedData } );
  }
  catch (err) {
    console.error(err);
    res.status(500).send("Error fetching posts");
  }
});



app.get('/post/:id', (req, res) => {

  const postId = req.params.id;
  const post = postedData.find((post) => post.id === postId);
  if (!post) {
    res.status(404).send('Post not found');
  } else {
    res.render('fullPost', { post: post });
  }

});

// delete a post 

app.delete('/post/:id', (req, res) => {
  const postId = req.params.id;
  const index = postedData.findIndex(post => post.id === postId);

  if (index === -1) {

    res.status(404).json({
      error: " we couldnt delete the post"
    })
  } else {
    postedData.splice(index, 1);
    jsonfile.writeFileSync('posts.json', postedData);
    res.render("index.ejs", { posts: postedData });

  }
});




app.listen(port, () => {
  console.log("Server is running at port 3000")
})

