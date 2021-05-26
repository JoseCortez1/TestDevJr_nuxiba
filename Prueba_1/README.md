<!-- @format -->

## Directorio para la prueba 1

## Prueba 1

- Lee la documentación del API de [JSONPlaceholder](http://jsonplaceholder.typicode.com/guide/) y crea una aplicación (dentro del directorio **Prueba_1**) en el lenguaje de tu preferencia que realice lo siguiente:
  - [x] Listar a los 10 usuarios **_(10 puntos)_**
  - [x] Al seleccionar un usuario muestra algunos campos con su información(name, username, email, etc.) y coloca 2 botones para poder seleccionar los "posts" y "todos" que estén relacionados con el usuario. **_(15 puntos)_**
  - [ ] Al dar click en el botón de "posts" muestra todas las publicaciones que ha realizado el usuario, cada publicación deberá tener anidados sus comentarios. **_(15 puntos)_**
  - [ ] Al dar click en el botón de "todos" muestra las tareas del usuario ordenadas por la propiedad "id" de mayor a menor. **_(15 puntos)_**
  - [ ] En la sección de "todos", crea un formulario para poder agregar una nueva tarea al usuario, este debe de contener una caja de texto (title), un checkbox (completed) y un botón de guardar. Al dar click en el botón, manda la información necesaria al API con el método HTTP correcto para que la tarea quede guardada. **_(25 puntos)_**

> _Nota: al hacer la petición de la nueva tarea, el API no la guardará y solo regresará un objeto JSON con la propiedad **id** de la nueva tarea agregada (id: 201), esto indica que todo se realizó de forma correcta_

Algunos endpoints que puedes utilizar:

- https://jsonplaceholder.typicode.com/users
- https://jsonplaceholder.typicode.com/users/(userId)
- https://jsonplaceholder.typicode.com/users/(userId)/posts
- https://jsonplaceholder.typicode.com/post/(postId)/comments
- https://jsonplaceholder.typicode.com/users/(userId)/todos

Objeto que espera el servidor para guardar la nueva tarea:

```javascript
{
  "userId": <int>,
  "title": <string>
  "completed": <bool>
}
```

**PLUS: Si conoces algún patrón de diseño de software no dudes en usarlo** **_(+ 10 puntos)_**

---
