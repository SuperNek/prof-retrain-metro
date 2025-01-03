import { Router } from 'express';
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from '../controllers/courseController.js';

const router = Router();

router.post('/', createCourse);

router.get('/', getAllCourses);

router.get('/:id', getCourseById);

router.put('/:id', updateCourse);

router.delete('/:id', deleteCourse);

export default router;
