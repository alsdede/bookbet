import React from 'react';
import { View,Image } from 'react-native';
import {styles} from './styles';
import Text from '_components/Text';
import LolIcon from '_src/assets/game/LolIcon';

type BetHistoryItemProps ={
  _id:string;
  date:string;
  type:string;
  bookmaker:string;
  game:string;
  league:string;
  teamA:string;
  teamB:string;
  market:string;
  map:number;
  odd:string;
  entry:string;
  gain:string;
  profit:string;
}

const BetHistoryItem = ({_id,date,type,bookmaker,game,league,teamA,teamB,market,map,odd,entry,gain,profit}:BetHistoryItemProps) => {





  return <View style={styles.container}>
    <View style={styles.status}>
      <Text size="md" style={styles.statusText} weight='bold'>DERROTA</Text>
    </View>
    <View style={styles.content}>
      <View style={styles.header}>
        <Text size="md">
          {date}
        </Text>
        <View style={styles.type}>
          <Text size="md" color='white'>
            {type}
          </Text>
        </View>
      </View>

      <View style={styles.gameInfo}>
        <LolIcon/>
        <View>
          <Text size='lg' color="darkGray" weight='bold'>JDG  <Text weight='bold' color="gray">VS</Text> EDG</Text>
        </View>

        <View style={styles.teams}>
          <View style={styles.teamWrapper}>
            <Image style={styles.teamImage} source={{uri:'https://res.cloudinary.com/rivalry/image/fetch/w_30,h_30,c_fit,q_90,dpr_2/f_auto/https://raw.githubusercontent.com/lootmarket/esport-team-logos/master/league-of-legends/jd-gaming/jd-gaming-logo.png'}}/>
            <Text weight='bold' color="gray">MAPA 1 - VITÓRIA</Text>
          </View>


        </View>
        <View>
          <Text size='lg' weight='bold' color="red">-R$250,00</Text>
          <Text size='lg' weight='bold' color="secondary">R$250,00</Text>
          <Text size='md' weight='semiBold' color="darkGray">ODD@2.0</Text>
        </View>
      </View>
    </View>

  </View>;
};

export default BetHistoryItem;
