const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const { connectToMongoDB } = require("./connect");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() => {
  console.log("MongoDB connected");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthentication);
app.use("/", staticRoute);
app.use("/url", restrictTo(["NORMAL", "ADMIN"]), urlRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log("server started:", PORT);
});
