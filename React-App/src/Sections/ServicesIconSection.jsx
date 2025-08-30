import { Link } from "react-router-dom";

function ServicesIconSection({ items }) {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1  sm:!p-6 justify-items-center !p-3 ">
      {items.map((item, index) => (
        <div key={index} className="flex w-full  !border !p-3 lg:items-start md:items-start sm:items-center border-[#4f4e4e82] flex-col ">
          <div
            className="relative rounded-[7px] w-[58px] h-[58px] !p-4 overflow-hidden icon-2 bg-[#1e1e1e]"
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#aeff0c] to-transparent opacity-10 z-0"
            ></div>
            <Link to={"#"} className="hover:text-lime-400 relative z-10">
              <img loading="lazy" src={item.icon} alt={item.title} />
            </Link>
          </div>
          <p className="!p-3  !mt-2 ">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ServicesIconSection;
