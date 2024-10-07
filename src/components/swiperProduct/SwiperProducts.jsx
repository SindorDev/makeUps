import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import parse from "html-react-parser";

import { Container } from "../../utils";
import { useGetMakeQuery } from "../../redux/api/makeup-api";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { like, removeLikes } from "../../redux/slice/Likes";
const SwiperProducts = () => {
  const dispatch = useDispatch();
  const { data } = useGetMakeQuery();
  const { liks } = useSelector((state) => state.likes);
  const {currency} = useSelector((state) => state.currency)
  const handleLikes = (item) => {
    if (liks && liks.some((likedItem) => likedItem.id === item.id)) {
      dispatch(removeLikes(item));
    } else {
      dispatch(like(item));
    }
  };

  return (
    <section className="my-[170px] wrapper">
      <Container>

              <h1 className="uppercase font-bold text-[34px]">Your Kinda Vibe</h1>
          <Swiper


            spaceBetween={30}
            slidesPerView={4}
            navigation
            modules={[Navigation]}
          >
            {data &&
              data.slice(16, 24).map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div
                      key={item.id}
                      className="rounded-lg my-20 overflow-hidden shadow-lg"
                    >
                      <Link to={`/details/${item.id}`}>
                        <div className="w-full  h-[300px]">
                          <img
                            src={item.api_featured_image}
                            className="w-full h-full"
                            alt={item.name}
                          />
                        </div>
                      </Link>
                      <div className="p-2 h-full bg-gray-200">
                        <h2 className="text-[20px] min-h-[50px] font-medium mt-5">
                          {item.name}
                        </h2>
                        <p className="capitalize tex-[16px] font-normal">
                          {item.brand}
                        </p>
                        {parse(
                          `<p className="min-h-[100px]">${
                            item.description.slice(0, 100) + "..."
                          }</p>`
                        )}
                        <strong className=" inline-block mb-7 mt-10 min-h-[50px]">
                        {
                       currency === "UZS" ? `${item.price * 12500} UZS` : currency === "USD" ? `$${item.price}` : currency === "EUR" ? `${"€"+item.price * 0.95.toFixed(0)}` : `$${item.price}`
                      }
                        </strong>
                        <div className="flex items-center justify-end gap-5">
                          <button onClick={() => handleLikes(item)}>
                            {liks &&
                            liks.find(
                              (likesItem) => likesItem.id === item.id
                            ) ? (
                              <AiFillHeart size={40} color="red" />
                            ) : (
                              <AiOutlineHeart size={40} />
                            )}
                          </button>
                          <div className="w-[40px] h-[40px] flex items-center justify-center bg-black rounded-full">
                            <Link to={`/details/${item.id}`}>
                              <BsHandbag size={20} color="white" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
     
      </Container>
    </section>
  );
};

export default SwiperProducts;
