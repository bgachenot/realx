# Realx

This is a fork from [RelaxedJS](https://github.com/RelaxedJS/ReLaXed/wiki/Command-line-options) to add more features to CLI such as : 
* get locals from URL endpoint
* get locals from file

To have more info type :

```
realx -h
```

The api is the same from forked software, we add two specific methods :

```
-i, --input <path> OR path1,path2,pathN       path(s) of json variables file(s) for pug rendering
-u, --url <url>          url of json endpoint for pug rendering
```

You api response must be formatted as followed : 

```
{ # an object containing any variables you want to inject in your pdf
  "1": "",
  "2": 123,
  "3": true,
  "n": false
}
```

# Changelog (dd/mm/yyyy)

* 12/11/2019 : add ``-d`` command to debug variables from ``locals``, ``input`` and ``url`` parameters so they can be print to console
* 06/11/2019 : added a method to merge variables from ``locals``, ``input`` and ``url`` parameters can now be used simultaneously
* 01/11/2019 : add ``-i``, ``-u`` commands.
