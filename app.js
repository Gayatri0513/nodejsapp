var express=require("express");
var app=express();
var bodyparser=require("body-parser");
var u=require("./usermodule.js")
app.use(bodyparser.urlencoded({extended:false}));

var logger=function(req,resp,next){
	
	console.log(req.url);
	console.log(req.method);
	next();
}
var index=(req,resp)=>{
	resp.sendFile("form.html",{root:__dirname});
	
}


var calculate =function(req,resp)
{ 
     
	if(u.prime(req.query.num))
	{
		resp.send("it is a prime number");
	}else
		resp.send("it is not a prime number");
	
	
}

app.use(logger);
app.get("/calc",calculate);
app.get("/",index);


app.listen(8081,()=>{
	
	console.log("server started on port 8081")
})

