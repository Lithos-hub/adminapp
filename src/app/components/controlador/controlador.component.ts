import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-controlador',
  templateUrl: './controlador.component.html',
  styles: [
  ]
})
export class ControladorComponent implements OnInit {

  @ViewChild('txtProgreso') txtProgreso: ElementRef;

  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  cambiarValor( valor ) {

    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
    this.porcentaje = 0;
    return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit( this.porcentaje );
  }

  onChanges( newValue: number ) {

  if (newValue >= 100 ) {
    this.porcentaje = 100;
  }else if ( newValue <= 0 ) {
    this.porcentaje = 0;
  }else {
    this.porcentaje = newValue;

  }

  // elemHTML.value = Number( this.porcentaje );

  this.txtProgreso.nativeElement.value = this.porcentaje;

  this.cambioValor.emit( this.porcentaje );

  this.txtProgreso.nativeElement.focus();
}

}
