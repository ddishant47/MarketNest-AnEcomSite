
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const cartRoutes = require("./routes/cartRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("server is running");
});

app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", cartRoutes);
app.use("/api", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`server started on port ${PORT}`);

});
app.get("/products", (req, res) => {
  res.json([
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 }
  ]);
});
