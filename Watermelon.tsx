import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, Text, Input, Center, Button } from 'native-base'

import { database } from './src/database'
import { Pacient as PacientModel } from './src/database/model/Pacient'

export default function App_old() {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [pacients, setPacients] = useState<PacientModel[]>([])

  async function hadleSave() {
    await database.write(async () => {
      await database.get<PacientModel>('pacients').create((data) => {
        ;(data.pacientId = id), (data.name = name)
      })
    })
  }

  async function loadData() {
    const pacientsCollection = database.get<PacientModel>('pacients')
    const response = await pacientsCollection.query().fetch()
    setPacients(response)
  }

  useEffect(() => {
    loadData()
  }, [hadleSave])

  return (
    <NativeBaseProvider>
      <Center pt={20}>
        <Text pb={4}>Id</Text>
        <Input mx="3" placeholder="Id" w="80%" onChangeText={setId} />
        <Text py={4}>Nome</Text>
        <Input mx="3" placeholder="Nome" w="80%" onChangeText={setName} />
        <Button my={4} onPress={hadleSave}>
          Salvar
        </Button>
      </Center>
      <StatusBar style="dark" />
      {pacients.map((p) => (
        <Text key={p.pacientId}>{p.name}</Text>
      ))}
    </NativeBaseProvider>
  )
}
