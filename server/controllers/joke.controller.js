const joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
    joke.find()
        .then((allJokes) => res.json({ jokes: allJokes }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneJoke = (req, res) => {
    joke.findOne({ _id: req.params.id })
        .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    joke.create(req.body)
        .then((createdJoke) => res.json({ joke: createdJoke }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
    joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedjoke) => res.json({ joke: updatedjoke }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingjoke = (req, res) => {
    joke.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
