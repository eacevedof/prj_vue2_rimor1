# prj_vue2_rimor1

## 5 [Introducción a VUE-CLI | Rimorsoft Online](https://youtu.be/Ptj5JDz5MBU?list=PLhCiuvlix-rR1X3apg9CXY5KEX47sI-gc)

- **comando:** `npm install -g vue-cli` instala de manera global el shell de vue **vue-cli**
```ssh
npm WARN deprecated coffee-script@1.12.7: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)
<Roaming>\npm\vue -> <Roaming>\npm\node_modules\vue-cli\bin\vue
<Roaming>\npm\vue-init -> <Roaming>\npm\node_modules\vue-cli\bin\vue-init
<Roaming>\npm\vue-list -> <Roaming>\npm\node_modules\vue-cli\bin\vue-list
+ vue-cli@2.9.6
added 2 packages, removed 18 packages and updated 12 packages in 26.9s
   ╭─────────────────────────────────────╮
   │                                     │
   │   Update available 5.6.0 → 6.4.1    │
   │       Run npm i npm to update       │
   │                                     │
   ╰─────────────────────────────────────╯
```

```
$ npm i npm
npm WARN saveError ENOENT: no such file or directory, open '<project>\vuecli\package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '<project>\vuecli\package.json'
npm WARN vuecli No description
npm WARN vuecli No repository field.
npm WARN vuecli No README data
npm WARN vuecli No license field.

+ npm@6.4.1
added 387 packages in 19.355s
```
### Tipos de instalación con `vue init`
- `webpack` <nombre-carpeta>
- `webpack-simple` <nombre-carpeta>
- `browserify` <nombre-carpeta>
- `browserify-simple` <nombre-carpeta>
- `pwa` <nombre-carpeta> Tecnología orientada a web progresivas. Une lo mejor de la web y app nativas
- `simple` <nombre-carpeta> Todo en un html 

- **comando:** `vue init webpack webpack`
- **comando:** `cd <nombre-carpeta>; npm run dev` lanza un servidor con el proyecto ejecutandose
```
 DONE  Compiled successfully in 3475ms                     22:31:04
 I  Your application is running here: http://localhost:8080
```

### **`vue init webpack <any-folder>`**

#### build/
```ssh
    build.js
        process.env.NODE_ENV = 'production'
    check-versions.js
    logo.png
    utils.js
    vue-loader.conf.js
    webpack.base.conf.js
    webpack.dev.conf.js
    webpack.prod.conf.js
```
#### config/
```ssh
    dev.env.js
    index.js
    prod.env.js
```
#### src/
```ssh
│   App.vue
│   main.js
│
├───assets
│       logo.png
│
└───components
        HelloWorld.vue
```
#### workflow
```ssh
index.html
	app.js
		main.js
			App.vue
				components/HelloWorld.vue
```
#### `index.html`
```
```
#### `app.js`
```
```
#### `main.js`
```
```
#### `App.vue`
```
```
#### `components/HelloWorld.vue`
```
```



- **comando:** ``
- **comando:** ``