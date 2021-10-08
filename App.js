import * as React  from 'react';
import { StyleSheet, View, Text, Alert, TouchableHighlight, Image, ScrollView, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { Video } from 'expo-av';



function Feed() {
  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={styles.TextoHome}>Peliculas</Text>

    <Text style={styles.titulo}>Comedia</Text>
    <ScrollView horizontal>
          <View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/scn.jpg')}  
            />
          </View>
          <View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/qslm.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/ueym.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/unem.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/hcc.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/unea.jpg')}  
            />
          </View>
        </ScrollView>


        <Text style={styles.titulo}>Romance</Text>
    <ScrollView horizontal>
          <View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/odm.jpg')}  
            />
          </View>
          <View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/mby.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/crp.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/tnc.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/blme.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/csflpv.jpg')}  
            />
          </View>
        </ScrollView>


        <Text style={styles.titulo}>Accion</Text>
    <ScrollView horizontal>
          <View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/jw.jpg')}  
            />
          </View>
          <View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/nb.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/eusv.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/ef.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/acvr.jpg')}  
            />
          </View><View>
            <Image 
              style={styles.ciudad}
              source={require('./src/img/czho.jpg')}  
            />
          </View>
        </ScrollView>

        <Text>{'\n\n'}</Text>
  </View>
  );
}







function Profile() {

return (
  <ScrollView >
    <Text style={styles.titulo}>Platillos de El Salvador</Text>

    <View>
      <View>
        <Image
          style={styles.mejores}
          source={require('./src/img/frns.jpg')}
        />
      </View>
      <View>
        <Image
          style={styles.mejores}
          source={require('./src/img/tbbt.jpg')}
        />
      </View>
      <View>
        <Image
          style={styles.mejores}
          source={require('./src/img/twd.jpg')}
        />
      </View>
      <View>
        <Image
          style={styles.mejores}
          source={require('./src/img/got.jpg')}
        />
      </View>
      <View>
        <Image
          style={styles.mejores}
          source={require('./src/img/vkgs.jpg')}
        />
      </View>
    </View>
    </ScrollView >
  );
}


function Reproductor() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Video
        ref={video}
        style={styles.video}
        source={require('./src/img/Nadie.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarActiveBackgroundColor: "#feb72b",
        tabBarInactiveTintColor: "#FFF",
        tabBarInactiveBackgroundColor: "#527318"
      }}
    >
      <Tab.Screen
        name="Peliculas"
        component={Feed}
        options={{
          tabBarLabel: 'Peliculas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Series"
        component={Profile}
        options={{
          tabBarLabel: 'Series',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="videocam" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Reproductor"
        component={Reproductor}
        options={{
          tabBarLabel: 'Reproductor',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="play" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


export default function App() {
  
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
  TextoHome: {
    textAlign: 'center',
    fontSize: 50,
    fontStyle: 'italic',
  },
  estiloImagen: {
    width: 75,
    height: 70,
    marginTop: 30,
  },



  banner:{
    height:250,
    flex:1
    },
  titulo:{
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor:{
    marginHorizontal: 10,
  },
  ciudad:{
    width: 200,
    height: 150,
    marginRight: 10,
  },
  mejores:{
    width: '60%',
    height: 150,
    marginVertical: 5,
    flexBasis: '49%'
  },
  listaItem: {
    flexBasis: '49%',
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  


  video: {
    alignSelf: 'center',
    width: '98%',
    height: 350,
  },
  
});