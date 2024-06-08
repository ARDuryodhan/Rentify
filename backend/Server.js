require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const authRoute = require("./Router/auth");
const contactRoute = require("./Router/Contact-router");
const propertyRoute = require("./Router/property-router");
const adminRoute = require("./Router/Admin-router")
const connectDB = require("./utility/db");
const errorMiddleware = require("./Middleware/Error-Middleware");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);

app.use("/api/form", contactRoute);

app.use("/api/property", propertyRoute);


//Admin panel //

app.use("/api/admin", adminRoute)


app.use(errorMiddleware);

const PORT = 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
}).catch(error => {
  console.error("Error connecting to database:", error);
});
