import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Post } from './interfaces/post.interface';
import { Observable, of } from 'rxjs';
import { promise } from 'protractor';
import { PostService } from './post.service';
import { Comment } from './interfaces/Comment.interface';
import { core } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private readonly http: HttpService, private readonly postservice: PostService) { }

  async getallcomments(): Promise<Comment[]> {
    try {
      return await this.http.get<Comment[]>('http://localhost:3000/comments')
    } catch (error) {
      console.error(error);
    }
  }
  async GetAllCommenPost(id: number): Promise<Comment[]> {
    try {
      return await this.http.get<Comment[]>('http://localhost:3000/comments').then(res=>res.filter(c=>c.postid==id))
    } catch (error) {
      console.error(error);
    }
  }

  async addCommentPost(comment: Comment): Promise<Comment> {
    try {
      // const url = `${'http://localhost:3000/posts'}/${id}`;
      return await this.http.post<Comment>('http://localhost:3000/comments', comment);
    } catch (error) {
      console.error(error);
    }
  }


  /** DELETE: delete the post from the server */
  async deleteCommentpost(comment: Comment | number): Promise<Comment> {
    try {
      const id = typeof comment === 'number' ? comment : comment.id;
      const url = `${'http://localhost:3000/comments'}/${id}`;

      return await this.http.delete<Comment>(url);
    } catch (error) {
      console.error(error);
    }
  }

  /** PUT: update the post on the server */
  async updatepost(post: Post): Promise<any> {
    try {
      return await this.http.put('http://localhost:3000/posts', post)
    } catch (error) {
      console.error(error);
    }
  }
}
