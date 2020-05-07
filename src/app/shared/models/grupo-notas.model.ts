import { Nota } from './nota.model';
import { Usuario } from './usuario';

export class GrupoNotas{
  id: number;
  nome: string;
  publico: boolean;
  protegidoComSenha: boolean;
  usuario: Usuario;
  password: string;
  notas: Array<Nota>;
}
