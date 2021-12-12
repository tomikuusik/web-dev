const express = require('express');
const client = require('./database');
const cors = require('cors');

const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');

//without this middleware, we cannot use data submitted by forms
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(cors());
app.use(express.static('Public'));

app.listen(3000, () => {
    console.log("Server is listening to port 3000")
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contactus', (req, res) => {
    res.render('contactus');
});

app.get('/addnewpost', (req, res) => {
    res.render('addnewpost');
});

app.get('/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        client.connect();
        const posts = await client.query(
        "SELECT * FROM posts"
        );
        client.end;
        res.render('posts', { posts: posts.rows });
    } catch (err) {
        console.error(err.message);
 }
});

app.get('/singlepost/:id', async(req, res) => {
    try {
        const id = req.params.id;
        console.log(req.params.id);
        console.log("get a single post request has arrived");
        client.connect();
        const posts = await client.query(
        "SELECT * FROM posts WHERE id = $1", [id]
        );
        client.end
        res.render('singlepost', { posts: posts.rows[0] });
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        console.log("get a post request has arrived");
        client.connect();
        const Apost = await client.query(
        "SELECT * FROM posts WHERE id = $1", [id]
        );
        client.end;
        res.json(Apost.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const increaselike = await client.query(
        "UPDATE posts SET likes = likes + 1 WHERE id = $1", [id]
        );
        res.json(post);
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/posts/:id', async(req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const post = req.body;
        console.log("delete a post request has arrived");
        client.connect();
        const deletepost = await client.query(
        "DELETE FROM posts WHERE id = $1", [id]
        );
        client.end();
        res.redirect('posts');
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/posts', async(req, res) => {
    try {
        const post = req.body;
        console.log(post);
        client.connect();
        const newpost = await client.query(
        "INSERT INTO posts(title, body, urllink) values ($1, $2, $3) RETURNING*", 
        [post.title, post.body, post.urllink]
        );
        client.end()
        res.redirect('posts');
 } catch (err) {
    console.error(err.message)
 }
});


app.get('/create', (req, res) => {
    res.render('create');
});

app.use((req, res) => {
    res.status(404).render('404');
}); 