import { ReactNode } from 'react'
import { Box, HStack, Text, VStack, Icon, IconButton } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

interface Props {
  title: string
  stepIni: number
  help?: boolean
  subTitle: string
  children?: ReactNode
}

export function Header({
  title,
  subTitle,
  stepIni,
  children,
  help = false,
}: Props) {
  const { goBack } = useNavigation()

  return (
    <Box px={4} pt={5}>
      <IconButton
        icon={
          <Icon
            as={AntDesign}
            name="leftcircle"
            color="secondary.50"
            size="md"
          />
        }
        size="sm"
        marginRight={280}
        onPress={goBack}
      />
      <Text fontFamily="heading" fontSize="lg" textAlign="center">
        {title}
      </Text>
      <HStack pt={18} space={2} justifyContent="space-between">
        <VStack>
          <Box flexDirection="row" alignItems="center">
            <Icon as={AntDesign} name="calendar" color="primary.50" />
            <Text fontFamily="body" fontSize="sm" ml={1}>
              30 fev 2023
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center" py={1}>
            <Icon as={AntDesign} name="flag" color="primary.50" />
            <Text fontFamily="body" fontSize="sm" ml={1}>
              {stepIni} / 7
            </Text>
          </Box>
          {help ? (
            <Box flexDirection="row" alignItems="center">
              <Icon as={AntDesign} name="questioncircleo" color="primary.50" />
              <Text fontFamily="body" fontSize="sm" ml={1}>
                Ajuda
              </Text>
            </Box>
          ) : (
            <></>
          )}
        </VStack>
        {children}
      </HStack>
      <Text fontFamily="mono" fontSize="lg" textAlign="center" pt={2}>
        {subTitle}
      </Text>
    </Box>
  )
}
