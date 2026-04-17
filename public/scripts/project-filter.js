window.addEventListener('load', function() {
  var checkboxes = document.querySelectorAll('.dropdown-menu input[type="checkbox"]');
  var cards = document.querySelectorAll('.project-card');
  if (!checkboxes.length || !cards.length) return;

  document.querySelectorAll('.dropdown-toggle').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var menu = btn.nextElementSibling;
      document.querySelectorAll('.dropdown-menu.open').forEach(function(m) { if (m !== menu) m.classList.remove('open'); });
      menu.classList.toggle('open');
    });
  });
  document.addEventListener('click', function() { document.querySelectorAll('.dropdown-menu.open').forEach(function(m) { m.classList.remove('open'); }); });
  document.querySelectorAll('.dropdown-menu').forEach(function(m) { m.addEventListener('click', function(e) { e.stopPropagation(); }); });

  function applyFilters() {
    var checked = Array.from(checkboxes).filter(function(c) { return c.checked; }).map(function(c) { return c.value; });
    var allChecked = checked.length === checkboxes.length;
    cards.forEach(function(c) {
      if (allChecked) { c.classList.remove('hidden'); return; }
      var tags = c.dataset.tags.split(' ');
      var match = tags.some(function(t) { return checked.indexOf(t) !== -1; });
      if (match) { c.classList.remove('hidden'); } else { c.classList.add('hidden'); }
    });
  }
  checkboxes.forEach(function(cb) { cb.addEventListener('change', applyFilters); });
});
