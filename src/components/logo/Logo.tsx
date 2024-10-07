import logo from "../../assets/icons/logo.svg";

const Logo = () => {
  return (
       
       <div className="flex my-[200px] items-center gap-10">
       <div className="w-full h-[2px] bg-gray-300"></div>
       <div>
         <img src={logo} width={400} alt="Logo Site" />
       </div>
       <div className="w-full h-[2px] bg-gray-300"></div>
     </div>
  )
}

export default Logo