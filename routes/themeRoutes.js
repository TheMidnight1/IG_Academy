const express = require("express");

const router = express.Router();
const homeController = require("@/controllers/HomeController");


// --------------FRONTEND ROUTES-------------------------------------
router.get("/", homeController.getPage);
router.get("/page/:slug", homeController.getStaticPage);
router.get("/category/:slug", homeController.getCategoryListingPage);
router.get("/post/:postId", homeController.getPostDetailPage);
// --------------FRONTEND ROUTES END---------------------------------

module.exports = router;