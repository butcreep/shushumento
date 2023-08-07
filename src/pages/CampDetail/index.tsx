import { useContext, useEffect, useState } from "react";
import { getCamp } from "apis/campApi";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navigation from "components/Navigation";
import { ICampDetail } from "types/type";
import { observer } from "mobx-react-lite";
import CampStore from "stores/CampStore";

const CampDetail = () => {
  const { campId } = useParams();
  // const [campDetail, setCampDetail] = useState<ICampDetail>();
  const [btnActive, setBtnActive] = useState<boolean>(true);
  const campStore = useContext(CampStore);
  // TODO:e type 을 any로 하는게 맞는건가?
  const campSubmit = (e: any) => {
    setBtnActive((prev) => {
      return !prev;
    });
  };
  useEffect(() => {
    // fetchCamp(Number(campId));
    campStore.fetchCampById(Number(campId));
  }, [campId]);
  // const fetchCamp = async (id: number) => {
  //   console.log(id);
  //   const camp = await getCamp(id);
  //   setCampDetail(camp);
  // };
  if (campStore.targetCamp) {
    return (
      <>
        <Navigation />
        <Header>
          <h1>{campStore.targetCamp.name}</h1>
          <img src={campStore.targetCamp.headerImage} alt="" />
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
                <div className="application-tag">{campStore.targetCamp.tags}</div>
                <h1>{campStore.targetCamp.name}</h1>
                <div className="application-desc">{campStore.targetCamp.desc}</div>
                {/* <div>{campStore.targetCamp.seat}</div>
                <div>{campStore.targetCamp.reviewMaterial}</div>
                <div>{campStore.targetCamp.process}</div>
                <div>{campStore.targetCamp.type}</div>
                <div>{campStore.targetCamp.status}</div>
                <div>{campStore.targetCamp.field}</div>
                <div>{campStore.targetCamp.skill}</div>
                <div>{campStore.targetCamp.startDate}</div> */}
                <button
                  className={`btn${btnActive ? "" : "-submit"}`}
                  onClick={campSubmit}
                >
                  {btnActive ? "신청하기" : "신청완료"}
                </button>
              </div>
            </div>
          </div>
          <div className="bottom_section">
            <div>
              {campStore.targetCamp.images &&
                campStore.targetCamp.images.map((image) => (
                  <img width="300" src={image} alt="캠프 설명" />
                ))}
            </div>
          </div>
        </Container>
      </>
    );
  } else {
    return null;
  }

};

export default observer(CampDetail);
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
    width: 600px;
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
        box-shadow: 0 0 6px rgb(0 0 0 / 10%);
        .application-tag {
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: rgb(60, 65, 68);
          margin-bottom: 8px;
        }
        h1 {
          font-size: 18px;
          line-height: 25px;
          color: #000;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .application-desc {
          background-color: rgb(252, 252, 252);
          padding: 8px;
          margin-bottom: 24px;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
        }

        button {
          width: 100%;
          height: 48px;
          padding: 0 14px;
          min-width: 56px;
          border-radius: 8px;
          font-size: 16px;
          line-height: 25px;
          font-weight: 600;
          color: #fff;
          background-color: #009688;
          &.btn-submit {
            background-color: #004841;
          }
        }
      }
    }
  }
  .bottom_section {
    max-width: 1140px;
    margin: 0 auto;
  }
`;
