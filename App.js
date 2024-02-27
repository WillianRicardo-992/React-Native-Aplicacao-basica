import { Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Principal"
            component={TelaPrincipal}
            options={{title:'Tela Principal'}}
          />
          <Stack.Screen
            name="Tela02"
            component={Tela02}
            options={{title:'Tela 02'}}
          />
          <Stack.Screen
            name="Tela03"
            component={Tela03}
            options={{title:'Tela 03'}}
          />
          <Stack.Screen
            name="Tela04"
            component={Tela04}
            options={{title:'Tela 04'}}
          />
          <Stack.Screen
            name="Tela05"
            component={Tela05}
            options={{title:'Tela 05'}}
          />
          <Stack.Screen
            name="Tela06"
            component={Tela06}
            options={{title:'Tela 06'}}
          />
          <Stack.Screen
            name="Tela07"
            component={Tela07}
            options={{title:'Tela 07'}}
          />
          <Stack.Screen
            name="Tela08"
            component={Tela08}
            options={{title:'Tela 08'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

const TelaPrincipal = ({navigation}) => {
  return(
      <View>
        <Button
          title='Ir para a Tela 02'
          onPress={() => navigation.navigate('Tela02', {name:'Tela02'})}
        ></Button>
        <Button
          title='Ir para a Tela 03'
          onPress={() => navigation.navigate('Tela03', {name:'Tela03'})}
        ></Button>
        <Button
          title='Ir para a Tela 04'
          onPress={() => navigation.navigate('Tela04', {name:'Tela04'})}
        ></Button>
        <Button
          title='Ir para a Tela 05'
          onPress={() => navigation.navigate('Tela05', {name:'Tela05'})}
        ></Button>
        <Button
          title='Ir para a Tela 06'
          onPress={() => navigation.navigate('Tela06', {name:'Tela06'})}
        ></Button>
        <Button
          title='Ir para a Tela 07'
          onPress={() => navigation.navigate('Tela07', {name:'Tela07'})}
        ></Button>
        <Button
          title='Ir para a Tela 08'
          onPress={() => navigation.navigate('Tela08', {name:'Tela08'})}
        ></Button>
        
      </View>
  );
};

const Tela02 = ({navigation}) => {
  return(
      
       <View style={{flex: 1, backgroundColor: 'red'}}>
        <Button
          title='Ir para a Tela 03'
          onPress={() => navigation.navigate('Tela03', {name:'Tela03'})}
        ></Button>
        <Text>Estou na Tela02</Text>
      </View>
      
  );
};

const Tela03 = ({navigation}) => {
  return(
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <Button
          title='Ir para a Tela 04'
          onPress={() => navigation.navigate('Tela04', {name:'Tela04'})}
        ></Button>
        <Text>Estou na Tela03</Text>
      </View>
  );
};

const Tela04 = ({navigation}) => {
  return(
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Button
          title='Ir para a Tela 05'
          onPress={() => navigation.navigate('Tela05', {name:'Tela05'})}
        ></Button>
        <Text>Estou na Tela04</Text>
      </View>
  );
};

const Tela05 = ({navigation}) => {
  return(
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        <Button
          title='Ir para a Tela 06'
          onPress={() => navigation.navigate('Tela06', {name:'Tela06'})}
        ></Button>
        <Text>Estou na Tela05</Text>
      </View>
  );
};

const Tela06 = ({navigation}) => {
  return(
      <View style={{flex: 1, backgroundColor: 'brown'}}>
        <Button
          title='Ir para a Tela 07'
          onPress={() => navigation.navigate('Tela07', {name:'Tela07'})}
        ></Button>
        <Text>Estou na Tela06</Text>
      </View>
  );
};

const Tela07 = ({navigation}) => {
  return(
      <View style={{flex: 1, backgroundColor: 'purple'}}>
        <Button
          title='Ir para a Tela 08'
          onPress={() => navigation.navigate('Tela08', {name:'Tela08'})}
        ></Button>
        <Text>Estou na Tela07</Text>
      </View>
  );
};

const Tela08 = ({navigation}) => {
  return(
      <View style={{flex: 1, backgroundColor: 'gray'}}>
        <Button
          title='Ir para a Tela Principal'
          onPress={() => navigation.navigate('Principal', {name:'Tela Principal'})}
        ></Button>
        <Text>Estou na Tela08</Text>
      </View>
  );
};


export default MyStack;