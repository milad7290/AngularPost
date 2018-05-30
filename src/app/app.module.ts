import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PostsComponent } from './posts/posts.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { AppRoutingModule } from './app-routing.module';
import { PostService } from './post.service';
import { CommentService } from './comment.service';
import { PostSearchComponent } from './post-search/post-search.component';
import { CommentComponent } from './comment/comment.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsDetailsComponent,
    PostSearchComponent,
    CommentComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule                        // <========== Add this line!
  ],
  providers: [
    HttpService,
    PostService,
    CommentService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
