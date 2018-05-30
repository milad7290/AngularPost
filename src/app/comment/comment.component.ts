import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { PostService } from '../post.service';
import { Post } from '../interfaces/post.interface';
import { Comment } from '../interfaces/Comment.interface';
import { CommentService } from '../comment.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[];
  constructor(private readonly http: HttpService,
    private readonly postService: PostService,
    private readonly commentService: CommentService,
    private location: Location,
    private route: ActivatedRoute,
  ) { console.log('salam');}


  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      console.log('id', id);
      this.commentService.GetAllCommenPost(id)
        .then(res => this.comments = res);
    })
  }
  goBack(): void {
    this.location.back();
  }
  async add(body: string): Promise<void> {
    console.log('salam');
    body = body.trim();
    const maxId = await this.getmaxid();
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      if (!body) { return; }
      this.commentService.addCommentPost(
        {
          id: maxId,
          body: body,
          postid: id,
        }
      ).then(comment => {
        this.comments.push(comment);
      });
    })
  }

  delete(comment: Comment): void {
    this.commentService.deleteCommentpost(comment);
    this.comments = this.comments.filter(h => h !== comment);

  }
  getmaxid(): Promise<number> {
    const s = 0;
    return this.commentService.getallcomments().then(res => {
      for (let index = 1; index < res.length; index++) {
        const a = res[index];
        if (a.id > s) {
          s == a.id;
        }
      }
      return s;
    })
  }

}
