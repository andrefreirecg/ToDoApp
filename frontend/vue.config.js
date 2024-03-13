const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
		"crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify")
      }
    },
	plugins: [
		new Dotenv()
	  ]
  }
})
