import { Component, OnInit } from '@angular/core';
import { GOAL } from '../_interface/goals.model';
import { GoalService } from '../services/goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  title: string = 'My Goal App';
  // goals = ["Great angular dev", "financially free", "more time for family"];
  goals: GOAL[] = [];
  name: string;
  date: Date;
  selectedGoal: GOAL;

  constructor(private goalService: GoalService) {}

  ngOnInit() {
    // this.goals = this.goalService.getGoals();
    this.getGoals();
  }

  getGoals() {
    this.goalService.getGoals().subscribe(goals => (this.goals = goals));
  }

  addGoal() {
    const goal = new GOAL();
    goal.name = this.name;
    goal.date = this.date;

    // ? this was changed when we added a service
    // this.goals.push(goal);
    this.goalService.addGoal(goal).subscribe(() => {
      this.goals.push(goal);
    });
  }

  onSelect(goal: GOAL) {
    this.selectedGoal = goal;
  }

  updateGoal(event) {
    this.goalService.updateGoal(event).subscribe(() => {
      console.log('goal updated');
    });
  }

  deletedGoal(event) {
    // ? to delete from the UI
    this.goals = this.goals.filter(g => g !== event);

    this.goalService.deleteGoal(event).subscribe(() => {
      console.log('goal deleted');
    });
  }
}
