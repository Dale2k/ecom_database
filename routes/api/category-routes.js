const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const userData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const userData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // Post example - input
  // {

  // 	"category_name": "Shorts",
  // 	"products": [
  // 		{
  // 			"product_name": "Khakis",
  // 			"price": 20,
  // 			"stock": 1
  // 		}
  // 	]
  // }

  // Post example - output
  // {
  // 	"id": 6,
  // 	"category_name": "Shorts"
  // }

  // create a new category
  try {
    const userData = await Category.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update example
  // {

  // 	"category_name": "Artist",
  // 	"products": [
  // 		{
  // 			"product_name": "Twice-T"
  // 		}
  // 	]
  // }

  // update a category by its `id` value
  try {
    const userData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const userData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
