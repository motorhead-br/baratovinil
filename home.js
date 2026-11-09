(function(){
var T="baratovinil-20",$=function(i){return document.getElementById(i)};
var norm=function(s){return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")};
var esc=function(s){return String(s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})};
var dec=function(y){return Math.floor(y/10)*10};
var PAL=[["#C9B48A","#1C1917"],["#2F2F2F","#fff"],["#E8E2D4","#1C1917"],["#3E7CB1","#fff"],["#D9442B","#fff"],["#F2C230","#1C1917"],["#5B3A29","#fff"],["#7C3AED","#fff"],["#1F4E5F","#fff"],["#E9DFC7","#1C1917"],["#4D7C5A","#fff"],["#111111","#fff"],["#8C2F39","#fff"],["#F5E6C8","#1C1917"],["#2E5E8C","#fff"],["#E2A03F","#1C1917"]];
var S={q:"",g:"",d:"",o:"",s:"a"};
var gens=Array.from(new Set(D.map(function(x){return x[3]}))).sort(function(a,b){return a.localeCompare(b,"pt")});
var decs=Array.from(new Set(D.map(function(x){return dec(x[2])}))).sort();
function chips(k,items){return items.map(function(i){return'<button type="button" data-k="'+k+'" data-v="'+esc(i[0])+'" aria-pressed="'+(String(S[k])===String(i[0]))+'">'+esc(i[1])+"</button>"}).join("")}
function amz(x){return x[5]?"https://www.amazon.com.br/dp/"+x[5]+"?tag="+T:"https://www.amazon.com.br/s?tag="+T+"&k="+encodeURIComponent(x[0]+" "+x[1]+" vinil")}
function card(x){
 var h=0,s=x[0]+x[1];for(var i=0;i<s.length;i++)h+=s.charCodeAt(i);
 var p=PAL[h%PAL.length],right=h%2===0;
 var dk=right?"right:-22%;top:12%;width:76%;height:76%;":"left:12%;bottom:-30%;width:76%;height:76%;";
 var lb=right?"right:7%;top:38%;width:24%;height:24%;":"left:38%;bottom:-4%;width:24%;height:24%;";
 return'<a class="bvc bvd" href="'+esc(amz(x))+'" target="_blank" rel="nofollow sponsored noopener"><div class="bvc-img" style="background:'+p[0]+'"><div class="dk" style="'+dk+'"></div><div class="lb" style="'+lb+'"></div><div class="tt" style="'+(right?"":"top:10px;bottom:auto;")+'color:'+p[1]+'">'+esc(x[1])+'</div></div><div class="bvc-b"><div class="bvc-t">'+esc(x[1])+'</div><div class="bvc-a">'+esc(x[0])+" · "+x[2]+'</div><div class="bvc-f"><span>'+(x[4]=="BR"?"Nacional":"Importado")+'</span><span>Amazon →</span></div></div></a>'}
function sync(){chips2()}
function chips2(){
 $("fo").innerHTML=chips("o",[["","Todos"],["BR","Nacional"],["INT","Internacional"]]);
 $("fd").innerHTML=chips("d",[["","Todas"]].concat(decs.map(function(v){return[v,"Anos "+String(v).slice(2)]})));
 $("fg").innerHTML=chips("g",[["","Todos"]].concat(gens.map(function(v){return[v,v]})));
}
function render(){
 var q=norm(S.q);
 var l=D.filter(function(x){return(!q||norm(x[0]+" "+x[1]).indexOf(q)>=0)&&(!S.g||x[3]==S.g)&&(!S.d||dec(x[2])==S.d)&&(!S.o||x[4]==S.o)});
 var cmp=S.s=="a"?function(a,b){return a[0].localeCompare(b[0],"pt")}:S.s=="n"?function(a,b){return a[2]-b[2]}:function(a,b){return b[2]-a[2]};
 var by={};l.forEach(function(x){(by[x[3]]=by[x[3]]||[]).push(x)});
 var html=Object.keys(by).sort(function(a,b){return by[b].length-by[a].length||a.localeCompare(b,"pt")}).map(function(g){
  var it=by[g].sort(cmp),link="https://www.amazon.com.br/s?k="+encodeURIComponent("disco de vinil "+g)+"&tag="+T;
  return'<section class="bv-row" aria-label="'+esc(g)+'"><a class="bv-tile" href="'+esc(link)+'" target="_blank" rel="nofollow sponsored noopener"><span class="a">'+it.length+(it.length==1?" disco":" discos")+'</span><span class="b">'+esc(g)+'</span><span class="c">Ver na Amazon ›</span></a>'+it.map(card).join("")+"</section>"}).join("");
 $("catalogo").innerHTML=html;$("vazio").hidden=l.length!==0;
 $("c").textContent=l.length+(l.length==1?" disco":" discos");
 var n=["g","d","o"].filter(function(k){return S[k]}).length+(S.q?1:0);
 $("act").textContent=n==0?"· nenhum filtro ativo":n==1?"· 1 filtro ativo":"· "+n+" filtros ativos";
 chips2();
}
document.addEventListener("click",function(ev){var b=ev.target.closest("button[data-k]");if(!b)return;var k=b.dataset.k;S[k]=String(S[k])===b.dataset.v?"":b.dataset.v;render()});
var fs=$("filtersearch"),ts=$("topsearch");
function setQ(v){S.q=v;fs.value=v;ts.value=v;render()}
fs.addEventListener("input",function(){setQ(fs.value)});ts.addEventListener("input",function(){setQ(ts.value)});
$("topform").addEventListener("submit",function(e){e.preventDefault();$("filtro").scrollIntoView({behavior:"smooth"})});
$("sortsel").addEventListener("change",function(e){S.s=e.target.value;render()});
$("x").addEventListener("click",function(){S.q=S.g=S.d=S.o="";fs.value=ts.value="";render()});
render();
var trk=$("trk");
if(trk){var pv=document.querySelector(".bv-prev"),nx=document.querySelector(".bv-next");
 var upd=function(){var m=trk.scrollWidth-trk.clientWidth-2;pv.hidden=trk.scrollLeft<=2;nx.hidden=trk.scrollLeft>=m};
 var step=function(d){var c=trk.querySelector(".bvc");trk.scrollBy({left:d*(c.offsetWidth+16)*(window.innerWidth>900?3:1),behavior:"smooth"})};
 pv.addEventListener("click",function(){step(-1)});nx.addEventListener("click",function(){step(1)});
 trk.addEventListener("scroll",upd);window.addEventListener("resize",upd);upd();
 trk.addEventListener("keydown",function(e){if(e.key=="ArrowRight")step(1);if(e.key=="ArrowLeft")step(-1)})}
})();
