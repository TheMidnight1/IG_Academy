const express = require("express");

const router = express.Router();
const homeController = require("@/controllers/HomeController");
if (!homeController) {
    console.error("Error: HomeController is undefined. Check the module path or export.");
    process.exit(1); // Exit the application to prevent runtime errors
}


// --------------FRONTEND ROUTES-------------------------------------
router.get("/", homeController.getPage);
router.get("/page/:slug", homeController.getStaticPage);
router.get("/category/:slug", homeController.getCategoryListingPage);
router.get("/post/:postId", homeController.getPostDetailPage);

router.post('/submit-tutor-form', homeController.submitStudentForm);

// router.get("/search/",homeController.getSearchPage);

// router.get('/contact', (req, res) => {
//     res.render('theme/IG_Academy/pages/contact',{ showingpage: 'contact'}); 
//   });
router.get('/contact', homeController.getContactPage);


// --------------FRONTEND ROUTES END---------------------------------

module.exports = router;