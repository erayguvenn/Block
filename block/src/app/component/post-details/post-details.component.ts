import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
// @ts-ignore
import posts from "src/app/dosyalar/posts.json"
// @ts-ignore
import comments from "src/app/dosyalar/comments.json"
// @ts-ignore

import users from "src/app/dosyalar/users.json"
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']


})
export class PostDetailsComponent implements OnInit {


  close(){
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }
  // @ts-ignore
  constructor(private dialogRef: MatDialogRef<MyDialogComponent>,@Inject( MAT_DIALOG_DATA) public data) {

  }




}
