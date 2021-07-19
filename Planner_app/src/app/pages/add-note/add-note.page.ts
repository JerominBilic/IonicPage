import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FetchService } from 'src/app/services/fetch.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {

  addNoteForm;

  constructor(private service:FetchService, private builder:FormBuilder, private alertController:AlertController){ 
    this.addNoteForm = builder.group({
      name:['',[Validators.required]],
      details:['',[Validators.required]],
      importance:['',[Validators.required]],
    })
  }

  ngOnInit(){
  }


  onSubmit(){
    let formData = this.addNoteForm.value;
   this.service.addNote(formData).subscribe((result)=>{
     console.log(result);
     this.addNoteForm.reset(); //clear all form data
     //Alert to show sucess message
   this.showMessage("Sucess","Note created");
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
