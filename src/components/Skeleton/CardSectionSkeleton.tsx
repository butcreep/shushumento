import styled from "styled-components";

import Skeleton from "components/Skeleton";

const CardSectionSkeleton = () => {
  return (
    <Container>
      <div className="section-title">
        <Skeleton
          style={{ width: 250, height: 50, borderRadius: "4px" }}
          animated
        />
      </div>

      <div className="section_wrapper">
        <div className="skeleton">
          <Skeleton
            style={{
              width: "100%",
              height: 190,
              borderRadius: "15px",
              marginBottom: "10px",
            }}
            animated
          />
          <Skeleton
            style={{
              width: "100%",
              height: 30,
              borderRadius: "4px",
            }}
            animated
          />
        </div>
        <div className="skeleton">
          <Skeleton
            style={{
              width: "100%",
              height: 190,
              borderRadius: "15px",
              marginBottom: "10px",
            }}
            animated
          />
          <Skeleton
            style={{
              width: "100%",
              height: 30,
              borderRadius: "4px",
            }}
            animated
          />
        </div>
        <div className="skeleton">
          <Skeleton
            style={{
              width: "100%",
              height: 190,
              borderRadius: "15px",
              marginBottom: "10px",
            }}
            animated
          />
          <Skeleton
            style={{
              width: "100%",
              height: 30,
              borderRadius: "4px",
            }}
            animated
          />
        </div>
        <div className="skeleton">
          <Skeleton
            style={{
              width: "100%",
              height: 190,
              borderRadius: "15px",
              marginBottom: "10px",
            }}
            animated
          />
          <Skeleton
            style={{
              width: "100%",
              height: 30,
              borderRadius: "4px",
            }}
            animated
          />
        </div>
      </div>
    </Container>
  );
};

export default CardSectionSkeleton;

const Container = styled.section`
  .section-title {
    padding-bottom: 30px;
  }
  .section_wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-bottom: 60px;
  }
  /* padding: 0px 16px;
  width: 100%;
  

  .camp-cards {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;

  } */
`;
