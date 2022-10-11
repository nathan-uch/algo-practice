export default class ProblemInfo {
    constructor(name, website, link, date, difficulty, recommendedTime, timeToComplete, complete, problem, usedHelp, types, pseudoCode) {
        this.name = name;
        this.website = website;
        this.link = link;
        this.date = date;
        this.difficulty = difficulty;
        this.recommendedTime = recommendedTime;
        this.timeToComplete = timeToComplete;
        this.complete = complete;
        this.problem = problem;
        this.usedHelp = usedHelp;
        this.topics = topics;
        this.pseudoCode = pseudoCode;
    }

    completedOnTime() {
        if (this.recommendedTime >= this.timeToComplete) {
            return true;
        } else {
            return false;
        }
    }
}