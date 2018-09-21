# prj_vue2_rimor1
- 21/09/2018
- Este proyecto: https://github.com/eacevedof/prj_vue2_rimor1
- Proyecto siguiendo el video tutorial de youtube de Rimorsoft Online
- [Twitter del autor @ItaloMoralesF](https://twitter.com/ItaloMoralesF)
- [Web oficial del Autor](https://rimorsoft.com/)

## [Youtube playlist - Curso de Vuejs 2 by Rimorsoft Online:](https://www.youtube.com/playlist?list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt)

## 1 - [Bienvenidos al curso de VUE 2 | Rimorsoft Online](https://www.youtube.com/watch?v=omCGk5Qup9Q&index=2&list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt&t=0s)

- Introducción
- Conocimientos previos:
    - Javascript
    - Html5
    - Bootstrap

## 2 - [Renderización de listas VUEjs - V-FOR](https://www.youtube.com/watch?v=_RKC6a8-Ic0&list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt&index=2)
- [CDN](https://vuejs.org/v2/guide/installation.html#CDN)
    - [vuejs.org/js/vue.js - nueva ventana](https://vuejs.org/js/vue.js)
    - `<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>` 
- **comando:** `php -S localhost:3300`
- **v-for** `<li v-for="name in people">{{name}}</li>` o `<li v-for="name in people" v-text="name"></li>`
- En `data` se agregan las variables que se podrán alcanzar directamente con las directivas de vue
- **v-model** y **v-on:keyup.enter** `v-model="name" v-on:keyup.enter="add_name">`
- **error:**
    - Se da cuando se carga la página por primera vez. Pero funciona ^^
    ```error
    vue.js:597 [Vue warn]: Property or method "name" is not defined on the instance but referenced
     during render. Make sure that this property is reactive, either in the data option, or for 
     class-based components, by initializing the property. 
     See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.
    (found in <Root>)
    ```
    **solución**
    - `name` no puede ir fuera de `data`
- `this` apunta al objeto `data`
```js
new Vue({
    el: "#main",//el wrapper donde apuntara este objeto vue
    data:{
        name: "",
        people: ["Linda","Isabella","Diana","Luisa"]
    },//data
    methods:{
        //metodo tipo v-on:keyup.enter
        add_name: function(){
            this.people.push(this.name)
            this.name = ""
        }//add_name
    }//methods
})//new Vue
```
## 3 - [Vinculación de datos con #VUE - Data Binding con V-BIND](https://www.youtube.com/watch?v=rKgc4g3lPHc&index=3&list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt)
- Con **v-bind** se vincula una propiedad con una variable dentro de `data`
- **v-model** indica a un elemento html que será de tipo dinámico y que su "valor" será asignado a la variable mapeada con el `=`. Ejemplo `v-model="info"`
- Se configura el input enlazandolo con la variable data.info
- `<input type="text" v-model="info">`
- Se configura la propiedad title y el innertext para que escuchen cambios en la variable info
- `<p v-bind:title="info">Texto de relleno {{info}}</p>`

## 4 - [VUEjs y AJAX, manejo de respuesta JSON con VUE-RESOURCE](https://www.youtube.com/watch?v=yqnT2VzJHHI&list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt&index=4)
- [cdnjs.com/](https://cdnjs.com/)
    - buscamos `vue resource`
    - encontramos `https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.5.1/vue-resource.min.js`
- `<script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.5.1/vue-resource.min.js"></script>`
- [bootstrap](http://getbootstrap.com/)
- `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">`
- [randomuser - get fake json](https://randomuser.me/documentation#results)
    - [results - 50 regs](https://randomuser.me/api/?results=50)
- [Lifecycle diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
- <img src="https://vuejs.org/images/lifecycle.png" width="300" height="600" />
- **error:**
    ```
    [Vue warn]: Failed to resolve filter: json
    (found in <Anonymous>)
    ```
    **solución:**

## 5 - [xxx](yyy)
## 6 - [xxx](yyy)
## 7 - [xxx](yyy)
## 8 - [xxx](yyy)
## 9 - [xxx](yyy)
## 10 - [xxx](yyy)
## 11 - [xxx](yyy)
## 12 - [xxx](yyy)
## 13 - [xxx](yyy)