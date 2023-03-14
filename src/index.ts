import express from "express";
import {Tournaments} from "./Tournaments";
const app = express();
const port = 8080; // default port to listen



// define a route handler for the default home page
app.get("/", async (req, res) => {
  const data = await Tournaments.FetchTournaments();
  res.send(data);
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});