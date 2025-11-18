// routes/health.js - Health check endpoint for monitoring

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Health check endpoint
router.get('/', async (req, res) => {
  try {
    // Check database connection
    const dbState = mongoose.connection.readyState;
    const dbStatus = dbState === 1 ? 'connected' : 'disconnected';

    // Get database stats
    const dbStats = dbState === 1 
      ? await mongoose.connection.db.stats() 
      : null;

    const healthCheck = {
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      database: {
        status: dbStatus,
        connected: dbState === 1,
        name: mongoose.connection.name || 'N/A',
      },
      memory: {
        used: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
        total: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)}MB`,
      },
    };

    if (dbStats) {
      healthCheck.database.collections = dbStats.collections;
      healthCheck.database.dataSize = `${Math.round(dbStats.dataSize / 1024)}KB`;
    }

    res.status(200).json(healthCheck);
  } catch (error) {
    res.status(503).json({
      status: 'ERROR',
      timestamp: new Date().toISOString(),
      error: error.message,
    });
  }
});

module.exports = router;
