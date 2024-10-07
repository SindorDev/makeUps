import { Link } from "react-router-dom";
import { BrandData } from "../../assets/data";
import { Container } from "../../utils";
const Brand = () => {
  return (
    <section className="mb-10">
      <Container>
        <h1 className="text-[60px] text-center mb-10">SHOP BY BRANDS</h1>
        <div className="grid grid-cols-6 w-full place-items-center gap-5">
          {BrandData.map((brand, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col rounded-3xl shadow-cm overflow-hidden gap-5 bg-gray-200"
              >
                <Link to={`/brand/${brand.name}`}>
                  <div className="w-full  flex items-center bg-white h-[215px]">
                    <img
                      src={brand.src}
                      className=" cursor-pointer object-contain"
                      alt={brand.name}
                    />
                  </div>
                </Link>
                <div className="w-full flex items-center  justify-center px-4">
                  <h3 className="min-h-[50px] text-[24px] capitalize">
                    {brand.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Brand;
