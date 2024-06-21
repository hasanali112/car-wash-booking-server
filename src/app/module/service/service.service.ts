import { TService } from './service.inteface'
import { Service } from './service.model'

const createService = async (payload: TService) => {
  const result = await Service.create(payload)
  return result
}

const getService = async () => {
  const result = await Service.find()
  return result
}

const getServiceById = async (_id: string) => {
  const result = await Service.findById(_id)
  return result
}

const updateServiceById = async (_id: string, payload: Partial<TService>) => {
  const result = await Service.findByIdAndUpdate(_id, payload, {
    new: true,
  })
  return result
}

export const serviceService = {
  createService,
  getServiceById,
  getService,
  updateServiceById,
}
