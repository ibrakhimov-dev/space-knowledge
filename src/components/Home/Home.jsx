import React from 'react'
import School from './School/School';
import Academy from './Academy/Academy';
import PreSchool from './PreSchool/PreSchool';
import University from './University/University';
import Banner from './Banner/Banner';

function Home() {
  return (
    <>
        <Banner />
        <Academy />
        <University />
        <School />
        <PreSchool />
    </>
  )
}

export default Home