# Pre-entrega Node.js

Proyecto realizado con Node.js utilizando FakeStore API.

## Comandos

npm run start GET products
npm run start GET products/15
npm run start POST products T-Shirt-Rex 300 remeras
npm run start DELETE products/7

## Nota

Al momento de realizar las pruebas, FakeStore API devolvía
HTTP 523 (Origin is unreachable), un error externo del servidor.

El proyecto incluye manejo de errores HTTP mediante try/catch
y validación de response.ok.