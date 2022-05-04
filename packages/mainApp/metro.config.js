const path = require('path');
const exclusionList = require('metro-config/src/defaults/exclusionList');
const rootFolder = path.join(path.resolve(__dirname), '/../../');
const pathToCommonFolder = path.join(path.resolve(__dirname), '/../common');
const pathToMainAppFolder = path.join(path.resolve(__dirname), '/../mainApp');
const pathRootNodeModules = path.join(
  path.resolve(__dirname),
  '/../../node_modules',
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
  watchFolders: [pathRootNodeModules, pathToCommonFolder, pathToMainAppFolder],
  resolver: {
    // Ensure we resolve nohoist libraries from this directory.
    // With "((?!mainApp).)", we're blocking all the cases were metro tries to
    // resolve nohoisted libraries from a directory that is not "mainApp".
    blockList: exclusionList([
      /^((?!mainApp).)*\/node_modules\/@react-native-community\/cli-platform-ios\/.*$/,
      /^((?!mainApp).)*\/node_modules\/@react-native-community\/cli-platform-android\/.*$/,
      /^((?!mainApp).)*\/node_modules\/hermes-engine\/.*$/,
      /^((?!mainApp).)*\/node_modules\/jsc-android\/.*$/,
      /^((?!mainApp).)*\/node_modules\/react\/.*$/,
      /^((?!mainApp).)*\/node_modules\/react-native\/.*$/,
      /^((?!mainApp).)*\/node_modules\/react-native-codegen\/.*$/,
    ]),
    extraNodeModules: {
      '@react-native-community/cli-platform-ios': `${rootFolder}/mobile/node_modules/@react-native-community/cli-platform-ios`,
      '@react-native-community/cli-platform-android': `${rootFolder}/mobile/node_modules/@react-native-community/cli-platform-android`,
      'hermes-engine': `${rootFolder}/mobile/node_modules/hermes-engine`,
      'jsc-android': `${rootFolder}/mobile/node_modules/jsc-android`,
      react: '${rootFolder}/mobile/node_modules/react',
      'react-native': `${rootFolder}/mobile/node_modules/react-native`,
      'react-native-codegen': `${rootFolder}/mobile/node_modules/react-native-codegen`,
    },
  },
};
