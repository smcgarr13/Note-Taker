const express = require('express');
const router = express.Router();
const db = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const uuid = require('../helpers/uuid');

router.get('/notes', (req, res) => {
  fs.readFile(__dirname + '/../db/db.json', 'utf8', function (error, data) {
    if (error) {
      return console.log(error);
    }
    const notes = JSON.parse(data);
    res.json(notes);
  });
});

router.post('/notes', (req, res) => {
  fs.readFile(__dirname + '/../db/db.json', 'utf8', function (error, data) {
    if (error) {
      return console.log(error);
    }
    const notes = JSON.parse(data);
    const newNote = req.body;
    newNote.id = uuid();
    notes.push(newNote);
    fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(notes), err => {
      if (err) throw err;
      res.json(notes);
    });
  });
});

router.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  fs.readFile(__dirname + '/../db/db.json', 'utf8', function (error, data) {
    if (error) {
      return console.log(error);
    }
    const notes = JSON.parse(data);
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
      notes.splice(index, 1);
      fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(notes), err => {
        if (err) throw err;
        res.json({ message: `Note with id ${id} deleted.` });
      });
    } else {
      res.status(404).json({ error: `Note with id ${id} not found.` });
    }
  });
});

// // Serve the notes.html file on the /notes endpoint
// router.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/notes.html'));
// });

module.exports = router;
