// routes need the controller to execute the queries
const PlaceController = require("../controllers/traveledge.controller");

module.exports = (app) => {
    app.get("/api/places", PlaceController.readAll);
    app.post("/api/places", PlaceController.create);
    app.get('/api/places/view/:id', PlaceController.readOne);
    app.patch('/api/places/update/:id', PlaceController.update);
    app.delete('/api/places/delete/:id', PlaceController.delete);
};