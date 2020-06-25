import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    templateURL: 'assets/css/colors/default.css',
    template: 'default'
  };


  constructor( @Inject(DOCUMENT) private _document) {
    this.loadSettings();
   }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify( this.settings ));
  }

  loadSettings() {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings'));

      this.applyTemplate( this.settings.template);
    }else{
      this.applyTemplate( this.settings.template);
    }
  }

  applyTemplate( template: string ){
    let url = `assets/css/colors/${ template }.css`;

    this._document.getElementById('template').setAttribute('href', url);

    this.settings.template = template;
    this.settings.templateURL = url;

    this.saveSettings();
  }
}

interface Settings {
  templateURL: string;
  template: string;
}