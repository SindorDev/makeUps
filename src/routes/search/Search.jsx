import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import useSearchParamsHook from "../../hooks/useQueryParamas";
import { useGetMakeQuery } from "../../redux/api/makeup-api";
const Search = () => {

    const {data: productsData} = useGetMakeQuery()
    const {getParam} = useSearchParamsHook();
    const param = getParam("q")

    const data = productsData?.filter((item) => item.name.includes(param))

  return (
       <>
       <Header/>
       <Products data={data}/>
       <Footer/>
       </>
  )
}

export default Search