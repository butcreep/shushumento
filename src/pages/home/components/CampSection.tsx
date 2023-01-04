import styled from "styled-components";
import CampCard from "components/CampCard";
import { ICamp } from "types/type";

interface IProps {
  title: string;
  camps: ICamp[];
  isHeadField?: boolean;
}
const CampSection = ({ title, camps }: IProps) => {
  return (
    <Container>
      <div className="section-title">{title}</div>
      <div className="camp-cards">
        {camps.map((camp, index) => (
          <CampCard key={index} camp={camp} />
        ))}
      </div>
    </Container>
  );
};

export default CampSection;

const Container = styled.section`
  .section-title {
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 30px;
  }

  .camp-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-bottom: 60px;
  }
`;
