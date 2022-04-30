import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { RecordatorisComponent } from './recordatoris/recordatoris.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CitaComponent } from './cita/cita.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'inici', component: InicioComponent},
  {path: 'map', component: MapComponent},
  {path: 'recordatoris', component: RecordatorisComponent},
  {path: 'cites', component: CitaComponent},
  {path: '', redirectTo: '/inici', pathMatch: 'full'},
  {path: '404', redirectTo: '/inici'},
  {path: '**', redirectTo: '/inici'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InicioComponent,
    HeaderComponent,
    MapComponent,
    FooterComponent,
    RecordatorisComponent,
    CitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
