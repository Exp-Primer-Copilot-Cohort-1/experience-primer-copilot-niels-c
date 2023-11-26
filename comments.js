// Create Web server
import express from 'express';
const app = express();
const port = 3000;

// Create a static file server
app.use(express.static('public'));

// Start the Web server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
