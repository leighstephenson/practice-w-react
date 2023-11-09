const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

  //*TODO edit, delete

//TODO running into error here, "cant determine data type for $1"
//! Add a new note
router.post('/', (req, res) => {
  const insertNoteQuery = `INSERT INTO "notelist"
  ("notetitle", "dateadded", "notecontent") 
  VALUES ($1, $2, $3) RETURNING "id";`

  pool.query(insertNoteQuery, [req.body.noteTitle, req.body.dateAdded, req.body.noteContent])
    .then(() => {
    }).catch(error => {
      console.log('Error in post on notes router', error);
      res.sendStatus(500)
    })
});

//! Get all notes
router.get('/', (req, res) => {
  const query = `SELECT * FROM "notelist" ORDER BY "id" DESC;`;
  pool.query(query)
  .then(result => {
    res.send(result.rows);
  })
  .catch((error) => {
    console.log('Error in get all notes in router', error);
    res.sendStatus(500)
  })
});

module.exports = router;