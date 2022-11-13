// Basics of Express and creating our own first server
/*
Node --> is a runtime environment that helps developer to create the backend of any web app.
Node is totally based of javaScript.

Express --> is nothing but a framework for node. It contains simplified codes written by someone
else for users so that then don't have to write long codes. It just like jQurey for javaScript.
*/

// incorporate express

var Exp = require('express'); // similar to that of #include in C/C++
// now create a instance of Express
var app = Exp();
// we will use above instace to create our server
//listen() is a function of express used to listen to HTTP requests..
app.listen(6969, function(){
  console.log("Server has started at 6969");
});
// when someone goes to your port address(6969) then your server has to serve that user..
// and for that purpose we use get to generate response like CSS, HTML or javaScript code loading,
// etc.

// '/' represents the server root which in this case is your system acting as a server..
// once a user enters your website.. you have to deliver him with something..
// Below code is called a route
app.get('/',  function(req, res){
  res.send("You have got your response !"); //this will send your the quoted line once users
  // enters your website..
});

/// create another route for about section
// to access it use localhost:6969/about

app.get('/about', function(req, res){
  res.send("This is my about section");
});

//creating another route for skills

app.get('/skills', function(req, res){
  res.send("Pro C/C++ developer and Sound Knowledge of Java!");
});
