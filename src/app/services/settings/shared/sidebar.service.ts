import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any[] = [
    {
      title: 'Main',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Dashboard', url: '/dashboard' },
        {title: 'ProgressBar', url: '/progress' },
        {title: 'Graphics', url: '/graficas1' },
      ]
    }
  ];

  constructor() { }
}
