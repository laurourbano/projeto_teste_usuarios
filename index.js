require('dotenv').config();
const express = require('express');

const app = express();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('1');
});

app.get('/usuarios', (req, res) => {
    res.status(200).json('usuarios');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});