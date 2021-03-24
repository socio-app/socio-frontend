import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Card, Title, Paragraph } from 'react-native-paper'
import * as Sharing from 'expo-sharing'
import * as FileSystem from 'expo-file-system'

const CardWithPhoto = (props) => {
  const callback = (downloadProgress) => {
    const progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite
  }

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`)
      return
    }

    const downloadResumable = FileSystem.createDownloadResumable(
      props.data.imageUri,
      FileSystem.documentDirectory + 'small.jpg',
      {},
      callback
    )

    const { uri } = await downloadResumable.downloadAsync()
    await Sharing.shareAsync(uri, { dialogTitle: props.data.title })
  }

  return (
    <View style={{ width: '100%' }}>
      <Card style={styles.container}>
        <Card.Content style={{ alignItems: 'center' }}>
          <Title style={styles.Title}>{props.data.title}</Title>
          <View style={{ alignItems: 'center' }}>
            <Paragraph>{props.data.description}</Paragraph>
          </View>
        </Card.Content>
        <Card.Cover
          source={{ uri: props.data.imageUri }}
          style={{ borderRadius: 15 }}
        />
        <View style={{ alignItems: 'center' }}>
          <Card.Actions>
            <Button onPress={openShareDialogAsync}>Share</Button>
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
    backgroundColor: '#e1e2f1',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 4,
    shadowColor: 'white',
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
