import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "./services";
import { EntrySport, Sport } from "./models/espn";

const EspnEndpoint = "https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=pga&region=us&lang=en";

export const router = express.Router();
router.use(express.json());

router.get("/", async (_req: Request, res: Response) => {
  try {
    const events = await collections.events.find({}).toArray() as unknown as Event[];
    console.log(events);
    res.status(200).send(events[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/load", async (_req: Request, res: Response) => {
  const response = await fetch(EspnEndpoint);
  const data = await response.json() as Sport;
  try {
    // Look for existing event.  If it exists, save over old entry
    const event = data.events[0];
    collections.events.findOneAndUpdate
    const result = await collections.events.replaceOne({id: event.id}, event, {upsert: true});
    result
      ? res.status(201).send(`Successfully created a new sport with id ${result.upsertedId}`)
      : res.status(500).send("Failed to create a new sport.");
  } catch (error) {
    console.error(error);
  }
});

// router.post("/", async (req: Request, res: Response) => {
//   try {
//     const newSport = req.body as Sport;
//     const result = await collections.sports.insertOne(newSport);

//     result
//       ? res.status(201).send(`Successfully created a new sport with id ${result.insertedId}`)
//       : res.status(500).send("Failed to create a new sport.");
//   } catch (error) {
//     console.error(error);
//     res.status(400).send(error.message);
//   }
// });