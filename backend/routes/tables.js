const router = require('express').Router();
let Table = require('../models/table.model');


router.route('/').get((req, res) => {
    Table.find()
        .then(tables => res.json(tables))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const player1 = req.body.player1;
    const player2 = req.body.player2;
    const player3 = req.body.player3;
    const player4 = req.body.player4;
    const state = req.body.state;

    const newTable = new Table({
        player1,
        player2,
        player3,
        player4,
        state,
    });

    newTable.save()
        .then(() => res.json('Table added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Table.findById(req.params.id)
        .then(tables => res.json(tables))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Table.findByIdAndDelete(req.params.id)
        .then(() => res.json('Table deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Table.findById(req.params.id)
        .then(table => {
            table.player1 = req.body.player1;
            table.player2 = req.body.player2;
            table.player3 = req.body.player3;
            table.player4 = req.body.player4;
            table.state = req.body.state;
            table.save()
                .then(() => res.json('Table updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;