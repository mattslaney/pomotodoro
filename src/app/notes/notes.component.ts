import { Component, OnInit } from "@angular/core";
import { Task } from "../task";
import { TaskService } from "../task.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"]
})
export class NotesComponent implements OnInit {
  taskNotes: string;

  setTaskNotes(e: any): void {
    this.taskService.activeTask.taskNotes = e.target.value;
    this.taskService.updateTask(this.taskService.activeTask).subscribe();
  }

  getTaskNotes(): string {
    return this.taskService.activeTask.taskNotes;
  }

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskNotes = this.getTaskNotes();
  }
}
