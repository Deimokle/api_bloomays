import {
  GetMissionsUseCase,
  getMissionsAdapter,
} from '#use-cases/mission/getMissions'
import test from '../../_utils'

test('Should return missions with freelance', async (t) => {
  const adapter = {
    ...getMissionsAdapter,
    getMissions: t.context.sandbox.stub().resolves([]),
  }
  const response = await GetMissionsUseCase(adapter)()

  t.truthy(response)
  t.true(adapter.getMissions.calledOnce)
  t.true(response.length === 0)
})
