import { Nota } from './nota.model';
import { Usuario } from './usuario';

export interface GrupoNotas{
  id: number;
  publico: boolean;
  protegidoComSenha: boolean;
  usuario: Usuario;
  password: string;
  notas: Array<Nota>;
}
