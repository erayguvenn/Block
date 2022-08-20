import {Component, OnInit} from '@angular/core';
// @ts-ignore
import posts from "src/app/dosyalar/posts.json"
// @ts-ignore
import comments from "src/app/dosyalar/comments.json"
import users from "src/app/dosyalar/users.json"
import {MatDialog} from "@angular/material/dialog";
import {PopUpComponent} from "../pop-up/pop-up.component";


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public commentList: {
    "postId": number
    "id": number
    "name": string
    "email": string
    "body": string
    "userId": number
  }[] = comments;

  public postList: {
    "userId": number
    "id": number
    "title": string
    "body": string
    "imageId": number
  }[] = posts;
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

  constructor() {
  }


  ngOnInit(): void {
  }


}

