const router = require('express').Router();
const { Product, Category, Tag } = require('../../models');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;


//  Product belongs to Category

// Category has many Product

// Product.belongsToMany(Tag, {
// }

// )

// Tag belongs to many Product