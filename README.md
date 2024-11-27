
# Lifescript

Lifescript is a blog posting website built with Express.js that uses JSON files for storing posts.

## Features

- **Create Post**: Users can create new blog posts.
- **Edit Post**: Edit existing blog posts.
- **Delete Post**: Delete unwanted blog posts.
- **View Posts**: Users can view individual posts and navigate through the blog.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Data Storage**: Posts are stored in JSON files (`posts.json`)
- **Other Tools**: `body-parser`, `jsonfile`, `uuid`

## Getting Started

1. **Clone the repository**:
  
   git clone https://github.com/HARD1Kk/lifescript.git
   cd lifescript


2.  **Install dependencies**:
    
    ```sh
    npm install
    ```
    
3.  **Start the server**:
    
    ```sh
    npm start
    ```
    
4.  **Open your browser**: Open `http://localhost:3000` to view the website.
    

## Usage


*   **Create a new post**: Navigate to the homepage, fill out the form, and submit.
*   **Edit a post**: Click on the edit icon next to a post, make changes, and save.
*   **Delete a post**: Click on the delete icon to remove a post.

## Project Structure


The project structure includes:

*   `index.js`: Express server setup and route handling.
*   `views/`: EJS templates for rendering HTML.
*   `public/`: Static assets (CSS, client-side JavaScript).
*   `posts.json`: JSON file storing blog posts.


