import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import { Button, Title } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardWithPhoto from './CongratulationCard'
import { Card, ListItem, Icon } from 'react-native-elements'

export default function Congratulation() {
  const user = useSelector((state) => state.user.user)

  return (
    <View style={styles.container}>
      <Card.Title>
        Congratulation For all Positive things you've done, keep spreading good
        vibes for better humanity -Socio-
      </Card.Title>
      <View style={styles.box}>
        <FlatList
          data={user.activeMissions}
          renderItem={(data) => (
            <View style={styles.inner}>
              <View style={styles.cardContainer}>
                {/* <Text>{data.item.title}</Text> */}
                <CardWithPhoto data={data.item} />
              </View>
            </View>
          )}
          keyExtractor={(item) => item._id}
          style={{ width: '100%' }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    padding: 5,
    marginTop: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    height: '80%',
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#7fdbda',

    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 30,
    width: 50,
  },
  buttoncover: {
    alignItems: 'center',
  },
  cardContainer: {
    width: '80%',
    minHeight: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#c3c3c3',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
})
