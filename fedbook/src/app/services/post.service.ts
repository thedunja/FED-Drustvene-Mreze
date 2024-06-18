import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FedComment } from '../model/comments.model';
import { PostResponse } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(params?: any): Observable<PostResponse> {
    let options = {}
    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || "")
          .set('pageSize', params.pageSize || "")
          .set('sort', params.sort || "")
          .set('sortDirection', params.sortDirection || "")

      }
    }
    return this.http.get('http://localhost:3000/api/posts', options).pipe(map((data: any) => {
      return new PostResponse(data);
    }))
  }

  getComments(postId: number, params?: any): Observable<FedComment[]> {
    let options = {}
    if (params) {
      options = {
        params: new HttpParams()
          .set('sort', params.sort || "")
          .set('sortDirection', params.sortDirection || "")

      }
    }

    return this.http.get<FedComment[]>(`http://localhost:3000/api/posts/${postId}/comments`, options).pipe(map((data: any) => {
      console.log(options);

      return data && data.map((elem: any) => new FedComment(elem)) || [];
    }))

  }

  postComment(newComment: FedComment, postId: number): Observable<FedComment> {
    return this.http.post(`http://localhost:3000/api/posts/${postId}/comments`, newComment).pipe(map((data: any) => {
      return new FedComment(data);
    }))
  }


}
