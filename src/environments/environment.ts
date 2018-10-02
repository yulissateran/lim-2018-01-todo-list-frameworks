// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase:  {
    apiKey: "AIzaSyAdXy7kD-txibou6iAks-T-biF1n8yhSD0",
    authDomain: "to-do-list-angular-d238b.firebaseapp.com",
    databaseURL: "https://to-do-list-angular-d238b.firebaseio.com",
    projectId: "to-do-list-angular-d238b",
    storageBucket: "to-do-list-angular-d238b.appspot.com",
    messagingSenderId: "994186916487"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
