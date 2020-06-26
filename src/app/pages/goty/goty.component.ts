import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {
   juegos: Game[] = [];

   constructor(private gameService: GameService) { }

   ngOnInit(): void {
      this.gameService.getNominados().subscribe((resp: Game[]) => {
         this.juegos = resp;
      });
   }

   votarJuego(juego: Game): void {
      this.gameService.votarJuego(juego.id).subscribe(response => {
         if (response.ok === true) {
            Swal.fire({
               title: 'Gracias',
               text: response.mensaje,
               icon: 'success',
            });
         } else {
            Swal.fire({
               title: 'Oops',
               text: response.mensaje,
               icon: 'error',
            });
         }
      });
   }

}
