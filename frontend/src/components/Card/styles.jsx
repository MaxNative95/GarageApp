import {  Dimensions } from 'react-native';
import styled from 'styled-components/native';

let { width } = Dimensions.get('window');

const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  fontSize: 22px;
`

const Make = styled.Text`
  color: #ccc;
  fontWeight: 500;
  margin: 6px 0;
  fontSize:17px;
  textDecorationLine : underline;
`

const Description = styled.Text`
  color: #fff;
  font-weight: 300;
  fontSize:15px
`

const Container = styled.View`
  marginTop:20px;
  alignItems:center;
  border-radius:10px;
  shadowOffset: {
    width: 0;
    height: 5;
  };
  shadowOpacity: 0.25;
  shadowRadius: 10px;
  elevation: 2;
`;

const Main = styled.View`
backgroundColor: #38464A;
width: ${width * 0.9};
padding:20px;
`;

export {
    Title,
    Make,
    Description,
    Container,
    Main
}