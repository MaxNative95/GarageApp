import React, { useState, useEffect } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { getList } from '../../services/api'
import CardListItem from '../../components/CardListItem'
import { Space, Title } from './styles'
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.testDb');

const Garage = ({ navigation }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const updateData = async () => {
      const res = await getList()
      setData(res.items)
    }
    updateData()
  }, [])

  // useEffect(() => {
  //   db.transaction(tx => {
  //     tx.executeSql(
  //       'create table if not exists items (id integer primary key not null, done int, value text);'
  //     );
  //   });
  // }, []);



  return (
    <ScrollView>
      <Title>Garage</Title>
      {data.map((item: any) => (
        <>
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('Details', { item: item })}
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
