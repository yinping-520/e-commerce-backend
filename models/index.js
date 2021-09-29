// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");


// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id"
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE"
});

//connect tag with productTag and product with productTag
Tag.hasMany(ProductTag,{
  foreignKey:'tag_id',
  onDelete: "CASCADE"

});

ProductTag.belongsTo(Tag,{
  foreignKey:'tag_id'
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
})

ProductTag.belongsTo(Product,{
  foreignKey: 'product_id'
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
