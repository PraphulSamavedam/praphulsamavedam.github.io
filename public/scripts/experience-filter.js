window.addEventListener('load', function() {
  var grid = document.getElementById('exp-grid');
  if (!grid) return;
  var sortBtns = document.querySelectorAll('.sort-btn');
  var checkboxes = document.querySelectorAll('.dropdown-menu input[type="checkbox"]');
  function cards() { return Array.from(grid.querySelectorAll('.experience-card')); }

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
    cards().forEach(function(c) {
      if (allChecked) { c.classList.remove('hidden'); return; }
      var tags = c.dataset.tags.split(' ');
      var match = tags.some(function(t) { return checked.indexOf(t) !== -1; });
      if (match) { c.classList.remove('hidden'); } else { c.classList.add('hidden'); }
    });
  }
  checkboxes.forEach(function(cb) { cb.addEventListener('change', applyFilters); });

  sortBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      sortBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var parts = btn.dataset.sort.split('-');
      var key = parts[0], dir = parts[1];
      var sorted = cards().sort(function(a, b) {
        var va = key === 'duration' ? Number(a.dataset.months) : a.dataset.start;
        var vb = key === 'duration' ? Number(b.dataset.months) : b.dataset.start;
        return dir === 'desc' ? (vb > va ? 1 : -1) : (va > vb ? 1 : -1);
      });
      sorted.forEach(function(c) { grid.appendChild(c); });
    });
  });
});
