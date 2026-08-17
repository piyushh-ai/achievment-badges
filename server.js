import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/kutta",(req,res)=>{
  res.send("Hello world , modi ko kutta kata")
})


app.get("/bjpghanta",(req,res)=>{
  res.send("Hello world , modi motherchod ko kutta kata")
})



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
