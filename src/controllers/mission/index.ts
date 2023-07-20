import {
  GetMissionsUseCase,
  getMissionsAdapter,
} from '#use-cases/mission/getMissions'

export const getMissions = async (req, res, next) => {
  return GetMissionsUseCase({
    ...getMissionsAdapter,
  })()
}
