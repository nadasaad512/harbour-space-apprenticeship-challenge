import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors());

app.get('/api/scholarship', async (req, res) => {
  try {
    console.log("📡 loading to get data from harbour.space...");
    const response = await fetch(
      'https://harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab'
     );
    const data = await response.json();
    console.log("✅ ");
    res.json(data);
  } catch (error) {
    console.error("❌ ", error);
    res.status(500).json({ error: 'faild to load data' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 server worke on http://localhost:${PORT}` );
});
