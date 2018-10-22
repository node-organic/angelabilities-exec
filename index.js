const exec = require('child_process').exec

module.exports = function (angel) {
  angel.exec = function (command, next) {
    let cwd = process.cwd()
    let child = exec(command, {
      cwd: cwd,
      maxBuffer: Infinity,
      env: process.env
    })
    child.stderr.pipe(process.stderr)
    child.stdout.pipe(process.stdout)
    child.on('exit', function (code) {
      let err = null
      if (code !== 0) {
        err = new Error('failed ' + command + ' on ' + cwd + ' with code ' + code)
      }
      if (err) {
        child.catchCb && child.catchCb(err)
      } else {
        child.thenCb && child.thenCb(code)
      }
      next && next(err, code)
    })
    child.then = function (cb) {
      this.thenCb = cb
    }
    child.catch = function (cb) {
      this.catchCb = cb
    }
    return child
  }
}
