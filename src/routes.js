import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {Colors} from './styles';

import Organizations from './pages/Organizations';
import Welcome from './pages/Welcome/';
import Repositores from './pages/Repositories';
const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        User: createBottomTabNavigator(
          {
            Repositores,
            Organizations,
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: Colors.white,
              inactiveTintColor: Colors.whiteTransparent,
              style: {
                backgroundColor: Colors.secundary,
              },
            },
          },
        ),
      },
      {
        initialRouteName: userLogged ? 'User' : 'Welcome',
      },
    ),
  );

export default Routes;

// tela de Rotas
// Entendendo o HASH
