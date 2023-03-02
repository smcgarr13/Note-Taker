const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid');
const cors = require('cors');

const notesRouter = require('./routes/notes');
const htmlRouter = require('./routes/html');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', htmlRouter);
// app.use('/notes', htmlRouter);
app.use('/api', notesRouter);
// app.use('/api/notes', notesRouter);
// app.use('/', notesRouter);

app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🫶`)
);
