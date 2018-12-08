const express = require("express");
const router = express.Router();
const {
  userController,
  eventCategoryController,
  eventController
} = require("../controllers");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/user/signin", userController.login);
router.post("/user/signup", userController.signUp);

router.post("/categroy/add", eventCategoryController.addCategory);
router.get("/category/listAll", eventCategoryController.getAllCatgory);

router.post("/event/post", eventController.PostEvent);
router.get("/event/listAll", eventController.getAllEvents);

router;
module.exports = router;
