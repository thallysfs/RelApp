import { Center, Spinner } from 'native-base'

export function Load() {
  return (
    <Center flex={1} bg="white">
      <Spinner color="primary.50" />
    </Center>
  )
}
