const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ヘルスチェック用エンドポイント
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// 例：データを返すAPI
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});