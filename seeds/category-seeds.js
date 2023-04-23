const { Category } = require("../models");

const userData = [
  {
    category_name: "Shirts",
  },
  {
    category_name: "Shorts",
  },
  {
    category_name: "Music",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Shoes",
  },
];

const seedCategories = () => Category.bulkCreate(userData);

module.exports = seedCategories;
