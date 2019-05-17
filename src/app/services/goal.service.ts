import { Injectable } from "@angular/core";
import { GOAL } from "../_interface/goals.model";

@Injectable({
  providedIn: "root"
})
export class GoalService {
  goals: GOAL[] = [
    {
      name: "5km run",
      date: new Date(2013, 9, 22)
    },
    {
      name: "18Km run",
      date: new Date(2013, 9, 22)
    }
  ];

  constructor() {}

  getGoals() {
    return this.goals;
  }

  addGoal(goal) {
    this.goals.push(goal);
  }

  updateGoal(event) {
    this.goals.forEach((goal, i) => {
      if (goal === event) this.goals[i] = event;
    });
  }

  deleteGoal(event) {
    if (this.goals.includes(event)) {
      this.goals.forEach((goal, i) => {
        if (goal === event) {
          this.goals.splice(i, 1);
        }
      });
    }
  }
}
