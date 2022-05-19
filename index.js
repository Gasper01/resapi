import { app } from "./src/app.js";
import { createConnection } from "./src/database.js";

createConnection();
app.listen(app.get("port"),{
  
});


