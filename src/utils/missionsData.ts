import { MissionFullModel, MissionType } from '#models/mission'

const dates = [
  {
    beginDate: '2023-06-10',
    endDate: '2023-07-18',
  },
  {
    beginDate: '2023-07-10',
    endDate: '2023-08-20',
  },
  {
    beginDate: '2023-07-29',
    endDate: '2023-08-20',
  },
  {
    beginDate: '2023-08-01',
    endDate: '2023-08-13',
  },
  {
    beginDate: '2023-08-24',
    endDate: '2023-12-13',
  },
]

const freelances = [
  {
    firstname: 'Quentin',
    lastname: 'Dutrevis',
  },
  {
    firstname: 'Jen',
    lastname: 'Lain',
  },
  {
    firstname: 'Ken',
    lastname: 'Heine',
  },
  {
    firstname: 'Stella',
    lastname: 'Artois',
  },
  {
    firstname: 'Florence',
    lastname: 'Charlie',
  },
]

export default dates.map((date, key) => {
  const freelance = freelances[key]
  const newKey = key + 1
  return {
    id: newKey,
    label: `Title m ${newKey}`,
    beginDate: date.beginDate,
    endDate: date.endDate,
    missionType: MissionType.FREELANCE,
    freelance: {
      id: key + 10,
      ...freelance,
      email: `${freelance.firstname.toLowerCase()}.${freelance.lastname.toLowerCase()}@gmail.com`,
    },
  }
}) as MissionFullModel[]
