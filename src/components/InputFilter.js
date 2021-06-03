import styled from 'styled-components';

function InputFilter() {
  return (
    <div>
      <InputField type="text" value="" placeholder="Search by name" />
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

export default InputFilter;
