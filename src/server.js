const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/', (_request, response) => {
  response.status(200).json({ message: 'Adriano Monteiro Dev' });
});

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
