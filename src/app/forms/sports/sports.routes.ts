import { Routes } from "@angular/router";
import { SportsComponent } from "./sports.component";
import { StudentComponent } from "src/app/components/student/student.component";

export const routes: Routes = [
  { path: '', redirectTo: 'sports', pathMatch: 'full' },
  { path: 'sports', component: SportsComponent },
  { path: 'students', component: StudentComponent },
]; 