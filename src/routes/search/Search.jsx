/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import useSearchParamsHook from "../../hooks/useQueryParamas";
import { useGetMakeQuery, useGetSearchDataMutation } from "../../redux/api/makeup-api";
import { Container } from "../../utils";

const Search = () => {
    const {data: productsData} = useGetMakeQuery();
    const {getParam} = useSearchParamsHook();
    const param = getParam("q");
    const [data, setData] = useState([]);
    const [getSearchData, {data: searchData, isSuccess}] = useGetSearchDataMutation();

    useEffect(() => {
        if (param) {
            getSearchData(param);
        }
    }, [param]);

    useEffect(() => {
        if (isSuccess && searchData && searchData.length > 0) {
            setData(searchData);
        } else {
          const filterData = productsData?.filter((item) => item.name.includes(param));
          setData(filterData);
        }
    }, [searchData, isSuccess, productsData]);


    return (
        <>
            <Header />
            <Category />
            <Banner />
            <Container></Container>
            <Products data={data} />
            <Footer />
        </>
    );
}

export default Search;