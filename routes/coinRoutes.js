import express from 'express'
import { fetchAllCoins, conversion, companyList } from '../controller/coinControllers.js'

const router = express.Router()

router.route('/coins').get(fetchAllCoins)   // Path: http://localhost:3000/api/coins
router.route('/convert-coin').post(conversion)   // Path: http://localhost:3000/api/convert-coin
router.route('/company-list').post(companyList) // Path: http://localhost:3000/api/company-list

export default router
