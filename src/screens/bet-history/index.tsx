import { SafeAreaView } from 'react-native-safe-area-context';
import { FlashList } from '@shopify/flash-list';

import BetHistoryItem from '_components/bet-history-item';

import {styles} from './styles';
import { DATA } from './mock';
import TextInput from '_components/TextInput';

const BetHistory= () => {

  return(
    <SafeAreaView style={styles.container}>
      <FlashList
        data={DATA}
        keyExtractor={item => item._id}
        renderItem={({item }) => <BetHistoryItem {...item}/>}
        estimatedItemSize={200}
      />
      <TextInput label='Casa'/>
    </SafeAreaView>);
};

export default BetHistory;
