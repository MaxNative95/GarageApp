import React, { useState, useEffect } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { getList } from '../../services/api'
import CardListItem from '../../components/CardListItem'
import { Space, Title } from './styles'

const Garage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const updateData = async () => {
      const res = await getList()
      setData(res.items)
    }
    updateData()
  }, [])

  console.log(data)
  return (
    <ScrollView>
      <Title>Garage</Title>
      {data.map((item: any) => (
        <>
          <TouchableOpacity
            onPress={() => alert(`Presionado card numero ${item.model}`)}
          >
            <CardListItem
              id={item.model}
              model={item.model}
              make={item.make}
              year={item.year}
              coverURL={item?.image?.url}
            />
          </TouchableOpacity>
          <Space />
        </>
      ))}
    </ScrollView>
  )
}

export default Garage
