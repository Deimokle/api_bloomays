import { FreelanceModel } from './freelance'

export enum MissionType {
  CDI = 'CDI',
  FREELANCE = 'FREELANCE',
  CDD = 'CDD',
}

export type MissionModel = {
  id: number
  label: string
  beginDate: string
  endDate: string
  missionType: MissionType
}

export type MissionFullModel = MissionModel & {
  freelance?: FreelanceModel
}
