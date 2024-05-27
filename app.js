const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/task', (req, res) => {
    res.render('taskDetails');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/submit', (req, res) => {
    const { name, email, contact, comments} = req.body;
    res.render('submitted', {name, email, contact, comments})
});

app.post('/confirm', (req, res) => {
    const {task, description, deadline, priority} = req.body;
    res.render('confirm', {task, description, deadline, priority})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});