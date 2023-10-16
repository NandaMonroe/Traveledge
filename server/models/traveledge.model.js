// ---- MODEL IN MUDULES----

// import mongoose to build the schema
const mongoose = require("mongoose");

// the model - the rules the entries need to follow
const PlaceSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, "Please provide a URL of a picture of the place (JPG)"]
    },
    continent: {
        type: String,
        required: [true, "You must provide the continent"],
        minLength: [4, "At least 4 characters long"]
    },
    country: {
        type: String,
        required: [true, "You must provide the country"],
        minLength: [4, "At least 4 characters long"]
    },
    city: {
        type: String,
        required: [true, "You must provide the city"],
        minLength: [3, "At least 3 characters long"]
    },
    budget: {
        type: Number,
        required: [true, "It cannot be blank"],
        min: [10, "This isn't real"],
        max: [1000, "Too expensive"]
    },
    month: {
        type: String,
        required: [true, "It cannot be blank"],
        minLength: [4, "At least 4 characters long"]
    },
    weather: {
        type: String,
        required: [true, "It cannot be blank"],
        minLength: [3, "At least 3 characters long"]
    },
    food: {
        type: String,
        required: [true, "It cannot be blank"],
        minLength: [4, "At least 4 characters long"]
    },
    activity: {
        type: String,
        required: [true, "It cannot be blank"],
        minLength: [4, "At least 4 characters long"]
    },
    type: {
        type: String,
        required: [true, "Choose an option"]
    },
    safe: {
        type: Boolean
    },
    health: {
        type: Boolean
    },
    lgbt: {
        type: Boolean
    },
    family: {
        type: Boolean
    },
    transportation: {
        type: Boolean
    },
    description: {
        type: String,
        required: [true, "Description must be present"],
        minLength: [50, "Description must be at least 50 characters long"]
    },
    rating: {
        type: Number,
        required: [true, "Please set a rate!"],
        min: [1],
        max: [5]
    }
}, { timestamps: true });

const Place = mongoose.model('Place', PlaceSchema);
module.exports = Place;