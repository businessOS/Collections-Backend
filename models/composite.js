export default (sequelze, DataTypes) => {
  const Composite = sequelze.define('composite', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    size: DataTypes.FLOAT,
    deep: DataTypes.FLOAT,
    name: DataTypes.STRING,
    note: DataTypes.STRING,
    image: DataTypes.STRING,
    image2: DataTypes.STRING,
    co: DataTypes.STRING,
    module: DataTypes.STRING,
  });

  Composite.associate = (models) => {
    Composite.hasMany(models.CompositeDetail, {
      onDelete: 'CASCADE',
      foreignKey: 'code', // Campo en la tabla destino (target)
      sourceKey: 'code', // campo relacionado
    });
  };

  return Composite;
};
