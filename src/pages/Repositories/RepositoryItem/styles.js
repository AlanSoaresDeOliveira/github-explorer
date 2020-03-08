import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.baseRadius,
    padding: Metrics.basePadding,
    marginHorizontal: Metrics.baseMargin * 2,
    marginTop: Metrics.baseMargin,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  infoContainer: {
    flexDirection: 'row',
    marginTop: Metrics.baseMargin,
  },
  info: {
    flexDirection: 'row',
    marginRight: Metrics.baseMargin,
    alignItems: 'center',
  },

  infoIcon: {
    color: Colors.dark,
  },

  infoText: {
    color: Colors.dark,
    fontSize: 12,
    marginLeft: Metrics.baseMargin / 2,
  },
});

export default styles;
