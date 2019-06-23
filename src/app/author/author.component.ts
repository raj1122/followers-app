import { Component, OnInit } from '@angular/core';
import {AuthorsService} from '../services/authors.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.styl']
})
export class AuthorComponent  implements OnInit{

  author;

  constructor(services: AuthorsService) {
    this.author = services.getAuthors();
  }

  ngOnInit() {


  }


}
