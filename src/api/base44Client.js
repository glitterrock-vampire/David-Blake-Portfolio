import { createClient } from '@base44/sdk';

export const base44 = createClient({
  // Use local development mode
  serverUrl: 'http://localhost:3000',
  // Disable analytics and other production features
  analytics: false,
  visualEditAgent: false,
  navigationNotifier: false,
  hmrNotifier: false
});