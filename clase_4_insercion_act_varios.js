
const Sequelize = require('sequelize');

const sequelize = new Sequelize('prueba', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


class Cars extends Sequelize.Model {}
Cars.init({
  firstName: Sequelize.STRING,
  lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });

/* crea usuario -> cada vez que se corre crea un usuario Juan Perez */
sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Juan',
    lastName: 'Perez'
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });

//actualiza registro -> modifica el nombre de todos los que tienen el apellido Rodriguez
Cars.update({ firstName: "Sonico" }, {
  where: {
    lastName: 'Perez'
  }
}).then(() => {
  console.log("Done");
});

