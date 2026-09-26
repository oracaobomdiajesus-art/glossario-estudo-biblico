// ============================================
// MAPA BÍBLICO - Motor (v1.1 - SEM CORTES)
// Depende de: locais-biblicos.js, Leaflet
// ============================================

(function() {
    'use strict';

    // ============================================
    // CONFIGURAÇÕES
    // ============================================
    const CONFIG = {
        centro: [32.6, 35.3],
        zoom: 8,
        tileLayer: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        tileAttribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; CartoDB'
    };

    // Cores por tipo
    const CORES_POR_TIPO = {
        'cidade': '#FF6B6B',
        'região': '#4ECDC4',
        'monte': '#FFD93D',
        'rio': '#6C5CE7',
        'mar': '#0984E3',
        'deserto': '#FDCB6E',
        'vale': '#00B894',
        'local': '#A29BFE',
        'povo': '#FD79A8',
        'porto': '#00CEC9',
        'ilha': '#74B9FF',
        'templo': '#FDCB6E',
        'torre': '#E17055',
        'palácio': '#D63031',
        'caverna': '#6C5CE7',
        'poço': '#00CEC9',
        'nascente': '#74B9FF',
        'piscina': '#0984E3',
        'porta': '#A29BFE',
        'jardim': '#00B894',
        'altar': '#FFD93D',
        'reino': '#E17055',
        'planície': '#FDCB6E',
        'acampamento': '#FD79A8'
    };
    const COR_PADRAO = '#95A5A6';

    // ============================================
    // FUNÇÕES AUXILIARES
    // ============================================
    function getCorPorTipo(tipo) {
        return CORES_POR_TIPO[tipo] || COR_PADRAO;
    }

    function criarIcone(tipo) {
        const cor = getCorPorTipo(tipo);
        return L.divIcon({
            className: 'custom-icon',
            html: `<div style="
                width: 12px;
                height: 12px;
                background: ${cor};
                border-radius: 50%;
                border: 2px solid white;
                box-shadow: 0 2px 6px rgba(0,0,0,0.4);
            "></div>`,
            iconSize: [12, 12],
            iconAnchor: [6, 6],
            popupAnchor: [0, -6]
        });
    }

    // ============================================
    // FUNÇÃO CRIAR POPUP - SEM CORTES!
    // ============================================
    function criarPopup(local) {
        const nomeExibicao = local.nome || local.nomeOriginal || local.id;
        const tipo = local.tipo || 'local';
        const cor = getCorPorTipo(tipo);
        
        let html = `
            <div style="font-weight:700;color:#1a1a2e;font-size:15px;">${nomeExibicao}</div>
            <div style="color:#555;font-size:12px;">${local.nomeOriginal || ''} ${local.nomeAntigo ? '| ' + local.nomeAntigo : ''}</div>
        `;
        
        // DESCRIÇÃO COMPLETA - SEM CORTES!
        if (local.descricao) {
            html += `<div style="margin-top:4px;font-size:12px;color:#555;max-height:100px;overflow-y:auto;">${local.descricao}</div>`;
        }
        
        if (local.referencias && local.referencias.length > 0) {
            html += `<div style="background:#f0f0f0;padding:2px 8px;border-radius:4px;font-size:12px;display:inline-block;margin-top:4px;">📖 ${local.referencias.join(' ')}</div>`;
        }
        
        html += `<div style="display:inline-block;padding:1px 8px;border-radius:12px;font-size:11px;font-weight:600;color:white;background:${cor};margin-top:4px;">${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</div>`;
        
        if (local.nomeVerificadoEaston) {
            html += `<div style="margin-top:4px;font-size:11px;color:#6C5CE7;">✅ Verificado no Easton's Dictionary</div>`;
        }
        if (local.nomeTraduzido) {
            html += `<div style="font-size:11px;color:#00B894;">🌐 Nome traduzido para PT</div>`;
        }
        
        return html;
    }

    // ============================================
    // FUNÇÃO PRINCIPAL: CRIAR MAPA
    // ============================================
    function criarMapa(elementId, options) {
        options = options || {};
        
        // Verificar se o elemento existe
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Elemento #${elementId} não encontrado`);
            return null;
        }

        // Verificar se Leaflet está carregado
        if (typeof L === 'undefined') {
            console.error('Leaflet não está carregado. Certifique-se de incluir leaflet.js');
            return null;
        }

        // Verificar se os dados estão disponíveis
        const dados = window.locaisBiblicos || locaisBiblicos;
        if (!dados) {
            console.error('Dados de locais bíblicos não encontrados. Certifique-se de carregar locais-biblicos.js');
            return null;
        }

        // Criar mapa
        const map = L.map(elementId, {
            center: options.centro || CONFIG.centro,
            zoom: options.zoom || CONFIG.zoom,
            zoomControl: options.zoomControl !== undefined ? options.zoomControl : true
        });

        // Adicionar camada base
        L.tileLayer(options.tileLayer || CONFIG.tileLayer, {
            attribution: options.tileAttribution || CONFIG.tileAttribution,
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        // Criar cluster de marcadores
        const markers = L.markerClusterGroup({
            maxClusterRadius: options.maxClusterRadius || 50,
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: false,
            zoomToBoundsOnClick: true,
            iconCreateFunction: function(cluster) {
                const count = cluster.getChildCount();
                const size = count < 100 ? 'small' : count < 500 ? 'medium' : 'large';
                return L.divIcon({
                    html: `<div><span>${count}</span></div>`,
                    className: `marker-cluster marker-cluster-${size}`,
                    iconSize: [40, 40]
                });
            }
        });

        // Estatísticas
        let totalValidos = 0;
        const tiposUsados = {};

        // Adicionar marcadores
        Object.values(dados).forEach(local => {
            const lat = parseFloat(local.latitude);
            const lng = parseFloat(local.longitude);
            
            // Pular coordenadas inválidas
            if (isNaN(lat) || isNaN(lng) || (lat === 0 && lng === 14) || (lat === 0 && lng === 0)) {
                return;
            }
            
            totalValidos++;
            
            const tipo = local.tipo || 'local';
            if (!tiposUsados[tipo]) tiposUsados[tipo] = 0;
            tiposUsados[tipo]++;
            
            const icon = criarIcone(tipo);
            const popupContent = criarPopup(local);
            
            const marker = L.marker([lat, lng], { icon });
            marker.bindPopup(popupContent, { maxWidth: 320, maxHeight: 250 });
            markers.addLayer(marker);
        });

        map.addLayer(markers);

        // Ajustar zoom para mostrar todos os locais
        setTimeout(() => {
            try {
                const bounds = markers.getBounds();
                if (bounds.isValid()) {
                    map.fitBounds(bounds, { padding: [50, 50] });
                }
            } catch(e) {
                // Fallback: manter o zoom definido
            }
        }, 300);

        // Retornar o mapa e os dados
        return {
            map: map,
            markers: markers,
            totalLocais: totalValidos,
            tiposUsados: tiposUsados,
            dados: dados
        };
    }

    // ============================================
    // EXPORTAÇÃO
    // ============================================
    if (typeof window !== 'undefined') {
        window.MapaBiblico = {
            criar: criarMapa,
            cores: CORES_POR_TIPO,
            getCor: getCorPorTipo,
            criarPopup: criarPopup
        };
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            criarMapa: criarMapa,
            CORES_POR_TIPO: CORES_POR_TIPO,
            getCorPorTipo: getCorPorTipo,
            criarPopup: criarPopup
        };
    }

    console.log('✅ MapaBíblico motor carregado! Use MapaBiblico.criar("id-do-elemento")');
})();