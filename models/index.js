import Sequelize from 'sequelize';

const sequelize = new Sequelize('iTouchBusiness', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

const models = {
  Products: sequelize.import('./products'),
  Composite: sequelize.import('./composite'),
  CompositeDetail: sequelize.import('./compositeDetail'),
  CompositeOptions: sequelize.import('./compositeOptions'),
  Colors: sequelize.import('./colors'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
