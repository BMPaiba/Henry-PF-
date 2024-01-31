const { Router } = require("express");


const router = Router();

//rutas para productos
router.get("/products", handler )
router.get("/products/name", handler )
router.get("/products/:id", handler )
router.post("/products", handler )
router.put("/products", handler )
router.delete("/products", handler )

//rutas para posts
router.get("/posts", handler )
router.get("/posts/:id", handler )
router.post("/posts", handler )
router.put("/posts", handler )
router.delete("/posts", handler )


module.exports = router;