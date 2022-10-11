export default class ProblemInfo {
    constructor(name, difficulty, date, source, link, summary, completed, usedHelp, helpSource, topics, pseudoCode, solution) {
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
