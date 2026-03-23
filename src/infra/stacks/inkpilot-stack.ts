import type { StackProps } from 'aws-cdk-lib';
import { Stack } from 'aws-cdk-lib';
import type { Construct } from 'constructs';

export class InkPilotStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // TODO: API Gateway + Lambda + DynamoDB + S3
  }
}
