import React from 'react'
import { useParams } from 'react-router-dom'
import DetailDefaultInfo from '../../components/DetailDefaultInfo'

const CampDetail = () => {
  return (
    <div>
      <div className="titleHead">
        <span>skill:데이터분석</span>
        <span>status:모집중</span>
        <h1>
          title:작은 회사의 백엔드 개발자도 서버 과부하에 대응할 수 있는 DevOps
        </h1>
        <p>startDate:1월4일 시작</p>
        <img src="" alt="thumbnail" />
      </div>
      <div>
        <DetailDefaultInfo />
        <div>
          <h2>
            title작은 회사의 백엔드 개발자도 서버 과부하에 대응할 수 있는
            DevOps:
          </h2>
          <span>tags</span>
          <p>startDate:시작일자</p>
          <p>process:6주 온라인 과정</p>
          <button>신청하기|신청완료</button>
        </div>
      </div>
      <div>endTime : startDate - today</div>
    </div>
  )
}

export default CampDetail
