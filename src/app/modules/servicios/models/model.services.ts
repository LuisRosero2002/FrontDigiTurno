export interface Servicio {
    ID_SERVICIO: number;
    DESCRIPCION: string;
}

export interface Turno {
    ID_TURNO?: number;
    ID_CLIENTE: number;
    ID_EMPLEADO?: number;
    ID_SERVICIO: number;
    ID_ESTADO?: number;
    FECHA?: Date;
    LUGAR?: string;
}

export interface Turno_Descripcion {
    NOMBRE_EMPLEADO: string;
    SERVICIO_DESCRIPCION: string;
    ESTADO_DESCRIPCION: string;
    FECHA: string; 
    LUGAR: string;
}
