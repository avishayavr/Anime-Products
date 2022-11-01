const express = require("express");
const cors = require("cors");
const app = express();

require("./config/database");

app.use(cors());
app.use(express.json());

const productsRouter = require("./routers/productsRouter");


app.use("/api/products", productsRouter);


app.listen(8000, () => {
  console.log("Server is listening");
});
