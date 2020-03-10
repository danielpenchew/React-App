const mongoose = require('mongoose');
const dbLocation = 'mongodb://127.0.0.1:27017/online-shop';

mongoose
        .connect(dbLocation, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch(e => {
            console.error('Connection error: ', e.message);
        });

const db = mongoose.connection;

module.exports = db;
