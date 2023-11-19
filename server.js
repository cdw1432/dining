require('dotenv').config()
const express = require('express')
const cors = require('cors')


const app = express();
const userRoute = require("./src/routes/api_v1");
const dbUpdate = require('./src/dbUpdate')
app.use(express.json());
app.use(cors());

app.use("/v1", userRoute);

//sending data to fe
app.get('/api/data', (req, res) => {

    const data = `message from server`
    res.json(data);
});

let formattedDate;
//receiving data from fe
app.post('/api/data', (req, res) => {
    const receivedData = req.body.data;
    formattedDate = receivedData
    console.log(count + ": " + receivedData);
    count++
    res.json({ message: count + ": " + receivedData });
  });
const { job: dbUpdateJob } = dbUpdate();


app.listen(process.env.PORT, () => {
    console.log("SERVER RUNNING ON PORT:", process.env.PORT)
})

module.exports = formattedDate;