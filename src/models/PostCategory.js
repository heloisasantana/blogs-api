module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    categoryId: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    postId: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });
  postCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blog_posts',
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  }
  return postCategory;
}