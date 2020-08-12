import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public posts: Post[] = [
    new Post("João","Meu Post","Subtitulo do Joao","joao@gmail.com","Minha Mensagem do João"),
    new Post("Maria","Meu Post","Subtitulo da Maria","maria@gmail.com","Minha Mensagem da Maria"),
    new Post("Jose","Meu Post","Subtitulo do Jose","jose@gmail.com","Minha Mensagem do Jose"),
    new Post("JPedro","Meu Post","Subtitulo do Pedro","pedro@gmail.com","Minha Mensagem do JPedro"),
  ]
}
