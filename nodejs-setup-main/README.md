# Node JS setup
Version 1.0.0

This is nodejs project basic setup to create REST API services

---

**Project structure**
- .env to store environment variables
- utils: provide utility functions
- routes: api end points
- models: setup data models and query
- controllers: manage response
- config: configuration

---

##First install
```sh
npm install
```

##To run app
```sh
npm install
node ./src/app.js
```

##Run with pm2
**Recommended method**
```sh
npm install pm2
```

```sh
pm2 start ./src/app.js
```

