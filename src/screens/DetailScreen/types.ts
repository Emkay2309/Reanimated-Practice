import {RouteProp} from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';


export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

export type Props = {
  route : DetailsScreenRouteProp;
};