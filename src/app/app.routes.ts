import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { VistaComponent } from './pages/vista/vista.component';
import { InicioComponent } from './pages/vista/inicio/inicio.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CursosComponent } from './pages/vista/cursos/cursos.component';

import { AdminGuard } from './guards/admin.guard';
import { EmpleadorGuard } from './guards/empleador.guard';
import { TrabajadorGuard } from './guards/trabajador';
import { AuthGuard } from './guards/auth.guard';

/* ---------------------------------------------------------------------- */

import { PortalComponent } from './paginas/login/portal/portal.component';
import { LayoutUnoComponent } from './layout/layout-uno/layout-uno.component';
import { LayoutDosComponent } from './layout/layout-dos/layout-dos.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutTresComponent } from './layout/layout-tres/layout-tres.component';
import { BannersComponent } from './pages/admin/banners/banners.component';
import { UpdateFileComponent } from './pages/admin/banners/update-file/update-file.component';
import { MisionComponent } from './pages/admin/mision/mision.component';
import { UpdateFileMisionComponent } from './pages/admin/mision/update-file-mision/update-file-mision.component';
import { UpdateMisionComponent } from './pages/admin/mision/update-mision/update-mision.component';
import { CarouselComponent } from './pages/admin/carousel/carousel.component';
import { UpdateFileCarouselComponent } from './pages/admin/carousel/update-file-carousel/update-file-carousel.component';
import { VerCursoComponent } from './layout/componentes/ver-curso/ver-curso.component';

export const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: '',
    component: VistaComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'cursos',
        component: CursosComponent,
      },
      {
        path: 'ver-curso',
        component: VerCursoComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent,
      },
      {
        path: 'banners',
        canActivate: [AuthGuard],
        component: BannersComponent,
      },
      {
        path: 'update/file',
        canActivate: [AuthGuard],
        component: UpdateFileComponent,
      },
      {
        path: 'mision',
        canActivate: [AuthGuard],
        component: MisionComponent,
      },
      {
        path: 'mision/update/file',
        canActivate: [AuthGuard],
        component: UpdateFileMisionComponent,
      },
      {
        path: 'mision/update',
        canActivate: [AuthGuard],
        component: UpdateMisionComponent,
      },
      {
        path: 'carousel',
        canActivate: [AuthGuard],
        component: CarouselComponent,
      },
      {
        path: 'carousel/update/file',
        canActivate: [AuthGuard],
        component: UpdateFileCarouselComponent,
      },
    ],
  },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'layout-uno',
        component: LayoutUnoComponent,
      },
      {
        path: 'layout-dos',
        component: LayoutDosComponent,
      },
      {
        path: 'layout-tres',
        component: LayoutTresComponent,
      },
    ],
  },
  {
    path: '',
    /* canActivate: [AuthGuard], */
    redirectTo: '/admin/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    /* canActivate: [AuthGuard], */ component: PageNotFoundComponent,
  },
];
