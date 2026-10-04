import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://praphulsamavedam.github.io',
  integrations: [
    starlight({
      title: 'Praphul Samavedam',
      description: 'Software Development Engineer @ Amazon AGI | AI/ML Portfolio',
      pagefind: true,
      head: [
        {
          tag: 'script',
          content: "try { localStorage.setItem('starlight-theme', 'dark'); document.documentElement.dataset.navLayout = localStorage.getItem('portfolio-nav-layout') || 'top'; } catch {}",
        },
      ],
      components: {
        Header: './src/components/Header.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/PraphulSamavedam' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/smpraphul' },
        { icon: 'email', label: 'Email', href: 'mailto:praphulsamavedam@gmail.com' },
      ],
      sidebar: [
        { label: 'About', link: '/' },
        {
          label: 'Experience',
          items: [
            { label: 'All Experience', link: '/experience/' },
            { label: 'Amazon AGI', link: '/experience/amazon-agi/' },
            { label: 'Sway AI', link: '/experience/sway-ai/' },
            { label: 'BNY Mellon', link: '/experience/bny-mellon/' },
            { label: 'UBS', link: '/experience/ubs/' },
            { label: 'Nvidia', link: '/experience/nvidia/' },
          ],
        },
        {
          label: 'Projects',
          items: [
            { label: 'All Projects', link: '/projects/' },
            {
              label: 'Courses',
              items: [
                { label: 'Course Overview', link: '/projects/courses/' },
                {
                  label: 'CS-5100',
                  autogenerate: { directory: 'projects/courses/CS-5100' },
                },
                {
                  label: 'CS-5330',
                  autogenerate: { directory: 'projects/courses/CS-5330' },
                },
              ],
            },
            { label: 'Table Tennis Tracking', link: '/projects/table-tennis-tracking/' },
            { label: 'Visual LLM for VQA', link: '/projects/visual-llm/' },
            { label: 'Natural Language Inference', link: '/projects/natural-language-inference/' },
            { label: 'Store Sales Forecasting', link: '/projects/store-sales-forecasting/' },
            { label: 'Stock Portfolio Simulation', link: '/projects/stock-portfolio-simulation/' },
            { label: 'Image Downloads Prediction', link: '/projects/image-downloads-prediction/' },
            { label: 'Endangered Species Satellite', link: '/projects/endangered-species-satellite/' },
          ],
        },
        {
          label: 'Leadership',
          items: [
            { label: 'All Roles', link: '/leadership/' },
            { label: 'President — GDSC', link: '/leadership/gdsc-president/' },
            { label: 'Senator — GSG', link: '/leadership/gsg-senator/' },
            { label: 'GSG Rep — KMSC', link: '/leadership/kmsc-gsg-representative/' },
            { label: 'Brand Team — GDSC', link: '/leadership/gdsc-brand-team/' },
            { label: 'Coordinator — NSS', link: '/leadership/nss-coordinator/' },
            { label: 'APOGEE — EEE Assoc', link: '/leadership/apogee-coordinator/' },
            { label: 'Publicity — IEEE', link: '/leadership/ieee-publicity/' },
            { label: 'Executive — NSS', link: '/leadership/nss-executive/' },
          ],
        },
        { label: 'Research & Publications', link: '/publications/' },
        { label: 'Skills', link: '/skills/' },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
