const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const feedRoute = require("./routes/feed.routes");

mongoose
  .connect(
    "mongodb+srv://DB01:DB01@cluster0.lx1vj.mongodb.net/FeedBack?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database successfully"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/feed", feedRoute);

const PORT = 3000;

app.listen(PORT, console.log(`Server started at port: ${PORT}`));