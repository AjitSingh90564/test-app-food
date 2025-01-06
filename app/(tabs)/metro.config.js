// metro.config.js

const path = require('path');

module.exports = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    // Add custom resolver for assets or other file types if necessary
    assetExts: ['bin', 'mp4'], 
    sourceExts: ['js', 'jsx', 'ts', 'tsx'],// Example to add custom asset types
  },
  watchFolders: [
    path.resolve(__dirname, 'node_modules'),
  ],
};
