import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import { Container } from "../../utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { removeproducts } from "../../redux/slice/Cart";
import SwiperProducts from "../../components/swiperProduct/SwiperProducts";
const CartProduct = () => {
  const { cartProduct } = useSelector((state: any) => state.cartProducts);
  const { currency } = useSelector((state: any) => state.currency);

  const dispatch = useDispatch();

  const handleRemoveBag = (item: any) => {
    dispatch(removeproducts(item));
  };

  return (
    <>
      <Header />
      <Category />
      <Container>
        <div className="w-full max-w-[600px] flex flex-col gap-14 my-20 mx-auto">
          <h1 className="text-[30px] my-10 uppercase font-bold">Your Bag</h1>
          {cartProduct.map((item: any) => {
            return (
              <div
                key={item.id}
                className="flex gap-10 border-b border-gray-500 items-start"
              >
                <div className="w-[30%]">
                  <img src={item.api_featured_image} alt={item.name} />
                </div>
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h2 className="font-bold uppercase text-[24px]">
                      {item.name}
                    </h2>
                    <strong>
                      {currency === "UZS"
                        ? `${item.price * 12500} UZS`
                        : currency === "USD"
                        ? `$${item.price}`
                        : currency === "EUR"
                        ? `€${(item.price * 0.95).toFixed(0)}`
                        : `$${item.price}`}
                    </strong>
                  </div>
                  <div className="flex items-center justify-between my-5">
                    <span className="capitalize text-[20px] font-medium">
                      {item.brand}
                    </span>

                    <div
                      className="w-[40px] h-[40px] rounded-full"
                      style={{ background: item.color }}
                    ></div>
                  </div>

                  <Accordion type="single" className="w-full" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        Do you want to know about the product?
                      </AccordionTrigger>
                      <AccordionContent>{item.description}</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <div className="flex items-center my-5 justify-between">
                    <button
                      className="outline-none border-none underline"
                      onClick={() => handleRemoveBag(item)}
                    >
                      Remove
                    </button>
                    <Select>
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Qty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1</SelectItem>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <SwiperProducts />
      <Footer />
    </>
  );
};

export default CartProduct;
