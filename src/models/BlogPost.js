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
    published: { 
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
   },
    updated: { 
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
   },
    userId: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
    }
  },
  {
    timestamps: false,
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