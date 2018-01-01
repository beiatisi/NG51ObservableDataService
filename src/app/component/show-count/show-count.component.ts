import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../model/post.model';
import { IShowCount } from '../../interface/ishow-count.interface';

@Component({
  selector: 'app-show-count',
  templateUrl: './show-count.component.html',
  styleUrls: ['./show-count.component.css']
})
export class ShowCountComponent {
  posts$: Observable<Post[]> = this.postService.posts$;

  constructor(private postService: IShowCount) { }
}
