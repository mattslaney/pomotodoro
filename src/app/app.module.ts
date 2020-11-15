import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NavComponent } from "./nav/nav.component";
import { TasksComponent } from "./tasks/tasks.component";
import { NotesComponent } from "./notes/notes.component";
import { TimerComponent } from "./timer/timer.component";
import { ProgressComponent } from "./progress/progress.component";
import { SettingsComponent } from "./settings/settings.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";

import { TimerService } from "./timer.service";
import { DataService } from "./data.service";
import { TaskService } from "./task.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    TasksComponent,
    NotesComponent,
    TimerComponent,
    ProgressComponent,
    SettingsComponent,
    TimesheetComponent
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, DataService, TaskService]
})
export class AppModule {}
