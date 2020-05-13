import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
export const NotaRoutingModule = [
  { path: 'nota', component: HomeComponent },
  { path: 'nota/cadastrar', component: CadastrarComponent}
 ];
