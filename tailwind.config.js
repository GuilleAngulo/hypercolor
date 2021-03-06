module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./src/*.vue', './src/components/*.vue', './src/assets/data/*.js'],
    options: {
      whitelist: ['aos-init', 'aos-animate'],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter',
      },
      animation: {
        bounce: 'bounce 1.5s ease-in-out infinite',
      },
      transition: {
        size: ['width', 'height'],
      },
      colors: {
        'app-text': 'var(--text-color)',
        'app-border': 'var(--border-color)',
        'app-bg': 'var(--bg-color)',
        'app-btn': 'var(--btn-bg-color)',
      },
    },
  },
  variants: {
    width: ['hover', 'responsive', 'group-hover'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
}
