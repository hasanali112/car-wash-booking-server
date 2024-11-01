import { Router } from 'express'
import { SlotController } from './slot.controller'
import { schemaValidation } from '../../middleware/validationData'
import { SlotValidation } from './slot.validation'

const router = Router()

router.post(
  '/slots',
  schemaValidation(SlotValidation.slotValidationSchema),
  SlotController.createSlot,
)
router.get('/slots/availability', SlotController.getAllSlot)

export const SlotRouter = router
