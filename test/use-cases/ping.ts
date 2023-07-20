import test from '../_utils'
import { PingUseCase } from '#use-cases/ping'

test('Should return status Ok', async (t) => {
  const response = await PingUseCase()()

  t.truthy(response)
  t.true(response.status === 'Ok')
})
