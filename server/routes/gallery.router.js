const express = require('express');
const router = express.Router();
//const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    let sqlText = `UPDATE images SET likes=likes+1 WHERE id=($1);`;
    pool.query(sqlText, [galleryId])
    .then((result) => {
        console.log(`Got stuff back from the database`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let sqlText = `SELECT * FROM images ORDER BY ID;`;
    pool.query(sqlText)
    .then((result) => {
        console.log(`Got stuff back from the database`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
    })
}); // END GET Route


//POST Route
router.post('/', (req, res) => {
    const newImage = req.body;
    let sqlText = `INSERT INTO images (path, description) VALUES ($1, $2);`;
    pool.query(sqlText, [newImage.path, newImage.description])
    .then((result) => {
        console.log(`Got stuff back from the database`, result);
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(`Error making database query ${sqlText}`, error);
        res.sendStatus(500); // Good server always responds
    })
})

module.exports = router;