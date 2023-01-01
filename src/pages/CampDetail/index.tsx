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
        <Container>
          <div style={{ paddingTop: "60px" }}>
            <div>
              <h1>{campDetail.name}</h1>
            </div>
            <div>{campDetail.tags}</div>
            <div>{campDetail.desc}</div>
            <div>{campDetail.seat}</div>
            <div>{campDetail.reviewMaterial}</div>
            <div>
              <img src={campDetail.headerImage} alt="" />
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
const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 60px;
`;
