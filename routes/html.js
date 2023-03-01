const express = require('express');
const path = require('path');

const router = express.Router();


// Serve the index.html file on the root URL
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
});

module.exports = router;






// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

// const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const router = express.Router();
// const uuid = require('./helpers/uuid');

// // Routes
// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// });

// router.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/notes.html'))
// });

// module.exports = router;

// // module.exports = (app) => {
// // const express = require('express');
// // const path = require('path');
// // const fs = require('fs');

// // // HTML Routes
// // app.get('/', (req, res) => {
// //     res.sendFile(path.join(__dirname, './public/index.html'))
// //   });
  
// //   app.get('*', (req, res) => {
// //     res.sendFile(path.join(__dirname, './public/notes.html'))
// //   });
// // };
// // //   module.exports = htmlRoute;