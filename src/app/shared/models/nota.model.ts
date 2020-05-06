import { GrupoNotas } from './grupo-notas.model';
export interface Nota{
  id: number;
  titulo: string;
  texto: string;
  gruponotas: GrupoNotas;
  publico: boolean;
}
