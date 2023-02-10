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

type FormDataProps = {
  name: string
  birthday: string
  chronologicalAge: string
  other: string
  grade: string
}

export function AboutChild() {
  const [radioValue, setRadioValue] = useState('masculino')
  const [groupValues, setGroupValues] = useState([])

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>()

  function handleSaveFormAboutChild({
    name,
    birthday,
    chronologicalAge,
    other,
    grade,
  }: FormDataProps) {
    console.log({ name, birthday, chronologicalAge, other, grade })
  }

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
              name="name"
              rules={{ required: 'Informe o nome' }}
              render={({ field: { onChange, value } }) => (
                <MyInput
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                  autoCapitalize="characters"
                />
              )}
            />
            <Text color="red.500">{errors.name?.message}</Text>

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
              name="birthday"
              rules={{
                required: 'Informe a data de nascimento dd/mm/aaaa',
                pattern: {
                  value:
                    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/i,
                  message: 'Informe a data no padrão dd/mm/aaaa',
                },
              }}
              render={({ field: { onChange, value } }) => (
                <MyInput
                  placeholder="Dt Nascimento. Ex: 01/01/2022"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Text color="red.500">{errors.birthday?.message}</Text>

            {/* ****Idade cronológica**** */}
            <Controller
              control={control}
              name="chronologicalAge"
              rules={{ required: 'Informe a idade cronológica' }}
              render={({ field: { onChange, value } }) => (
                <MyInput
                  placeholder="Idade cronológica"
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              )}
            />
            <Text color="red.500">{errors.chronologicalAge?.message}</Text>

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
              name="other"
              render={({ field: { onChange, value } }) => (
                <MyInput
                  placeholder="Outros,qual escola? qual insitutição?"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            {/* ****Série escolar**** */}
            <Controller
              control={control}
              name="grade"
              render={({ field: { onChange, value } }) => (
                <MyInput
                  placeholder="Série escolar"
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSaveFormAboutChild)}
                  returnKeyType="send"
                />
              )}
            />

            <Box>
              <MyButton
                text="Próximo"
                onPress={handleSubmit(handleSaveFormAboutChild)}
              />
            </Box>
          </VStack>
        </ScrollView>
      </Box>
    </TouchableWithoutFeedback>
  )
}
