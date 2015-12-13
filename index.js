var exec = require("child_process").exec

module.exports = function(angel){
  angel.sh = function(command, next) {
    var cwd = process.cwd();
    var child = exec(command, { cwd: cwd })
    child.stderr.pipe(process.stderr)
    child.stdout.pipe(process.stdout)
    child.on("exit", function(code){
      var err = null
      if(code != 0)
        err = new Error("failed "+command+" on "+cwd)
      next && next(err)
    })
    return child
  }
}
