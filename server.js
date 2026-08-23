const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Раздаём все файлы из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Любой неизвестный маршрут — отдаём главную страницу (одностраничный сайт)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Faliyev Prod site running on port ${PORT}`);
});
