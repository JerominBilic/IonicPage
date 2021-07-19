import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {FetchService} from 'src/app/services/fetch.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {

  tasks:any;

  goals:any;

  constructor(private service:FetchService, private toastController:ToastController, private alertController:AlertController) { 

    this.service.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    }, (err) =>{
      console.log(err);
    });
    this.service.getGoals().subscribe((goals) => {
      this.goals = goals;
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
  }


}