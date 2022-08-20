import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {MatDialogRef} from "@angular/material/dialog";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  title:string=""
  body:string=""
  veri:any
  onSubmit(data:any){
    this.veri = data
    this.title=data.title
    this.body=data.body
    this.dialogRef.close(this.veri)
  }

  close(){
    this.dialogRef.close()
  }
  closeDialog(){
    // this.dialogRef.afterClosed().subscribe(result => {
    //   this.data.title=result.title
    //   this.data.body=result.body
    //   console.log(this.data.title )
    //   console.log(this.data.body)
    // });


  }

  // @ts-ignore
  constructor(private dialogRef: MatDialogRef<MyDialogComponent>,@Inject( MAT_DIALOG_DATA) public data) {

  }

  ngOnInit(): void {
  }


}
