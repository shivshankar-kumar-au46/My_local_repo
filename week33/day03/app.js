const express = require("express");
const connectDB = require("./dbConfig");
const userRouter = require("./routes/userRouter");
const port = 4455;
const app = express();

app.use(express.json());
app.use("/users", userRouter);


app.listen(port, () => {
  console.log(`Started Successfully at port ${port}`);
  connectDB();
});