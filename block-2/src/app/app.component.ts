import { Component } from '@angular/core';
// @ts-ignore
import comments from "./dosyalar/comments.json"
// @ts-ignore
import posts from "./dosyalar/posts.json"
// @ts-ignore
import users from "./dosyalar/users.json"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'block';

  public commentList:{
    "postId":number
    "id":number
    "name":string
    "email":string
    "body":string
    "userId": number
  }[] = comments;

  public postList:{
    "userId":number
    "id": number
    "title": string
    "body":string
    "imageId": number
  }[] = posts;
  public userList:{
    "id": number
    "name": string
    "username": string
    "email": string
    "address": {
      "street":string
      "suite": string
      "city": string
      "zipcode": string
      "geo": {
        "lat": number
        "lng":number
      }
    },
    "phone": string
    "website": string
    "company": {
      "name": string
      "catchPhrase": string
      "bs":string
    }
  }[] = users;
}

