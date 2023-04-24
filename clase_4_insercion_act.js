/*
PASO A PASO -> https://sequelize-org.translate.goog/docs/v6/getting-started/?_x_tr_sl=auto&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp
1 - Conectarse a la base de datos
    * Crear una instancia de Sequelize
    * Hay varias formas de pasar parametros aca se pasan x separados:
                                        - Nombre de la base
                                        - usuario
                                        - contraseña
                                        - host
                                        - dialecto: mariadb, sqllite, etc
    *Despues se prueba la conexion -> funcion authenticate


*/




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
/*Cars.update({ firstName: "Pablo" }, {
  where: {
    lastName: 'Rodriguez'
  }
}).then(() => {
  console.log("Done");
});  Se modifico x el siguiente codigo para afectar a un solo registro*/

Cars.update({ firstName: "PEPE" },{
  where: {
    id: 1
  }
}).then(() => {
  console.log("Done");
});