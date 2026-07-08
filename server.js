import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors({
  origin: '*', // يسمح بالطلب من أي مكان
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));


app.get('/api/scholarship', async (req, res) => {
   console.log("📥 Received a request from Frontend!"); // أضف هذا السطر
  try {
    console.log("📡 Fetching from harbour.space...");
    const response = await fetch(
      'https://harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab'
     );
    const data = await response.json();
    console.log("✅ Data received from API");
    res.json(data);
  } catch (error) {
    console.error("❌ Server error:", error);
    res.status(500).json({ error: 'Failed to fetch' });
  }
});

app.listen(3001, () => {
  console.log('🚀 Server running on http://localhost:3001' );
});
