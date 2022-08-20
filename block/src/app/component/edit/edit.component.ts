import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import posts from "../../dosyalar/posts.json";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()  edit:any


  ngOnInit(): void {
  }


  onSubmit(data:any){
    this.edit.title=data.title

  }

}
