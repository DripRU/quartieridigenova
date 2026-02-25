export interface UnitaUrbanistica {
    id: number;
    nome: string;
    popolazione: number;
}

export interface Circoscrizione {
    id: number;
    nome: string;
    popolazione: number;
    unita_urbanistiche: UnitaUrbanistica[];
}

export interface Municipio {
    id: number;
    nome: string;
    popolazione: number;
    circoscrizioni: Circoscrizione[];
}