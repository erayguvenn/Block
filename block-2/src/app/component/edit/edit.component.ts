import { Component, OnInit } from '@angular/core';
import posts from "../../dosyalar/posts.json";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }
  editTitle:string="";
  editBody:string="";
  selectedCard:any[]=[];
  postsList = new Array<any>();

  ngOnInit(): void {
    this.postsList = posts
  }

  postEdit(eTitle:string , eBody:string){
    this.editTitle=eTitle;
    this.editBody=eBody;
    return this.editBody
  }

}
