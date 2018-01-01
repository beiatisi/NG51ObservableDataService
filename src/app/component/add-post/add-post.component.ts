import { Component } from '@angular/core';
import { Post } from '../../model/post.model';
import { IAddPost } from '../../interface/iadd-post.interface';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  title: string;

  constructor(private postService: IAddPost) { }

  onAddPostClick() {
    const post: Post = {
      'title': this.title,
      'author': 'Sam'
    };

    this.postService.addPost(post);

    this.title = '';
  }
}
