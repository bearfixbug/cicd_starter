const express = require('express')
const app = express();

const server = app.listen(3009, console.log('server is running'));

app.post("/test", (req, res) => {
    return res.status(200).json({message: "good"})
})