require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express();
const userRoute = require("./src/routes/api_v1")

app.use(express.json());
app.use(cors());

app.use("/v1", userRoute);


app.get('/api/data', (req, res) => {

    const data = `message from server`
    res.json(data);
  });
  

  app.post('/api/data', (req, res) => {

    const receivedData = req.body.data;
    console.log(receivedData);
   //res.json({ message: 'i got this data', receivedData });
  });

app.listen(process.env.PORT, () => {
    console.log("SERVER RUNNING ON PORT:", process.env.PORT)
})