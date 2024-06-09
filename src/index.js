const express = require('express')
const curriculum = require('./routes/curriculum');

const app = express();
const port = process.env.PORT | 3000
app.use(express.json());


app.get('/health', (req, res) => {
    res.send("its working")
})

app.use('/curriculum', curriculum);

app.listen(port, () => {
    console.log('app is listening on port : ', port)
})