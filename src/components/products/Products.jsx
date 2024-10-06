import { AiFillHeart } from "react-icons/ai";
/* eslint-disable react/prop-types */
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Container } from "../../utils";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { like, removeLikes } from "../../redux/slice/Likes";
const Products = ({ data, state }) => {
  const dispatch = useDispatch();
  const { liks } = useSelector((state) => state.likes);

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
                    <h2 className="text-[20px] min-h-[50px] font-medium mt-5">
                      {item.name}
                    </h2>
                    <p className="capitalize tex-[16px] font-normal">
                      {item.brand}
                    </p>

                    <strong className=" inline-block mb-7 mt-10 min-h-[50px]">
                      ${item.price}
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
                        <button>
                          <BsHandbag size={20} color="white" />
                        </button>
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
