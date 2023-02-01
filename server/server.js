const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 4959 || process.env.PORT;
const dotenv = require("dotenv");
const scheduleRouter = require("./src/routes/schedule.route");
const crawlScheduleData = require("./src/helpers/crawlScheduleData.helpers");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(cors());
app.use("/routes", scheduleRouter);
dotenv.config();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/../client/dist/index.html"));
});

// app.post("/login", (req, res) => {
//   res.json("wörki");
// });

app.listen(PORT, () => {
  console.log(`Server at ${PORT}`);
  crawlScheduleData();
});
