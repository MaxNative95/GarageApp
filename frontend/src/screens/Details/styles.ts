import styled from 'styled-components/native'

import { Colors, Spacing } from '../../styles'

 const Title = styled.Text`
  color: ${Colors.textColor};
  fontSize: 36px;
  fontFamily: Arial;
  fontWeight: bold;
  paddingHorizontal: ${Spacing.padding}px;
  paddingVertical: ${3 * Spacing.padding}px;
`;

const Space = 10;

export {
  Space,
  Title
}


