const express = require("express");
const upload = require("../middleware/uploadMiddleware");


const router = express.Router();
const homeController = require("@/controllers/HomeController");
const masterController = require("@/controllers/MasterController");
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

router.post('/submit-teacher-form', upload.fields([
    { name: 'teacherCV', maxCount: 1 },
    { name: 'qualificationCert', maxCount: 1 },
]),homeController.submitTeacherForm);


// Route for searching tutors
router.get('/search/tutors', homeController.searchTutors);
// Route for searching students
router.get('/search/students', homeController.searchStudents);


// router.get('/contact', (req, res) => {
//     res.render('theme/IG_Academy/pages/contact',{ showingpage: 'contact'}); 
//   });
router.get('/contact', homeController.getContactPage);

router.get('/api/province',masterController.getProvinces);

router.get('/api/districts/:province',masterController.getDistricts);

router.get('/api/municipalities/:district',masterController.getMunicipalities);

router.get('/api/area/:municipality',masterController.getAreas);

// --------------FRONTEND ROUTES END---------------------------------

module.exports = router;