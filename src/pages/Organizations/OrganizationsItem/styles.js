import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: Metrics.baseRadius,
    padding: Metrics.basePadding,
    marginTop: Metrics.baseMargin,
    alignItems: 'center',
    maxWidth: (Metrics.screenWidth - 60) / 2,
  },

  avatar: {
    width: 50,
    height: 50,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.darker,
    marginTop: Metrics.baseMargin,
  },
});

export default styles;
