// Import an entire module's contents
import * as myModule from '/modules/my-module.js';

// Import a single export from a module
import { myExport } from '/modules/my-module.js';

// Import multiple exports from module
import { foo, bar } from '/modules/my-module.js';

// Import an export with a more convenient alias
import {
  reallyReallyLongModuleExportName as shortName,
} from '/modules/my-module.js';

// Import a module for its side effects only
// This runs the module's global code.
import '/modules/my-module.js';


// Dynamic import 
(async () => {
  if (somethingIsTrue) {
    await import('/modules/my-module.js'); // Returns a promise
  }
})();

// Importing defaults
import myDefault from '/modules/my-module.js';
import myDefault, * as myModule from '/modules/my-module.js';
import myDefault, { foo, bar } from '/modules/my-module.js';

// For dynamic default import:
// You need to destructure and rename the "default" key from the returned object.
(async () => {
  if (somethingIsTrue) {
    const { default: myDefault, foo, bar } = await import('/modules/my-module.js');
  }
})();