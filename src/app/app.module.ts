import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GoalDetailComponent } from './goals/goal-detail/goal-detail.component';
import { GoalService } from './services/goal.service';

@NgModule({
  declarations: [AppComponent, GoalsComponent, GoalDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule {}
