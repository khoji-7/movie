import { useSelector } from 'react-redux'
import React  from 'react'
import BannerHome from '../components/BannerHome'
import Card from '../components/Card'

const Home = () => {
  const trendingData = useSelector(state => state.movieoData.bannerData)

  return (
    <div>
      <BannerHome/>
      
      {
        trendingData.map((data)=>{
          return(
            <Card key={data.id} data={data}/>
          )
        })
      }
    </div>
  )
}

export default Home
