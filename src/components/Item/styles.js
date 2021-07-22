import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      minHeight: 80,
      backgroundColor: '#DED6FF',
      borderRadius: 10,
      marginVertical: 15
    },
    smallCard: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingHorizontal: 70,
      paddingVertical: 10
    },
    moreInfo: {
      borderTopWidth: 1,
      padding: 10
    },
    text: {
      color: '#000000',
      fontSize: 18
    },
    image: {
      width: 60,
      height: 60,
      borderRadius: 30
    }
});
  