// @ts-ignore

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './component/anasayfa/anasayfa.component';
import {RouterModule} from "@angular/router";
import { CardsComponent } from './component/cards/cards.component';
import { PostDetailsComponent } from './component/post-details/post-details.component';
import { EditComponent } from './component/edit/edit.component';
import {FormsModule} from "@angular/forms";
import { CommentsComponent } from './component/comments/comments.component';
import { CardComponent } from './component/card/card.component';
import {NgxPaginationModule} from "ngx-pagination";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import { PopUpComponent } from './component/pop-up/pop-up.component';



@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    CardsComponent,
    PostDetailsComponent,
    EditComponent,
    CommentsComponent,
    CardComponent,
    PopUpComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule


  ],
    exports: [
        RouterModule,
        PostDetailsComponent
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
