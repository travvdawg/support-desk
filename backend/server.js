const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require('./middlewear/errorMiddlewear');
const connectDB = require('./config/db');
const colors = require('colors');

// connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to the support desk api' });
});

app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
