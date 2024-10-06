import Banner from "../../components/banner/Banner"
import Brand from "../../components/brand/Brand"
import Category from "../../components/category/Category"
import Header from "../../components/header/Header"
import Advertising from "../../components/advertising/Advertising"
import Products from "../../components/products/Products"
import Footer from "../../components/footer/Footer"
import { useGetMakeQuery } from "../../redux/api/makeup-api"
import Logo from "../../components/logo/Logo"

const Home = () => {

  const { data } = useGetMakeQuery();
  return (
       <>
              <Header/>
              <Category/>
              <Banner/>
              <Advertising/>
              <Brand/>
              <Logo/>
              <Products data={data} state={8}/>
              <Footer/>
       </>
  )
}

export default Home