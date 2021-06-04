/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import styled from 'styled-components';

function Profile({ data }) {
  const panelRef = useRef();
  const accordionBtnRef = useRef();
  const [tags, setTags] = useState(['top', 'tag']);
  const [inputTagValue, setInputTagValue] = useState('');

  const handleTagChange = (e) => {
    const val = e.target.value;
    setInputTagValue(val);
    setTags([...tags, val]);
  };

  const gradesAverage = (grades) => grades
    .map((grad) => parseInt(grad, 10))
    .reduce((acc, curr) => acc + curr, 0) / grades.length;

  const toggleExpansionView = () => {
    accordionBtnRef.current.classList.toggle('active');

    if (panelRef.current.style.maxHeight) {
      panelRef.current.style.maxHeight = null;
    } else {
      panelRef.current.style.maxHeight = `${panelRef.current.scrollHeight}px`;
    }
  };

  const populateAccordionPanel = (grades) => grades.map((grad, index) => (
    <div key={index}>
      <span>{`Test ${index + 1}: `}</span>
      <span>{`${grad}%`}</span>
    </div>
  ));

  return (
    <Wrap>
      <ProfileImg>
        <img src={data.pic} alt="profile img desc" />
      </ProfileImg>

      <ProfileDetails>
        <AccordionWrap>
          <ProfileName>
            <span>{data.firstName}</span>
            <span>{data.lastName}</span>
          </ProfileName>
          <AccordionBtn onClick={toggleExpansionView} ref={accordionBtnRef}>
            <span />
            <span />
          </AccordionBtn>
        </AccordionWrap>

        <ProfileInfos>
          <div>
            <span>Email:</span>
            <span>{data.email}</span>
          </div>
          <div>
            <span>Company:</span>
            <span>{data.company}</span>
          </div>
          <div>
            <span>Skill:</span>
            <span>{data.skill}</span>
          </div>
          <div>
            <span>Average:</span>
            <span>{gradesAverage(data.grades)}</span>
            <span>%</span>
          </div>

          <TagList>
            {tags.map((tag, id) => (
              <Tag key={id}>{tag}</Tag>
            ))}
          </TagList>

          <InputTag
            type="text"
            value={inputTagValue}
            placeholder="Add a tag"
            onChange={handleTagChange}
          />
        </ProfileInfos>

        <AccordionPanel ref={panelRef}>
          {populateAccordionPanel(data.grades)}
        </AccordionPanel>
      </ProfileDetails>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  border-bottom: 1px solid #eee;
  padding: 10px 20px;

  @media (max-width: 567px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ProfileImg = styled.div`
  width: 140px;
  height: 140px;
  margin-top: 25px;
  margin-right: 30px;
  border: 1px solid #ddd;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const ProfileDetails = styled.div`
  flex: 1;
`;

const ProfileInfos = styled.div`
  padding-left: 15px;
  color: #aaa;
  line-height: 1.5;

  span:first-child {
    margin-right: 5px;
  }
`;

const AccordionWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileName = styled.div`
  font-size: 42px;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 15px;

  span:first-child {
    margin-right: 10px;
  }
`;

const AccordionBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-top: -21px;

  span {
    display: block;
    width: 30px;
    height: 6px;
    background-color: #aaa;
    border-radius: 5px;
    transform-origin: center;

    &:first-of-type {
      transform: rotate(90deg) translateX(6px);
    }
  }

  &.active {
    span {
      &:first-of-type {
        opacity: 0;
      }
    }
  }

  &:focus {
    outline: none;
  }

  &:hover {
    span {
      background-color: #000;
    }
  }
`;

const AccordionPanel = styled.div`
  margin-top: 15px;
  overflow: hidden;
  padding-left: 15px;
  color: #aaa;
  line-height: 1.5;
  transition: max-height 0.3s ease-out;
  max-height: 0;

  span:first-child {
    margin-right: 10px;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
`;

const Tag = styled.span`
  background-color: #eee;
  color: #aaa;
  padding: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const InputTag = styled.input`
  display: block;
  padding: 10px 5px;
  border: none;
  border-bottom: 2px solid #eee;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #aaa;
  }

  ::placeholder {
    font-size: 18px;
    color: #aaa;
  }
`;

Profile.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Profile;
