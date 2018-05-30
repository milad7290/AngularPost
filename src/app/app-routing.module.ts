import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { CommentComponent } from './comment/comment.component';
import { PostSearchComponent } from './post-search/post-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'post/:id', component: PostsDetailsComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'comment/:id', component: CommentComponent },
  { path: 'search', component: PostSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
