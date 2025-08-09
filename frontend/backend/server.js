const express = require('express');
const cors = require('cors');
const translations = require('./translations.json');

const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend')));
app.use(cors());

app.get('/translations', (req, res) => {
    res.json(translations);
});

const PORT = 3000;
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
app.listen(PORT, () => {
    console.log(`Backend запущен на http://localhost:${PORT}`);
});
