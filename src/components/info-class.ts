export default class ProblemInfo {
  name: string;
  difficulty: string;
  date: string;
  source: string;
  link:string;
  summary: string;
  completed: boolean;
  usedHelp: boolean;
  helpSource: string;
  topics: string;
  pseudoCode: string;
  solution: Function;

  constructor(name: string, difficulty: string, date: string, source: string, link:string, summary: string, completed: boolean, usedHelp: boolean, helpSource:string, topics: string, pseudoCode: string, solution: Function) {
    this.name = name;
    this.difficulty = difficulty;
    this.date = date;
    this.source = source;
    this.link = link;
    this.summary = summary;
    this.completed = completed;
    this.usedHelp = usedHelp;
    this.helpSource = helpSource;
    this.topics = topics;
    this.pseudoCode = pseudoCode;
    this.solution = solution;
  }
}

/*
  export const x = new ProblemInfo(
    '', // name
    '', // difficulty
    '', // date
    '', // source
    '', // link
    '', // summary
    false, // completed
    false, // usedHelp
    '', // helpSource
    '', // topics
    `

    `, // pseudoCode
    function solution() {} // solution
  );
*/
