import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})

export class HeroComponent{
    btnName: string = 'Ver noticia'
    hero: string[]= ['hero cine', 'hero snack', 'hero promo', 'hero tickets']

    anuncio: string[] =[
        'Los mejores precios siempre con la mejor calidad',
        'Los mejores snacks siempres frescos',
        'Martes de promoción para que no te quedes en casa',
        'Realiza la compra de peliculas en preventa'
    ]

}