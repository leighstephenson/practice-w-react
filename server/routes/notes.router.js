const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

  //*TODO put to edit, 


  //*! POST /: ADD NOTE
  router.post('/', async (req, res) => { 
    // Data from the client (form)
    const note = req.body;
    try {
        const insertNoteQuery = 
        `INSERT INTO "notelist" 
        ("user_id",   
        "title",
        "dateadded",
        "note"
        ) 
    VALUES ($1, $2, $3, $4);`
        
        await pool.query(insertNoteQuery,[
          req.user.id, // the logged in user
          note.title,
          note.dateadded,
          note.note
        ]);
    
        console.log('In router. Inserted note:', note);
        
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        console.log('Error adding note:', error);
        res.sendStatus(500);
    }
  });




module.exports = router;