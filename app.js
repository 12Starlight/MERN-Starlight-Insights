const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World! We are building a Google Keep clone'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));