import { Observable } from 'rxjs/Observable';
import { Post } from '../model/post.model';

export abstract class IListPosts {
  readonly posts$: Observable<Post[]>;
  abstract reloadPosts(): void;
}
