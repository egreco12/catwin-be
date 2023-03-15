import {Response} from "./models/espn";
import {ObjectId } from "mongodb";



const EspnEndpoint = "https://site.web.api.espn.com/apis/v2/scoreboard/header\?sport\=golf\&league\=pga\&region\=us\&lang\=en";


class Tournaments {
  public static async FetchTournaments(): Promise<Response> {
    const response = await fetch(EspnEndpoint);
    const data = await response.json();

    return data as Response;
  }
}

export {Tournaments};