# link

- [Youtube - link router](https://youtu.be/cBYTnk6p_UA?list=PLhCiuvlix-rR1X3apg9CXY5KEX47sI-gc)
- [Quitar hash # de la url - vue router](https://stackoverflow.com/questions/34623833/how-to-remove-hashbang-from-url)

## Errores

```
vue.esm.js?efeb:591 [Vue warn]: Unknown custom element: <EafList> - did you register the component correctly? 
For recursive components, make sure to provide the "name" option.
```
- **Solución:**
- Faltaba incluir el atributo **components**:
```js
    components : {
    Eaflist
},
```
<hr/>
```js

```

- **solución:**
```js
```






<br/>
<hr/>
<hr/>
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).