import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { generateAngularApplicationGenerator } from './generate-angular-application';
import { GenerateAngularApplicationGeneratorSchema } from './schema';

describe('generate-angular-application generator', () => {
  let tree: Tree;
  const options: GenerateAngularApplicationGeneratorSchema = { name: 'test', domain:"finance" };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generateAngularApplicationGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
