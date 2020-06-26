import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable, of } from 'rxjs';
import { Game } from '../interfaces/interfaces';
import { tap, catchError } from 'rxjs/operators';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class GameService {
   juegos: Game[] = [];

   constructor(private http: HttpClient) { }

   getNominados(): Observable<Game[]> {
      if (this.juegos.length !== 0) {
         return of(this.juegos);
      } else {
         return this.http.get<Game[]>(`${url}/api/goty`).pipe(
            tap(
               juegos => this.juegos = juegos
            )
         );
      }
   }

   votarJuego(id: string): Observable<any> {
      return this.http.post(`${url}/api/goty/${id}`, {}).pipe(
         catchError(error => {
           console.log('Error en la petición');
           return of(error.error);
         })
      );
   }
}
