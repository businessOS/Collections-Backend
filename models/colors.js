export default (sequelze, DataTypes) => {
  const Colors = sequelze.define('colors', {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    note: DataTypes.STRING,
    image: DataTypes.STRING,
    image2: DataTypes.STRING,
  });

  return Colors;
};
