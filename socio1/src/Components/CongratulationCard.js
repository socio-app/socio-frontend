import React from 'react'
import { View, StyleSheet, Text, Image, FlatList } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'

const CardWithPhoto = (props) => {
  return (
    <View style={{ width: '100%' }}>
      <Card style={styles.container}>
        <Card.Content style={{ alignItems: 'center' }}>
          <Title style={styles.Title}>{props.data.title}</Title>
          <View style={{ alignItems: 'center' }}>
            <Paragraph>Deksripsi: ......</Paragraph>
          </View>
        </Card.Content>
        <Card.Cover
          source={{ uri: props.data.imageUri }}
          style={{ borderRadius: 15 }}
        />
        <View style={{ alignItems: 'center' }}>
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#dddddd',
  },
  checkbox: {
    borderWidth: 1,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    alignItems: 'center',
  },
})

export default CardWithPhoto
