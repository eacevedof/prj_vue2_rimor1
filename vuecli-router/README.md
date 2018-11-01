# vuecli-router

> La aplicación usa **VueRouter**, **Axios** y **jsonplaceholder.typicode.com**
> La he refactorizado varias veces y creado **modelos**, **vistas** y **elementos**

- **Posts** https://jsonplaceholder.typicode.com/posts/1
- **Comments** https://jsonplaceholder.typicode.com/comments/1
- **Albums** https://jsonplaceholder.typicode.com/albums/1
- **Photos** https://jsonplaceholder.typicode.com/photos/1
- **Users** https://jsonplaceholder.typicode.com/users/1
- **Todos** https://jsonplaceholder.typicode.com/todos/1

- [En ejecución - vuerouter.eduardoaf.com](http://vuerouter.eduardoaf.com/)
- [Tutorial Vue2](https://github.com/eacevedof/prj_vue2_rimor1/tree/master/vue2)
- [Youtube Rimorsoft - link router](https://youtu.be/cBYTnk6p_UA?list=PLhCiuvlix-rR1X3apg9CXY5KEX47sI-gc)
- [Quitar hash # de la url - vue router](https://stackoverflow.com/questions/34623833/how-to-remove-hashbang-from-url)
- <img src="https://trello-attachments.s3.amazonaws.com/5b014dcaf4507eacfc1b4540/5bd4dbcb4cfc473b24e2a879/37c67a151cf43eb2f4027883b2d23589/image.png" width="600" height="500"/>

## Errores

1.- Uno
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
2.- Dos
    - Si se usa vue-router hay que usar .htaccess
    - [.htaccess](https://stackoverflow.com/questions/47879936/vue-router-hosting-on-apache2)
    

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

