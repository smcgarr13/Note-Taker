const express = require('express');
const path = require('path');
const fs = require('fs');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
// Middleware for parsing request
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

// Route for getting saved notes
app.get('./api/notes', (req, res) => {
   const notesData = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8');
const notes = JSON.parse(notesData);
res.json(notes);
    });
// app.get('./api/notes', (req, res) => {
//     fs.readFile(path.join(__dirname, 'db.jason'), 'utf8', (err, data) => {
// if (err) throw err;
// const notes = JSON.parse(data);
// res.json(notes);
//     });
// });

//Route for adding new notes
app.post('api/notes', (req, res) => {
    const notesData = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8');
        const notes = JSON.parse(notesData);
        const newNote = req.body;
        // Generate unique name/ID for new note
        newNote.id = uuid();
        // Add new note to array of notes
        notes.push(newNote);
        // write notes array to db.json file
        fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(notes), err => {
            if (err) throw err;
            // return new note to client
            res.json(newNote);
        });
    });

// app.post('api/notes', (req, res) => {
//     fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
//         if (err) throw err;
//         const notes = JSON.parse(data);
//         const newNote = req.body;
//         // Generate unique name/ID for new note
//         newNote.id = uuid();
//         // Add new note to array of notes
//         notes.push(newNote);
//         // write notes array to db.json file
//         fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(notes), err => {
//             if (err) throw err;
//             // return new note to client
//             res.json(newNote);
//         });
//     });
// });

// add delete function
app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    const notesData = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf8');
    const notes = JSON.parse(notesData);
    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(notes), err => {
            if (err) throw err;
        });
        res.status(204).send();
    } else {
        res.status(404).send();
    }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🫶`)
);