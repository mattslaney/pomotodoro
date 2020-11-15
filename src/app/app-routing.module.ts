import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { NotesComponent } from "./notes/notes.component";
import { TimerComponent } from "./timer/timer.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { SettingsComponent } from "./settings/settings.component";

const routes: Routes = [
  { path: "", component: TimerComponent },
  { path: "tasks", component: TasksComponent },
  { path: "notes", component: NotesComponent },
  { path: "timer", component: TimerComponent },
  { path: "timer/:id", component: TimerComponent },
  { path: "timesheet", component: TimesheetComponent },
  { path: "settings", component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
