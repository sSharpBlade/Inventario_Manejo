export interface CategoriaI {
    id: string;
    nombre: string;
}

export interface DispositivoI {
    id: string;
    nombre: string;
    marca: string;
    anio: string;
    id_lab_per: string;
    id_cat_per: string;
    est_dis: string;
}

export interface ComentariosI {
    id: string;
    comentario: string;
    idDispositivo: string;
    estado: number;
}

export interface CarrerasI {
    id_car: string;
    nom_car: string;
    sem_car: string;
    tit_car: string;
    est_car: string;
}

export interface LaboratorioI {
    id: string;
    nom_lab: string;
    ubi_lab: string;
    cap_mes_lab: string;
    id_car_lab: string;
    est_lab: string;
}