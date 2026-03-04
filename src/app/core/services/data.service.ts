import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Municipio, Circoscrizione, SearchResult } from '../models/data.model';

@Injectable({ providedIn: 'root' })
export class DataService {
  // definiamo l'URL del file JSON che contiene i dati dei municipi
  private apiUrl = 'assets/municipi.json';
  // definiamo un signal privato che conterrà l'elenco dei municipi, inizialmente vuoto
  // mettiamo il prefisso _ per indicare che è una proprietà privata
  // questa proprietà non è direttamente accessibile dall'esterno del servizio,
  // ma può essere aggiornata internamente e letta tramite un metodo pubblico
  private _municipi = signal<Municipio[]>([]);

  // costruzione del servizio con l'iniezione di HttpClient
  constructor(private http: HttpClient) {
    this.http.get<Municipio[]>(this.apiUrl).subscribe({
      next: (data) => this._municipi.set(data),
      error: (err) => console.error('Errore: ', err),
    });
  }

  getMunicipi() {
    return this._municipi;
  }

  getMunicipioById(id: number): Municipio | undefined {
    return this._municipi().find((m) => m.id === id);
  }

  getCircoscrizioneById(id: number): Circoscrizione | undefined {
    for (const municipio of this._municipi()) {
      const circoscrizione = municipio.circoscrizioni.find((c) => c.id === id);
      if (circoscrizione) {
        return circoscrizione;
      }
    }
    return undefined;
  }

  getCircoscrizioniByMunicipio(municipioId: number): Circoscrizione[] {
    return this._municipi().find((m) => m.id === municipioId)?.circoscrizioni ?? [];
  }

  getUnitaUrbanisticheByCircoscrizione(circoscrizioneId: number) {
    for (const municipio of this._municipi()) {
      const circoscrizione = municipio.circoscrizioni.find((c) => c.id === circoscrizioneId);
      if (circoscrizione) {
        return circoscrizione.unita_urbanistiche;
      }
    }
    return [];
  }

  searchUnitaUrbanistiche(query: string): SearchResult[] {
    const queryLower = query.toLowerCase();
    const results: SearchResult[] = [];

    if (!query) {
      return results;
    }

    for (const municipio of this._municipi()) {
      for (const circoscrizione of municipio.circoscrizioni) {
        const unitaUrbanistica = circoscrizione.unita_urbanistiche.filter((u) =>
          u.nome.toLowerCase().includes(queryLower),
        );
        unitaUrbanistica.forEach((u) =>
          results.push({
            id: u.id,
            nome: u.nome,
            popolazione: u.popolazione,
            circoscrizionePadreId: circoscrizione.id,
            circoscrizionePadreNome: circoscrizione.nome,
            municipioPadreNome: municipio.nome,
          }),
        );
      }
    }
    return results;
  }
}
