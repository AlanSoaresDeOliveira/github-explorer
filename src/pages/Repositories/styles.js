import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },

  loading: {
    marginTop: Metrics.baseMargin * 2,
  },
});

export default styles;
