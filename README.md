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
- <img src="https://vuejs.org/images/lifecycle.png" width="150" height="400" />
- **error:**
    Se da por la llamada `{{ $data | json }}`
    ```
    [Vue warn]: Failed to resolve filter: json
    (found in <Anonymous>)
    ```
    **solución:**
    - In Vue 2.0, you don’t need to use the filter, just use: {{ $data }}
- **$http** se puede contar con este objeto gracias a **vue-resource**
```js
get_users : function() {
    this.$http.get(sUrlJson).then(function(response){
        this.lista = response.data.results
    })
}//get_users
```
- **$data** propiedad [vue.$data](https://vuejs.org/v2/api/#data) 

## 5 - [VUE-RESOURCE y AXIOS - Tecnologías AJAX para VUEjs](https://www.youtube.com/watch?v=WKOZ2xPWURU&list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt&index=5)
- Vue dejo de recomendar **vue-resource** pertenece a pagekit
- Ahora se usa **axios** pertenece a mzabriske
- Se puede utilizar la que desees
- Axios es una biblioteca muy popular
- Si eres nuevo en vue es recomendable usar axios

## 6 - [VUE y AJAX con AXIOS - Qué es una API](https://www.youtube.com/watch?v=rJCtdKoPnlE&list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt&index=6)
- [Github - Axios](https://github.com/axios/axios)
- `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>`

## 7 - [LARAVEL y VUE - Introducción, uso de AJAX](https://www.youtube.com/watch?v=YDyray6KQ4w&index=7&list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt)
- Se crea un proyecto básico en laravel con una bd simple y datos
- Se configura una ruta **get** y en el callback se devuelven los datos
- Para evitar el conflicto con **blade** se antepone un **@**
- [Laravel CRUD con Vue](https://www.youtube.com/watch?v=5EKLN_1mNW8&t=72s)
- **comando:** `composer create-project laravel/laravel your-project-name`

## 8 - [Tutorial de VUE, Directivas y V-SHOW](https://www.youtube.com/watch?v=Yt6cOb5Ukn0&index=8&list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt)
- `<input type="text" v-model="email" class="form-control">`
- `<input type="submit" v-show="email" class="btn btn-primary">`
- **v-show** trabaja bajo condicional. Si la variable asociada tiene un valor es true si está vacia false
- En este caso `v-show -> apunta a -> v-model`
- Aplica estilo **display:none** para ocultar

## 9 - [Directivas V-IF V-ELSE y TEMPLATE ](https://www.youtube.com/watch?v=Ktkh_ErWKzI&index=9&list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt)
- **v-if**
- **v-else**
```html
Forma incorrecta de usar v-if
<h3 v-if="!message">Escribe tu sugerencia</h3>
<p v-if="!message">El equipo de soporte responde en máximo 24 horas</p>
<p v-if="!message"><em>Podrías utilizar Twitter para comunicarte</em></p>
```
- Forma correcta. Usando el tag `<template></template>`
```html
<template v-if="!message">
    <h3>Escribe tu sugerencia</h3>
    <p>El equipo de soporte responde en máximo 24 horas</p>
    <p><em>Podrías utilizar Twitter para comunicarte</em></p>       
</template>
<h3 v-else>Presiona ENTER para enviar</h3>
```
- **v-show** vs **v-if** [min: 06:10](https://youtu.be/Ktkh_ErWKzI?list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt&t=368)
- Si no necesitamos else usamos v-show
- Según rendimiento v-show consume más recursos

## 10 - [Eventos en VUE - JavaScript ](https://www.youtube.com/watch?v=rC4KCh8YfP4&list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt&index=10)
- Actualmente se llama al metodo add desde dos puntos
```html
<input type="text" class="form-control" v-on:keyup.enter="add" v-model="name">
<span class="input-group-btn">
    <input type="button" class="btn btn-default" v-on:click="add" value="add">
</span>
```
- Se podria agrupar con una sola llamada al metodo usando un tag `<form></form>`
- **v-on:submit.prevent** prevent evita el refresco del formulario que es el comportamiento normal
- **v-on:click="num+=1"** operación dentro del evento
```html
<form v-on:submit.prevent="add">
    <div class="input-group">
        <input type="text" class="form-control" v-model="name">
        <span class="input-group-btn">
            <input type="submit" class="btn btn-default" value="add">
        </span>
    </div>
</form>
```
```js
add: function(){
        this.people.unshift(this.name)//al principio de la lista
        this.people.push(this.name)//al final
        this.name = ""
    }
```

## 11 - [Filtros en VUE.js usando Computed Properties - AJAX](https://www.youtube.com/watch?v=eB17ef_TVrA&list=PLhCiuvlix-rRfn75tEQHzsYaijqSpW_vt&index=11)
-

## 12 - [xxx](yyy)
## 13 - [xxx](yyy)