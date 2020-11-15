import { Injectable } from "@angular/core";
import { TaskService } from "./task.service";

@Injectable()
export class TimerService {
  timerCycles: number = 4;
  workInterval: number = 25;
  shortBreak: number = 5;
  longBreak: number = 15;
  autoStart: boolean = true;

  timer;
  cycle: number = 0;
  timerType: string = "w"; //w - work, s - short break, l - long break
  secondsLeft: number = 25 * 60; //seconds
  timeLeft: string = "25:00";

  startTime: number;
  stopTime: number;

  //This function resets the timer for whichever cycle it's currently timing
  resetTimer(): void {
    clearInterval(this.timer);
    this.stopTime = new Date().getTime();
    this.updateTimeOnTask(this.stopTime - this.startTime);
    switch (this.timerType) {
      case "w":
        this.secondsLeft = this.workInterval * 60;
        break;
      case "s":
        this.secondsLeft = this.shortBreak * 60;
        break;
      case "l":
        this.secondsLeft = this.longBreak * 60;
        break;
      default:
        break;
    }
    this.timeLeft = this.secondsToTime(this.secondsLeft);
  }

  //This function starts the timer countdown
  startTimer(): void {
    if (this.timer !== undefined) {
      clearInterval(this.timer);
    } else {
      this.resetTimer();
    }
    this.startTime = new Date().getTime();
    if (this.taskService.activeTask.timeStarted) {
      this.taskService.activeTask.timeStarted = this.startTime;
    }
    this.timer = setInterval(() => {
      this.countdown();
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.timer);
    this.stopTime = new Date().getTime();
    this.updateTimeOnTask(this.stopTime - this.startTime);
  }

  skipTimer(): void {
    if (this.timerType == "w" && ++this.cycle == this.timerCycles) {
      this.timerType = "l";
    } else if (this.timerType == "w") {
      this.timerType = "s";
    } else if (this.timerType == "l") {
      this.cycle = 0;
      this.timerType = "w";
    } else {
      this.timerType = "w";
    }
    this.resetTimer();
    if (this.autoStart) {
      this.startTimer();
    }
  }

  //This function decrements the time by one second
  countdown(): void {
    if (--this.secondsLeft < 0) {
      if (!this.taskService.activeTask.completeCycles) {
        this.taskService.activeTask.completeCycles = 0;
      }
      if (this.timerType == "w") {
        this.taskService.activeTask.completeCycles++;
        this.taskService.updateTask(this.taskService.activeTask).subscribe();
      }
      this.skipTimer();
    } else {
      this.timeLeft = this.secondsToTime(this.secondsLeft);
    }
  }

  secondsToTime(seconds: number): string {
    return (
      (seconds - (seconds % 60)) / 60 + ":" + ("0" + (seconds % 60)).slice(-2)
    );
  }

  updateTimeOnTask(ms: number) {
    if (this.startTime > 0) {
      if (!this.taskService.activeTask.timeOnTask) {
        this.taskService.activeTask.timeOnTask = 0;
      }
      this.taskService.activeTask.timeOnTask += ms / 1000;
      this.taskService.updateTask(this.taskService.activeTask).subscribe();
      this.startTime = 0;
      this.stopTime = 0;
    }
  }

  constructor(private taskService: TaskService) {}
}
