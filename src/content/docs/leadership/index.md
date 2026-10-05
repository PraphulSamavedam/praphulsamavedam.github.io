---
title: Leadership
description: Community leadership and technical event organization
---

A journey through community leadership and technical event organization — most recent first.

<div class="leadership-timeline">

<div class="lt-row">
  <div class="lt-date">Aug 2023<small>Jul 2024</small></div>
  <div class="lt-spine"><span class="lt-dot"></span></div>
  <div class="lt-card">
    <div class="lt-mono">GDSC</div>
    <div class="lt-body">
      <div class="lt-title"><a href="/leadership/gdsc-president/">President — GDSC</a></div>
      <div class="lt-org">Google Developer Student Club</div>
    </div>
  </div>
</div>

<div class="lt-row">
  <div class="lt-date">Aug 2023<small>Feb 2024</small></div>
  <div class="lt-spine"><span class="lt-dot"></span></div>
  <div class="lt-card">
    <div class="lt-mono">KMSC</div>
    <div class="lt-body">
      <div class="lt-title"><a href="/leadership/kmsc-gsg-representative/">GSG Representative — KMSC</a></div>
      <div class="lt-org">Khoury Masters Student Council</div>
    </div>
  </div>
</div>

<div class="lt-row">
  <div class="lt-date">Jan 2023<small>Jul 2023</small></div>
  <div class="lt-spine"><span class="lt-dot"></span></div>
  <div class="lt-card">
    <div class="lt-mono">GSG</div>
    <div class="lt-body">
      <div class="lt-title"><a href="/leadership/gsg-senator/">Senator — GSG</a></div>
      <div class="lt-org">Graduate Student Governance</div>
    </div>
  </div>
</div>

<div class="lt-row">
  <div class="lt-date">Jan 2023<small>Apr 2023</small></div>
  <div class="lt-spine"><span class="lt-dot"></span></div>
  <div class="lt-card">
    <div class="lt-mono">GDSC</div>
    <div class="lt-body">
      <div class="lt-title"><a href="/leadership/gdsc-brand-team/">Brand Team Member — GDSC</a></div>
      <div class="lt-org">Google Developer Student Club</div>
    </div>
  </div>
</div>

<div class="lt-row">
  <div class="lt-date">Jun 2016<small>May 2017</small></div>
  <div class="lt-spine"><span class="lt-dot"></span></div>
  <div class="lt-card">
    <div class="lt-mono">NSS</div>
    <div class="lt-body">
      <div class="lt-title"><a href="/leadership/nss-coordinator/">School Coordinator — NSS</a></div>
      <div class="lt-org">National Service Scheme, BITS-Pilani · 74 volunteers</div>
    </div>
  </div>
</div>

<div class="lt-row">
  <div class="lt-date">Jun 2016<small>May 2017</small></div>
  <div class="lt-spine"><span class="lt-dot"></span></div>
  <div class="lt-card">
    <div class="lt-mono">EEEA</div>
    <div class="lt-body">
      <div class="lt-title"><a href="/leadership/apogee-coordinator/">APOGEE Events Joint Coordinator</a></div>
      <div class="lt-org">EEE Association, BITS-Pilani</div>
    </div>
  </div>
</div>

<div class="lt-row">
  <div class="lt-date">Jun 2016<small>May 2017</small></div>
  <div class="lt-spine"><span class="lt-dot"></span></div>
  <div class="lt-card">
    <div class="lt-mono">IEEE</div>
    <div class="lt-body">
      <div class="lt-title"><a href="/leadership/ieee-publicity/">Publicity Coordinator — IEEE</a></div>
      <div class="lt-org">IEEE Student Chapter, BITS-Pilani</div>
    </div>
  </div>
</div>

<div class="lt-row">
  <div class="lt-date">Jun 2015<small>May 2016</small></div>
  <div class="lt-spine"><span class="lt-dot"></span></div>
  <div class="lt-card">
    <div class="lt-mono">NSS</div>
    <div class="lt-body">
      <div class="lt-title"><a href="/leadership/nss-executive/">School Executive Committee — NSS</a></div>
      <div class="lt-org">National Service Scheme, BITS-Pilani</div>
    </div>
  </div>
</div>

</div>

<script>
  (function () {
    const tl = document.querySelector('.leadership-timeline');
    if (!tl) return;
    const rows = Array.from(tl.querySelectorAll('.lt-row'));
    if (!rows.length) return;
    tl.classList.add('lt-scroll-ready');

    const setActive = (el) => {
      rows.forEach((r) => r.classList.toggle('lt-active', r === el));
    };

    // Pick the row whose center is closest to the viewport center.
    const pickClosest = () => {
      const mid = window.innerHeight / 2;
      let best = null, bestDist = Infinity;
      for (const r of rows) {
        const box = r.getBoundingClientRect();
        const dist = Math.abs(box.top + box.height / 2 - mid);
        if (dist < bestDist) { bestDist = dist; best = r; }
      }
      if (best) setActive(best);
    };

    let ticking = false;
    let hovering = false;
    const onScroll = () => {
      if (hovering) return;        // hover wins while the pointer is over a row
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { if (!hovering) pickClosest(); ticking = false; });
    };

    // Hover drives the highlight directly; leaving falls back to the scroll pick.
    rows.forEach((r) => {
      r.addEventListener('mouseenter', () => { hovering = true; setActive(r); });
    });
    tl.addEventListener('mouseleave', () => { hovering = false; pickClosest(); });

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    setActive(rows[0]);
  })();
</script>
