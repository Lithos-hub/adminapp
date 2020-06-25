import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(public _settings: SettingsService ) { }

  ngOnInit(): void {
    this.putCheck();
  }

  changeColor( template: string, link: any) {

    this.applyCheck( link );

    this._settings.applyTemplate( template );
  }

  applyCheck( link: any ){

    let selectores: any = document.getElementsByClassName('selector');
    
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    
    link.classList.add('working');
    
  }
  
  putCheck() {
    let selectores: any = document.getElementsByClassName('selector');

    let template = this._settings.settings.template;

    for (let ref of selectores) {
      if( ref.getAttribute('data-theme') === template) {
        ref.classList.add('working');
        break;
      }
    }
  }
}
