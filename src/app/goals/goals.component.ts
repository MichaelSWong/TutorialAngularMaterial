import { Component } from "@angular/core";
import { GOAL } from "../_interface/goals.model";

@Component({
  selector: "app-goals",
  templateUrl: "./goals.component.html",
  styleUrls: ["./goals.component.scss"]
})
export class GoalsComponent {
  title: string = "My Goal App";
  //goals = ["Great angular dev", "financially free", "more time for family"];
  goals: GOAL[] = [];
  name: string;
  date: Date;
  selectedGoal: GOAL;

  onAddGoal() {
    const goal = new GOAL();
    goal.name = this.name;
    goal.date = this.date;

    this.goals.push(goal);
  }

  onSelect(goal: GOAL) {
    this.selectedGoal = goal;
    console.log(this.selectedGoal);
  }

  favGoal(event) {
    console.log(event);
    this.goals.forEach((goal, i) => {
      if (goal === event) this.goals[i] = event;
    });
  }

  deletedGoal(event) {
    if (this.goals.includes(event)) {
      this.goals.forEach((goal, i) => {
        if (goal === event) {
          this.goals.splice(i, 1);
        }
      });
    }
  }

  constructor() {}

  ngOnInit() {}
}
