import { Box, Text, Icon } from 'native-base'
import { MyButton } from '../components/MyButton'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import DoctorSvg from '../assets/doctor.svg'

export function Home() {
  const { navigate } = useNavigation<any>()

  function handleStartTest() {
    navigate('AboutChild')
  }

  return (
    <Box p={25} bg="white">
      <Text pt={55} fontFamily="heading" fontSize="lg" textAlign="center">
        Bem vindo ao App de {'\n'}automação do PEDI
      </Text>
      <MyButton text="Iniciar avaliação" mt={50} onPress={handleStartTest} />
      <MyButton text="Consultar testes realizados" type="secondary" mt={30} />
      <Box paddingX={39} pt={65}>
        <DoctorSvg height={243} width={282} />
      </Box>
      <Text textAlign="center" pt={20}>
        Feito por Thallys
      </Text>
      <Text textAlign="center">
        <Icon as={AntDesign} name="mail" size={15} color="black" />
        thallys@hotmail.com
      </Text>
    </Box>
  )
}
