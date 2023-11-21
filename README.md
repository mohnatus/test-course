## Запуск тестов

```
npm run test
```

Команда без Jest:

```
node --experimental-modules --no-warnings ./tests/capitalize.test.js
```

Команда для Jest:

```
NODE_OPTIONS=--experimental-vm-modules jest
```