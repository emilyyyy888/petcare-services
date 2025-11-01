const router = require("express").Router();
const Course = require("../models").course;
const courseValidation = require("../validation").courseValidation;

router.use((req, res, next) => {
  console.log("Course route is receiving a request...");
  next();
});

// Get all services in the system
router.get("/", async (req, res) => {
  try {
    let courseFound = await Course.find({})
      .populate("instructor", ["username", "email"])
      .exec();
    return res.send(courseFound);
  } catch (e) {
    return res.status(5000).send(e);
  }
});

// Find services by provider ID
router.get("/instructor/:_instructor_id", async (req, res) => {
  let { _instructor_id } = req.params;
  let coursesFound = await Course.find({ instructor: _instructor_id })
    .populate("instructor", ["username", "email"])
    .exec();
  return res.send(coursesFound);
});

// Find booked services by pet owner ID
router.get("/student/:_student_id", async (req, res) => {
  let { _student_id } = req.params;
  let coursesFound = await Course.find({ students: _student_id })
    .populate("instructor", ["username", "email"])
    .exec();
  return res.send(coursesFound);
});

// Find service by name
router.get("/findByName/:name", async (req, res) => {
  let { name } = req.params;
  try {
    let courseFound = await Course.find({ title: name })
      .populate("instructor", ["email", "username"])
      .exec();
    return res.send(courseFound);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// Find service by ID
router.get("/:_id", async (req, res) => {
  let { _id } = req.params;
  try {
    let courseFound = await Course.findOne({ _id })
      .populate("instructor", ["email"])
      .exec();
    return res.send(courseFound);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// Post a new service
router.post("/", async (req, res) => {
  // Verify data meets requirements
  let { error } = courseValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (req.user.isStudent()) {
    return res
      .status(400)
      .send("Only providers can post new services. If you are a provider, please login with your provider account.");
  }

  let { title, description, price } = req.body;
  try {
    let newCourse = new Course({
      title,
      description,
      price,
      instructor: req.user._id,
    });
    let savedCourse = await newCourse.save();
    return res.send("New service has been saved");
  } catch (e) {
    return res.status(500).send("Unable to create service.");
  }
});

// Allow pet owners to book a service by service ID
router.post("/enroll/:_id", async (req, res) => {
  let { _id } = req.params;
  try {
    let course = await Course.findOne({ _id }).exec();
    course.students.push(req.user._id);
    await course.save();
    return res.send("Booking completed");
  } catch (e) {
    return res.send(e);
  }
});

// Update service
router.patch("/:_id", async (req, res) => {
  // Verify data meets requirements
  let { error } = courseValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let { _id } = req.params;
  // Verify service exists
  try {
    let courseFound = await Course.findOne({ _id });
    if (!courseFound) {
      return res.status(400).send("Service not found. Unable to update service content.");
    }

    // User must be the provider of this service to edit it
    if (courseFound.instructor.equals(req.user._id)) {
      let updatedCourse = await Course.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true,
      });
      return res.send({
        message: "Service has been updated successfully",
        updatedCourse,
      });
    } else {
      return res.status(403).send("Only the provider of this service can edit it.");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.delete("/:_id", async (req, res) => {
  let { _id } = req.params;
  // Verify service exists
  try {
    let courseFound = await Course.findOne({ _id }).exec();
    if (!courseFound) {
      return res.status(400).send("Service not found. Unable to delete service.");
    }

    // User must be the provider of this service to delete it
    if (courseFound.instructor.equals(req.user._id)) {
      await Course.deleteOne({ _id }).exec();
      return res.send("Service has been deleted.");
    } else {
      return res.status(403).send("Only the provider of this service can delete it.");
    }
  } catch (e) {
    return res.status(500).send(e);
  }
});

module.exports = router;
