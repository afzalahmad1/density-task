import * as React from "react"
import '../styles/global.css'
import Navbar from "../components/Navbar"
import Trade from "../components/Trade"
import TradeDetails from "../components/TradeDetails"
import MobileComponent from "../components/MobileComponent"
import CandleGraph from "../components/CandleGraph"
import Deposit from "../components/Deposit"
import RegisterDetails from "../components/RegisterDetails"
import Photos from "../components/Photos"
import Card from "../components/Card"
import Referrals from "../components/Referrals"
import Ceo from "../components/Ceo"
import Started from "../components/Started"
import Footer from "../components/Footer"
import ImageBg from "../components/ImageBg"

export default function Home() {
  return <div>
    <Navbar />
    <Trade />
    <TradeDetails />
    <MobileComponent />
    <CandleGraph />
    <Deposit />
    <RegisterDetails />
    <Photos />
    <Card />
    <Referrals />
    <ImageBg />
    <Ceo />
    <Started />
    <Footer />
  </div>
}
