import { Box, Input, IInputProps } from 'native-base'

type Props = IInputProps

export function MyInput({ ...rest }: Props) {
  return (
    <Box shadow={9}>
      <Input
        borderColor="primary.100"
        borderRadius={12}
        borderStyle="solid"
        borderBottomWidth={5}
        borderRightWidth={3}
        borderTopWidth={1}
        mb={2}
        fontFamily="body"
        fontSize="14"
        _focus={{
          bgColor: 'white',
          borderColor: 'green.500',
        }}
        {...rest}
      />
    </Box>
  )
}
