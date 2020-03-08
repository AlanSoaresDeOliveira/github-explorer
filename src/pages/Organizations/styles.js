import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },

  loading: {
    marginTop: Metrics.baseMargin * 2,
  },

  columnWrapper: {
    marginHorizontal: Metrics.baseMargin * 2,
    justifyContent: 'space-between',
  },
});

export default styles;
