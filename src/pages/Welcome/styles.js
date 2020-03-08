import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secundary,
    padding: Metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  statusBar: {
    backgroundColor: Colors.primary,
  },

  title: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },

  text: {
    textAlign: 'center',
    marginTop: Metrics.baseMargin * 2,
    color: Colors.light,
    fontSize: 15,
    lineHeight: 21,
  },

  error: {
    color: Colors.danger,
    textAlign: 'center',
    marginTop: Metrics.baseMargin,
  },

  from: {
    marginTop: Metrics.baseMargin * 2,
  },

  input: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.baseRadius,
    height: 44,
    marginTop: Metrics.baseMargin * 2,
    paddingHorizontal: Metrics.basePadding,
  },

  button: {
    backgroundColor: Colors.primary,
    borderRadius: Metrics.baseRadius,
    height: 44,
    marginTop: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
