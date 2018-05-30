import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Post } from './interfaces/post.interface';
import { Observable, of } from 'rxjs';
import { promise } from 'protractor';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PostService {

  constructor(
    private readonly http: HttpService,
    private httpClient: HttpClient,
  ) {

  }

  async getallpost(): Promise<Post[]> {
    try {
      return await this.http.get<Post[]>('http://localhost:3000/posts')
    } catch (error) {
      console.error(error);
    }
  }
  async getPost(id: number): Promise<Post> {
    try {
      // const url = `${'http://localhost:3000/posts'}/${id}`;
      return await this.http.get<Post>('http://localhost:3000/posts', id);
    } catch (error) {
      console.error(error);
    }


  }
  async addPost(post: Post): Promise<Post> {
    try {
      // const url = `${'http://localhost:3000/posts'}/${id}`;
      return await this.http.post<Post>('http://localhost:3000/posts', post);
    } catch (error) {
      console.error(error);
    }
  }
  searchPosts(term: string) {
    try {
      if (!term.trim()) {
        // if not search term, return empty post array.
        return ([]);
      }
      return this.httpClient.get<Post[]>(`http://localhost:3000/posts/${term}`)
    } catch (error) {
      console.error(error);
    }
  }


  /** DELETE: delete the post from the server */
  async deletepost(post: Post | number): Promise<Post> {
    try {
      const id = typeof post === 'number' ? post : post.id;
      const url = `${'http://localhost:3000/posts'}/${id}`;

      return await this.http.delete<Post>(url);
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