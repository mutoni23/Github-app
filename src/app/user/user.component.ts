

import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import {Repository} from '../repository';
import {User} from '../user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  providers: [ServicesService],
  styleUrls: ['./user-info.component.css']
})
export class UserComponent implements OnInit {

  public searchMe = 'mutoni23';
  public githubUser: string;


  users: User ;
  repository: Repository;


  findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }


constructor(public githubUserRequest: ServicesService, public userRepos: ServicesService) { }

ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
}
}

