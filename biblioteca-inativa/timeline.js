// ============================================
// 📅 LINHA DO TEMPO — v4
// Widget zoomável parecido com o mapa Leaflet: visão geral fixa
// (não muda por lição), com zoom manual por botão (sem depender
// de gestos/wheel, pra funcionar bem em Chrome antigo/Windows 7).
// ============================================

let zoomAtualLinhaDoTempo = 1;
const ZOOM_MIN = 1;
const ZOOM_MAX = 8;
const PIXELS_POR_ANO_BASE = 0.35;

function renderizarLinhaDoTempo(containerId) {
  const container = document.getElementById(containerId);
  if (!container || !window.cronologiaBiblica) return;

  const { eras } = window.cronologiaBiblica;
  if (!eras.length) {
    container.innerHTML = '<p style="font-size:12px;color:#999;">Cronologia indisponível.</p>';
    return;
  }

  const globalMin = eras[0].inicioNum;
  const globalMax = eras[eras.length - 1].fimNum;
  const totalAnos = globalMax - globalMin;
  const pxPorAno = PIXELS_POR_ANO_BASE * zoomAtualLinhaDoTempo;
  const larguraTotal = Math.max(totalAnos * pxPorAno, container.clientWidth || 300);

  let html = `<div class="linha-tempo-trilho" style="position:relative;width:${larguraTotal}px;height:120px;">`;

  eras.forEach((era, idx) => {
    const left = (era.inicioNum - globalMin) * pxPorAno;
    const largura = Math.max((era.fimNum - era.inicioNum) * pxPorAno, 2);
    const cor = idx % 2 === 0 ? '#3b5e3b' : '#5c4a1e';

    html += `
      <div class="linha-tempo-era" title="${era.nome} (${era.inicio} – ${era.fim})"
           style="position:absolute;left:${left}px;width:${largura}px;top:0;height:36px;
                  background-color:${cor};opacity:0.85;border-radius:4px;
                  color:white;font-size:10px;padding:3px 5px;overflow:hidden;white-space:nowrap;">
        ⏳ ${era.nome}
      </div>`;

    const listaLivros = era.livros || [];
    const passo = largura / (listaLivros.length + 1);
    listaLivros.forEach((abrev, i) => {
      const lLeft = left + passo * (i + 1);
      html += `
        <div class="linha-tempo-livro" title="🔮 ${abrev} — posição estimada dentro de ${era.nome}"
             style="position:absolute;left:${lLeft}px;top:42px;font-size:11px;
                    writing-mode:vertical-rl;text-orientation:mixed;color:#333;">
          📚 ${abrev} 🔮
        </div>`;
    });
  });

  html += `</div>`;
  container.innerHTML = html;
}

function inicializarControlesLinhaDoTempo(containerId, scrollWrapperId) {
  const btnMais = document.getElementById('linhaTempoZoomMais');
  const btnMenos = document.getElementById('linhaTempoZoomMenos');
  const wrapper = document.getElementById(scrollWrapperId);

  if (btnMais) btnMais.addEventListener('click', () => {
    zoomAtualLinhaDoTempo = Math.min(ZOOM_MAX, zoomAtualLinhaDoTempo + 1);
    renderizarLinhaDoTempo(containerId);
  });
  if (btnMenos) btnMenos.addEventListener('click', () => {
    zoomAtualLinhaDoTempo = Math.max(ZOOM_MIN, zoomAtualLinhaDoTempo - 1);
    renderizarLinhaDoTempo(containerId);
  });

  // Arrastar pra rolar horizontalmente (funciona com mouse comum,
  // sem depender de touch/wheel — mais seguro em navegador antigo)
  if (wrapper) {
    let arrastando = false;
    let inicioX = 0;
    let scrollInicial = 0;
    wrapper.addEventListener('mousedown', (e) => {
      arrastando = true;
      inicioX = e.pageX;
      scrollInicial = wrapper.scrollLeft;
    });
    window.addEventListener('mouseup', () => { arrastando = false; });
    window.addEventListener('mousemove', (e) => {
      if (!arrastando) return;
      wrapper.scrollLeft = scrollInicial - (e.pageX - inicioX);
    });
  }
}

console.log("📅 timeline.js carregado (v4)!");
