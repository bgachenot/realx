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
-i, --input <path>       path of json file for pug rendering
-u, --url <url>          url of json file for pug rendering
```

You api response must be formatted as followed : 

```
[ # an array to wrap the paylaod
  { # an object containing any variables you want to inject in your pdf
    "1": "",
    "2": 123,
    "3": true,
    "n": false
  }
]
```