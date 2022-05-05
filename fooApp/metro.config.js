const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const rootFolder = path.join(path.resolve(__dirname), '/../');
// const pathToCommonFolder = path.join(path.resolve(__dirname), '/../common');
const pathTomainAppFolder = path.join(path.resolve(__dirname), '/../mainApp');
const pathRootNodeModules = path.join(
  path.resolve(__dirname),
  '/../node_modules',
);

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  // Add additional Yarn workspaces to the module map.
  // This allows importing importing from all the project's packages.
  watchFolders: [pathRootNodeModules, pathTomainAppFolder],
  resolver: {
    // Ensure we resolve nohoist libraries from this directory.
    // With "((?!fooApp).)", we're blocking all the cases were metro tries to
    // resolve nohoisted libraries from a directory that is not "fooApp".
    blockList: exclusionList([
      /^((?!fooApp).)*\/node_modules\/@react-native-community\/cli-platform-ios\/.*$/,
      /^((?!fooApp).)*\/node_modules\/@react-native-community\/cli-platform-android\/.*$/,
      /^((?!fooApp).)*\/node_modules\/hermes-engine\/.*$/,
      /^((?!fooApp).)*\/node_modules\/jsc-android\/.*$/,
      /^((?!fooApp).)*\/node_modules\/react\/.*$/,
      /^((?!fooApp).)*\/node_modules\/react-native\/.*$/,
      /^((?!fooApp).)*\/node_modules\/react-native-codegen\/.*$/,
    ]),
    extraNodeModules: {
      '@react-native-community/cli-platform-ios': `${rootFolder}/fooApp/node_modules/@react-native-community/cli-platform-ios`,
      '@react-native-community/cli-platform-android': `${rootFolder}/fooApp/node_modules/@react-native-community/cli-platform-android`,
      'hermes-engine': `${rootFolder}/fooApp/node_modules/hermes-engine`,
      'jsc-android': `${rootFolder}/fooApp/node_modules/jsc-android`,
      react: `${rootFolder}/fooApp/node_modules/react`,
      'react-native': `${rootFolder}/fooApp/node_modules/react-native`,
      'react-native-codegen': `${rootFolder}/fooApp/node_modules/react-native-codegen`,
    },
  },
};
