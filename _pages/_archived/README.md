# Archived Academic Pages

**Status:** These pages are archived and not displayed on the public website.

This directory contains academic-focused pages that have been temporarily removed from the professional engineering portfolio. All content is preserved for easy restoration.

## Why Archived?

The site currently focuses on professional engineering experience and technical projects rather than academic achievements. These pages are preserved here for:
- Easy restoration if needed
- Historical reference
- Academic job applications
- Future academic website version

## Archived Pages

- **cv.md** - Academic curriculum vitae page
- **publications.md** - Research publications archive page
- **teaching.html** - Teaching experience archive page
- **talks.html** - Conference talks archive page

## Restoring These Pages

To restore academic pages to the public site:

1. Move desired files back to `_pages/` directory:
   ```bash
   mv _pages/_archived/cv.md _pages/
   mv _pages/_archived/publications.md _pages/
   mv _pages/_archived/teaching.html _pages/
   mv _pages/_archived/talks.html _pages/
   ```

2. Uncomment corresponding collections in `_config.yml`:
   - Publications collection (line ~206)
   - Teaching collection (line ~202)
   - Talks collection (line ~208)

3. Uncomment navigation items in `_data/navigation.yml`:
   - CV
   - Publications
   - Teaching
   - Talks

4. Rebuild the site: `bundle exec jekyll serve`

## Professional Portfolio Focus

The current site emphasizes:
- Software Development Engineer role at Amazon AGI
- 5+ years of production ML/AI engineering experience
- Technical projects (Multi-Modal AI, Computer Vision, NLP)
- Competition wins and professional achievements
- Industry certifications and skills
- Leadership experience (GDSC President, Teaching Assistant)

Academic credentials remain on the homepage but in a supporting role to professional accomplishments.
