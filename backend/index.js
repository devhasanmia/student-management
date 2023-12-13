const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./database/db');
const { defaultError } = require('./utils/error');
const router = require('./routes');
const app = express();
dotenv.config();
app.use(express.json())


// Route Handler
app.use(router);

app.use(defaultError)


// Database Configaration
connectDB(process.env.MONGO_URI)
    .then(() => {
        console.log('Database Connected');
        app.listen(process.env.PORT, () => {
            console.log(`Server Running on http://localhost:${process.env.PORT}`);
        });
    })
    .catch((e) => console.log(e));