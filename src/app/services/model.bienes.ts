export interface CategoriaI {
    id: string;
    nombre: string;
}

export interface DispositivoI {
    id: string;
    nombre: string;
    idCategoria: string;
}

export interface ComentariosI {
    id: string;
    comentario: string;
    idDispositivo: string;
    estado: number;
}

export interface CarrerasI {
    id: string;
    nombre: string;
}

export interface LaboratorioI {
    id: string;
    nombre: string;
    idCarreraPer: string;
}