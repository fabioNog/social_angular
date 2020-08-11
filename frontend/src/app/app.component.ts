import { Component } from '@angular/core';
import { Post } from './post';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  public posts: Post[] = [
    new Post("João","Meu Post","Subtitulo do Joao","joao@gmail.com","Minha Mensagem do João"),
    new Post("Maria","Meu Post","Subtitulo da Maria","maria@gmail.com","Minha Mensagem da Maria"),
    new Post("Jose","Meu Post","Subtitulo do Jose","jose@gmail.com","Minha Mensagem do Jose"),
    new Post("JPedro","Meu Post","Subtitulo do Pedro","pedro@gmail.com","Minha Mensagem do JPedro"),
  ]

  constructor(
    public dialog: MatDialog
  ){}

  openDialog(){ 
    const dialogRef = this.dialog.open(PostDialogComponent,{
      width:'600px'
    })
  }

}
