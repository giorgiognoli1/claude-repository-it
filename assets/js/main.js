// Claude & Claude Code Repository · main.js
(function(){
  // Ricerca live archivio: titolo, descrizione, categoria, contenuto
  document.addEventListener('DOMContentLoaded', function(){
    var input = document.getElementById('archiveSearch');
    if(!input) return;
    var items = document.querySelectorAll('.archive-item');
    var count = document.getElementById('archiveCount');
    items.forEach(function(el){
      el.dataset.search = (el.dataset.title||'') + ' ' +
                          (el.dataset.desc||'') + ' ' +
                          (el.dataset.cat||'');
    });
    function update(){
      var q = input.value.trim().toLowerCase();
      var shown = 0;
      items.forEach(function(el){
        var visible = !q || el.dataset.search.toLowerCase().indexOf(q)>-1;
        el.style.display = visible ? '' : 'none';
        if(visible) shown++;
      });
      if(count) count.textContent = shown + ' / ' + items.length;
    }
    input.addEventListener('input', update);
    update();
  });

  // Smooth-scroll per ancore TOC e breadcrumb
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="#"]');
    if(!a) return;
    var id = a.getAttribute('href').slice(1);
    if(!id) return;
    var target = document.getElementById(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      history.replaceState(null, '', '#'+id);
    }
  });

  // Evidenzia il link della TOC corrispondente alla sezione visibile
  document.addEventListener('DOMContentLoaded', function(){
    var tocLinks = document.querySelectorAll('.toc a[href^="#"]');
    if(!tocLinks.length) return;
    var map = {};
    tocLinks.forEach(function(a){
      var id = a.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if(el) map[id] = a;
    });
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        var id = en.target.id;
        var link = map[id];
        if(!link) return;
        if(en.isIntersecting){
          tocLinks.forEach(function(l){l.classList.remove('active')});
          link.classList.add('active');
        }
      });
    },{rootMargin:'-30% 0px -65% 0px',threshold:0});
    Object.keys(map).forEach(function(id){
      var el = document.getElementById(id);
      if(el) observer.observe(el);
    });
  });
})();
