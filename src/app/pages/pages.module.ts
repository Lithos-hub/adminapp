import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

import { HeaderComponent } from '../shared/header/header.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Componentes externos
import { ControladorComponent } from '../components/controlador/controlador.component';
import { GraficaDonutsComponent } from '../components/grafica-donuts/grafica-donuts.component';

// ng2- Charts
import { ChartsModule } from 'ng2-charts';

// Rutas de páginas (pages.routes.ts)
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        ControladorComponent,
        GraficaDonutsComponent,
        AccountSettingsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports: [
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }
