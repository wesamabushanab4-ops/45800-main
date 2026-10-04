import express from 'express'
import {
  addCourse,
  deleteCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
} from '../controllers/courseController'

const router = express.Router()

router.get('/', getAllCourses)
router.get('/:id', getCourseById)
router.post('/', addCourse)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)

export default router
