
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import sourcemaps from 'rollup-plugin-sourcemaps';

const target = process.env.ROLLUP_TARGET || 'esm';

let globals = {
  '@angular/animations'                 : 'ng.animations',
  '@angular/core'                       : 'ng.core',
  '@angular/common'                     : 'ng.common',
  '@angular/forms'                      : 'ng.forms',
  '@angular/common/http'                : 'ng.common.http',
  '@angular/router'                     : 'ng.router',
  '@angular/platform-browser'           : 'ng.platformBrowser',
  '@angular/platform-server'            : 'ng.platformServer',
  '@angular/platform-browser-dynamic'   : 'ng.platformBrowserDynamic',
  '@angular/platform-browser/animations': 'ng.platformBrowser.animations',
  '@angular/core/testing'               : 'ng.core.testing',
  '@angular/common/testing'             : 'ng.common.testing',
  '@angular/common/http/testing'        : 'ng.common.http.testing',

  '@angular/cdk'            : 'ng.cdk',
  '@angular/cdk/keycodes'   : 'ng.cdk.keycodes',
  '@angular/cdk/a11y'       : 'ng.cdk.a11y',
  '@angular/cdk/accordion'  : 'ng.cdk.accordion',
  '@angular/cdk/bidi'       : 'ng.cdk.bidi',
  '@angular/cdk/coercion'   : 'ng.cdk.coercion',
  '@angular/cdk/collections': 'ng.cdk.collections',
  '@angular/cdk/layout'     : 'ng.cdk.layout',
  '@angular/cdk/observers'  : 'ng.cdk.observers',
  '@angular/cdk/overlay'    : 'ng.cdk.overlay',
  '@angular/cdk/platform'   : 'ng.cdk.platform',
  '@angular/cdk/portal'     : 'ng.cdk.portal',
  '@angular/cdk/scrolling'  : 'ng.cdk.scrolling',
  '@angular/cdk/stepper'    : 'ng.cdk.stepper',
  '@angular/cdk/table'      : 'ng.cdk.table',


  'rxjs'          : 'Rx',
  'rxjs/operators': 'Rx.Observable.prototype',
  'ng-zorro-antd':'ngZorro.antd',
  'date-fns/add_days'                     : 'date-fns/add_days/index',
  'date-fns/sub_days'                     : 'date-fns/sub_days/index',
  'date-fns/sub_months'                     : 'date-fns/sub_months/index',
  'date-fns/start_of_month'                     : 'date-fns/start_of_month/index',
  'date-fns/end_of_month'                     : 'date-fns/end_of_month/index',
  'sortablejs'                     : 'sortablejs/Sortable',
};

const listOfDateFns = [
  'addDays',
  'subDays',
  'subMonths',
  'startOfMonth',
  'endOfMonth'
];
const listOfReplace = listOfDateFns.map(name => {
  const map = {};
  // map[`import * as ${name} `] = `var ${name}=_${name};\nimport * as _${name} `;
  map[`import * as ${name}`] = `import ${name}`;
  return replace(map)
});


let plugins = [
  sourcemaps(),
  ...listOfReplace,
  // replace({ "import * as setMonth ": "import " }),
  resolve(),
];

switch (target) {
  case 'esm':
    Object.assign(globals, {
      'tslib': 'tslib',
    });
    break;
  case 'mumd':
    plugins.push(uglify());
    break;
}

export default {
  plugins,
  external : Object.keys(globals),
  output   : {
    exports  : 'named',
    name     : 'bgxLegion',
    globals,
    sourcemap: true,
  }
}
