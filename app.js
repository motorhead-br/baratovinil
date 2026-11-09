// Barato Vinil — catálogo e filtros
// Para editar os discos, altere a lista CATALOGO abaixo.
// "link": cole o seu link de associado da Amazon. "preco": o valor exibido.

var CATALOGO = [
  { kicker: 'Os essenciais', titulo: 'MPB', discos: [
    { titulo: 'Clube da Esquina', artista: 'Milton Nascimento & Lô Borges', ano: 1972, generos: ['MPB'], preco: 'R$ [preço]', link: '#', bg: '#C9B48A', fg: '#1C1917', disco: 'right' },
    { titulo: 'Construção', artista: 'Chico Buarque', ano: 1971, generos: ['MPB'], preco: 'R$ [preço]', link: '#', bg: '#2F2F2F', fg: '#FFFFFF', disco: 'bottom' },
    { titulo: 'Elis & Tom', artista: 'Elis Regina & Tom Jobim', ano: 1974, generos: ['MPB', 'Bossa Nova'], preco: 'R$ [preço]', link: '#', bg: '#E8E2D4', fg: '#1C1917', disco: 'right' },
    { titulo: 'Acabou Chorare', artista: 'Novos Baianos', ano: 1972, generos: ['MPB', 'Samba'], preco: 'R$ [preço]', link: '#', bg: '#3E7CB1', fg: '#FFFFFF', disco: 'bottom' }
  ]},
  { kicker: 'Viagem sonora', titulo: 'Rock Psicodélico', discos: [
    { titulo: 'Os Mutantes', artista: 'Os Mutantes', ano: 1968, generos: ['Psicodélico', 'Rock'], preco: 'R$ [preço]', link: '#', bg: '#D9442B', fg: '#FFFFFF', disco: 'right' },
    { titulo: 'Tropicália ou Panis et Circencis', artista: 'Vários artistas', ano: 1968, generos: ['Psicodélico', 'MPB'], preco: 'R$ [preço]', link: '#', bg: '#F2C230', fg: '#1C1917', disco: 'bottom' },
    { titulo: 'Paêbirú', artista: 'Lula Côrtes & Zé Ramalho', ano: 1975, generos: ['Psicodélico', 'Folk'], preco: 'R$ [preço]', link: '#', bg: '#5B3A29', fg: '#FFFFFF', disco: 'right' },
    { titulo: 'Loki?', artista: 'Arnaldo Baptista', ano: 1974, generos: ['Psicodélico', 'Rock'], preco: 'R$ [preço]', link: '#', bg: '#7C3AED', fg: '#FFFFFF', disco: 'bottom' }
  ]},
  { kicker: 'Clássicos', titulo: 'Bossa Nova', discos: [
    { titulo: 'Chega de Saudade', artista: 'João Gilberto', ano: 1959, generos: ['Bossa Nova'], preco: 'R$ [preço]', link: '#', bg: '#1F4E5F', fg: '#FFFFFF', disco: 'right' },
    { titulo: 'Getz/Gilberto', artista: 'Stan Getz & João Gilberto', ano: 1964, generos: ['Bossa Nova', 'Jazz'], preco: 'R$ [preço]', link: '#', bg: '#E9DFC7', fg: '#1C1917', disco: 'bottom' },
    { titulo: 'Wave', artista: 'Antonio Carlos Jobim', ano: 1967, generos: ['Bossa Nova', 'Jazz'], preco: 'R$ [preço]', link: '#', bg: '#4D7C5A', fg: '#FFFFFF', disco: 'right' },
    { titulo: 'Os Afro-Sambas', artista: 'Baden Powell & Vinicius de Moraes', ano: 1966, generos: ['Bossa Nova', 'Samba'], preco: 'R$ [preço]', link: '#', bg: '#111111', fg: '#FFFFFF', disco: 'bottom' }
  ]},
  { kicker: 'Raiz', titulo: 'Samba', discos: [
    { titulo: 'Cartola', artista: 'Cartola', ano: 1976, generos: ['Samba'], preco: 'R$ [preço]', link: '#', bg: '#8C2F39', fg: '#FFFFFF', disco: 'right' },
    { titulo: 'Claridade', artista: 'Clara Nunes', ano: 1975, generos: ['Samba'], preco: 'R$ [preço]', link: '#', bg: '#F5E6C8', fg: '#1C1917', disco: 'bottom' },
    { titulo: 'Foi um Rio que Passou em Minha Vida', artista: 'Paulinho da Viola', ano: 1970, generos: ['Samba'], preco: 'R$ [preço]', link: '#', bg: '#2E5E8C', fg: '#FFFFFF', disco: 'right' },
    { titulo: 'Canta Canta, Minha Gente', artista: 'Martinho da Vila', ano: 1974, generos: ['Samba'], preco: 'R$ [preço]', link: '#', bg: '#E2A03F', fg: '#1C1917', disco: 'bottom' }
  ]}
];

var GENEROS = ['Rock', 'Metal', 'Psicodélico', 'MPB', 'Hip Hop', 'Punk', 'Soul', 'Jazz', 'Reggae', 'Samba', 'Folk', 'Bossa Nova'];
var DECADAS = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];
var COR_SELO = '#F97316';

var estado = { q: '', genero: 'all', decada: 'all', ordem: 'rel' };

function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function chipStyle(on) {
  return 'min-height: 44px; padding: 0 16px; border-radius: 999px; font: inherit; font-size: 14px; font-weight: 600; cursor: pointer; border: 1px solid ' + (on ? '#111111' : '#D6D3D1') + '; background: ' + (on ? '#111111' : '#FFFFFF') + '; color: ' + (on ? '#FFFFFF' : '#1C1917');
}

function renderChips(id, chave, opcoes) {
  var el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = opcoes.map(function (o) {
    var on = estado[chave] === o.id;
    return '<button type="button" data-chave="' + chave + '" data-valor="' + esc(o.id) + '" aria-pressed="' + on + '" style="' + chipStyle(on) + '">' + esc(o.label) + '</button>';
  }).join('');
}

function cardDisco(r) {
  var discPos = r.disco === 'right'
    ? 'right: -22%; top: 12%; width: 76%; height: 76%;'
    : 'left: 12%; bottom: -30%; width: 76%; height: 76%;';
  var labelPos = r.disco === 'right'
    ? 'right: 7%; top: 38%; width: 24%; height: 24%;'
    : 'left: 38%; bottom: -4%; width: 24%; height: 24%;';
  return '<a href="' + esc(r.link) + '" target="_blank" rel="nofollow sponsored noopener" style="border: 1px solid #E7E5E4; border-radius: 6px; padding: 10px 10px 14px; text-decoration: none; color: #1C1917; display: flex; flex-direction: column; gap: 10px; background: #FFFFFF; min-width: 0">' +
    '<div style="position: relative; aspect-ratio: 1 / 1; background: ' + r.bg + '; border-radius: 3px; overflow: hidden">' +
      '<div style="position: absolute; ' + discPos + ' border-radius: 50%; background: #0A0A0A; opacity: 0.9"></div>' +
      '<div style="position: absolute; ' + labelPos + ' border-radius: 50%; background: ' + COR_SELO + '"></div>' +
      '<div style="position: absolute; left: 10px; right: 10px; bottom: 10px; font-size: 12px; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; line-height: 1.2; color: ' + r.fg + '">' + esc(r.titulo) + '</div>' +
    '</div>' +
    '<div style="display: flex; flex-direction: column; gap: 2px; padding: 0 2px; min-width: 0">' +
      '<div style="font-size: 15px; font-weight: 700; line-height: 1.25; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">' + esc(r.titulo) + '</div>' +
      '<div style="font-size: 13px; color: #57534E; overflow: hidden; text-overflow: ellipsis; white-space: nowrap">' + esc(r.artista) + '</div>' +
      '<div style="display: flex; align-items: baseline; justify-content: space-between; gap: 8px; margin-top: 6px">' +
        '<span style="font-size: 16px; font-weight: 800; color: #C2410C">' + esc(r.preco) + '</span>' +
        '<span style="font-size: 12px; font-weight: 700; color: #1C1917">Amazon →</span>' +
      '</div>' +
    '</div>' +
  '</a>';
}

function render() {
  var q = estado.q.trim().toLowerCase();
  var total = 0;
  var html = CATALOGO.map(function (t) {
    var discos = t.discos.filter(function (r) {
      if (q && r.titulo.toLowerCase().indexOf(q) < 0 && r.artista.toLowerCase().indexOf(q) < 0) return false;
      if (estado.genero !== 'all' && r.generos.indexOf(estado.genero) < 0) return false;
      if (estado.decada !== 'all' && Math.floor(r.ano / 10) * 10 !== estado.decada) return false;
      return true;
    }).slice();
    if (estado.ordem === 'az') discos.sort(function (a, b) { return a.artista.localeCompare(b.artista, 'pt-BR'); });
    if (estado.ordem === 'old') discos.sort(function (a, b) { return a.ano - b.ano; });
    if (estado.ordem === 'new') discos.sort(function (a, b) { return b.ano - a.ano; });
    if (!discos.length) return '';
    total += discos.length;
    return '<section class="bv-row" aria-label="' + esc(t.titulo) + '">' +
      '<a href="#filtro" style="align-self: start; aspect-ratio: 1 / 1; margin: 11px; background: #111111; color: #FFFFFF; border-radius: 3px; text-decoration: none; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 6px; padding: 16px">' +
        '<span style="font-size: 12px; font-weight: 500; color: #D6D3D1">' + esc(t.kicker) + '</span>' +
        '<span style="font-size: 24px; font-weight: 800; line-height: 1.1">' + esc(t.titulo) + '</span>' +
        '<span style="font-size: 13px; font-weight: 700; margin-top: 4px">Ver todos ›</span>' +
      '</a>' +
      discos.map(cardDisco).join('') +
    '</section>';
  }).join('');
  document.getElementById('catalogo').innerHTML = html;
  document.getElementById('vazio').hidden = total !== 0;
  document.getElementById('result-label').textContent = total === 1 ? '1 disco' : total + ' discos';
  var ativos = ['genero', 'decada'].filter(function (k) { return estado[k] !== 'all'; }).length + (q ? 1 : 0);
  document.getElementById('active-label').textContent = ativos === 0 ? '· nenhum filtro ativo' : (ativos === 1 ? '· 1 filtro ativo' : '· ' + ativos + ' filtros ativos');

  renderChips('chips-genreChips', 'genero', [{ id: 'all', label: 'Todos' }].concat(GENEROS.map(function (g) { return { id: g, label: g }; })));
  renderChips('chips-decadeChips', 'decada', [{ id: 'all', label: 'Todas' }].concat(DECADAS.map(function (d) { return { id: d, label: 'Anos ' + String(d).slice(2) }; })));
}

document.addEventListener('click', function (e) {
  var b = e.target.closest('button[data-chave]');
  if (!b) return;
  var v = b.getAttribute('data-valor');
  estado[b.getAttribute('data-chave')] = (v === 'all' || isNaN(Number(v))) ? v : Number(v);
  render();
});

var busca = document.getElementById('filtersearch');
var buscaTopo = document.getElementById('topsearch');
function setBusca(v) {
  estado.q = v;
  if (busca.value !== v) busca.value = v;
  if (buscaTopo.value !== v) buscaTopo.value = v;
  render();
}
busca.addEventListener('input', function () { setBusca(busca.value); });
buscaTopo.addEventListener('input', function () { setBusca(buscaTopo.value); });
document.getElementById('topform').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('filtro').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('sortsel').addEventListener('change', function (e) { estado.ordem = e.target.value; render(); });
document.getElementById('clear-filters').addEventListener('click', function () {
  estado = { q: '', genero: 'all', decada: 'all', ordem: 'rel' };
  busca.value = ''; buscaTopo.value = '';
  document.getElementById('sortsel').value = 'rel';
  render();
});

render();
