import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {FetchService} from 'src/app/services/fetch.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.page.html',
  styleUrls: ['./to-do-list.page.scss'],
})
export class ToDoListPage implements OnInit {

  tasks:any;

  constructor(private service:FetchService, private toastController:ToastController, private alertController:AlertController) { 

    this.service.getTasks().subscribe((result) => {
      this.tasks = result;
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
  }

  async showToast(){
    const toast = await this.toastController.create({
      message: 'Great Job! Task completed',
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

  async checkTask(task){
    this.service.taskID = task.id;
    this.service.check_task(task.id,"Completed").subscribe((result)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    })
    task.status='Completed';
    
    const toast = await this.toastController.create({
      message: `Task: ${task.name} has been checked ~ refresh to see changes`,
      duration: 2000
    });
    toast.present();
  }



}
