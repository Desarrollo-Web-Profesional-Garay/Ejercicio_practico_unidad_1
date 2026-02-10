# Ejercicio Práctico — Unidad 1

Proyecto React (Vite) que implementa los desafíos 4 y 5 de la unidad 1.

## Desafíos

### 4. Levantar el Estado (Lifting State Up)
Dos botones comparten un mismo estado `count` que vive en el componente padre `App`. Al presionar cualquiera de ellos, ambos contadores se incrementan simultáneamente porque reciben el estado y la función de actualización a través de **props**.

### 5. Lógica Condicional
El componente `AuthStatus` recibe una prop booleana `estaLogueado` y utiliza el operador ternario `? :` para renderizar `<LoginButton />` o `<LogoutButton />` según corresponda.

## Ejecución local

```bash
npm install
npm run dev
```

## Docker

```bash
docker compose up --build
# Abrir http://localhost:3000
```
