/* eslint-disable react/prop-types */
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Container } from "../../utils";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { like, removeLikes } from "../../redux/slice/Likes";
const Products = ({ data, state }) => {
  const dispatch = useDispatch();
  const { liks } = useSelector((state) => state.likes);
  const { currency } = useSelector((state) => state.currency)
  const handleLikes = (item) => {
    if (liks && liks.some((likedItem) => likedItem.id === item.id)) {
      dispatch(removeLikes(item));
    } else {
      dispatch(like(item));
    }
  };

  return (
    <section className="mb-10">
      <Container>
        <div className="grid grid-cols-4 gap-10">
          {data &&
            data.slice(0, state).map((item) => {
              return (
                <div

                  key={item.id}
                  className="rounded-lg overflow-hidden shadow-lg"
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
                    <h2 className="text-[20px] min-h-[90px] mb-5 font-medium mt-5">
                      {item.name}
                    </h2>
                    <p className="capitalize tex-[16px] font-normal">
                      {item.brand}
                    </p>
                    {parse(`<p className="min-h-[100px]">${item.description.slice(0, 100)+"..."}</p>`)}
                    <strong className=" inline-block mb-7 mt-10">
                      {
                       currency === "UZS" ? `${item.price * 12500} UZS` : currency === "USD" ? `$${item.price}` : currency === "EUR" ? `${"€"+item.price * 0.95.toFixed(0)}` : `$${item.price}`
                      }
                    </strong>
                    <div className="flex items-center justify-end gap-5">
                      <button onClick={() => handleLikes(item)}>
                        {liks &&
                        liks.find((likesItem) => likesItem.id === item.id) ? (
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
              );
            })}
        </div>
      </Container>
    </section>
  );
};

export default Products;
