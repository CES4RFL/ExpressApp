import express from "express"
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));
app.set('view engine', 'ejs')

app.get ('/', (req,resp) => resp.render("index"))

app.listen(3000)
console.log("Server is listening on port", 3000)