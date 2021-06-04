import PropTypes from 'prop-types';
import { useRef } from 'react';
import styled from 'styled-components';

function Profile({ data }) {
  const panelRef = useRef();
  const accordionBtnRef = useRef();

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
          <AccordionBtn onClick={toggleExpansionView} ref={accordionBtnRef}>+</AccordionBtn>
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
        </ProfileInfos>

        <AccordionPanel ref={panelRef}>
          {data.grades.map((grad, index) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              <span>{`Test ${index + 1}: `}</span>
              <span>{`${grad}%`}</span>
            </div>
          ))}
        </AccordionPanel>
      </ProfileDetails>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px 20px;

  @media (max-width: 567px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ProfileImg = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 30px;
  border: 1px solid #ddd;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const ProfileDetails = styled.div`
  div:not(div:first-of-type) {
  }
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
  align-items: flex-start;
`;

const AccordionBtn = styled.button`
  font-size: 42px;
  border: none;
  background-color: transparent;
  font-weight: 900;
  color: #aaa;
  cursor: pointer;

  &.active {
    color: green;
  }
`;

const AccordionPanel = styled.div`
  margin-top: 15px;
  overflow: hidden;
  padding-left: 15px;
  color: #aaa;
  line-height: 1.5;
  transition: max-height 0.2s ease-out;
  max-height: 0;

  span:first-child {
    margin-right: 5px;
  }
`;

Profile.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Profile;
