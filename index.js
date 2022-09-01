const express = require("express");

const imageRouter = require("./routers/image");
const userRouter = require("./routers/user");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use("images", imageRouter);

app.listen(PORT, () => console.log(`Server started in ports: ${PORT}`));
