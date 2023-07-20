import { FreelanceModel } from './freelance'

export type MissionModel = {
  id: number
  label: string
  beginDate: string
  endDate: string
  missionType: string
}

export type MissionFullModel = MissionModel & {
  freelance?: FreelanceModel
}
