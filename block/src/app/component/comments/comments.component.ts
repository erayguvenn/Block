import {Component, Input, OnInit} from '@angular/core';
import comments from "../../dosyalar/comments.json";
import users from "../../dosyalar/users.json";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public commentList: {
    "postId": number
    "id": number
    "name": string
    "email": string
    "body": string
    "userId": number
  }[] = comments;
  public userList: {
    "id": number
    "name": string
    "username": string
    "email": string
    "address": {
      "street": string
      "suite": string
      "city": string
      "zipcode": string
      "geo": {
        "lat": number
        "lng": number
      }
    },
    "phone": string
    "website": string
    "company": {
      "name": string
      "catchPhrase": string
      "bs": string
    }
  }[] = users;

  @Input() postId:number=1


  constructor() { }

  ngOnInit(): void {
  }

}
