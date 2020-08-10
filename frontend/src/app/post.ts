export class Post{
    constructor(
        public nome: string,
        public email: string,
        public titulo: string,
        public subtitulo: string,
        public mensagem: string,
        public arquivo?: string,
        public id?: number,
        public likes?: number,
    ){}
}

