import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { TimerService } from "../timer.service";
import { TaskService } from "../task.service";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.scss"]
})
export class TimerComponent implements OnInit {
  constructor(
    public timerService: TimerService,
    public taskService: TaskService
  ) {}

  ngOnInit() {}
}
