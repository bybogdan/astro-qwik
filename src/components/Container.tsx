import { component$, useSignal } from '@builder.io/qwik'
import { Counter } from './Counter'

export const Container = component$(() => {
  const count = useSignal(0)

  return (
    <>
      <Counter count={count} />

      <h1>Count is {count.value}</h1>
    </>
  )
})
