import { Component } from "@angular/core";
import { GOAL } from "../_interface/goals.model";
import { GoalService } from "../services/goal.service";

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

  constructor(private goalService: GoalService) {}

  ngOnInit() {
    this.goals = this.goalService.getGoals();
  }

  addGoal() {
    const goal = new GOAL();
    goal.name = this.name;
    goal.date = this.date;

    // ? this was changed when we added a service
    //this.goals.push(goal);
    this.goalService.addGoal(goal);
  }

  onSelect(goal: GOAL) {
    this.selectedGoal = goal;
  }

  updateGoal(event) {
    this.goalService.updateGoal(event);
  }

  deletedGoal(event) {
    this.goalService.deleteGoal(event);
  }
}
