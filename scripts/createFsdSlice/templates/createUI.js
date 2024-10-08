const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const componentTemplate = require('./componentTemplate');
const storyTemplate = require('./storyTemplate');
const styleTemplate = require('./styleTemplate');

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'ui', ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (e) {
      console.log('Failed to create UI directory');
    }
  };

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName);
      await fs.writeFile(
        resolveUIPath(`index.tsx`),
        componentTemplate(componentName),
      );
      await fs.writeFile(
        resolveUIPath(`${componentName}.stories.tsx`),
        storyTemplate(layer, componentName),
      );
      await fs.writeFile(
        resolveUIPath(`index.module.scss`),
        styleTemplate(componentName),
      );
    } catch (e) {
      console.log(e);
      console.log('Failed to create component');
    }
  };

  await createUIDir();
  await createComponent();
};
