import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));



// INSTALACION DE ANGULAR => npm install -g @angular/cli
// VERIFICAR VERSION => ng version
// CREAR E INSTALACION DE DEPENDECIAS => ng new platziplay
// CORRER EL PROYECTO => ng serve
