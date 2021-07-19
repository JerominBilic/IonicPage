import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FetchService } from 'src/app/services/fetch.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  addTaskForm;

  constructor(private service:FetchService, private builder:FormBuilder, private alertController:AlertController){ 
    this.addTaskForm = builder.group({
      name:['',[Validators.required]],
      description:['',[Validators.required]],
      date_of_start:['',[Validators.required]],
      date_of_end:['',[Validators.required]],
      status:['',[Validators.required]],
    })
  }

  ngOnInit(){
  }


  onSubmit(){
    let formData = this.addTaskForm.value;
   this.service.addTask(formData).subscribe((result)=>{
     console.log(result);
     this.addTaskForm.reset(); //clear all form data
     //Alert to show sucess message
   this.showMessage("Sucess","Task was sucessfully created");
   }, (err)=>{
     console.log(err);
     this.showMessage("Error","Something went wrong");
   });
  }

  async showMessage(header,message){
      const alert = await this.alertController.create({
        header: header,
        message: message,
        buttons: ['OK']
      });
  
      alert.present();
  }




}
