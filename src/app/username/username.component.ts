import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  usernameStatus: string = 'There is no username';
  username: string = '';
  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    return this.usernameStatus = 'Username ' + this.username + ' was added';
  }

  reset(){
    return this.username = '';
  }

  onUsernameChange(){
    if (this.username == ''){

    }
  }

}
