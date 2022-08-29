export default class ProblemInfo {
    constructor(name, website, link, date, difficulty, recommendedTime, timeToComplete, complete, problem, examples, notes, usedHelp) {
        this.name = name;
        this.website = website;
        this.link = link;
        this.date = date;
        this.difficulty = difficulty;
        this.recommendedTime = recommendedTime;
        this.timeToComplete = timeToComplete;
        this.complete = complete;
        this.problem = problem;
        this.examples = examples;
        this.notes = notes;
        this.usedHelp = usedHelp;
    }

    completedOnTime() {
        if (recommendedTime > this.timeToComplete) return true;
        return false;
    }
}
