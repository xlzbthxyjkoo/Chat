var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

let messages = [];

app.post("/sendMessage", function(request, response) {
    console.log("/sendMessage: " + JSON.stringify(request.body));
    let data = request.body;
    messages.push(data);
    response.send(messages.length.toString());
});

app.post("/getNewMessages", function(request, response) {
    console.log("/getNewMessages: " + JSON.stringify(request.body));
    let newIndex = request.body.count;
    let resultData = [];
    if(messages.length > newIndex) {
        resultData = messages.slice(newIndex, messages.length);
    }
    response.send(JSON.stringify(resultData));
});

app.listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273/webfinal.html')
})