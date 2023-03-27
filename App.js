import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'

const gray = '#91A1BD'

export default function App() {

  const Morph = ({children, size, style}) => {
    return(
      <View style={styles.topShadow} >
        <View style={styles.bottomShadow} >
          <View style={[
            styles.inner, 
            {width: size || 40, height: size || 40, borderRadius: size / 2 || 20},
            style
          ]} >
            {children}
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{alignSelf: 'stretch'}} >

        <View style={{marginHorizontal: 32, marginTop: 32}} >

          <View style={styles.topContainer} >
            <Morph size={48} >
              <AntDesign name='arrowleft' size={20} color={gray} />
            </Morph>

            <View>
              <Text style={styles.playing} >Neumorphism</Text>
            </View>

            <Morph size={48} >
              <Entypo name='menu' size={24} color={gray} />
            </Morph>
          </View>

          <View style={styles.songArtContainer} >
            <Morph size={300} >
              <Image source={require('./assets/flower.jpg')} style={styles.songArt} />
            </Morph>
          </View>

          <View style={styles.songContainer} >
            <Text style={styles.title} >Lost her</Text>
            <Text style={styles.artist} >Artist ft. Artist</Text>
          </View>

          <View style={styles.trackContainer} >
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
              <Text style={styles.time} >4:20</Text>
              <Text style={styles.time} >8:00</Text>
            </View>
            <Slider 
              minimumValue={0} 
              maximumValue={1} 
              minimumTrackTintColor='#8AAAFF' 
              maximumTrackTintColor='#DAE0F4'
              thumbTintColor='#7B9BFF' 
            />
          </View>


        <View style={styles.controlsContainer} >
          <Morph size={80}>
            <MaterialIcons name='fast-rewind' size={24} color={gray} />
          </Morph>

          <Morph size={80} style={{backgroundColor: '#8AAAFF', borderColor: '#8AAAFF'}} >
            <Ionicons name='ios-pause' size={24} color='#FFF' />
          </Morph>

          <Morph size={80}>
            <MaterialIcons name='fast-forward' size={24} color={gray} />
          </Morph>
        </View>

        </View>


      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE9FD',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inner: {
    backgroundColor: '#DEE9F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E2ECFD',
    borderWidth: 1
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#FDFFFF'
  },
  bottomShadow: {
    shadowOffset: {
      width: 6,
      height: 6
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: '#B7C4DD'
  },
  playing: {
    color: gray,
    fontWeight:'700',
    fontSize: 20
  },
  songArtContainer: {
    marginVertical: 32,
    alignItems: 'center'
  },
  songArt: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 10,
    borderColor: '#D7E1F3'
  },
  songContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    color: '#6C7A93',
    fontWeight: '600'
  },
  artist: {
    fontSize: 14,
    marginTop: 6,
    color: gray,
    fontWeight: '500'
  },
  trackContainer: {
    marginTop: 32,
    marginBottom: 64
  },
  time: {
    fontSize: 10,
    color: gray,
    fontWeight: '700'
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
