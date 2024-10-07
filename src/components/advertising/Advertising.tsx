import { Container } from "../../utils";
import { TypeData } from "../../assets/data";
import { Link } from "react-router-dom";
const Advertising = () => {
  return (
    <section className="my-[70px]">
      <Container>
        <h1 className="text-[60px] text-center mb-10">SHOP BY TYPES</h1>
        <div className="grid grid-cols-3 gap-5 place-items-center">
          {TypeData.map((item, index) => {
            return (
              <Link
                to={`/types/${item.name}`}
                key={index}
                className="w-full bg-gray-100 rounded-lg flex flex-col gap-5 p-5 hover:scale-105 hover:shadow-xl duration-700"
              >
                <div className="w-full h-[300px]">
                  <img
                    src={item.src}
                    className="h-full object-contain w-full"
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col items-center gap-5">
                  <h2 className="text-[24px] font-bold uppercase">
                    {item.name}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Advertising;
