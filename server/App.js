const express = require('express');
const client = require('./database');

const app = express();

app.set('view engine', 'ejs');
   
app.get('/', (req, res) => {
    res.render('posts', {title: "post1", content: "content", likes: "1"})
})

app.get('/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        client.connect();
        const posts = await client.query('SELECT * FROM posts');
        res.json(posts.rows);
        client.end;
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        console.log("get a post request has arrived");
        const posts = await client.query(
        "SELECT * FROM posts WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/posts/', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await client.query(
        "INSERT INTO posts(title, body, urllink) values ($1, $2, $3) RETURNING*", 
        [post.title, post.body, post.urllink]
        );
        res.json( newpost );
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await client.query(
        "UPDATE nodetable SET (title, body, urllink) = ($2, $3, $4) WHERE id = $1", 
        [id, post.title, post.body, post.urllink]
        );
        res.json(post);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("delete a post request has arrived");
        const deletepost = await client.query(
        "DELETE FROM nodetable WHERE id = $1", [id]
        );
        res.json(post);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(3000, () => {
    console.log("Server is listening to port 3000")
});