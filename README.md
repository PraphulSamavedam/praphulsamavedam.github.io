# Professional Engineering Portfolio

This is the source code for my professional engineering portfolio website, hosted at [praphulsamavedam.github.io](https://praphulsamavedam.github.io).

## About

Software Development Engineer at Amazon AGI, specializing in distributed AI systems, LLM infrastructure, and production ML engineering. This portfolio showcases:

- **Professional Experience**: 5+ years across Amazon, Nvidia, UBS, BNY Mellon, and AI startups
- **Technical Projects**: Multi-Modal AI, Computer Vision, NLP, and Applied ML systems
- **Leadership**: GDSC President, Teaching Assistant, Community Builder
- **Skills**: Comprehensive technical expertise in AI/ML, distributed systems, and cloud platforms
- **Achievements**: Competition wins, professional certifications, MS AI with 4.0 GPA

## Technology Stack

- **Framework**: Astro 6 with Astro Starlight
- **Runtime**: Node.js 22+
- **Hosting**: GitHub Pages via GitHub Actions
- **Content**: Markdown and MDX with YAML front matter
- **Search**: Starlight Pagefind integration

## Local Development

### Prerequisites

- Node.js 22.12+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/PraphulSamavedam/praphulsamavedam.github.io.git
cd praphulsamavedam.github.io

# Install dependencies
npm ci

# Run local development server
npm run dev

# View site at http://localhost:4321
```

### Build and preview

```bash
# Build the static site
npm run build

# Preview the production build
npm run preview
```

## Site Structure

```
.
├── astro.config.mjs      # Astro and Starlight configuration
├── src/content/docs/     # Site pages and project content
├── src/styles/           # Custom Starlight styles
├── public/               # Static images and downloadable assets
├── package.json          # Node scripts and dependencies
└── .github/workflows/    # GitHub Pages deployment workflow
```

The site content is maintained in Astro Starlight:

- `src/content/docs/experience/` - Professional experience
- `src/content/docs/projects/` - Projects, with course work under `Courses/<course-code>/`
- `src/content/docs/leadership/` - Leadership experience
- `src/content/docs/publications.md` - Publications
- `src/content/docs/skills.md` - Technical skills

The project overview remains a single, filterable list. Course pages provide the
course synopsis and links to the projects completed for that course.

### Active Content
- ✅ Experiences (Amazon AGI, Nvidia, UBS, BNY Mellon, startups)
- ✅ Portfolio / Projects (ML/AI, Computer Vision, NLP)
- ✅ Leadership (GDSC President, Teaching Assistant)
- ✅ Skills (comprehensive technical expertise)

## Content Management

### Adding New Experience

1. Create a Markdown file in `src/content/docs/experience/`:
```yaml
---
title: Position @ Company
description: Short summary for search and metadata
---
```

### Adding New Project

1. Create a Markdown file in the relevant project folder under `src/content/docs/projects/`
2. Include: problem statement, technologies, solution, results, GitHub links
3. Add screenshots to `public/images/portfolio/`

### Updating Resume

- Upload new PDF to `public/files/`
- Update the relevant links in the Astro content

## Key Files

- `astro.config.mjs` - Site configuration and sidebar
- `src/content/docs/index.mdx` - Homepage content
- `src/content/docs/skills.md` - Technical skills page
- `src/styles/custom.css` - Site-specific styling

## Deployment

The site builds and deploys through GitHub Actions when changes are pushed to
the `astro-migration` branch. The workflow uses Node.js 22, runs `npm ci`,
builds `dist/`, and publishes it to GitHub Pages.

```bash
# Commit changes
git add .
git commit -m "feat: description of changes"

# Push to GitHub
git push origin astro-migration

# Site will be live at https://praphulsamavedam.github.io within a few minutes
```

## Contact

- **Email**: [praphulsamavedam@gmail.com](mailto:praphulsamavedam@gmail.com)
- **LinkedIn**: [linkedin.com/in/smpraphul](https://www.linkedin.com/in/smpraphul)
- **GitHub**: [github.com/PraphulSamavedam](https://github.com/PraphulSamavedam)

---

## Credits

**License**: MIT License - See [LICENSE](LICENSE)
