window.addEventListener('load', function() {
  var grid = document.getElementById('exp-grid');
  if (!grid) return;

  var sortBtns = grid.parentElement.querySelectorAll('.sort-btn');
  var dropdowns = grid.parentElement.querySelectorAll('.dropdown');
  var checkboxes = grid.parentElement.querySelectorAll('input[type="checkbox"]');

  function cards() { return Array.from(grid.querySelectorAll('.experience-card')); }

  // Dropdowns
  dropdowns.forEach(function(dd) {
    var btn = dd.querySelector('.dropdown-toggle');
    var menu = dd.querySelector('.dropdown-menu');
    btn.onclick = function(e) {
      e.stopPropagation();
      var wasOpen = menu.style.display === 'block';
      // close all
      grid.parentElement.querySelectorAll('.dropdown-menu').forEach(function(m) { m.style.display = 'none'; });
      menu.style.display = wasOpen ? 'none' : 'block';
    };
  });
  document.onclick = function() {
    grid.parentElement.querySelectorAll('.dropdown-menu').forEach(function(m) { m.style.display = 'none'; });
  };

  // Filter
  function applyFilters() {
    var checked = [];
    checkboxes.forEach(function(c) { if (c.checked) checked.push(c.value); });
    var allChecked = checked.length === checkboxes.length;
    cards().forEach(function(c) {
      if (allChecked) { c.style.display = ''; return; }
      var tags = c.getAttribute('data-tags').split(' ');
      var match = false;
      for (var i = 0; i < tags.length; i++) {
        if (checked.indexOf(tags[i]) !== -1) { match = true; break; }
      }
      c.style.display = match ? '' : 'none';
    });
  }
  checkboxes.forEach(function(cb) { cb.onchange = applyFilters; });

  // Sort
  sortBtns.forEach(function(btn) {
    btn.onclick = function() {
      sortBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var parts = btn.getAttribute('data-sort').split('-');
      var key = parts[0], dir = parts[1];
      var sorted = cards().sort(function(a, b) {
        var va = key === 'duration' ? Number(a.getAttribute('data-months')) : a.getAttribute('data-start');
        var vb = key === 'duration' ? Number(b.getAttribute('data-months')) : b.getAttribute('data-start');
        return dir === 'desc' ? (vb > va ? 1 : -1) : (va > vb ? 1 : -1);
      });
      sorted.forEach(function(c) { grid.appendChild(c); });
    };
  });

  console.log('Experience filter initialized:', checkboxes.length, 'checkboxes,', cards().length, 'cards');
});
