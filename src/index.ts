import express from "express";
import { connectToDatabase } from "./services"
import { router } from "./router";
const app = express();
const port = 8081; // default port to listen

connectToDatabase()
    .then(() => {
        app.use("/sports", router);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });