import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';

export const UsuarioRoutingModule = [
  { path: 'usuario', component: HomeComponent },
 { path: 'usuario/cadastrar',  component: CadastroComponent},
{ path: 'usuario/home', component: HomeComponent }
 ];
