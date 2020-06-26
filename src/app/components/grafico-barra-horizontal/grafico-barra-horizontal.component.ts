import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

   @Input() results: any[] = [];
   // options
   showXAxis = true;
   showYAxis = true;
   gradient = true;
   showLegend = true;
   showXAxisLabel = true;
   xAxisLabel = 'Juegos';
   showYAxisLabel = true;
   yAxisLabel = 'Votos';

   colorScheme = 'nightLights';
   intervalo;

   constructor() {
      // this.intervalo = setInterval(() => {
      //    const newResults = [...this.results];
      //    console.log('tick');
      //    // tslint:disable-next-line: forin
      //    for (const i in newResults) {
      //       this.results[i].value = Math.round(Math.random() * 500);
      //    }
      //    this.results = [...newResults];
      // }, 1500);
   }

   ngOnDestroy(): void {
      // clearInterval(this.intervalo);
   }

   onSelect(event): void {
      console.log(event);
   }
}
