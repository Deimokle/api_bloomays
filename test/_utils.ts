import ava, { TestFn, ExecutionContext } from 'ava'
import { SinonSandbox, SinonStub, createSandbox } from 'sinon'

type IContext = { [key: string]: (...args: any) => any }
type Stub<T extends (...args: any) => any> = SinonStub<
  Parameters<T>,
  ReturnType<T>
>
type Stubs<C extends IContext> = { [Property in keyof C]: Stub<C[Property]> }

interface SinonContext {
  sandbox: SinonSandbox
  createContext: <C extends IContext>(keys: Array<keyof C>) => Stubs<C>
}

const test = ava as TestFn<SinonContext>

const utilCreateContext =
  (t: ExecutionContext<SinonContext>) =>
  <C extends IContext>(keys: Array<keyof C>) => {
    return keys.reduce<Stubs<C>>((stubs, name) => {
      stubs[name] = t.context.sandbox.stub()
      return stubs
    }, {} as Stubs<C>)
  }

test.beforeEach((t) => {
  t.context.sandbox = createSandbox()

  t.context.createContext = utilCreateContext(t)
})

export default test
