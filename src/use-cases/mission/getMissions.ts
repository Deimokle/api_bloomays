import { getMissions } from '#controllers/mission'
import * as MissionRepository from '#repositories/mission'

interface GetMissionsUseCaseContext {
  getMissions: typeof MissionRepository.getMany
}

export const getMissionsAdapter: GetMissionsUseCaseContext = {
  getMissions: MissionRepository.getMany,
}

export const GetMissionsUseCase =
  (context: GetMissionsUseCaseContext) => async () => {
    return await context.getMissions()
  }
