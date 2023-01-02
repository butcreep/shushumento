import { useEffect, useState } from "react";
import DetailDefaultInfo from "components/DetailDefaultInfo";
import { getCamp } from "apis/campApi";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "components/Navigation";
import { ICampDetail } from "types/type";

const CampDetail = () => {
  const { campId } = useParams();
  const [campDetail, setCampDetail] = useState<ICampDetail>();
  useEffect(() => {
    fetchCamp(1);
  }, []);
  const fetchCamp = async (id: number) => {
    const camp = await getCamp(id);
    setCampDetail(camp);
    console.log(camp);
  };
  if (campDetail) {
    return (
      <>
        {/* TODO:navigation APP애 공통으로 두고 필요없는 곳에서 뺴는 법 */}
        <Navigation />
        <Header>
          <h1>{campDetail.name}</h1>
          <img src={campDetail.headerImage} alt="" />
        </Header>
        <Container>
          <div style={{ paddingTop: "60px" }}>
            <div className="application-box">
              <h1>{campDetail.name}</h1>
              <div>{campDetail.tags}</div>
              <div>{campDetail.desc}</div>
              <div>{campDetail.seat}</div>
              <div>{campDetail.reviewMaterial}</div>
            </div>
            <div>
              {campDetail.images &&
                campDetail.images.map((image) => (
                  <img width="300" src={image} alt="캠프 설명" />
                ))}
            </div>
            <div>{campDetail.process}</div>
            <div>{campDetail.type}</div>
            <div>{campDetail.status}</div>
            <div>{campDetail.field}</div>
            <div>{campDetail.skill}</div>
            <div>{campDetail.startDate}</div>
            <div>{campDetail.thumbnail}</div>
          </div>
        </Container>
      </>
    );
  } else {
    return <div>로딩중</div>;
  }
};

export default CampDetail;
const Header = styled.div`
  background-color: #00bcd4;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-top: 40px;
  h1 {
    font-size: 32px;
    padding-bottom: 40px;
    line-height: 40px;
    color: #ffffff;
    font-weight: 600;
    width: 487px;
    margin-right: 30px;
  }
  img {
    width: 500px;
    border-radius: 10px 10px 0 0;
  }
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 60px;
`;
