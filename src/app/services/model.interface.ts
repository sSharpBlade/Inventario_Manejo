export interface CategoriaI {
    id: string;
    nombre: string;
}

export interface DispositivoI {
    id: string;
    nombre: string;
    idCategoria: string;
}