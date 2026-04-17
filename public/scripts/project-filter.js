window.addEventListener('load', function() {
  var cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  var container = cards[0].parentElement;
  var dropdowns = container.parentElement.querySelectorAll('.dropdown');
  var checkboxes = container.parentElement.querySelectorAll('input[type="checkbox"]');

  // Dropdowns
  dropdowns.forEach(function(dd) {
    var btn = dd.querySelector('.dropdown-toggle');
    var menu = dd.querySelector('.dropdown-menu');
    btn.onclick = function(e) {
      e.stopPropagation();
      var wasOpen = menu.style.display === 'block';
      container.parentElement.querySelectorAll('.dropdown-menu').forEach(function(m) { m.style.display = 'none'; });
      menu.style.display = wasOpen ? 'none' : 'block';
    };
  });
  document.onclick = function() {
    container.parentElement.querySelectorAll('.dropdown-menu').forEach(function(m) { m.style.display = 'none'; });
  };

  // Filter
  function applyFilters() {
    var checked = [];
    checkboxes.forEach(function(c) { if (c.checked) checked.push(c.value); });
    var allChecked = checked.length === checkboxes.length;
    cards.forEach(function(c) {
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

  console.log('Project filter initialized:', checkboxes.length, 'checkboxes,', cards.length, 'cards');
});
