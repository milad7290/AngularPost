import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 import { PostService } from '../post.service';
 import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.css']
})
export class PostSearchComponent implements OnInit {

  posts$: Observable<Post[]>;
  private searchTerms = new Subject<string>();

  constructor(private readonly postService: PostService) { }

  search(term: string) {
    this.searchTerms.next(term);
    this.posts$.subscribe(posts=>{
      console.log(posts);
    })
  }

  ngOnInit(): void {
    this.posts$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.postService.searchPosts(term)),
    );
  }
}
