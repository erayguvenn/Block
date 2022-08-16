import {Component, OnInit} from '@angular/core';
// @ts-ignore
import posts from "src/app/dosyalar/posts.json"
// @ts-ignore
import comments from "src/app/dosyalar/comments.json"
import users from "src/app/dosyalar/users.json"

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

  selectedCard: any[] = [];
  id: number = 1;

  editTitle: string = "";
  editBody: string = "";

  alt: number = 0;
  ust: number = 9;

  postEdit(eTitle: string, eBody: string) {
    this.editTitle = eTitle;
    this.editBody = eBody;
  }
  onSubmit(data:any){
    this.postTitle=data.title
    console.warn(this.postTitle)
    return this.postTitle

  }

  imageId: number = 0;
  postTitle: string = "";
  postBody: string = "";
  postId:number=0;
  deneme:string="";
  postDetails(imId: number, pTitle: string, pBody: string, pId:number) {

    this.imageId = imId;
    this.postTitle = pTitle;
    this.postBody = pBody;
    this.postId=pId;
    this.deneme=pTitle;
  }

  userId: number = 0;
  postUserId: number = 0;
  userImageId: number = 0;
  userComment:string=""
  userCommentTitle:string=""

  /*getComment() {

    for (let comment of this.commentList) {
      for (let post of this.postList) {
        this.postUserId = post.userId

      }
      for (let user of this.userList) {
        this.userId = user.id
      }

      if (comment.userId == this.userId) {
        this.userImageId = comment.userId
      }
      if (this.postUserId == this.userId) {
        this.userComment=comment.body
        this.userCommentTitle=comment.name
        console.log(this.userCommentTitle)

      }
    }
  }
*/


  nextData() {
    this.alt = (this.alt + 8) % 100
    this.ust = (this.ust + 8) % 100
  }

  previusData() {

    if (this.alt! > 0) {
      this.alt = (this.alt - 8)

    }
    if (this.ust! > 9) {
      this.ust = (this.ust - 8)

    }
  }
}


