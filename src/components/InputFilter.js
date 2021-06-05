import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import styled from 'styled-components';
import { ProfileContext } from '../contexts/ProfileContext';

function InputFilter({ text, type }) {
  const [inputValue, setInputValue] = useState('');
  const { filterByName, filterByTag } = useContext(ProfileContext);

  const handleChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    if (type === 'NAME') {
      filterByName(val);
    } else {
      filterByTag(val);
    }
  };

  return (
    <div>
      <InputField
        type="text"
        value={inputValue}
        placeholder={text}
        onChange={handleChange}
      />
    </div>
  );
}

const InputField = styled.input`
  display: block;
  width: 98%;
  margin: 0 auto;
  padding: 10px 5px;
  border: none;
  border-bottom: 2px solid #eee;
  margin-bottom: 10px;
  font-size: 18px;

  &:focus {
    outline: none;
    border-color: #aaa;
  }

  ::placeholder {
    font-size: 18px;
    color: #aaa;
  }
`;

InputFilter.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputFilter;
