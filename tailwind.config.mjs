/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { ink: '#222222', body: '#3f3f3f', muted: '#6a6a6a', line: '#dddddd', soft: '#f7f7f7', brand: '#ff385c', 'brand-active': '#e00b41' },
      boxShadow: { card: 'rgba(0,0,0,.02) 0 0 0 1px, rgba(0,0,0,.04) 0 2px 6px, rgba(0,0,0,.1) 0 4px 8px' },
      maxWidth: { content: '1200px' }
    }
  },
  plugins: []
};
