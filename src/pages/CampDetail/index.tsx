import { useEffect, useState } from "react";
import { getCamp } from "apis/campApi";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "components/Navigation";
import { ICampDetail } from "types/type";

const CampDetail = () => {
  const { campId } = useParams();
  const [campDetail, setCampDetail] = useState<ICampDetail>();
  useEffect(() => {
    fetchCamp(Number(campId));
  }, [campId]);
  const fetchCamp = async (id: number) => {
    console.log(id);
    const camp = await getCamp(id);
    setCampDetail(camp);
  };
  console.log(campDetail);
  if (campDetail) {
    return (
      <>
        <Navigation />
        <Header>
          <h1>{campDetail.name}</h1>
          <img src={campDetail.headerImage} alt="" />
        </Header>
        <Container>
          <div className="middle_section">
            <div className="detail_default_info">
              <div className="text_box">
                <h2>
                  업계 선배와 만나
                  <br />
                  배우고, 나누고, 성장해요!
                </h2>
                <p>
                  누구나 시행착오를 겪습니다. 혼자서는 더 많은 노력과 시간이
                  필요하죠. 이미 경험한 사람의 이야기에서 시작한다면 어떨까요?
                  <br />
                  실무PT에서 업계 선배를 만나
                  <strong>시행착오를 줄이는 순간을 경험</strong>하세요.
                </p>
              </div>

              <ul>
                <li>
                  <strong>📝실무 과제</strong>
                  실무 과제를 통해 배우면
                  <br /> 즉시 업무에 적용하고
                  <br /> 성과를 낼 수 있어요.
                </li>
                <li>
                  <strong>🔄피드백과 토의</strong>
                  라이브 피드백을 통해
                  <br /> 솔루션을 내 업무에 대입하고
                  <br /> 현직자의 방법을 익히세요.
                </li>
                <li>
                  <strong>👩‍💻바로 적용</strong>
                  오늘 익힌 실무 스킬이
                  <br /> 즉시 내 업무 성과가 되는
                  <br /> 놀라운 경험으로 이어져요.
                </li>
              </ul>
              <div className="application-box">
                <h1>{campDetail.name}</h1>
                <div>{campDetail.tags}</div>
                <div>{campDetail.desc}</div>
                <div>{campDetail.seat}</div>
                <div>{campDetail.reviewMaterial}</div>
              </div>
            </div>
          </div>
          <div className="bottom_section">
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
  .middle_section {
    background: rgba(0, 129, 101, 0.06);
    padding: 60px 0;
    .detail_default_info {
      position: relative;
      max-width: 1140px;
      margin: 0 auto;
      .text_box {
        max-width: 66%;
        display: flex;
        align-items: bottom;
        margin-bottom: 20px;
        h2 {
          color: #040505;
          font-weight: 600;
          font-size: 22px;
          line-height: 28px;
          margin-right: 30px;
          width: 56%;
        }
        p {
          font-size: 16px;
          line-height: 25px;
          font-weight: 400;
          color: #3c4144;
          strong {
            font-weight: 600;
          }
        }
      }
      ul {
        max-width: 66%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        padding: 20px 30px;
        background: #fcfcfc;
        li {
          width: 30%;
          color: rgb(118, 125, 130);
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;

          strong {
            font-size: 16px;
            line-height: 25px;
            color: #202325;
            font-weight: 600;
            display: block;
            margin-bottom: 5px;
          }
        }
      }
      .application-box {
        position: absolute;
        right: 0;
        top: 0;
        max-width: 353px;
        background-color: rgb(255, 255, 255);
        padding: 24px;
        border-radius: 6px;
        margin-top: 40px;
      }
    }
  }
  .bottom_section {
    max-width: 1140px;
    margin: 0 auto;
  }
`;
