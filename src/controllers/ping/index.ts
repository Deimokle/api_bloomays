import { PingUseCase } from '#use-cases/ping'

export const pingController = async (req, res, next) => {
  return PingUseCase()()
}
