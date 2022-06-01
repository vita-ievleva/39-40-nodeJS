const app = require('./app');


const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server in on ${PORT}`);
});
