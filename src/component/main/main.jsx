import React from 'react'
import Banner from "../bannerSection/banner"
import ServiceSection from "../serviceSection/serviceSection"
import AboutMe from '../aboutMe/aboutMe'
import EducationSection from '../educationSection/EducationSection'
import "./main.scss"
import Brand from '../brand/brand'
import DeseginSection from '../deseginSection/deseginSection'
import RecentPortfolio from '../RecentPortfolio/RecentPortfolio'
import ClientsReview from '../ClientsReview/ClientsReview'
import Blog from '../Blog/Blog'
import ParalaxSection from '../paralaxSection/paralaxSection'
const main = () => {
    return (
        <main>
            <Banner/>
            <ServiceSection />
            <AboutMe/>
            <DeseginSection/>
            <EducationSection/>
            <RecentPortfolio/>
            <ClientsReview/>
            <Brand/>
            <Blog/>
            <ParalaxSection/>
        </main>
    )
}

export default main