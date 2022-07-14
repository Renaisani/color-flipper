const express = require("express");
const app = express();
const port = process.env.PORT;

app.use(express.static("public"));



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.listen(port, function() {
    console.log("Server running on port 3000");
});