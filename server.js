const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors());
app.use('/', express.static(path.join(__dirname, 'server')));

app.use('/listing', createProxyMiddleware({ target: 'http://54.67.5.9/', changeOrigin: true }));
app.use('/favorites', createProxyMiddleware({ target: 'http://54.67.5.9/', changeOrigin: true }));
app.use('/api/booking/listing/', createProxyMiddleware({ target: 'http://3.101.63.34', changeOrigin: true }));
app.use('/api/reviews/:id', createProxyMiddleware({ target: 'http://54.67.90.25/', changeOrigin: true }));
app.use('/api/more-places', createProxyMiddleware({ target: 'http://13.57.209.191', changeOrigin: true }));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy Server Started on: ${PORT}`);
});