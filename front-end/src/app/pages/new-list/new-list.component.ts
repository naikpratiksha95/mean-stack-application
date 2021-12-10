import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {

  constructor( private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  createList(title: string){
    this.taskService.createList(title).subscribe((response : any) => {
      console.log(response);
      // Now we navigate to /lists/task._id
      this.router.navigate([ '/lists', response._id])
    });
  }
}
