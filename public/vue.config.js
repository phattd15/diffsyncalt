module.exports = {
  publicPath: '/diffsyncalt/',
  devServer: {
    proxy: 'https://diffsyncalter-server.herokuapp.com/',
    https: true
  }
}