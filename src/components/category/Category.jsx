import { Container } from "../../utils";
import { CategoryData } from "../../assets/data";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <section>
      
      <Container>
      
        <div className="flex items-center justify-between">

          {CategoryData.map((item, index) => (<Link key={index} to={`/category/${item.name}`}><span  className="text-[20px] font-normal cursor-pointer">{item.name}</span></Link>))}
        
        </div>
      
      </Container>
   
    </section>
  
);
};

export default Category;
