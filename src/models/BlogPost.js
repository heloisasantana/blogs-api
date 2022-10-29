module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  },
  {
    tableName: 'blog_posts',
    underscored: true,
  });
  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'users',
    })
  }
  return blogPost;
}