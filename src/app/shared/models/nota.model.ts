import { Usuario } from './usuario';
import { GrupoNotas } from './grupo-notas.model';
export class Nota{
  id: number;
  texto: string;
  horaPostagem: Date;
  horaPostagemString: string;
  usuario: Usuario;
}
