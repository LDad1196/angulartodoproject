import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  todos = [
    {id: 1, action: 'To do a new list!', completed: false}
  ]
}
