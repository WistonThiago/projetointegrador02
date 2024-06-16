const capitais = {
    "ac": "Rio Branco",
    "al": "Maceió",
    "am": "Manaus",
    "ap": "Macapá",
    "ba": "Salvador",
    "ce": "Fortaleza",
    "df": "Brasília",
    "es": "Vitória",
    "go": "Goiânia",
    "ma": "São Luís",
    "mg": "Belo Horizonte",
    "ms": "Campo Grande",
    "mt": "Cuiabá",
    "pa": "Belém",
    "pb": "João Pessoa",
    "pe": "Recife",
    "pi": "Teresina",
    "pr": "Curitiba",
    "rj": "Rio de Janeiro",
    "rn": "Natal",
    "ro": "Porto Velho",
    "rr": "Boa Vista",
    "rs": "Porto Alegre",
    "sc": "Florianopólis",
    "se": "Aracaju",
    "sp": "São Paulo",
    "to": "Palmas"
}

const populacao = {
    "ac": "830.018",
    "al": "3.127.683",
    "am": "3.941.613",
    "ap": "733.759",
    "ba": "14.141.626",
    "ce": "8.794.957",
    "df": "2.817.381",
    "es": "3.833.712",
    "go": "7.056.495",
    "ma": "6.776.699",
    "mg": "20.539.989",
    "ms": "2.757.013",
    "mt": "3.658.649",
    "pa": "8.120.131",
    "pb": "3.974.687",
    "pe": "9.058.931",
    "pi": "3.271.199",
    "pr": "11.444.380",
    "rj": "16.055.174",
    "rn": "3.302.729",
    "ro": "1.581.196",
    "rr": "636.707",
    "rs": "10.882.965",
    "sc": "7.610.361",
    "se": "2.210.004",
    "sp": "44.411.238",
    "to": "1.511.460"
}

const area = {
    "ac": "164.173,429",
    "al": "27.830,661",
    "am": "1.559.255,881",
    "ap": "142.470,762",
    "ba": "564.760,429",
    "ce": "148.894,447",
    "df": "5.760,784",
    "es": "46.074,448",
    "go": "340.242,859",
    "ma": "329.651,496",
    "mg": "586.513,983",
    "ms": "357.142,082",
    "mt": "903.208,361",
    "pa": "1.245.870,704",
    "pb": "56.467,242",
    "pe": "98.067,877",
    "pi": "251.755,481",
    "pr": "199.298,981",
    "rj": "43.750,425",
    "rn": "52.809,599",
    "ro": "237.754,172",
    "rr": "223.644,530",
    "rs": "281.707,151",
    "sc": "95.730,690",
    "se": "21.938,188",
    "sp": "248.219,485",
    "to": "277.423,627"
}

const regiao = {
    "ac": "Norte",
    "al": "Nordeste",
    "am": "Norte",
    "ap": "Norte",
    "ba": "Nordeste",
    "ce": "Nordeste",
    "df": "Centro-Oeste",
    "es": "Sudeste",
    "go": "Centro-Oeste",
    "ma": "Nordeste",
    "mg": "Sudeste",
    "ms": "Centro-Oeste",
    "mt": "Centro-Oeste",
    "pa": "Norte",
    "pb": "Nordeste",
    "pe": "Nordeste",
    "pi": "Nordeste",
    "pr": "Sul",
    "rj": "Sudeste",
    "rn": "Nordeste",
    "ro": "Norte",
    "rr": "Norte",
    "rs": "Sul",
    "sc": "Sul",
    "se": "Nordeste",
    "sp": "Sudeste",
    "to": "Centro-Oeste"
}

function renderizarCapitalEstado() {
    const estado = document.querySelector('[id^="capital-"]');
    if (!estado) {
        console.error("Elemento do estado não encontrado.");
        return;
    }
    const estadoCodigo = estado.id.replace("capital-", "");
    if (capitais.hasOwnProperty(estadoCodigo)) {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = 
        `
        <p>Capital: <span class="destaque">${capitais[estadoCodigo]}</span></p>
        `
        estado.innerHTML = '';
        estado.appendChild(paragraph);
    } else {
        console.error(`Informações para o estado ${estadoCodigo} não encontradas.`);
    }
}
renderizarCapitalEstado();

function renderizarAreaEstado() {
    const estado = document.querySelector('[id^="area-"]');
    if (!estado) {
        console.error("Elemento do estado não encontrado.");
        return;
    }
    const estadoCodigo = estado.id.replace("area-", "");
    if (area.hasOwnProperty(estadoCodigo)) {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = 
        `
        <p>Área: <span class="destaque">${area[estadoCodigo]} km²</span></p>
        `
        estado.innerHTML = '';
        estado.appendChild(paragraph);
    } else {
        console.error(`Informações para o estado ${estadoCodigo} não encontradas.`);
    }
}
renderizarAreaEstado();

function renderizarPopulacaoEstado() {
    const estado = document.querySelector('[id^="populacao-"]');
    if (!estado) {
        console.error("Elemento do estado não encontrado.");
        return;
    }
    const estadoCodigo = estado.id.replace("populacao-", "");
    if (populacao.hasOwnProperty(estadoCodigo)) {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = 
        `
        <p>População: <span class="destaque">${populacao[estadoCodigo]} km²</span></p>
        `
        estado.innerHTML = '';
        estado.appendChild(paragraph);
    } else {
        console.error(`Informações para o estado ${estadoCodigo} não encontradas.`);
    }
}
renderizarPopulacaoEstado();

function renderizarRegiaoEstado() {
    const estado = document.querySelector('[id^="regiao-"]');
    if (!estado) {
        console.error("Elemento do estado não encontrado.");
        return;
    }
    const estadoCodigo = estado.id.replace("regiao-", "");
    if (regiao.hasOwnProperty(estadoCodigo)) {
        let paragraph = document.createElement("p");
        paragraph.innerHTML = 
        `
        <p>Região: <span class="destaque">${regiao[estadoCodigo]}</span></p>
        `
        estado.innerHTML = '';
        estado.appendChild(paragraph);
    } else {
        console.error(`Informações para o estado ${estadoCodigo} não encontradas.`);
    }
}
renderizarRegiaoEstado();