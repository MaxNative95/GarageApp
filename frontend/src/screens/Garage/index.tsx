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
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists Makers (id integer AUTO_INCREMENT primary key not null, maker text);'
      );
      tx.executeSql(
        'create table if not exists Cars (car_id integer AUTO_INCREMENT primary key not null, makerName text foreign key(id) REFERENCES Makers(id), car text);'
      );
    });
  }, [])

  const FillTables = (data: any) => {
    if (data === undefined || data.length === 0) {
      return false;
    }

    data.map((item) => {
      db.transaction(
        tx => {
          tx.executeSql(`INSERT INTO Makers (maker) VALUES (?)`, [item.make]);
        }
      );
      db.transaction(
        tx => {
          tx.executeSql(`INSERT INTO Cars (maker) VALUES (?)`, [item.model]);
        }
      );
    })
  };

  useEffect(() => {
    const updateData = async () => {
      const res = await getList()
      setData(res.items)
    };
    updateData()
  }, []);


  useEffect(() => {
    if (data.length !== 0 || data !== undefined) {
      FillTables(data)
    }
    return;
  }, [data])

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
};


export default Garage
