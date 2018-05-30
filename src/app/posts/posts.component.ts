import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { PostService } from '../post.service';
import { Post } from '../interfaces/post.interface';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  name: string = '';
  constructor(
    private readonly http: HttpService,
    private readonly postService: PostService,
  ) { }

  ngOnInit() {
    this.postService.getallpost().then(res => {
      this.posts = res;
    });
  }
  async add(title: string, auther: string): Promise<void> {
    title = title.trim();
    auther = auther.trim();
    
    if (!title && !auther ) { return; }
    this.postService.addPost(
      {
        id: await this.getmaxid(),
        title:title,
        auther:auther,
      }
    ).then(post => {
        this.posts.push(post);
      });
  }
   delete(post: Post): void {
    this.postService.deletepost(post);
    this.posts = this.posts.filter(h => h !== post);
    
  }
  getmaxid(): Promise<number> {
    const s = 0;
    return this.postService.getallpost().then(res => {
      for (let index = 1; index < res.length; index++) {
        const a = res[index];
        if (a.id > s) {
          s == a.id;
        }
      }
      return s;
    })
  }

  // .then(result => {

  // })
  // .catch(err => {

  // })
}