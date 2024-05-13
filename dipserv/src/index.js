const express = require('express');
const app = express();
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const rootRouter = require('./rootRouter');

// Configure morgan to log requests
app.use(morgan('dev'));

// Parse JSON request bodies
app.use(bodyParser.json());

// Fix CORS error
app.use(cors());

// Create a PostgreSQL connection pool
const pool = new Pool({
	connectionString: 'postgres://xplbjqvf:8Hl5Gf6xEZ5KvLuBLfhPs0d5n563ULlx@kandula.db.elephantsql.com/xplbjqvf',
});

// Test the database connection
pool.connect((err, client, done) => {
	if (err) {
		console.error('Error connecting to the database', err);
  } else {
		console.log('Connected to the database');
  }
});

// Define your routes and CRUD operations here
app.use("/api", rootRouter);

// Start your Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});