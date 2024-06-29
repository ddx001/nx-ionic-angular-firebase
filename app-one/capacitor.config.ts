import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'nx-ionic-angular-firebase.app-one',
  appName: 'App-One',
  webDir: '../dist/app-one/browser',
  server: {
    hostname: 'app-one.com',
    androidScheme: 'https'
  }
};

export default config;
