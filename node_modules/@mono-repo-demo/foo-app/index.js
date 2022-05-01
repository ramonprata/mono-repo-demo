const { functionFromBar } = require('@mono-repo-demo/bar-app');

const introduceBar = () => {
  console.log("I'd like to introduce someone..");
  functionFromBar();
};

introduceBar();
