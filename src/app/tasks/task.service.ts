import { Injectable } from "@angular/core";
import { Task } from "../shared/task.model";

@Injectable()
export class TaskService{
    private tasks: Task[]=[
        new Task( "Tarea 1", "Tengo cosas que hacer"),
        new Task( "Tarea 2", "Tengo cosas que hacer"),
      ];

    public getTasks(){
        return this.tasks;
    }
    public createTask(task: Task){
      this.tasks.push(task);
    }
    public finishTask(index: number){
      this.tasks.splice(index, 1);
    }
}