import { Component, OnInit, Input } from "@angular/core";
import { GOAL } from "../../_interface/goals.model";

@Component({
  selector: "app-goal-detail",
  templateUrl: "./goal-detail.component.html",
  styleUrls: ["./goal-detail.component.scss"]
})
export class GoalDetailComponent implements OnInit {
  @Input() passedGoal: GOAL;

  constructor() {}

  ngOnInit() {}
}
