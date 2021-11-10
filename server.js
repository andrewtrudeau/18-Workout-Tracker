const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true
// });
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// routes
//app.use(require("./routes/api.js"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require("./routes/api.js"));

app.get('/exercise', (req,res)=> {
  res.sendFile('public/exercise.html', {root: __dirname });
})

app.get('/stats', (req,res)=> {
  res.sendFile('public/stats.html', {root: __dirname });
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
