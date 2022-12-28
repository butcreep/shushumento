import React, { useEffect, useState } from "react";
import Navigation from "components/Navigation";
import { getCampsType } from "apis/campApi";
import { CampType, ICamp } from "types/type";
import CampCard from "components/CampCard";

const Home = () => {
  const [popularCamps, setPopularCamps] = useState<ICamp[]>();
  const [saleCamps, setSaleCamps] = useState<ICamp[]>();
  console.log("유메이", popularCamps);
  console.log("세일", saleCamps);

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
      {popularCamps &&
        popularCamps.map((camp, index) => <CampCard key={index} camp={camp} />)}
      {saleCamps &&
        saleCamps.map((camp, index) => <CampCard key={index} camp={camp} />)}
    </>
  );
};
export default Home;
