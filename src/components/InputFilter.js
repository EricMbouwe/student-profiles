import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

function InputFilter({ getSearch, text }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setInputValue(val);
    getSearch(val);
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
  getSearch: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default InputFilter;
