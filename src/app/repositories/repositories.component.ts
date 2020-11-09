import { Component, OnInit } from '@angular/core';

import {ServicesService} from '../services.service';
import {Repository} from '../repository';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
    providers: [ServicesService],
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

    repository: Repository;
    public searchRepo: string;
   

    searchRepos(name) {
        this.searchRepo = '';

    }

    constructor(public gitRepoRequest: ServicesService ) { }

  ngOnInit() {
     
      this.gitRepoRequest.gitRepos(this.searchRepo);

}
}