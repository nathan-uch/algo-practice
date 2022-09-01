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
        this.usedHelp = usedHelp;
    }

    completedOnTime() {
        if (this.recommendedTime >= this.timeToComplete) {
            return true;
        } else {
            return false;
        }
    }
}

/* Template for Creating Obj
const prob = new ProblemInfo;
prob.name = '';
prob.website = '';
prob.link = '';
prob.date = '';
prob.difficulty = '';
prob.recommendedTime = 25;
prob.timeToComplete = 1;
prob.complete = false;
prob.problem = '';
prob.examples = '';
prob.notes = '';
prob.usedHelp = false;
*/

