export default (sequelze, DataTypes) => {
  const Products = sequelze.define('products', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    size: DataTypes.FLOAT,
    width: DataTypes.FLOAT,
    height: DataTypes.FLOAT,
    deep: DataTypes.FLOAT,
    name: DataTypes.STRING,
    note: DataTypes.STRING,
    image: DataTypes.STRING,
    image2: DataTypes.STRING,
    material: DataTypes.STRING,
    co: DataTypes.STRING,
    module: DataTypes.STRING,
  });

  Products.associate = (models) => {
    Products.belongsTo(models.Colors, {
      foreignKey: 'color_id', // Campo relacionado
      targetKey: 'code', // Campo en la tabla destino
    });
  };

  return Products;
};

