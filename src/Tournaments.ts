class Player {
  TotalScoreToPar: number;
  Name: string;
}

class Tournament {
  Id: number;
  Name: string;
  Participants: Player[];
};

const EspnEndpoint = "https://site.web.api.espn.com/apis/v2/scoreboard/header\?sport\=golf\&league\=pga\&region\=us\&lang\=en";

class Tournaments {
  public static async FetchTournaments(): Promise<Tournament[]> {
    const response = await fetch(EspnEndpoint);
    const {data, errors} = await response.json();

    let tournament = new Tournament;
    return [tournament];
  }
}

export {Player, Tournament, Tournaments};