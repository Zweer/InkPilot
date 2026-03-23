import { App } from 'aws-cdk-lib';

import { InkPilotStack } from './stacks/inkpilot-stack.js';

const app = new App();

new InkPilotStack(app, 'InkPilotStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
