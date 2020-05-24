const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const fs = require('fs');
const path = require('path');

// To serve static file
app.use(express.static('build'));

app.get('/api/ping', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'PONG'
  });
});

/* Entry point
 * Please kindly use Hash Router in your React APP,
 * in that way, there will be no intersection between
 * react router and express router
 * */
app.get('/', (req, res) => {
  res.status(200).sendFile(
    path.resolve(__dirname, '..', 'build', 'index.html')
  );
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
})
