import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProximamenteComponent } from './pages/proximamente/proximamente.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
  { path: '', component: InicioComponent, title: 'GreenTravel · Inicio' },
  { path: 'registro', component: RegistroComponent, title: 'GreenTravel · Registro' },
  {
    path: 'login',
    component: ProximamenteComponent,
    title: 'GreenTravel · Iniciar sesión',
    data: {
      titulo: 'Inicio de sesión próximamente',
      descripcion:
        'El backend de GreenTravel todavía no expone un endpoint de autenticación (login). Esta sección se habilitará en cuanto esté disponible.'
    }
  },
  {
    path: 'destinos',
    component: ProximamenteComponent,
    title: 'GreenTravel · Destinos',
    data: {
      titulo: 'Destinos próximamente',
      descripcion:
        'El catálogo de destinos se mostrará aquí en cuanto el backend publique el endpoint correspondiente.'
    }
  },
  {
    path: 'reservas',
    component: ProximamenteComponent,
    title: 'GreenTravel · Reservas',
    data: {
      titulo: 'Reservas próximamente',
      descripcion:
        'La gestión de reservas se habilitará aquí en cuanto el backend publique los endpoints correspondientes.'
    }
  },
  { path: '**', redirectTo: '' }
];
