import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  taskID;
  goalID;
  status;

  getTasks(){
    return this.http.get("http://localhost:3000/tasks")
  }

  addTask(data){
    return this.http.post("http://localhost:3000/task", data)
  }

  addGoal(data){
    return this.http.post("http://localhost:3000/goal", data)
  }

  addNote(data){
    return this.http.post("http://localhost:3000/note", data)
  }

  getGoals(){
    return this.http.get("http://localhost:3000/goals")
  }
  getNotes(){
    return this.http.get("http://localhost:3000/notes")
  }

  check_task(taskId, status){
    return this.http.patch("http://localhost:3000/task/" + taskId, {status}); // {status: status}
  }
  check_goal(goalId, status){
    return this.http.patch("http://localhost:3000/goal/" + goalId, {status}); // {status: status}
  }

}
