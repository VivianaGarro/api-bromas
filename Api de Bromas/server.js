const express = require("express");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true }));

const JokesRoutes = require("./server/routes/jokes.routes");
JokesRoutes(app);

const JokesRoutes = ("./server/routes/jokes.routes");


app.listen(8000, () => console.log("Express esta corriendo en el puerto 8000"));