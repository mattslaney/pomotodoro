import { Component, OnInit } from "@angular/core";
import { TimerService } from "../timer.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor(public timerService: TimerService) {}

  ngOnInit() {}
}
