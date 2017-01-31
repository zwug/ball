# Website for Tridevyatoe

## Dependencies

* node ^5.5.0
* postgreSQL ^9.6

## Installation
```
cp server/config/config.base.json server/config/config.json
```
Then create database in postgreSQL, set user, password and alter config.json with your data

```
npm i
cd server && ./../node_modules/.bin/sequelize db:migrate && cd ..
npm start
```
Then open [http://localhost:3000/](http://localhost:3000/).
