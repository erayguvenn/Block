import { Component, OnInit } from '@angular/core';
// @ts-ignore
import posts from "src/app/dosyalar/posts.json"
// @ts-ignore
import comments from "src/app/dosyalar/comments.json"
// @ts-ignore

import users from "src/app/dosyalar/users.json"

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']


})
export class PostDetailsComponent implements OnInit {

  constructor() {
  }
selectedCard:any[]=[];
  postsList = new Array<any>();

  ngOnInit(): void {
    this.postsList = posts
  }



}
