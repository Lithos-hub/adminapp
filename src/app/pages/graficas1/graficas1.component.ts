import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    'grafico1': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [246, 323],
      'type': 'doughnut',
      'leyenda': 'Gráfica de dos variables'
    },
    'grafico2': {
      'labels': ['Madrid', 'Barcelona', 'Valencia', 'Bilbao', 'Sevilla'],
      'data':  [128, 92, 35, 17, 76],
      'type': 'doughnut',
      'leyenda': 'Gráfica de lugares'
    },
    'grafico3': {
      'labels': ['Si', 'No', 'NS/NC'],
      'data':  [95, 76, 6],
      'type': 'doughnut',
      'leyenda': 'Gráfica de respuestas de Si, No, NS/NC'
    },
    'grafico4': {
      'labels': ['Partido 1', 'Partido 2', 'Partido 3', 'Partido 4', 'Partido 5', 'Partido 6'],
      'data':  [85, 15, 64, 32, 12, 3],
      'type': 'doughnut',
      'leyenda': 'Gráfica de intención de voto'
    },
  };

  @Output('infoGrafica') info: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

}
