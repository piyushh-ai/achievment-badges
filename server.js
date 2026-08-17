import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.get("/about",(req,res)=>{
  res.send("this is about page")
})


app.get("/home",(req,res)=>{
  res.send("home page")
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
