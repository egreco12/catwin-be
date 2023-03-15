import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "./services";
import { EntrySport, Sport } from "./models/espn";

const EspnEndpoint = "https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=pga&region=us&lang=en";

export const router = express.Router();
router.use(express.json());

router.get("/", async (_req: Request, res: Response) => {
  try {
    const sports = (await collections.sports.find({}).toArray()) as unknown as Sport[];
    res.status(200).send(sports);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/load", async (_req: Request, res: Response) => {
  const response = await fetch(EspnEndpoint);
  const data = await response.json();
  try {
    const result = await collections.sports.insertOne(data as EntrySport);

    result
      ? res.status(201).send(`Successfully created a new sport with id ${result.insertedId}`)
      : res.status(500).send("Failed to create a new sport.");
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newSport = req.body as Sport;
    const result = await collections.sports.insertOne(newSport);

    result
      ? res.status(201).send(`Successfully created a new sport with id ${result.insertedId}`)
      : res.status(500).send("Failed to create a new sport.");
  } catch (error) {
    console.error(error);
    res.status(400).send(error.message);
  }
});