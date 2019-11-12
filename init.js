const app = require('./app');
const db = require('./db');
const dotenv = require('dotenv');
const Video = require('./models/Video');
const Comment = require('./models/Comment');

dotenv.config();

const PORT = process.env.PORT || 3000;

const handleListening = () => {
  console.log(`Listening on port: ${PORT}`);
}

app.listen(PORT, handleListening);