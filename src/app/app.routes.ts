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
import { ProductoComponent } from './pages/admin/producto/producto.component';
import { CreateComponent } from './pages/admin/producto/create/create.component';
import { EditComponent } from './pages/admin/producto/edit/edit.component';
import { EspecialidadComponent } from './pages/admin/especialidad/especialidad.component';
import { CreateEspecialidadComponent } from './pages/admin/especialidad/create-especialidad/create-especialidad.component';
import { EditEspecialidadComponent } from './pages/admin/especialidad/edit-especialidad/edit-especialidad.component';
import { ContactoComponent } from './pages/admin/contacto/contacto.component';
import { TestimonioComponent } from './pages/admin/testimonio/testimonio.component';
import { CreateTestimonioComponent } from './pages/admin/testimonio/create-testimonio/create-testimonio.component';
import { EditTestimonioComponent } from './pages/admin/testimonio/edit-testimonio/edit-testimonio.component';
import { EventoComponent } from './pages/admin/evento/evento.component';
import { CreateEventoComponent } from './pages/admin/evento/create-evento/create-evento.component';
import { EditEventoComponent } from './pages/admin/evento/edit-evento/edit-evento.component';
import { BannerCurso } from './models/banner_curso.model';
import { BannerCursoComponent } from './pages/admin/banner-curso/banner-curso.component';
import { BannerEspecialidadComponent } from './pages/admin/banner-especialidad/banner-especialidad.component';
import { BannerContactoComponent } from './pages/admin/banner-contacto/banner-contacto.component';
import { BannerEventoComponent } from './pages/admin/banner-evento/banner-evento.component';
import { EditBannerCursoComponent } from './pages/admin/banner-curso/edit-banner-curso/edit-banner-curso.component';
import { EditBannerEspecialidadComponent } from './pages/admin/banner-especialidad/edit-banner-especialidad/edit-banner-especialidad.component';
import { EditBannerContactoComponent } from './pages/admin/banner-contacto/edit-banner-contacto/edit-banner-contacto.component';
import { EditBannerEventoComponent } from './pages/admin/banner-evento/edit-banner-evento/edit-banner-evento.component';
import { BannerSolucionComponent } from './pages/admin/banner-solucion/banner-solucion.component';
import { EditBannerSolucionComponent } from './pages/admin/banner-solucion/edit-banner-solucion/edit-banner-solucion.component';
import { CreateSolucionComponent } from './pages/admin/solucion/create-solucion/create-solucion.component';
import { EditSolucionComponent } from './pages/admin/solucion/edit-solucion/edit-solucion.component';
import { SolucionComponent } from './pages/admin/solucion/solucion.component';

export const routes: Routes = [
  {
    path: 'portal',
    component: PortalComponent,
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  /*  {
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
  }, */
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
        path: 'banner/principal',
        canActivate: [AuthGuard],
        component: BannersComponent,
      },
      {
        path: 'update/file',
        canActivate: [AuthGuard],
        component: UpdateFileComponent,
      },
      {
        path: 'banner/curso',
        canActivate: [AuthGuard],
        component: BannerCursoComponent,
      },
      {
        path: 'banner/curso/edit',
        canActivate: [AuthGuard],
        component: EditBannerCursoComponent,
      },
      {
        path: 'banner/especialidad',
        canActivate: [AuthGuard],
        component: BannerEspecialidadComponent,
      },
      {
        path: 'banner/especialidad/edit',
        canActivate: [AuthGuard],
        component: EditBannerEspecialidadComponent,
      },
      {
        path: 'banner/contacto',
        canActivate: [AuthGuard],
        component: BannerContactoComponent,
      },
      {
        path: 'banner/contacto/edit',
        canActivate: [AuthGuard],
        component: EditBannerContactoComponent,
      },
      {
        path: 'banner/evento',
        canActivate: [AuthGuard],
        component: BannerEventoComponent,
      },
      {
        path: 'banner/evento/edit',
        canActivate: [AuthGuard],
        component: EditBannerEventoComponent,
      },
      {
        path: 'banner/solucion',
        canActivate: [AuthGuard],
        component: BannerSolucionComponent,
      },
      {
        path: 'banner/solucion/edit',
        canActivate: [AuthGuard],
        component: EditBannerSolucionComponent,
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
      {
        path: 'cursos',
        canActivate: [AuthGuard],
        component: ProductoComponent,
      },
      {
        path: 'cursos/create',
        canActivate: [AuthGuard],
        component: CreateComponent,
      },
      {
        path: 'cursos/edit',
        canActivate: [AuthGuard],
        component: EditComponent,
      },
      {
        path: 'especialidades',
        canActivate: [AuthGuard],
        component: EspecialidadComponent,
      },
      {
        path: 'especialidades/create',
        canActivate: [AuthGuard],
        component: CreateEspecialidadComponent,
      },
      {
        path: 'especialidades/edit',
        canActivate: [AuthGuard],
        component: EditEspecialidadComponent,
      },
      {
        path: 'contactos',
        canActivate: [AuthGuard],
        component: ContactoComponent,
      },
      {
        path: 'testimonios',
        canActivate: [AuthGuard],
        component: TestimonioComponent,
      },
      {
        path: 'testimonios/create',
        canActivate: [AuthGuard],
        component: CreateTestimonioComponent,
      },
      {
        path: 'testimonios/edit',
        canActivate: [AuthGuard],
        component: EditTestimonioComponent,
      },
      {
        path: 'eventos',
        canActivate: [AuthGuard],
        component: EventoComponent,
      },
      {
        path: 'eventos/create',
        canActivate: [AuthGuard],
        component: CreateEventoComponent,
      },
      {
        path: 'eventos/edit',
        canActivate: [AuthGuard],
        component: EditEventoComponent,
      },
      {
        path: 'soluciones',
        canActivate: [AuthGuard],
        component: SolucionComponent,
      },
      {
        path: 'soluciones/create',
        canActivate: [AuthGuard],
        component: CreateSolucionComponent,
      },
      {
        path: 'soluciones/edit',
        canActivate: [AuthGuard],
        component: EditSolucionComponent,
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
