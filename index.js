const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
// const databaseConnection = require("./utils/databaseConnection");
const app = express();
const port = process.env.PORT || 5000;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const toolsRouter = require("./router/v1/tools");
const viewCount = require("./middleware/viewCount");
// const limiter = require("./middleware/limiter");
const { default: rateLimit } = require("express-rate-limit");
const { connectToServer } = require("./utils/dbConnect");
const errorHandler = require("./middleware/errorHandler");
connectToServer((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } else {
    console.log(err);
  }
});
app.use(cors());
app.use(express.json());

app.use("/api/v1/tools", toolsRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("*", (req, res) => {
  res.send("Sorry for that. Not found any data ");
});

app.use(errorHandler);
process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});
