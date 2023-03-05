import { IProveedorBase } from "./iproveedorbase";

export class Proveedor implements IProveedorBase{
  id: number;
  razonSocial: string;
  ruc: string;
  nombreComercial: string;
  direccion: string;
  telefono: number;
  email: string;
  contactoUno: string;
  contactoDos: string;
  observacion: string;
  estPossessionOn: string;
}
