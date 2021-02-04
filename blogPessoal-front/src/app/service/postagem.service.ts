import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdUser(id: number): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/usuarios/${id}`, this.token)
  }
  
  getAllPostagem(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>('http://localhost:8080/postagem', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`http://localhost:8080/postagem/${id}`, this.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('http://localhost:8080/postagem', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>('http://localhost:8080/postagem', postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete<Postagem>(`http://localhost:8080/postagem/${id}`, this.token)
  }

}