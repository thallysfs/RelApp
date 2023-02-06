import {
  Box,
  VStack,
  Radio,
  Stack,
  Text,
  Checkbox,
  ScrollView,
} from 'native-base'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Header } from '../components/Header'
import { useForm, Controller } from 'react-hook-form'

import ChildSvg from '../assets/child.svg'
import { MyButton } from '../components/MyButton'
import { MyInput } from '../components/MyInput'
import { useState } from 'react'

export function AboutChild() {
  const [radioValue, setRadioValue] = useState('masculino')
  const [groupValues, setGroupValues] = useState([])

  const { control } = useForm()
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box p={25} bg="white" flex={1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            title="Inventário de avaliação pediátrica de incapacidade"
            stepIni={1}
            subTitle="Sobre a criança"
          >
            <ChildSvg height={111} width={150} />
          </Header>

          {/* ****Nome**** */}
          <VStack pt={6}>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <MyInput
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="characters"
                />
              )}
              name="name"
            />
            {/* ****Sexo**** */}
            <Radio.Group
              name="gender"
              accessibilityLabel="Sexo"
              value={radioValue}
              onChange={(nextValue) => {
                setRadioValue(nextValue)
              }}
            >
              <Stack flexDirection="row" mx={10} mb={2} alignItems="center">
                <Text fontFamily="heading" pr={3}>
                  Sexo:
                </Text>
                <Radio value="masculino" my={1} colorScheme="indigo">
                  masculino
                </Radio>
                <Radio ml={3} value="feminino" my={1} colorScheme="indigo">
                  Feminino
                </Radio>
              </Stack>
            </Radio.Group>
            {/* ****Data de nascimento**** */}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <MyInput
                  placeholder="Dt Nascimento. Ex: 01/01/2022"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="birthday"
            />
            {/* ****Idade cronológica**** */}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <MyInput
                  placeholder="Idade cronológica"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="chronologicalAge"
            />

            {/* ****Situação atual**** */}
            <Text fontFamily="heading" fontSize="sm">
              {' '}
              Situação da criança:
            </Text>
            <Checkbox.Group
              accessibilityLabel="Escolha uma situação"
              value={groupValues}
              onChange={setGroupValues}
            >
              <Checkbox value="hospitalizada" my={2} colorScheme="indigo">
                Hospitalizada
              </Checkbox>
              <Checkbox value="Cuidado intensivo" mb={2} colorScheme="indigo">
                Cuidado intensivo
              </Checkbox>
              <Checkbox value="Mora em casa" mb={2} colorScheme="indigo">
                Mora em casa
              </Checkbox>
              <Checkbox value="Mora em instituição" mb={2} colorScheme="indigo">
                Mora em instituição
              </Checkbox>
            </Checkbox.Group>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <MyInput
                  placeholder="Outros,qual escola? qual insitutição?"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="other"
            />

            {/* ****Série escolar**** */}
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <MyInput
                  placeholder="Série escolar"
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="grade"
            />

            <Box>
              <MyButton text="Próximo" />
            </Box>
          </VStack>
        </ScrollView>
      </Box>
    </TouchableWithoutFeedback>
  )
}
