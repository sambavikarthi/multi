const express = require('express');
const { Pool } = require('pg');
const client = require('prom-client');

const app = express();
const port = process.env.PORT || 3000;

// Prometheus Metrics setup
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'postgres',
  port: process.env.DB_PORT || 5432,
});

// Middleware to track metrics
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestsTotal.inc({
      method: req.method,
      route: req.path,
      status: res.statusCode
    });
  });
  next();
});

// Serve static files from 'public' folder
app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Multi-Container API!', version: '1.0.0' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP', timestamp: new Date() });
});

app.get('/db-check', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ status: 'Connected', time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ status: 'Database Connection Failed', error: err.message });
  }
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, () => {
  console.log(`Multi-Container Application API is running at http://localhost:${port}`);
});
