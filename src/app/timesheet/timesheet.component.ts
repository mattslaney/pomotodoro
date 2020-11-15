import { Component, OnInit } from "@angular/core";
import { TaskService } from "../task.service";
import { Task } from "../task";

@Component({
  selector: "app-timesheet",
  templateUrl: "./timesheet.component.html",
  styleUrls: ["./timesheet.component.scss"]
})
export class TimesheetComponent implements OnInit {
  constructor(public taskService: TaskService) {}
  tasks: Task[];

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }
  ngOnInit() {
    this.getTasks();
  }
}
