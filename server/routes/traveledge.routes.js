// routes need the controller to execute the queries
const PlaceController = require("../controllers/traveledge.controller");

module.exports = (app) => {
    app.get("/api/places", PlaceController.readAll);
    app.post("/api/places", PlaceController.create);
    app.get('/api/places/:id', PlaceController.readOne);
    app.patch('/api/places/:id', PlaceController.update);
    app.delete('/api/places/:id', PlaceController.delete);
};