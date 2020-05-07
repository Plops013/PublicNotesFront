import { Nota } from './nota.model';
import { Usuario } from './usuario';

export class GrupoNotas{
  id: number;
  nome: string;
  usuario: Usuario;
  notas: Array<Nota>;
}
