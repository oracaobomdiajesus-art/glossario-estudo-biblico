// ============================================
// 📖 BIBLIOTECA DE IMAGENS BÍBLICAS
// ============================================

const IMAGENS_BIBLICAS = {
    // ==========================================
    // IMAGEM 1 - 9 Dons do Espírito Santo
    // ==========================================
    "1co12.8-10": {
        titulo: "Os 9 Dons do Espírito Santo",
        imagem: "https://i.pinimg.com/1200x/00/9e/6b/009e6bc6f7426a8bae2f44220d3de107.jpg",
        refs: ["1co12", "rm12", "ef4", "is11"]
    }
};

// ============================================
// FUNÇÃO PARA BUSCAR IMAGENS POR REFERÊNCIA
// ============================================

function buscarImagensPorReferencias(refsDaLicao) {
    if (!refsDaLicao || refsDaLicao.length === 0) return [];

    const imagensEncontradas = [];
    const idsVistos = new Set();

    // Extrai só o livro+capítulo de cada referência da lição
    const capitulosDaLicao = refsDaLicao.map(ref => {
        return ref.split('.')[0].toLowerCase();
    });

    Object.keys(IMAGENS_BIBLICAS).forEach(id => {
        const imagem = IMAGENS_BIBLICAS[id];
        if (!imagem || !imagem.refs) return;

        const temMatch = imagem.refs.some(refImagem => {
            const refNorm = refImagem.toLowerCase();
            // Comparação exata de livro+capítulo (ex.: "rm12" só bate com "rm12",
            // nunca com "rm1" — antes o .includes() confundia Rm 1 com Rm 12,
            // Is 1 com Is 11, etc.)
            return capitulosDaLicao.some(cap => cap === refNorm);
        });

        if (temMatch && !idsVistos.has(id)) {
            idsVistos.add(id);
            imagensEncontradas.push(imagem);
        }
    });

    return imagensEncontradas;
}

// ============================================
// EXPORTAÇÃO
// ============================================

if (typeof window !== "undefined") {
    window.IMAGENS_BIBLICAS = IMAGENS_BIBLICAS;
    window.buscarImagensPorReferencias = buscarImagensPorReferencias;
}

if (typeof module !== "undefined") {
    module.exports = { IMAGENS_BIBLICAS, buscarImagensPorReferencias };
}

console.log("🖼️ imagens-biblicas.js carregado com sucesso!");
console.log("📊 Total de imagens: " + Object.keys(IMAGENS_BIBLICAS).length);