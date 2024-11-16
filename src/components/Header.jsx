import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <section className="flex flex-col gap-2 justify-center items-center py-2 text-center">
      <div>
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h2 className="text-gray-500 ">Jornalism Wihtout Fear</h2>

      <div>
        <p>{moment().format('dddd, MMMM Do, YYYY')}</p>
      </div>
    </section>

    
  );
};

export default Header;
