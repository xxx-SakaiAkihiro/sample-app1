module.exports = {
  devServer: {
    proxy: {
      "/api/": {
        target: `//itunes.apple.com/search?term=${this.$route.params.searchName}&country=jp&entity=song`
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
