/* eslint-disable react-hooks/exhaustive-deps */
import { useGetCategoryMutation } from "../../redux/api/makeup-api"
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import { Container } from "../../utils";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Category from "../../components/category/Category";
const Categorys = () => {


       const {id} = useParams()


              const [getCategory, {data}] = useGetCategoryMutation()


              useEffect(() => {
                     if(id) {
                            getCategory(id)
                     }
              }, [id])

  return (
       <>
              <Header/>
              <Category/>
              <Container> 
              <div>
                     <span className="text-center block text-[60px]  uppercase font-semibold my-[30px]">{id}</span>                     
              </div>
              </Container>
              <Banner/>
              <Products data={data} />
              <Footer/>
       </>
  )
}

export default Categorys