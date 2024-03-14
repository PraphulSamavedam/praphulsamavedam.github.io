---
layout: archive
title: "Work Experience"
permalink: /experiences/
author_profile: true
redirect_from:
  - /work experience/
  - /work.html
  - /experience.html
  - /corporateExperience.html
  - /corporate
  - /corporate.html
  - /experience/
  - /work/
  - /corporate/
---


{% include base_path %}

<ul>
{% for post in site.experiences reversed %}
  <li> {% include archive-single-cv.html %} </li>
{% endfor %}
<!--   {% include archive-single.html %} -->
</ul>
