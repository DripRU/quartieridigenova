# 🏙️ Quartieri di Genova

🇮🇹 [Italiano](#italiano) | 🇬🇧 [English](#english)

---

## <a name="italiano"></a> 🇮🇹 Italiano

Un'applicazione web per esplorare la struttura amministrativa del territorio genovese, navigando attraverso municipi, circoscrizioni e unità urbanistiche.

### 📌 Descrizione

Genova è suddivisa in **9 municipi**, ognuno dei quali contiene più **circoscrizioni**, a loro volta composte da **unità urbanistiche**. Questa app permette di esplorare questa gerarchia in modo intuitivo, con la possibilità di cercare direttamente un'unità urbanistica specifica tramite la barra di ricerca.

### 🚀 Funzionalità

- Navigazione a tre livelli: Municipi → Circoscrizioni → Unità Urbanistiche
- Ricerca live delle unità urbanistiche con anteprima dei risultati
- Visualizzazione della popolazione per ogni livello amministrativo

### 🛠️ Stack tecnico

- **Angular 21** — framework principale
- **TypeScript** — tipizzazione statica
- **Bootstrap 5** — stile e layout responsive

### ⚙️ Come avviare il progetto

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
ng serve

# Per accedere da dispositivi nella stessa rete (es. smartphone)
ng serve --host 0.0.0.0
```

L'app sarà disponibile su `http://localhost:4200`.

### 📊 Dati

I dati sono momentaneamente contenuti in un file JSON statico (`assets/municipi.json`) e includono per ogni unità amministrativa: nome e popolazione. I dati sono basati sulla struttura amministrativa reale del Comune di Genova.
La fonte dei dati riportati nell'applicazione è il **Notiziario Statistico 2022** del **Comune di Genova**, che ho inserito nella cartella `sources`, liberamente consultabile.

### 🤝 Contribuire

Se noti errori nei dati o vuoi contribuire al progetto, apri una issue o una pull request su [GitHub](https://github.com/DripRU/quartieridigenova).

---

## <a name="english"></a> 🇬🇧 English

A web application to explore the administrative structure of Genoa's territory, navigating through municipalities, districts, and urban units.

### 📌 Description

Genoa is divided into **9 municipalities**, each containing multiple **districts**, which are in turn composed of **urban units**. This app allows you to explore this hierarchy intuitively, with the ability to search directly for a specific urban unit using the search bar.

### 🌍 Translation

English translation of the app is not available yet.

### 🚀 Features

- Three-level navigation: Municipalities → Districts → Urban Units
- Live search for urban units with result preview
- Population display for each administrative level

### 🛠️ Tech stack

- **Angular 21** — main framework
- **TypeScript** — static typing
- **Bootstrap 5** — responsive styling and layout

### ⚙️ Getting started

```bash
# Install dependencies
npm install

# Start the development server
ng serve

# To access from devices on the same network (e.g. smartphone)
ng serve --host 0.0.0.0
```

The app will be available at `http://localhost:4200`.

### 📊 Data

Data is currently stored in a static JSON file (`assets/municipi.json`) and includes the name and population for each administrative unit. The data is based on the real administrative structure of the City of Genoa.
The source of the data used in the application is the **2022 Statistical Report** by the **City of Genoa**, which has been included in the `sources` folder and is freely available.

### 🤝 Contributing

If you notice any errors in the data or would like to contribute to the project, feel free to open an issue or a pull request on [GitHub](https://github.com/DripRU/quartieridigenova).