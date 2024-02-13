import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Running on EC2 Instance!");
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
