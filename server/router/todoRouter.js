const router = require("express").Router();
const todoController = require("../controller/todoController.js");

router.get("/", todoController.getTodo);
router.get("/id/:id", todoController.getTodoById);
router.post("/", todoController.create);
router.put("/:id", todoController.updated);
router.delete("/:id", todoController.deleteByParams);

module.exports = router;
