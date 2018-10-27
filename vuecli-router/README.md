# vuecli-router

> La aplicación usa **VueRouter**, **Axios** y **jsonplaceholder.typicode.com**
> La he refactorizado varias veces y creado **modelos**, **vistas** y **elementos**

- [Tutorial Vue2](https://github.com/eacevedof/prj_vue2_rimor1/tree/master/vue2)
- [Youtube Rimorsoft - link router](https://youtu.be/cBYTnk6p_UA?list=PLhCiuvlix-rR1X3apg9CXY5KEX47sI-gc)
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

