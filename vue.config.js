module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/taller2-WA/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}