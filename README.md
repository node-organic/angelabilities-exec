# angelabilities-exec

Handy common code for angel to execute shell commands

## setup

```
npm i angelabilities-exec --save-dev
```

## `angel.exec`

Execute arbitrary shell commands and get their stdout & stderr piped through the running process.

### callback style

```
let childProcess = angel.exec("touch this", function (err, statusCode) {})
```

### promise style

```
await angel.exec('touch this')
```
