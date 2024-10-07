import { BsSearch } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Container } from "../../utils";
import logo from "../../assets/icons/logo.svg";
import { AutoComplete, Badge, Form, Select, Space } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useSearchParamsHook from "../../hooks/useQueryParamas";
import { useState } from "react";
import { useGetMakeQuery } from "../../redux/api/makeup-api";
import { useDispatch, useSelector } from "react-redux";
import { currency } from "../../redux/slice/currency";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { getParam } = useSearchParamsHook();
  const { data } = useGetMakeQuery();
  const {liks} = useSelector((state) => state.likes)
  const { cartProduct } = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch()
  const currencys = useSelector((state) => state.currency)
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
  const searchData = data?.filter((item) => item.product_type.includes(search))
  
  const handleChange = (value) => {
    dispatch(currency(value))
  };
  
  return (
    <>
      <div className="bg-gray-200 py-2">

        <Container>
          <div className="flex items-center justify-center">
          <div className="flex items-center w-full gap-2 justify-center">
            <span className="text-[16px] leading-3">
              FREE Blush when you spend £40 on By BEAUTY BAY
            </span>
            |
            <span className="text-[16px] leading-3">
              Download the app for for up to 20% off!
            </span>
            |
            <span className="text-[16px] leading-3">
              FREE delivery when you spend £25
            </span>
          </div>
          <div>

              <Space wrap>
              <Select
      defaultValue={currencys.currency}
      style={{
        width: 80,
      }}
      onChange={handleChange}
      options={[


        {
          value: 'UZS',
          label: 'UZS',
        },
        {
          value: 'EUR',
          label: 'EUR',
        },
        {
          value: 'USD',
          label: 'USD',
        },
      ]}
    />
              </Space>
          </div>
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
              <div className="flex search items-center w-full h-[45px] gap-[20px] border-[1px] border-[#C3D4E966]  py-[10px] px-[20px] rounded-[70px]">
                <label htmlFor="search">
                  <BsSearch size={24} />
                </label>
                <Form
                  initialValues={{ search: getParam("q") }}
                  onFinish={handleSearchSubmit}
                >
                  <Form.Item name="search" rules={[{ required: false }]}>
                    <AutoComplete
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          navigate(`/search?q=${search}`);
                        }
                      }}
                      options={searchData && searchData.map((item) => ({
                        label: (
                          <Link
                            className="block bg-transparent border-none"
                            key={item.id}
                            to={`/search?q=${item.product_type}`}
                          >
                            {item.product_type}
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
                  <Badge count={liks.length}>
                    <AiOutlineHeart size={28} />
                  </Badge>
                </NavLink>

                <NavLink to={"/checkout"}>
                      <Badge count={cartProduct.length}>
                  <BsHandbag size={24} />
                      </Badge>
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
