const fs = require('fs');
const styles = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/styles.js';

fs.readFile(styles, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  const result = data.replace(/Object.assign\(\s*{\s*sourceMap\s*:\s*cssSourceMap\s*}\s*,\s*lessPathOptions/, 'Object.assign({ sourceMap: cssSourceMap,javascriptEnabled: true }, lessPathOptions');
  fs.writeFile(styles, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
}); 