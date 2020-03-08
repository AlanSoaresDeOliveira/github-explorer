import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator, FlatList} from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../components/Header/Index';
import OrganizationItem from './OrganizationsItem/index';
import styles from './styles';

const TabIcon = ({tintColor}) => (
  <Icon name="building" size={20} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  };

  async componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({refreshing: true});

    const username = await AsyncStorage.getItem('@Githuber:username');
    const data = await api.get(`/users/${username}/orgs`);

    this.setState({data: data.data, loading: false, refreshing: false});
  };

  renderListItem = ({item}) => <OrganizationItem organization={item} />;

  renderList = () => {
    const {data, refreshing} = this.state;

    return (
      <FlatList
        data={data}
        renderItem={this.renderListItem}
        keyExtractor={item => String(item.id)}
        onRefresh={this.loadOrganizations}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        refreshing={refreshing}
      />
    );
  };
  render() {
    const {loading} = this.state;

    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
