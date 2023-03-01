const express = require('express');
const router = express.Router();
const db = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const uuid = require('../helpers/uuid');


// app.get('/api/notes', (req, res) => {
//     res.send(notes);
//   });

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

// Serve the notes.html file on the /notes endpoint
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;







// router.get('/api/notes', (req, res) => {
//   const notesData = fs.readFileSync(path.join(__dirname, '..', 'db', 'db.json'), 'utf8');
//   const notes = JSON.parse(notesData);
//   res.json(notes);
// });
// router.post('/api/notes', (req, res) => {
//   const notesData = fs.readFileSync(path.join(__dirname, '..', 'db', 'db.json'), 'utf8');
//   const notes = JSON.parse(notesData);
//   const newNote = req.body;
//   newNote.id = uuid();
//   notes.push(newNote);
//   fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes), err => {
//     if (err) throw err;
//     res.json(newNote);
//   });
// });
// router.delete('/api/notes/:id', (req, res) => {
//   const id = req.params.id;
//   const notesData = fs.readFileSync(path.join(__dirname, '..', 'db', 'db.json'), 'utf8');
//   const notes = JSON.parse(notesData);
//   const index = notes.findIndex(note => note.id === id);





// });

// fs.readFile(__dirname + "/db/db.json", 'utf8', function (error, data) {
//   if (error) {
//       return console.log(error)
//   }
//   res.json(JSON.parse(data))
// });


//   if (index !== -1) {
//     notes.splice(index, 1);
//     fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes), err => {
//       if (err) throw err;
//     });
//     res.status(204).send();
//   } else {
//     res.status(404).send();
//   }
// });






// const express = require('express');
// const router = express.Router();
// const path = require('path');
// const fs = require('fs');
// const uuid = require('../helpers/uuid');
// const db = require('../db/db.json');


// router.get('/api/notes', (req, res) => {
//   const notesData = fs.readFileSync(path.join(__dirname, '..', 'db', 'db.json'), 'utf8');
//   const notes = JSON.parse(notesData);
//   res.json(notes);
// });

// router.post('/api/notes', (req, res) => {
//   const notesData = fs.readFileSync(path.join(__dirname, '..', 'db', 'db.json'), 'utf8');
//   const notes = JSON.parse(notesData);
//   const newNote = req.body;
//   newNote.id = uuid();
//   notes.push(newNote);
//   fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes), err => {
//     if (err) throw err;
//     res.json(newNote);
//   });
// });

// router.delete('/api/notes/:id', (req, res) => {
//   const id = req.params.id;
//   const notesData = fs.readFileSync(path.join(__dirname, '..', 'db', 'db.json'), 'utf8');
//   const notes = JSON.parse(notesData);
//   const index = notes.findIndex(note => note.id === id);
//   if (index !== -1) {
//     notes.splice(index, 1);
//     fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes), err => {
//       if (err) throw err;
//     });
//     res.status(204).send();
//   } else {
//     res.status(404).send();
//   }
// });

// module.exports = router;









// // const express = require('express');
// // const path = require('path');
// // const fs = require('fs');
// // const uuid = require('../helpers/uuid');
// // const db = require('../db/db.json');

// // const router = express.Router();

// // router.get('/api/notes', (req, res) => {
// //   const notesData = fs.readFileSync(path.join(__dirname, '..', 'db.json'), 'utf8');
// //   const notes = JSON.parse(notesData);
// //   res.json(notes);
// // });

// // router.post('/api/notes', (req, res) => {
// //   const notesData = fs.readFileSync(path.join(__dirname, '..', 'db.json'), 'utf8');
// //   const notes = JSON.parse(notesData);
// //   const newNote = req.body;
// //   newNote.id = uuid();
// //   notes.push(newNote);
// //   fs.writeFile(path.join(__dirname, '..', 'db.json'), JSON.stringify(notes), err => {
// //     if (err) throw err;
// //     res.json(newNote);
// //   });
// // });

// // router.delete('/api/notes/:id', (req, res) => {
// //   const id = req.params.id;
// //   const notesData = fs.readFileSync(path.join(__dirname, '..', 'db.json'), 'utf8');
// //   const notes = JSON.parse(notesData);
// //   const index = notes.findIndex(note => note.id === id);
// //   if (index !== -1) {
// //     notes.splice(index, 1);
// //     fs.writeFile(path.join(__dirname, '..', 'db.json'), JSON.stringify(notes), err => {
// //       if (err) throw err;
// //     });
// //     res.status(204).send();
// //   } else {
// //     res.status(404).send();
// //   }
// // });

// // module.exports = router;








// // const express = require('express');
// // const path = require('path');
// // const fs = require('fs');
// // const router = express.Router();
// // const uuid = require('../helpers/uuid');

// // router.get('/', (req, res) => {
// //   res.sendFile(path.join(__dirname, '../public/index.html'));
// // });

// // router.get('/notes', (req, res) => {
// //   res.sendFile(path.join(__dirname, '../public/notes.html'));
// // });

// // router.get('/api/notes', (req, res) => {
// //   const notesData = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
// //   const notes = JSON.parse(notesData);
// //   res.json(notes);
// // });

// // router.post('/api/notes', (req, res) => {
// //   const notesData = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
// //   const notes = JSON.parse(notesData);
// //   const newNote = req.body;
// //   newNote.id = uuid();
// //   notes.push(newNote);
// //   fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
// //   res.json(newNote);
// // });

// // router.delete('/api/notes/:id', (req, res) => {
// //   const notesData = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
// //   const notes = JSON.parse(notesData);
// //   const id = req.params.id;
// //   const filteredNotes = notes.filter(note => note.id !== id);
// //   fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(filteredNotes));
// //   res.json(filteredNotes);
// // });

// // module.exports = router;