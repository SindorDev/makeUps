import { useSelector } from "react-redux"
import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import { Container } from "../../utils"
import Products from "../../components/products/Products"
import Category from "../../components/category/Category"

const Likes = () => {

       const {liks} = useSelector((state) => state.likes)

  return (
       <>
       <Header/>
       <Category/>
        <Container>
              
        <span className="text-center block text-[50px]  uppercase font-semibold my-[30px]">
          Likes
        </span>
        <Banner/>
        <Products data={liks}/>
        </Container>
       <Footer/>
       </>
  )
}

export default Likes