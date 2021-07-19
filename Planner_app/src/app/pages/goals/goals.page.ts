import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {FetchService} from 'src/app/services/fetch.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {

  goals:any;

  constructor(private service:FetchService, private toastController:ToastController, private alertController:AlertController) { 

    this.service.getGoals().subscribe((goals) => {
      this.goals = goals;
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
  }

  async showToast(){
    const toast = await this.toastController.create({
      message: 'Great Job! Goal achieved',
      duration: 5000,
      position: 'top'
    });
    toast.present();
  }


  changeStatus(){

     this.showMessage("Great Job!","Task completed");

     }


    async showMessage(header,message){
      const alert = await this.alertController.create({
        header: header,
        message: message,
        buttons: ['OK']
      });
  
      alert.present();
  }


  async checkGoal(goal){
    this.service.goalID = goal.id;
    this.service.check_goal(goal.id,"Completed").subscribe((result)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    })
    goal.status='Completed';
    
    const toast = await this.toastController.create({
      message: `Goal: ${goal.name} has been checked ~ refresh to see changes`,
      duration: 2000
    });
    toast.present();
  }

}


