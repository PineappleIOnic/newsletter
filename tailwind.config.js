/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
            'neutral-primary': '#1D1D21',
            'neutral-secondary': '#C3C3C6',
            'neutral-strong': '#414146'
        }
    }
    },
    plugins: []
  };