import { component$, type Signal } from '@builder.io/qwik'

export const Counter = component$<{ count: Signal }>((props) => {
  return (
    <button style={{ cursor: 'pointer' }} onClick$={() => props.count.value++}>
      <h3>CLICK ME 👆</h3>
    </button>
  )
})
