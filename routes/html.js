const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;








// const express = require('express');
// const path = require('path');

// const router = express.Router();

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
// });

// router.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
// });

// module.exports = router;








// // const express = require('express');
// // const path = require('path');
// // const fs = require('fs');
// // const router = express.Router();
// // const uuid = require('./helpers/uuid');

// // // Routes
// // router.get('/', (req, res) => {
// //   res.sendFile(path.join(__dirname, '../public/index.html'))
// // });

// // router.get('/notes', (req, res) => {
// //   res.sendFile(path.join(__dirname, '../public/notes.html'))
// // });

// // module.exports = router;

// // // module.exports = (app) => {
// // // const express = require('express');
// // // const path = require('path');
// // // const fs = require('fs');

// // // // HTML Routes
// // // app.get('/', (req, res) => {
// // //     res.sendFile(path.join(__dirname, './public/index.html'))
// // //   });
  
// // //   app.get('*', (req, res) => {
// // //     res.sendFile(path.join(__dirname, './public/notes.html'))
// // //   });
// // // };
// // // //   module.exports = htmlRoute;