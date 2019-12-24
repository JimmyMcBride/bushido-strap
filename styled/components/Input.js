import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  border-radius: ${props => (props.radius ? props.radius : '0.3rem')};
  padding: ${props => (props.padding ? props.padding : '0.5rem')};
`;

export default Input;

Input.propTypes = {
  // CUSTOM PROPTYPES
  radius: PropTypes.string,
  padding: PropTypes.string,
};
