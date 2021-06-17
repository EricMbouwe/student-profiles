/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import {
  useRef, useState, useContext, useMemo,
} from 'react';
import styled from 'styled-components';
import { ProfileContext } from '../contexts/ProfileContext';

function Profile({ data }) {
  // const panelRef = useRef();
  const accordionBtnRef = useRef();
  const [inputTagValue, setInputTagValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const { grades } = data;

  const { addToTags, tags } = useContext(ProfileContext);

  const profileTags = tags.filter((tag) => tag.profile.id === data.id);

  const handleTagChange = (e) => {
    const val = e.target.value;
    setInputTagValue(val);
  };

  const addTag = (e) => {
    if (e.keyCode === 13 && inputTagValue !== '') {
      const tag = {
        id: Math.floor(Math.random() * 100000000),
        text: inputTagValue,
        profile: data,
      };

      addToTags(tag);
      setInputTagValue('');
    }
  };

  const gradesAverage = useMemo(
    () => grades
      .map((grad) => parseInt(grad, 10))
      .reduce((acc, curr) => acc + curr, 0) / grades.length,
    [grades],
  );

  /** const toggleExpansionView = () => {
    accordionBtnRef.current.classList.toggle('active');

    if (panelRef.current.style.maxHeight) {
      panelRef.current.style.maxHeight = null;
    } else {
      panelRef.current.style.maxHeight = `${panelRef.current.scrollHeight}px`;
    }
  };
  */

  const populateAccordionPanel = useMemo(() => grades.map(
    (grad, index) => (
      <div key={index}>
        <span>{`Test ${index + 1}: `}</span>
        <span>{`${grad}%`}</span>
      </div>
    ),
    [grades],
  ));

  return (
    <Wrap>
      <ProfileImg>
        <img src={data.pic} alt={`${data.firstName} ${data.lastName}`} />
      </ProfileImg>

      <ProfileDetails>
        <AccordionWrap>
          <ProfileName>
            <span id="firstName">{data.firstName}</span>
            <span>{data.lastName}</span>
          </ProfileName>
          <AccordionBtn
            data-testid="toggle"
            // onClick={toggleExpansionView}
            onClick={() => setIsActive(!isActive)}
            ref={accordionBtnRef}
          >
            {/** <span />
            <span /> */}
            {isActive ? '-' : '+'}
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
            <span>{gradesAverage}</span>
            <span>%</span>
          </div>

          <TagList>
            {profileTags.map((tag) => (
              <Tag key={tag.id}>{tag.text}</Tag>
            ))}
          </TagList>

          <InputTag
            type="text"
            value={inputTagValue}
            placeholder="Add a tag"
            onChange={handleTagChange}
            onKeyDown={addTag}
          />
        </ProfileInfos>

        {/** <AccordionPanel ref={panelRef}>
          {populateAccordionPanel}
            </AccordionPanel> */}

        {isActive
          && (
          <AccordionPanel>
            {populateAccordionPanel}
          </AccordionPanel>
          )}
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

  @media (max-width: 567px) {
    margin-bottom: 20px;
  }
`;

const ProfileDetails = styled.div`
  flex: 1;
`;

const ProfileInfos = styled.div`
  padding-left: 15px;
  font-weight: 200;
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

  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

const AccordionBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  //margin-top: -21px;

  color: #aaa;
  margin-top: -16px;
  font-size: 60px;
  font-weight: 900;
  border-radius: 5px;

  &:hover {
    color: #000;
  }

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

    @media (max-width: 640px) {
      width: 20px;
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
  padding-left: 15px;
  line-height: 1.5;
  font-weight: 200;
  //overflow: hidden;
  //transition: max-height 0.3s ease-out;
  //max-height: 0;

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
  background-color: #ddd;
  padding: 8px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
`;

const InputTag = styled.input`
  display: block;
  padding: 10px 5px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  font-weight: 200;

  &:focus {
    outline: none;
    border-color: #777;
  }

  ::placeholder {
    color: #aaa;
  }
`;

Profile.defaultProps = {
  data: {
    city: 'Fushë-Muhurr',
    company: 'Yadel',
    email: 'iorton0@imdb.com',
    firstName: 'Ingaberg',
    grades: ['78', '100', '92', '86', '89', '88', '91', '87'],
    id: '1',
    lastName: 'Orton',
    pic: 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg',
    skill: 'Oracle',
  },
};

Profile.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]),
};

export default Profile;
