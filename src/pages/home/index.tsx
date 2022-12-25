import React from 'react'
import CampCard from '../../components/CampCard'
import Navigation from '../../components/Navigation'

const camps = [
  {
    title:
      '작은 회사의 백엔드 개발자도 서버 과부화에 대응할 수 있는 DevOps 실무 기술',
    status: '모집중',
    field: '프로그래밍',
    skill: '백앤드',
    startDate: '1월 4일',
  },
  {
    title: '기초부터 시작하는 AWS 인프라 구축과 운영 및 DevOps엔지니어링 실무',
    status: '모집완료',
    field: '업무생산성',
    skill: '백앤드',
    startDate: '1월 8일',
  },
  {
    title: '정말 쉬운 피그마 기초 활용법부터 시작하는 UX∙UI 디자인 초급 실무',
    status: '모집중',
    field: '디자인',
    skill: '백앤드',
    startDate: '2월 4일',
  },
]

const Home = () => {
  return (
    <>
      <Navigation />
      {camps.map((camp, index) => (
        <CampCard key={index} camp={camp} />
      ))}
    </>
  )
}
export default Home
