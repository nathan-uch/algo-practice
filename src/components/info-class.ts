export default class ProblemInfo {
  name: string;
  difficulty: string;
  date: string;
  source: string;
  link:string;
  summary: string;
  completed: boolean;
  usedHelp: boolean;
  topics: string;
  pseudoCode: string;

  constructor(name: string, difficulty: string, date: string, source: string, link:string, summary: string, completed: boolean, usedHelp: boolean, topics: string, pseudoCode: string) {
    this.name = name;
    this.difficulty = difficulty;
    this.date = date;
    this.source = source;
    this.link = link;
    this.summary = summary;
    this.completed = completed;
    this.usedHelp = usedHelp;
    this.topics = topics;
    this.pseudoCode = pseudoCode;
  }
}
