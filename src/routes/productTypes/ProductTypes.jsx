import { useParams } from "react-router-dom"
import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import { useGetProductTypeMutation } from "../../redux/api/makeup-api"
import { useEffect } from "react"
import Products from "../../components/products/Products"

const ProductTypes = () => {

       const {id} = useParams()
       const [getProductType, {data}] = useGetProductTypeMutation()

       useEffect(() => {
              getProductType(id)
       }, [id])



  return (
       <>
       <Header/>
       <Banner/>
       <Products data={data}/>
       <Footer/>
       </>
  )
}

export default ProductTypes