import { Component, OnInit } from "@angular/core";
import { TimerService } from "../timer.service";
import { TaskService } from "../task.service";
import { Task } from "../task";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  selectTask(task): void {
    this.timerService.stopTimer();
    this.taskService.activeTask = task;
  }

  add(description: string): void {
    description = description.trim();
    if (!description) {
      return;
    }
    this.taskService.addTask({ description } as Task).subscribe(task => {
      this.tasks.push(task);
    });
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task).subscribe();
  }

  constructor(
    public taskService: TaskService,
    private timerService: TimerService
  ) {}

  ngOnInit() {
    this.getTasks();
  }
}
