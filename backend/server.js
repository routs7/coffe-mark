const express = require('express');
const cors = require('cors');
const translations = require('./translations.json');

const app = express();
app.use(cors());

app.get('/translations', (req, res) => {
    res.json(translations);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Backend запущен на http://localhost:${PORT}`);
});
