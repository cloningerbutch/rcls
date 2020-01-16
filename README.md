# rcls

resource file recursive list utility

``` bash
Usage: rcls <appname> [options]

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]
  --app, -a   app name
```

This utility will work backwards in the file system, loading all .rc files based on app name.  Output lists the files found in order of precedence and shows the composite results.

