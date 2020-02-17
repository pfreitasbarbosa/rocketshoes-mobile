import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #191920;
`;

export const DisplayWrapper = styled.View`
  background: #fff;
  padding: 8px;
  border-radius: 4px;
`;

export const ProductInfoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ProductContainer = styled.View`
  background: #fff;
  padding: 8px;
  margin-bottom: 10px;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  border-radius: 20px;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProductInfoContainer = styled.View`
  flex: 1;
  margin-left: 16px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

export const DeleteContainer = styled.TouchableOpacity``;

export const ProductPriceBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background: #eee;
  height: 40px;
  border-radius: 4px;
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const DecreaseButton = styled.TouchableOpacity``;

export const ProductQuantity = styled.TextInput`
  background: #fff;
  padding: 0;
  margin: 0 8px;
  height: 26px;
  width: 48px;
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
`;

export const IncreaseButton = styled.TouchableOpacity``;

export const SubTotal = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-right: 10px;
`;

export const TotalContainer = styled.View`
  margin-top: 15px;
  background: #fff;
  align-items: center;
`;

export const TotalText = styled.Text`
  color: #bbb;
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const TotalPrice = styled.Text`
  font-weight: bold;
  font-size: 32px;
`;

export const CompleteOrderButton = styled(RectButton)`
  margin-top: 35px;
  background: #7159c1;
  border-radius: 4px;
  padding: 16px 0;
  flex-direction: row;
`;

export const CompleteOrderButtonText = styled.Text`
  color: #fff;
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

export const EmptyCart = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyCartText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
`;
