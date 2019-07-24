import { Injectable } from '@angular/core';
import { GOAL } from '../_interface/goals.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  // goals: GOAL[] = [
  //   {
  //     name: "5km run",
  //     date: new Date(2013, 9, 22)
  //   },
  //   {
  //     name: "18Km run",
  //     date: new Date(2013, 9, 22)
  //   }
  // ];

  url = 'https://so-goals-api.herokuapp.com/api/goals';
  urlOne = 'https://so-goals-api.herokuapp.com/api/goal';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getGoals(): Observable<GOAL[]> {
    return this.http.get<GOAL[]>(this.url);
  }

  addGoal(goal: GOAL): Observable<GOAL> {
    // this.goals.push(goal);
    return this.http.post<GOAL>(this.urlOne, goal, this.httpOptions);
  }

  updateGoal(goal: GOAL): Observable<any> {
    return this.http.put(this.urlOne, goal);
  }

  deleteGoal(goal: GOAL): Observable<any> {
    const newUrl = this.urlOne + '/' + goal._id;

    return this.http.delete(newUrl, this.httpOptions);
  }

  // updateGoal(event) {
  //   this.goals.forEach((goal, i) => {
  //     if (goal === event) this.goals[i] = event;
  //   });
  // }

  // deleteGoal(event) {
  //   if (this.goals.includes(event)) {
  //     this.goals.forEach((goal, i) => {
  //       if (goal === event) {
  //         this.goals.splice(i, 1);
  //       }
  //     });
  //   }
  // }
}
