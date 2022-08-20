import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import posts from "../../dosyalar/posts.json";
import {PopUpComponent} from "../pop-up/pop-up.component";
import {MatDialog} from "@angular/material/dialog";
import {PostDetailsComponent} from "../post-details/post-details.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() post: any

  @Input() page:{alt:number,ust:number}={alt:0,ust:9}

  public postList: {
    "userId": number
    "id": number
    "title": string
    "body": string
    "imageId": number
  }[] = posts;

  openDialog(id:number,title:string,body:string){

    const dialogRef = this.dialogRef.open(PopUpComponent,{
      data:{
        id ,
        title,
        body

      },

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '60%',
      width: '50%',


    })

    dialogRef.afterClosed().subscribe(result => {
      this.post.title=result.title;
      this.post.body=result.body;
     // debugger

    });

  }
  openPostDetails(id:number,title:string,body:string,imageId:number){
    const dialogRef = this.dialogRef.open(PostDetailsComponent,{
      data:{
        id ,
        title,
        body,
        imageId
      },

      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '95%',
      width: '60%',
    })
  }

  constructor(private dialogRef:MatDialog) {
  }

  ngOnInit(): void {
  }

}
