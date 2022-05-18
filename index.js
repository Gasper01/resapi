import { app } from "./src/app.js";
import { createConnection } from "./src/database.js";

createConnection();
app.listen(app.get("port"), ()=>{
    console.log("Server on port", app.get("port"));
});

