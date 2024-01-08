export interface CategoriaI {
    id: string;
    nombre: string;
}

export interface DispositivoI {
    id: string;
    nombre: string;
    idCategoria: string;
    nom_lab: string;
}

export interface ComentariosI {
    id: string;
    comentario: string;
    idDispositivo: string;
    estado: number;
    nom_lab: string;
    nombre_dis: string;
    nom_cat: string;
}