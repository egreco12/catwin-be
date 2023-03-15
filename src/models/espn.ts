// Classes to aid in parsing responses from ESPN's undocumented API

interface FullStatusType {
  id: string;
  name: string;
  state: string;
  completed: boolean;
  description: string;
  detail: string;
  shortDetail: string;
}

interface FullStatus {
  period: number;
  type: FullStatusType;
  hadPlayoff: boolean;
}

interface EventLink {
  language: string;
  rel: string[];
  href: string;
  test: string;
  isExternal: boolean;
  isPremium: boolean;
}

interface Broadcast {
  type: string;
  station: string;
  slug: string;
  lang: string;
  region: string;
  typeId: number;
  isNational: boolean;
  broadcasterId: number;
  broadcastId: number;
  name: string;
  shortName: string;
  callLetters: string;
}

interface CompetitorStatus {
  period: number;
  displayValue: string;
  teeTime: string;
  hole: number;
  startHole: number;
  thru: number;
  playoff: boolean;
  state: string;
  id: string;
  name: string;
  detail: string;
}

interface Competitor {
  id: string;
  uid: string;
  type: string;
  status: CompetitorStatus;
  score: string;
  movement: number;
  earnings: number;
  amateur: boolean;
  logo: string;
  place: number;
  winner: boolean;
  amount: number;
  officialAmount: number;
  displayName: string;
  firstName: string;
  middleName: string;
  lastName: string;
  shortName: string;
  name: string;
  abbreviation: string;
  headshort: string;
}

interface Event {
  gamecastAvailable: boolean;
  playByPlayAvailable: boolean;
  commentaryAvailable: boolean;
  recent: boolean;
  id: string;
  competitionId: string;
  uid: string;
  date: string;
  endDate: string;
  timeValid: boolean;
  name: string;
  shortName: string;
  location: string;
  season: number;
  seasonStartDate: string;
  period: number;
  purse: number;
  displayPurse: string;
  defendingChampion: string;
  defendingChampionFlag: string;
  scoringSystem: string;
  status: string;
  summary: string;
  fullStatus: FullStatus;
  link: string;
  links: EventLink[];
  onWatch: boolean;
  broadcasts: Broadcast[];
  broadcast: string;
  competitors: Competitor[];
  primary: boolean;
  appLinks: string[];
}

interface League {
  id: string;
  uid: string;
  name: string;
  abbreviation: string;
  shortName: string;
  slug: string;
  isTournament: string;
  events: Event[];
  smartDates: string[];
}

interface Sport {
  id: string;
  uid: string;
  name: string;
  slug: string;
  leagues: League[];

}

interface EntrySport {
  sports: Sport[];
}

export {EntrySport, Sport, League, Event, Competitor, CompetitorStatus, Broadcast, EventLink, FullStatus, FullStatusType};