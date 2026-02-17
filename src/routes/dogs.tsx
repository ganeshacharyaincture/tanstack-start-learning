import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'


async function getDogBreeds() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all')
  const data = await res.json()
  return Object.keys(data.message)
}

const getDogBreedsFn = createServerFn({
  method: 'GET',
}).handler(() => {
  return getDogBreeds()
})

export const Route = createFileRoute('/dogs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <div>Hello "/dogs"!</div>
    <button onClick={() => getDogBreedsFn().then(console.log)}>Get Dog Breeds</button>
  </>
}
