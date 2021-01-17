#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { GrafanaVpcStack } from '../lib/grafana-vpc-stack';

const app = new cdk.App();
new GrafanaVpcStack(app, 'GrafanaVpcStack');
