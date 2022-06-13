const app = require('./app');
const mongoose = require('mongoose');
const {PORT, DB_HOST} = require('./helpers/env');


mongoose.connect(DB_HOST).then(() => {
    console.log('DB is working');
    app.listen(PORT);
}).then(() => {
    console.log(`Server is on ${PORT}`);
}).catch((err) => {
    console.log('ERROR', err);
    process.exit(1);
});
