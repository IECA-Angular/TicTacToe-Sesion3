import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  estadoJuego: 'jugando' | 'espera' | 'finalizado' = 'espera';
  jugadorActual: number = 1;
  ganador: number = 0;
  celdas: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];


  clickCelda(indice: number) {

    /** Este if ponerlo despues para mostrar que pasa si no existe */
    if (this.celdas[indice] !== 0) {
      return;
    }

     this.celdas[indice] = this.jugadorActual;
     this.cambiarJugador();
  }

  cambiarJugador() {
    this.jugadorActual = this.jugadorActual === 1 ? 2 : 1;
  }

}
