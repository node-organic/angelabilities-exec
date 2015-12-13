# angelabilities-exec

Handy common code for angel scripting.

## `angel.sh`

Execute arbitary shell commands and get their stdout & stderr piped through.

    var spawnedProcess = angel.sh("touch this" [, function(err){ } ])
