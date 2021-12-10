module.exports = (sequalize, Sequalize) => {
    const Post = sequalize.define("post", {
        title: {
            type: Sequalize.STRING
        },
        content: {
            type: Sequalize.STRING
        },
        date: {
            type: Sequalize.STRING
        }
    });
    return Post;
};