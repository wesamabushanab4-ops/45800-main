import express from 'express'
import {
  addCity,
  deleteCity,
  getAllCities,
  getCityById,
  updateCity,
} from '../controllers/cityController'

const router = express.Router()

router.get('/', getAllCities)
router.get('/:id', getCityById)
router.post('/', addCity)
router.put('/:id', updateCity)
router.delete('/:id', deleteCity)

export default router
