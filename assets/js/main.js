// Filtro di ricerca client-side per la pagina archivio
(function(){
  function setup(){
    var input = document.getElementById('archiveSearch');
    if(!input) return;
    var items = document.querySelectorAll('.archive-item');
    input.addEventListener('input', function(){
      var q = input.value.trim().toLowerCase();
      items.forEach(function(el){
        var t = (el.dataset.title||'').toLowerCase();
        var d = (el.dataset.desc||'').toLowerCase();
        var c = (el.dataset.cat||'').toLowerCase();
        var visible = !q || t.indexOf(q)>-1 || d.indexOf(q)>-1 || c.indexOf(q)>-1;
        el.style.display = visible ? '' : 'none';
      });
    });
  }
  document.addEventListener('DOMContentLoaded', setup);

  // Smooth-scroll per TOC
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="#"]');
    if(!a) return;
    var id = a.getAttribute('href').slice(1);
    var target = document.getElementById(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
})();
