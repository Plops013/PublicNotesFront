import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';

export const GrupoDeNotasRoutingModule = [
  { path: 'grupo-de-notas', component: HomeComponent },
  { path: 'grupo-de-notas/home', component: HomeComponent },
  {path: 'grupo-de-notas/cadastrar', component: CadastrarComponent}
 ];
