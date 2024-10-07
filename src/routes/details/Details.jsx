/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Category from "../../components/category/Category"
import { useEffect, useState } from "react";
import { useGetDetailsDataMutation } from "../../redux/api/makeup-api";
import {

  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { like, removeLikes } from "../../redux/slice/Likes";
import SwiperProducts from "../../components/swiperProduct/SwiperProducts";
import { product } from "../../redux/slice/Cart";
import { Button } from "antd";

const Details = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const [color, setColor] = useState()
  const [checkButton, setCheckButton] = useState(true)
  const [getDetailsData, { data }] = useGetDetailsDataMutation();
  const {liks} = useSelector((state) => state.likes)
  const {currency} = useSelector((state) => state.currency)
  useEffect(() => {
    getDetailsData(id);
  }, [id]);

  useEffect(() => {
    if(color == undefined) {
      setCheckButton(true)
    }
    else {
      setCheckButton(false)
    }
  }, [color])


  const handleLikes = (item) => {
    if (liks && liks.some((likedItem) => likedItem.id === item.id)) {
      dispatch(removeLikes(item));
    } else {
      dispatch(like(item));
    }
  };

  const handleAddBag = (item) => {
    dispatch(product({...item, color}))
  }

  return (
    <>
      <Header />
      <Category/>
      <Container>

        <div className="flex my-20 gap-20">
          {data && (
            <>
              <div className="w-full h-[700px]">
                <img src={data.api_featured_image} className="w-full h-full" alt={data.name} />
              </div>
              <div className="w-full">
                <h1 className="text-[40px] font-bold">{data.name}</h1>
                <h3 className="capitalize text-[30px] font-bold">
                  {data.brand}
                </h3>
                <Accordion type="single" className="w-full" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Do you want to know about the product?
                    </AccordionTrigger>
                    <AccordionContent>{data.description}</AccordionContent>
                  </AccordionItem>
                </Accordion>
                <strong className="text-[24px] mt-5 inline-block font-medium">
                  Price:   {
                       currency === "UZS" ? `${data.price * 12500} UZS` : currency === "USD" ? `$${data.price}` : currency === "EUR" ? `${"€"+data.price * 0.95.toFixed(0)}` : `$${data.price}`
                      }
                </strong>

                <div className="flex my-10 gap-10 items-center">
                  <span className="bg-black py-1 px-8 font-bold rounded-full text-white">
                    OFFER
                  </span>
                  <p className="underline text-[20px] ">
                    Get 15% off when you spend £60 with code: YAY *Discount
                    applies to RRP
                  </p>
                </div>

                <div className="flex gap-10 items-center">
                  <span className="bg-black py-1 px-8 font-bold rounded-full text-white">
                    OFFER
                  </span>
                  <p className="underline text-[20px] ">
                    Get 15% off when you spend £60 with code: YAY *Discount
                    applies to RRP
                  </p>
                </div>
                  
                <Accordion type="single" className="w-full my-10" collapsible>

                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Change Of Product Colors
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-12 gap-5">
                      {data.product_colors.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setColor(item.hex_value) }
                      className="rounded-full w-[40px] h-[40px]"
                      style={{ background: item.hex_value }}
                    ></button>
                  ))}
                      </div>
                  </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
              <div className="flex gap-10 items-center">
                <Button disabled={checkButton} type="primary" onClick={() => handleAddBag(data)} className="!bg-[#66FF96] text-black w-full !py-10 text-[30px]">Add To Bag</Button>
             
                      <button onClick={() => handleLikes(data)}>
                      {liks &&
                        liks.find((likesItem) => likesItem.id === data.id) ? (
                          <AiFillHeart size={60} color="red" />
                        ) : (
                          <AiOutlineHeart size={60} />
                        )}
                      
                      </button>
              </div>
              </div>
            </>
          )}
        </div>
      </Container>
      <SwiperProducts/>
      <Footer />
    </>
  );
};

export default Details;
