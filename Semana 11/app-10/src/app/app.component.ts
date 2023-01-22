import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  arrayFotos: any = [
    {
       url: "https://cdn.lorem.space/images/book/.cache/500x0/a-brief-history-of-time.jpeg",
       description:"livros"
     },
     {
       url: "https://cdn.lorem.space/images/movie/.cache/500x0/the-martian-2015.jpeg",
       description:"filmes"
     },
     {
       url: "https://cdn.lorem.space/images/game/.cache/500x0/los-1.jpg",
       description:"games"
     },
     {
       url: "https://cdn.lorem.space/images/face/.cache/500x0/omer-karakus-AjGyA81epeI-unsplash.jpg",
       description:"rosto"
     },
     {
       url: "https://cdn.lorem.space/images/shoes/.cache/500x0/alexander-rotker-l8p1aWZqHvE-unsplash.jpg",
       description:"sapato"
     }
   ]
}
