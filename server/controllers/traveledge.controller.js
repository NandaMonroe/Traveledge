// -----CONTROLLER----


const Place = require("../models/traveledge.model");

// READ ALL
module.exports.readAll = (req, res) => {
    Place.find()
        .then(allPlaces => {
            // this is what REACT will receive in res.data
            res.json(allPlaces);
        })
        .catch(err => {
            res.status(400).json(err);
        });
};

// READ ONE
module.exports.readOne = (req, res) => {
    Place.findOne({ _id: req.params.id })
        .then(onePlace => {
            res.json(onePlace);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

// CREATE
module.exports.create = (req, res) => {
    Place.create(req.body)
        .then(newPlace => {
            res.json(newPlace);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

// UPDATE
module.exports.update = (req, res) => {
    Place.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPlace => {
            res.json(updatedPlace);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};

// DELETE
module.exports.delete = (req, res) => {
    Place.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
};