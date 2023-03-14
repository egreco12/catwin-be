import express from "express";
const app = express();
const port = 8080; // default port to listen

const EspnEndpoint = "https://site.web.api.espn.com/apis/v2/scoreboard/header\?sport\=golf\&league\=pga\&region\=us\&lang\=en";

// define a route handler for the default home page
app.get("/", async (req, res) => {
  const response = await fetch(EspnEndpoint);
  const data = await response.json();
  // tslint:disable-next-line:no-console
  res.send(data);
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});