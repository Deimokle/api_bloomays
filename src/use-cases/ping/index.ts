interface IHealth {
  status: string
}

export type IPingUseCase = {}

export const PingUseCaseContext: IPingUseCase = {}

export const PingUseCase =
  (context: IPingUseCase = PingUseCaseContext) =>
  async (): Promise<IHealth> => {
    return { status: 'Ok' }
  }
