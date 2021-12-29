import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
import {router} from "./src/routes/routes";
import { Cron } from "./src/cron"
import * as apiManager from "./src/models/apiModel";

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use("/stats", router);

(async () => {
    await apiManager.saveCovidStats();
})();

new Cron();

app.listen(process.env.PORT, () => {
    console.log("Node server started running");
});
