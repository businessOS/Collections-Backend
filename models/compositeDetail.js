export default (sequelze, DataTypes) => {
  const CompositeDetail = sequelze.define('compositeDetail', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    position: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });

  CompositeDetail.associate = (models) => {
    CompositeDetail.belongsTo(models.Composite, {
      foreignKey: 'code', // Campo relacionado
      targetKey: 'code', // Campo en la tabla destino
    });
    CompositeDetail.hasMany(models.CompositeOptions, {
      onDelete: 'CASCADE',
      foreignKey: 'options',
      sourceKey: 'code',
    });
    CompositeDetail.hasOne(models.Products, {
      foreignKey: 'product_id', // Campo en la tabla destino
      sourcetKey: 'code', // Campo relacionado
    });
  };

  return CompositeDetail;
};
