import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {FetchService} from 'src/app/services/fetch.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  notes;

  constructor(private service:FetchService, private toastController:ToastController, private alertController:AlertController) { 

    this.service.getNotes().subscribe((notes) => {
      this.notes = notes;
    }, (err) =>{
      console.log(err);
    });
  }

  ngOnInit() {
  }

  
}
