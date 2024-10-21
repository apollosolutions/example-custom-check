import customLint from './eslint';
import type { Config } from '@netlify/functions';

export default customLint;

export const config: Config = {
  path: '/custom-check',
};
