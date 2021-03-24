import React, { useState } from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'
import Headers from '../Components/HeaderComponents'
import BoxesCard from '../Components/BoxesCard'
import MissionDetail from '../Components/MissionDetail'
import LoadingPageComponent from '../Components/LoadingPageComponent'

export default function MissionList(props) {
  const user = useSelector((state) => state.user.user)
  const [modalVisibleDetail, setModalVisibleDetail] = useState(false)
  const [modalMission, setModalMission] = useState(null)
  const isLoading = useSelector((state) => state.user.loadingUser)
  const handleChangePage = (value) => {
    props.navigation.navigate(value)
  }

  return (
    <View style={styles.container}>
      <MissionDetail
        modalVisibleDetail={modalVisibleDetail}
        setModalVisibleDetail={setModalVisibleDetail}
        mission={modalMission}
      />
      <ImageBackground
        source={require('../../src/assets/sociobackgroundtester.jpg')}
        style={{ width: '100%', height: '100%' }}
        resizeMode={'stretch'}
      >
        <Headers />
        <BoxesCard
          modalVisibleDetail={modalVisibleDetail}
          setModalVisibleDetail={setModalVisibleDetail}
          handleChangePage={(value) => handleChangePage(value)}
          setModalMission={setModalMission}
          modalMission={modalMission}
          user={user}
        />
      </ImageBackground>
      <LoadingPageComponent isLoading={isLoading} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    position: 'relative',
  },
})
