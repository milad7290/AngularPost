import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
import { Location } from '@angular/common';
import { Post } from '../interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-posts-details',
  templateUrl: './posts-details.component.html',
  styleUrls: ['./posts-details.component.css']
})
export class PostsDetailsComponent implements OnInit {
  post: Post;

  constructor(private postservice: PostService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    console.log('salam');
  }

  ngOnInit() {
    console.log('hi');
    this.route.params.subscribe(params => {
      const id = parseInt(params['id'], 10);
      console.log('id', id);
      this.postservice.getPost(id)
        .then(post => this.post = post);
    })
  }
  goBack(): void {
    this.location.back();
  }


}
