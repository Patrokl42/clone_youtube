const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const body_parser = require('body-parser');
const cookie_parser = require('cookie-parser');

const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Lessening port: ${PORT}`)
}

const handleHome = (req, res) => {
  res.send("Hello from home")
}

const handleProfile = (req, res) => {
  res.send("Hello from profile")
}
app.use(cookie_parser());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);