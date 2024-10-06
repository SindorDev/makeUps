import { BsSearch } from "react-icons/bs"; 
import { BsHandbag } from "react-icons/bs"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { Container } from "../../utils";
import logo from "../../assets/icons/logo.svg";
import { AutoComplete, Form } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useSearchParamsHook from "../../hooks/useQueryParamas";
import { useState } from "react";
import { useGetMakeQuery } from "../../redux/api/makeup-api";

const Header = () => {
  const [search, setSearch] = useState("");
       const navigate = useNavigate()
       const  {getParam} = useSearchParamsHook()
       const {data: searchData} = useGetMakeQuery()
  const handleSearchSubmit = (value) => {
       navigate(`/search?q=${value.search}`);
     };
   
     const loadData = async (searchText) => {
       try {
         setSearch(searchText);
       } catch (error) {
         console.log(error);
       }
     };

  return (
    <>
      <div className="bg-gray-200 py-2">
        <Container>
          <div className="flex items-center gap-2 justify-center">
            <span className="text-[16px] leading-3">
              FREE Blush when you spend £40 on By BEAUTY BAY{" "}
            </span>{" "}
            |
            <span className="text-[16px] leading-3">
              Download the app for for up to 20% off!
            </span>
            |
            <span className="text-[16px] leading-3">
              FREE delivery when you spend £25
            </span>
          </div>
        </Container>
      </div>

      <nav className="my-4">
        <Container>
          <div>

            <div className="flex w-full gap-20 justify-between items-center">
              <NavLink to={"/"}>
              <img src={logo} alt="Logo Cite" />
              </NavLink>
            <div className="flex search w-full  items-center w-full h-[45px] gap-[20px] border-[1px] border-[#C3D4E966]  py-[10px] px-[20px] rounded-[70px]">
              <label htmlFor="search">
                     <BsSearch size={24} />
              </label>
              <Form initialValues={{search: getParam("q")}} onFinish={handleSearchSubmit}>
                <Form.Item 
                  name="search"  
                  rules={[{ required: false }]}
                >
                <AutoComplete           
                  onKeyDown={ (e) => {
                    if (e.key === 'Enter') {
                      navigate(`/search?q=${search}`);   
                    }
                  }}
                  options={searchData?.map((item) => ({
                    label: (
                      <Link
                        className="block bg-transparent border-none"
                        key={item.id}
                        to={`/details/${item.id}`}
                      >
                        {item.name}
                      </Link>
                    ),
                  }))}
                  onSearch={(text) =>
                    text ? loadData(text) : loadData({ payload: [] })
                  }
                  placeholder="Search..."
                />
                </Form.Item>
              </Form>
            </div>

              <div className="flex gap-7 items-center">
                     <NavLink to={"/likes"}>
                            <AiOutlineHeart size={28} />
                     </NavLink>
                     
                     <NavLink to={"/likes"}>
                            <BsHandbag size={24} />
                     </NavLink>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Header;
