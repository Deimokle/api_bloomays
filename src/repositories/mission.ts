import { MissionModel, MissionFullModel } from '#models/mission'
import MissionsData from '#utils/missionsData'

export const getMany = async (): Promise<MissionFullModel[]> => {
  return MissionsData
}
