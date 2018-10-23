const manifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: 'Protest Guide',
    short_name: 'Protest Guide',
    start_url: '/',
    background_color: '#FF9015',
    theme_color: '#FF9015',
    display: 'standalone',
    icon: 'src/images/icon.png',
  },
};


const googleFonts = {
  resolve: `gatsby-plugin-google-fonts`,
  options: {
    fonts: [
      'roboto\:400,700',
      'oswald\:400,700',
      'archivo\:400,700',
      'archivo narrow'
    ]
  }
};


module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    manifest,
    'gatsby-plugin-offline',
    googleFonts,
    'gatsby-plugin-sass'
  ],
}
