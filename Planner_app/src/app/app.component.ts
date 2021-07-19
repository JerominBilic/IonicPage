import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'To-Do List', url: 'to-do-list', icon: 'list-circle' },
    { title: 'Add Task', url: 'add-task', icon: 'add-circle' },
    { title: 'Goals', url: 'goals', icon: 'flash' },
    { title: 'Add Goal', url: 'add-goal', icon: 'archive' },
    { title: 'Achievement', url: 'achievements', icon: 'diamond' },
    { title: 'Notes', url: 'notes', icon: 'newspaper' },
    { title: 'Add Note', url: 'add-note', icon: 'pencil' },
    { title: 'Video Diary', url: 'video-diary', icon: 'videocam' },
    { title: 'Images Diary', url: 'images-diary', icon: 'image' },
  ];
  constructor() {}
}
