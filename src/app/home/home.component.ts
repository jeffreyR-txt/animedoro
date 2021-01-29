import { WorkLog } from './../shared/interfaces/work-log.interface';
import { CountdownComponent } from 'ngx-countdown';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public workTime: number;
  public animeTime: number;
  public currentTime: number;
  public countDownOptions;
  public sliderTime: number;
  public workLogs: Array<WorkLog>;
  public isCounting: boolean;
  @ViewChild('cd', { static: false }) private countdown: CountdownComponent;
  constructor() {}

  ngOnInit(): void {
    this.isCounting = false;
    this.sliderTime = 30;
    this.cdOptionsInit();
    this.loadLogs();
  }
  //init countdown options
  cdOptionsInit() {
    this.countDownOptions = {};
  }

  loadLogs() {
    this.workLogs = [];
  }

  startTimer() {
    this.isCounting = true;
    const time = this.sliderTime * 60;
    console.log(this.sliderTime);
    this.countDownOptions = {
      leftTime: time,
    };
    this.countdown.begin();
    console.log(this.countdown.config.demand);
  }
  stopTimer() {
    if (this.isCounting) {
      this.addLog();
    }
    this.isCounting = false;
    this.countDownOptions = {
      leftTime: 0,
    };
    this.countdown.stop();
  }

  pauseTimer() {
    this.countdown.pause();
  }

  resumeTimer() {
    this.countdown.resume();
  }

  createTime() {}

  setCurrentTime() {}

  addLog() {
    let log = {
      date: new Date(),
      cycleType: 'Work',
      // timeLength: this.sliderTime * 60 - this.countDownOptions.leftTime,
      timeLength: (this.sliderTime *60 * 1000) - this.countdown.left,
    };
    this.workLogs.push(log);
    console.log(this.workLogs);
  }
}
