import { Router } from 'express'
import * as cars from './cars.json'
import { resize } from './resize';
const router = Router()

router.get('/', (req, res) => {
  res.json(cars)
});

//route to serve resized and cached images
router.get('/resizedImage', (req, res) => {
  const widthString = req.query.width
  const heightString = req.query.height
  const format = req.query.format
  let width, height
  if (typeof widthString === 'string') {
    width = parseInt(widthString)
  };

  if (typeof heightString === 'string') {
    height = parseInt(heightString)
  };
  res.type(`image/${format || 'png'}`)
  resize('hh.jpeg', format, width, height).pipe(res)
});

export default router
