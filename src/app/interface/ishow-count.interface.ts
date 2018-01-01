import { Observable } from 'rxjs/Observable';
import { Post } from '../model/post.model';

export abstract class IShowCount {
  readonly posts$: Observable<Post[]>;
}
