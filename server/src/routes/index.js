const { Router } = require("express");
const deleteProductsHandler = require("../handlers/deleteProductsHandler");
const getProductsHandler = require("../handlers/getProductsHandler");
const getProductsNameHandler = require("../handlers/getProductsNameHandler");
const getProductsIdHandler = require("../handlers/getProductsIdHandler");
const getProductsNameHandler = require("../handlers/getProductsNameHandler");
const postProductsHandler = require("../handlers/postProductsHandler");
const putProductsHandler = require("../handlers/putProductsHandler");


const router = Router();

// rutas para productos
router.get("/products", getProductsHandler )
router.get("/products/name", getProductsNameHandler )
router.get("/products/:id", getProductsIdHandler )
router.post("/products", postProductsHandler )
router.put("/products", putProductsHandler )
router.delete("/products", deleteProductsHandler )

//rutas para posts
// router.get("/posts", handler )
// router.get("/posts/:id", handler )
// router.post("/posts", handler )
// router.put("/posts", handler )
// router.delete("/posts", handler )


module.exports = router;