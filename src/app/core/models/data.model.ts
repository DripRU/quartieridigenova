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

export interface SearchResult {
    id: number;
    nome: string;
    popolazione: number;
    circoscrizionePadreId: number;
    circoscrizionePadreNome: string;
    municipioPadreNome: string;
}

export interface ChartElementData {
    nome: string;
    popolazione: number;
}