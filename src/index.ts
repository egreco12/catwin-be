import express from "express";
import { connectToDatabase } from "./services"
import { router } from "./router";
const app = express();
const port = 8081; // default port to listen

connectToDatabase()
    .then(() => {
        app.use((_, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', "true");
            next();
        });
        
        app.use("/sports", router);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });