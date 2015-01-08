# angelabilities-exec

Handy common code for angel scripting.

## `angel.sh`

Execute arbitary shell commands and get their stdout & stderr piped through.

    angel.sh("touch this", function(err){ })

## `angel.fork`

A short cut of `angel.sh("node node_modules/.bin/angel "+command)

    angel.fork("build", function(err){ })
