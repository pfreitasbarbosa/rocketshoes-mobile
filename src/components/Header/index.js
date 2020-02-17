import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, CartContainer, ProductCounter } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <Logo />
      <CartContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#fff" />
        <ProductCounter>{cartSize || 0}</ProductCounter>
      </CartContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
