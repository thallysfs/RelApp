import { IButtonProps, Button, Text } from 'native-base'

interface Props extends IButtonProps {
  text: string
  type?: 'primary' | 'secondary'
}

export function MyButton({ text, type = 'primary', ...rest }: Props) {
  const bgColor = type === 'primary' ? 'primary.50' : 'secondary.50'
  const colorPressed = type === 'primary' ? 'primary.100' : 'muted.500'

  return (
    <Button rounded={12} bg={bgColor} _pressed={{ bg: colorPressed }} {...rest}>
      <Text fontFamily="heading" fontSize="md" color="white">
        {text}
      </Text>
    </Button>
  )
}
