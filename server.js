const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS) from "public" folder
app.use(express.static('public'));

app.get('/run-code', (req, res) => {
  console.log('Code is running!');
  runMyCode();
  res.send('Code executed successfully!');
});

function runMyCode() {
  console.log('Running custom logic...');

}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});