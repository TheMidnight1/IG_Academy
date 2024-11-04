const express = require("express");

const router = express.Router();
const homeController = require("@/controllers/HomeController");


// --------------FRONTEND ROUTES-------------------------------------
router.get("/", homeController.getPage);
router.get("/page/:slug", homeController.getStaticPage);
router.get("/category/:slug", homeController.getCategoryListingPage);
router.get("/post/:postId", homeController.getPostDetailPage);

// router.get('/contact', (req, res) => {
//     res.render('theme/IG_Academy/pages/contact',{ showingpage: 'contact'}); 
//   });
router.get('/contact', homeController.getContactPage);


// --------------FRONTEND ROUTES END---------------------------------

module.exports = router;