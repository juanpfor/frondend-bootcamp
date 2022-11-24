export interface Alimento {
    id_alimentos: string,
    nombre_alimento: string,
    materia_seca: string,
    e_m_aves: string,
    e_m_cerdos: string,
    proteina_cruda: string,
    fibra_cruda: string,
    ext_etereo: string,
    calcio: string,
    fosf_disp: string,
    sodio: string,
    arginina: string,
    lisina: string,
    metionina: string,
    triptofano: string,
    met_cis: string,
    treonina: string,
    tipo_nutriente_id: string,
    region_id: string,
    createdAt: string,
    updatedAt: string,
    // Regione?: Regione,
    // tipoNutriente?: tiponutriente
}

export interface Regione {
    id_region: string,
    nombre_region: string,
    municipio_id: string,
    createdAt: string,
    updatedAt: string
}

export interface tiponutriente {
    id_tipo_nutriente: string,
    nombre_tipo_nutriente: string,
    createdAt: string,
    updatedAt: string,
}