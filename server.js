const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');


const { createProxyMiddleware } = require('http-proxy-middleware')

app.use(cors());
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, './server')));

app.use('/listing/', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/favorites/', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/booking/listing/:id', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/api/review/:id', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/api/booking/listing/:id', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy Server Started on: ${PORT}`);
});