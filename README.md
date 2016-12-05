# Project For testing npm + webpack

## Hands-way for complete transformation

```shell
babel app/index.js --out-file dist/babeled.js
webpack dist/babeled.js dist/bundle.js
```

```shell
babel app/index.js --out-file dist/babeled.js && webpack dist/babeled.js dist/bundle.js
```

## Completely auto settings
I'm make that with doc: [transpiling es2015 using babel loader](https://webpack.github.io/docs/usage.html#transpiling-es2015-using-babel-loader)
