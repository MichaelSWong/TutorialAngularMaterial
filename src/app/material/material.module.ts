import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatChipsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
} from "@angular/material";

const material = [
  MatChipsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [material, CommonModule],
  exports: [material]
})
export class MaterialModule {}
