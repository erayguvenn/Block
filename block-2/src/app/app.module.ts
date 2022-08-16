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


@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    CardsComponent,
    PostDetailsComponent,
    EditComponent,
    CommentsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,

    ],
    exports: [
        RouterModule,
        PostDetailsComponent
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
