const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment
// const { environment } = require("@rails/webpacker");

// environment.loaders.get("vue").options.extractCSS = false;

// module.exports = environment;