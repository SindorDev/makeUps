/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import { useGetBrandMutation } from "../../redux/api/makeup-api";
import { useEffect } from "react";
import Products from "../../components/products/Products";
import { Container } from "../../utils";
import Footer from "../../components/footer/Footer";

const Brand = () => {
  const { id } = useParams();
  const [getBrand, { data }] = useGetBrandMutation();

  useEffect(() => {
    getBrand(id);
  }, [id]);


  return (
    <>
      <Header />

       <Container>
       <div>
        <span className="text-center block text-[50px]  uppercase font-semibold my-[30px]">
          {id}
        </span>
      </div>

       </Container>
      <Products data={data}/>
      <Footer/>
    </>
  );
};

export default Brand;
