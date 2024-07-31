import { Router } from 'express'
import { SlotController } from './slot.controller'

const router = Router()

router.post('/slots', SlotController.createSlot)
router.get('/slots/availability', SlotController.getAllSlot)

export const SlotRouter = router
