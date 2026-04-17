import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://praphulsamavedam.github.io',
  integrations: [
    starlight({
      title: 'Praphul Samavedam',
      description: 'Software Development Engineer @ Amazon AGI | AI/ML Portfolio',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/PraphulSamavedam' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/smpraphul' },
        { icon: 'email', label: 'Email', href: 'mailto:praphulsamavedam@gmail.com' },
      ],
      sidebar: [
        { label: 'About', slug: 'index' },
        {
          label: 'Projects',
          items: [
            { label: 'All Projects', slug: 'projects' },
            { label: 'Table Tennis Tracking', slug: 'projects/table-tennis-tracking' },
            { label: 'Natural Language Inference', slug: 'projects/natural-language-inference' },
            { label: 'Store Sales Forecasting', slug: 'projects/store-sales-forecasting' },
          ],
        },
        {
          label: 'Experience',
          items: [
            { label: 'All Experience', slug: 'experience' },
            { label: 'Amazon AGI', slug: 'experience/amazon-agi' },
            { label: 'Sway AI', slug: 'experience/sway-ai' },
            { label: 'BNY Mellon', slug: 'experience/bny-mellon' },
            { label: 'UBS', slug: 'experience/ubs' },
            { label: 'Nvidia', slug: 'experience/nvidia' },
          ],
        },
        { label: 'Skills', slug: 'skills' },
        {
          label: 'Leadership',
          items: [
            { label: 'All Roles', slug: 'leadership' },
            { label: 'President — GDSC', slug: 'leadership/gdsc-president' },
            { label: 'Coordinator — NSS', slug: 'leadership/nss-coordinator' },
            { label: 'APOGEE — EEE Assoc', slug: 'leadership/apogee-coordinator' },
            { label: 'Publicity — IEEE', slug: 'leadership/ieee-publicity' },
            { label: 'Executive — NSS', slug: 'leadership/nss-executive' },
          ],
        },
        { label: 'Publications', slug: 'publications' },
      ],
      customCss: ['./src/styles/custom.css'],
      head: [
        { tag: 'script', attrs: { src: '/scripts/experience-filter.js' } },
        { tag: 'script', attrs: { src: '/scripts/project-filter.js' } },
      ],
    }),
  ],
});
