import React, { useEffect, useState } from "react";
import Navigation from "components/Navigation";
import { getCampsType } from "apis/campApi";
import { CampType, ICamp } from "types/type";
import CampCard from "components/CampCard";
import styled from "styled-components";
import MainBnr from "./components/MainBnr";
import Footer from "components/Footer";

const Home = () => {
  const [popularCamps, setPopularCamps] = useState<ICamp[]>();
  const [saleCamps, setSaleCamps] = useState<ICamp[]>();

  useEffect(() => {
    fetchCamps("popular");
    fetchCamps("sale");
  }, []);

  const fetchCamps = async (type: CampType) => {
    console.log(type);
    const camps = await getCampsType(type);
    type === "popular" ? setPopularCamps(camps) : setSaleCamps(camps);
  };

  return (
    <>
      <Navigation />
      <MainBnr />
      <Container>
        <h2 className="title">인기 부트 캠프</h2>
        <div className="card-section">
          {popularCamps &&
            popularCamps.map((camp, index) => (
              <CampCard key={index} camp={camp} />
            ))}
        </div>
        <h2 className="title">특가 할인 캠프</h2>
        <div className="card-section">
          {saleCamps &&
            saleCamps.map((camp, index) => (
              <CampCard key={index} camp={camp} />
            ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default Home;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 100px 0;
  .title {
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 30px;
  }
  .card-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-bottom: 60px;
  }
`;
