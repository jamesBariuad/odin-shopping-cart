import { Link } from "react-router-dom";
import hero from "../../assets/bruno-kelzer-LvySG1hvuzI-unsplash.jpg";

const HomePage = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${hero})` }}
        className="h-full w-full bg-cover bg-top"
      >
        {/* className="w-full h-full flex items-center justify-center" */}

        <div className="bg-black/80 text-white flex items-center justify-center flex-col p-6 gap-10 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-5xl font-bold">Fake Store</div>
          <div className="font-normal text-xl">
            All<span className="text-xs font-thin italic">(some)</span> of your
            shopping needs!
          </div>
          <Link to="shop">
          
            <button className="text-black bg-white hover:bg-slate-100  font-bold py-2 px-4 rounded">
              Shop Now!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
