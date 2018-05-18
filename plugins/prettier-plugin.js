const exec = require('child_process').exec;

class PrettierPlugin {
  apply(compiler) {
    compiler.hooks.run.tapAsync('PrettierPlugin', this.prettify);
    compiler.hooks.watchRun.tapAsync('PrettierPlugin', this.prettify);
  }

  prettify(_, callback) {
    exec('./prettify.sh', (error, stdout, stderr) => {
      console.log(stdout);
      callback();
    });
  }
}

module.exports = PrettierPlugin;
