(function(){
var T="baratovinil-20";
var IC={
toca:'<circle cx="26" cy="32" r="19"/><circle cx="26" cy="32" r="7"/><circle cx="26" cy="32" r="1.5" fill="currentColor"/><rect x="3" y="9" width="58" height="46" rx="6"/><path d="M52 15v20l-9 9"/><circle cx="52" cy="14" r="2.5" fill="currentColor"/>',
pre:'<rect x="4" y="20" width="56" height="26" rx="5"/><circle cx="18" cy="33" r="6"/><path d="M18 33l3-5"/><rect x="32" y="29" width="22" height="3" rx="1.5"/><rect x="32" y="35" width="14" height="3" rx="1.5"/>',
caixa:'<rect x="14" y="4" width="36" height="56" rx="5"/><circle cx="32" cy="18" r="5"/><circle cx="32" cy="42" r="12"/><circle cx="32" cy="42" r="4"/>',
amp:'<rect x="3" y="18" width="58" height="30" rx="5"/><circle cx="16" cy="33" r="6"/><circle cx="48" cy="33" r="6"/><rect x="26" y="26" width="12" height="14" rx="2"/>',
agulha:'<path d="M10 10l30 30"/><rect x="34" y="34" width="20" height="12" rx="2" transform="rotate(45 44 40)"/><path d="M52 52l5 5"/><circle cx="14" cy="14" r="5"/>',
acess:'<path d="M8 48c8-16 16-16 24 0s16 16 24 0"/><rect x="10" y="10" width="44" height="14" rx="4"/><path d="M18 10v14M26 10v14M34 10v14M42 10v14"/>'};
function ico(k,s){return '<svg class="eq-ic" width="'+s+'" height="'+s+'" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+IC[k]+'</svg>'}
var CATS=[["toca","Toca-discos"],["pre","Pré phono"],["caixa","Caixas ativas"],["amp","Amplificadores"],["agulha","Agulhas"],["acess","Acessórios"]];
// [categoria, nome, resumo, [recursos], termo de busca na Amazon]
var P=[
["toca","Audio-Technica AT-LP60X","Automático, correia, pré integrado chaveável. Para ligar e tocar.",["Correia","Automático","Pré integrado"],"Audio-Technica AT-LP60X toca-discos"],
["toca","Audio-Technica AT-LP60XBT","Igual ao LP60X, com Bluetooth para caixas sem fio.",["Correia","Automático","Pré integrado","Bluetooth"],"Audio-Technica AT-LP60XBT toca-discos"],
["toca","Audio-Technica AT-LP70X","Braço em J, chassi em 3 peças e agulha VM95 substituível.",["Correia","Automático","Pré integrado"],"Audio-Technica AT-LP70X toca-discos"],
["toca","Audio-Technica AT-LP3XBT","Automático com Bluetooth e cápsula AT-VM95C.",["Correia","Automático","Pré integrado","Bluetooth"],"Audio-Technica AT-LP3XBT toca-discos"],
["toca","Audio-Technica AT-LP120XUSB","Direct drive manual, 33⅓, 45 e 78 rpm, com USB.",["Direct drive","Manual","Pré integrado","USB"],"Audio-Technica AT-LP120XUSB toca-discos"],
["toca","Audio-Technica AT-LP5X","Direct drive manual, pré para cápsula MM e MC, USB.",["Direct drive","Manual","Pré integrado","USB"],"Audio-Technica AT-LP5X toca-discos"],
["toca","Audio-Technica AT-LP1240-USBXP","Direct drive para DJ, com cápsula AT-XP5 e USB.",["Direct drive","Manual","Pré integrado","USB"],"Audio-Technica AT-LP1240-USBXP toca-discos"],
["toca","Polyvox XTD-67","Toca-discos nacional de correia com pré chaveável.",["Correia","Pré integrado"],"Polyvox XTD-67 toca-discos"],
["pre","Fosi Audio Box X4","Pré phono a válvulas, só para cápsula MM, com saída de fone.",["MM","Válvulas","Saída de fone"],"Fosi Audio Box X4"],
["pre","Pré phono MM","Para toca-discos sem pré integrado e entrada LINE no som.",["MM"],"pré phono MM"],
["pre","Pré phono MM e MC","Atende também cápsulas de bobina móvel (MC).",["MM","MC"],"pré phono MM MC"],
["caixa","Edifier R1280T","42 W RMS, 2 entradas RCA, controle remoto. A mais em conta da lista.",["RCA","Controle remoto"],"Edifier R1280T"],
["caixa","Edifier R1280DB","42 W RMS, RCA, óptica, coaxial e Bluetooth.",["RCA","Óptica","Bluetooth"],"Edifier R1280DB"],
["caixa","Edifier R1700BT","66 W RMS, 2 RCA, Bluetooth 5.0 e saída para subwoofer.",["RCA","Bluetooth","Saída p/ sub"],"Edifier R1700BT"],
["caixa","Edifier R1855DB","70 W RMS, RCA, óptica, coaxial, Bluetooth 5.1 e controle remoto.",["RCA","Óptica","Bluetooth","Controle remoto"],"Edifier R1855DB"],
["caixa","Edifier R2000DB","120 W RMS, RCA, óptica e Bluetooth, para salas maiores.",["RCA","Óptica","Bluetooth"],"Edifier R2000DB"],
["amp","Amplificador estéreo integrado","Para caixas passivas. Confira se tem entrada PHONO ou use um pré externo.",["Para caixas passivas"],"amplificador estéreo integrado"],
["amp","Amplificador com Bluetooth","Toca vinil e também o celular, para caixas passivas.",["Para caixas passivas","Bluetooth"],"amplificador estéreo bluetooth"],
["amp","Receiver vintage (ex.: Marantz 2230)","Receiver clássico com entrada PHONO MM. Prefira revisado.",["Vintage","Entrada PHONO"],"receiver vintage marantz"],
["agulha","Agulha ATN3600L (AT-LP60X)","Reposição da agulha do AT-LP60X e do LP60XBT.",["Para LP60X"],"agulha ATN3600L Audio-Technica"],
["agulha","Agulha/cápsula AT-VM95E","Cápsula da série VM95, usada nos AT-LP120XUSB e LP5X.",["Série VM95"],"Audio-Technica AT-VM95E"],
["agulha","Agulha/cápsula AT-VM95C","Cápsula da série VM95, usada no AT-LP3XBT.",["Série VM95"],"Audio-Technica AT-VM95C"],
["agulha","Agulha VMN95ML (microlinear)","Upgrade de agulha na série VM95, como no AT-LP70X.",["Série VM95","Upgrade"],"Audio-Technica VMN95ML agulha"],
["acess","Escova de fibra de carbono","Tira o pó dos discos antes de cada lado.",["Limpeza"],"escova fibra de carbono disco de vinil"],
["acess","Kit de limpeza de discos","Líquido e pano para limpeza mais profunda.",["Limpeza"],"kit limpeza disco de vinil"],
["acess","Capas internas antiestáticas","Protegem os discos dentro da capa.",["Proteção"],"capa interna antiestática disco de vinil"],
["acess","Tapete (slipmat)","Fica entre o prato e o disco.",["Prato"],"slipmat toca-discos"],
["acess","Cabo RCA","Liga o toca-discos ao pré, amplificador ou caixas ativas.",["Conexão"],"cabo RCA áudio"]
];
function $(i){return document.getElementById(i)}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function url(q){return"https://www.amazon.com.br/s?k="+encodeURIComponent(q)+"&tag="+T}
function norm(s){return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")}
var st={c:"",t:"",q:""};
var names={};CATS.forEach(function(c){names[c[0]]=c[1]});
function inCat(p){return!st.c||p[0]===st.c}
function render(){
 var tags={};P.filter(inCat).forEach(function(p){p[3].forEach(function(t){tags[t]=(tags[t]||0)+1})});
 if(st.t&&!tags[st.t])st.t="";
 var cb='<button type="button" aria-pressed="'+(!st.c)+'" data-c="">Todos</button>'+CATS.map(function(c){return'<button type="button" aria-pressed="'+(st.c===c[0])+'" data-c="'+c[0]+'">'+c[1]+'</button>'}).join("");
 $("eqc").innerHTML=cb;
 $("eqt").innerHTML='<button type="button" aria-pressed="'+(!st.t)+'" data-t="">Todos</button>'+Object.keys(tags).sort().map(function(t){return'<button type="button" aria-pressed="'+(st.t===t)+'" data-t="'+esc(t)+'">'+esc(t)+'</button>'}).join("");
 var q=norm(st.q.trim());
 var L=P.filter(function(p){return inCat(p)&&(!st.t||p[3].indexOf(st.t)>-1)&&(!q||norm(p[1]+" "+p[2]).indexOf(q)>-1)});
 $("eqn").textContent=L.length;$("eqvazio").hidden=L.length>0;
 $("eqgrid").innerHTML=L.map(function(p){return'<a class="eq-card" href="'+url(p[4])+'" target="_blank" rel="nofollow sponsored noopener"><div class="eq-top">'+ico(p[0],34)+'<span class="eq-cat">'+names[p[0]]+'</span></div><h3>'+esc(p[1])+'</h3><p>'+esc(p[2])+'</p><div class="eq-tags">'+p[3].map(function(t){return'<span>'+esc(t)+'</span>'}).join("")+'</div><span class="eq-go">Ver na Amazon →</span></a>'}).join("");
}
// cards quadrados
$("eqsq").innerHTML=CATS.map(function(c){var n=P.filter(function(p){return p[0]===c[0]}).length;return'<button type="button" class="eq-sqc" data-c="'+c[0]+'">'+ico(c[0],56)+'<b>'+c[1]+'</b><span>'+n+' opções</span></button>'}).join("");
$("eqsq").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;st.c=b.dataset.c;st.t="";render();$("equipamentos").scrollIntoView({behavior:"smooth",block:"start"})});
$("eqc").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;st.c=b.dataset.c;st.t="";render()});
$("eqt").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;st.t=b.dataset.t;render()});
$("eqsearch").addEventListener("input",function(e){st.q=e.target.value;render()});
$("eqx").addEventListener("click",function(){st={c:"",t:"",q:""};$("eqsearch").value="";render()});
render();
})();
