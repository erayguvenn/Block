import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AnasayfaComponent} from "./component/anasayfa/anasayfa.component";
import {CardsComponent} from "./component/cards/cards.component";
import {PostDetailsComponent} from "./component/post-details/post-details.component";
import {EditComponent} from "./component/edit/edit.component";
import {CommentsComponent} from "./component/comments/comments.component";

const routes: Routes = [
  { path:'', component: AnasayfaComponent },
  { path:'anasayfa', component: AnasayfaComponent },
  { path:'cards', component: CardsComponent },
  { path:'postdetails', component: PostDetailsComponent },
  { path:'edit', component: EditComponent },
  { path:'comments', component: CommentsComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
