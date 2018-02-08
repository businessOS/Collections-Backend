export default (sequelze, DataTypes) => {
  const CompositeOptions = sequelze.define('compositeOptions', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    position: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });

  CompositeOptions.associate = (models) => {
    CompositeOptions.hasOne(models.Products, {
      foreignKey: 'code', // Campo en la tabla destino
      sourceKey: 'product_id', // Campo relacionado
    });
  };

  return CompositeOptions;
};

