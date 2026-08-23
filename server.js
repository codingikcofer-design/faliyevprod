const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Явные маршруты для страниц
app.get('/book', (req, res) => res.sendFile(path.join(__dirname, 'public', 'book.html')));

// Всё остальное — на главную
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Faliyev Prod site running on port ${PORT}`);
});
