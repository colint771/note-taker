const router = require('express').Router();
const Store = require('../db/notes');

router.get("/notes", function(req, res) {
    Store
        .getNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.post("/notes", (req, res) => {
    Store
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

router.delete("/notes/:id", function(req, res) {
    Store
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});
module.exports = router;
