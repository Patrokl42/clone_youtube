const app = require('./app');

const PORT = 3000;

const handleListening = () => {
  console.log(`Listening on port: ${PORT}`);
}

app.listen(PORT, handleListening);