const express = require('express');
const app = express();
const cors = require('cors');

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors());
app.use(express.static('server'));

app.use('/listing', createProxyMiddleware({ target: 'http://54.183.243.19', changeOrigin: true }));
app.use('/favorites/', createProxyMiddleware({ target: 'http://54.183.243.19', changeOrigin: true }));
// app.use('/api/booking/listing/:id', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
// app.use('/api/review/:id', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/api/more-places', createProxyMiddleware({ target: 'http://13.57.209.191', changeOrigin: true }));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy Server Started on: ${PORT}`);
});