const express = require("express");
const mongoose = require("mongoose");

const items = require('./routes/api/items');

const app = express();

// Body parser Middleware
// NOTE: body parser is now included with express no need to call for it separately
app.use(express.json());

// DB Config
const db = require("./config/keys").mongouri;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// Use Routes
app.use('./api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
