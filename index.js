import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3001;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));

// ROUTES
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to the Express Applicatin" });
});

app.get("/status", (req, res) => {
  res.status(200).send({ message: "API is working" });
});

app.use("*", (req, res) => {
  res.status(404).send({
    message: "No route exists with the specified path",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
