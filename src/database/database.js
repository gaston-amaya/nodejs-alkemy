import Sequelize from 'sequelize';

export const sequelize = new Sequelize('testdb',
'GASTON',
'',
{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        require: 300000,
        idle: 10000
    },
    logging: false
})

