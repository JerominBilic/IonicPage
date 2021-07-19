import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FetchService } from 'src/app/services/fetch.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.page.html',
  styleUrls: ['./add-goal.page.scss'],
})
export class AddGoalPage implements OnInit {

  addGoalForm;

  constructor(private service:FetchService, private builder:FormBuilder, private alertController:AlertController){ 
    this.addGoalForm = builder.group({
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
    let formData = this.addGoalForm.value;
   this.service.addGoal(formData).subscribe((result)=>{
     console.log(result);
     this.addGoalForm.reset(); //clear all form data
     //Alert to show sucess message
   this.showMessage("Sucess","Goal was sucessfully created");
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
