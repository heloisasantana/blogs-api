module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'categories',
    });
    return category;
  }