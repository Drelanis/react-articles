const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'model', ...segments);

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slices'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (e) {
      console.log(`Failed to create model segment for slice ${sliceName}`, e);
    }
  };

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `index.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (e) {
      console.log('Failed to create redux slice', e);
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `index.ts`),
        schemaTypeTemplate(sliceName),
      );
    } catch (e) {
      console.log('Failed to create state scheme type', e);
    }
  };

  const createRootIndex = async () => {
    try {
      await fs.writeFile(resolveModelPath('index.ts'), ``);
    } catch (e) {
      console.log('Failed to create root index file for model', e);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
  await createRootIndex();
};
