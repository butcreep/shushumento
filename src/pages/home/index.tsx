import React, { useEffect, useState } from "react";
import Navigation from "components/Navigation";
import { getCampsType } from "apis/campApi";
import { CampType, ICamp } from "types/type";
import CampCard from "components/CampCard";
import styled from "styled-components";
import MainBnr from "./components/MainBnr";
import Footer from "components/Footer";
import CardSectionSkeleton from "components/Skeleton/CardSectionSkeleton";
import CampSection from "./components/CampSection";

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
        {popularCamps ? (
          <CampSection title="인기 부트 캠프" camps={popularCamps} />
        ) : (
          <CardSectionSkeleton />
        )}

        {saleCamps ? (
          <CampSection title="특가 할인 캠프" camps={saleCamps} />
        ) : (
          <CardSectionSkeleton />
        )}
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
`;
