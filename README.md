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

- **Framework**: Jekyll (Ruby-based static site generator)
- **Theme**: Based on Academic Pages / Minimal Mistakes theme
- **Hosting**: GitHub Pages
- **Content**: Markdown with YAML front matter
- **Collections**: Jekyll collections for organizing experiences, projects, and leadership

## Local Development

### Prerequisites

- Ruby 2.6+
- Bundler
- Jekyll

### Setup

```bash
# Clone the repository
git clone https://github.com/PraphulSamavedam/praphulsamavedam.github.io.git
cd praphulsamavedam.github.io

# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# View site at http://localhost:4000
```

### Development Configuration

```bash
# Include drafts and future posts
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

## Site Structure

```
.
├── _config.yml           # Main Jekyll configuration
├── _data/
│   └── navigation.yml    # Navigation menu
├── _pages/               # Static pages (About, Skills, Resume)
│   └── _archived/        # Archived academic pages
├── _experiences/         # Work experience entries
├── _portfolio/           # Technical projects
├── _leadership/          # Leadership activities
├── _publications/        # Academic publications (hidden)
├── _teaching/            # Teaching experience (hidden)
├── _talks/               # Conference talks (hidden)
├── images/               # Image assets
└── files/                # Downloadable files (resumes, PDFs)
```

## Professional vs Academic Content

This site prioritizes **professional engineering portfolio** over academic credentials:

### Active Collections
- ✅ Experiences (Amazon AGI, Nvidia, UBS, BNY Mellon, startups)
- ✅ Portfolio / Projects (ML/AI, Computer Vision, NLP)
- ✅ Leadership (GDSC President, Teaching Assistant)
- ✅ Skills (comprehensive technical expertise)

### Hidden Collections (Preserved for Restoration)
- 📦 Publications (research papers - commented out in config)
- 📦 Teaching (academic instruction - commented out in config)
- 📦 Talks (conference presentations - commented out in config)

Academic pages are moved to `_pages/_archived/` and can be easily restored if needed.

## Restoring Academic Content

To restore the academic version:

1. **Navigation** (`_data/navigation.yml`): Uncomment CV, Publications, Teaching, Talks
2. **Collections** (`_config.yml`): Uncomment teaching, publications, talks collections (lines ~202-210)
3. **Defaults** (`_config.yml`): Uncomment collection defaults (lines ~265-290)
4. **Pages**: Move files from `_pages/_archived/` back to `_pages/`
5. **Homepage** (`_pages/about.md`): Uncomment research experience section

See `_pages/_archived/README.md` for detailed restoration instructions.

## Content Management

### Adding New Experience

1. Create file in `_experiences/` with front matter:
```yaml
---
collection: experiences
permalink: /experiences/experience-name
title: Position @ Company
company: Company Name
duration: Month Year - Month Year
manager: Manager Name
---
```

### Adding New Project

1. Create file in `_portfolio/` with front matter and content
2. Include: problem statement, technologies, solution, results, GitHub links
3. Add screenshots to `images/portfolio/`

### Updating Resume

- Upload new PDF to `files/` directory
- Update links in `_pages/resume.md`

## Key Files

- `_config.yml` - Site configuration, author info, collections
- `_data/navigation.yml` - Top navigation menu
- `_pages/about.md` - Homepage content
- `_pages/skills.md` - Technical skills page
- `CLAUDE.md` - Documentation for Claude Code assistant
- `ToDo.md` - Project tracking and conversion checklist

## Deployment

The site automatically builds and deploys via GitHub Pages when pushing to the `master` branch.

```bash
# Commit changes
git add .
git commit -m "feat: description of changes"

# Push to GitHub
git push origin master

# Site will be live at https://praphulsamavedam.github.io within a few minutes
```

## Contact

- **Email**: [praphulsamavedam@gmail.com](mailto:praphulsamavedam@gmail.com)
- **LinkedIn**: [linkedin.com/in/smpraphul](https://www.linkedin.com/in/smpraphul)
- **GitHub**: [github.com/PraphulSamavedam](https://github.com/PraphulSamavedam)

---

## Credits

This site is based on the [Academic Pages template](https://academicpages.github.io/) developed by [Stuart Geiger](https://github.com/staeiou), derived from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/) by Michael Rose.

**License**: MIT License - See [LICENSE.md](LICENSE.md)

**Template Credits**:
- Academic Pages Template © Stuart Geiger
- Minimal Mistakes Theme © 2016 Michael Rose
