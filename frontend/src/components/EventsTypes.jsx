import { Link } from "react-router-dom";

const EventsTypes = () => {
  return (
    <div className="max-w-screen-lg flex justify-between gap-5 mx-auto mt-3">
      <div className="flex-[1] overflow-hidden cursor-pointer rounded-[10px]">
        <Link to={"/listings/1"}>
          <img
            src="https://i0.wp.com/havefun.travel/wp-content/uploads/2021/06/best-live-concerts-in-budapest-early-autumn-2943968.jpg?resize=768%2C432&ssl=1"
            alt=""
            className="w-full h-[150px] object-cover rounded-xl"
          />
        </Link>
        <div className="pListTitles">
          <h1 className="text-lg font-bold text-gray-800 mt-2 text-center">
            Concerts
          </h1>
        </div>
      </div>
      <div className="flex-[1] overflow-hidden cursor-pointer rounded-[10px]">
        <Link to={"/listings/2"}>
          <img
            src="https://lemag.ales.fr/wp-content/uploads/2021/11/NOEL-SPECTACLE-THEATRE-1280x1280.jpg"
            alt=""
            className="w-full h-[150px] object-cover rounded-xl"
          />
        </Link>
        <div className="pListTitles">
          <h1 className="text-lg font-bold text-gray-800 mt-2 text-center">
            Theater Humor
          </h1>
        </div>
      </div>
      <div className="flex-[1] overflow-hidden cursor-pointer rounded-[10px]">
        <Link to={"/listings/4"}>
          <img
            src="https://media.resources.festicket.com/image/1519x554/smart/filters:quality(70)/www/magazine/BestEuro_B.jpg"
            alt=""
            className="w-full h-[150px] object-cover rounded-xl"
          />
        </Link>
        <div className="pListTitles">
          <h1 className="text-lg font-bold text-gray-800 mt-2 text-center">
            Festivals
          </h1>
        </div>
      </div>
      <div className="flex-[1] overflow-hidden cursor-pointer rounded-[10px]">
        <Link to={"/listings/3"}>
          <img
            src="https://www.smartraveller.gov.au/sites/default/files/2022-04/Cultural%20events%202.jpg"
            alt=""
            className="w-full h-[150px] object-cover rounded-xl"
          />
        </Link>
        <div className="pListTitles">
          <h1 className="text-lg font-bold text-gray-800 mt-2 text-center">
            Loisirs
          </h1>
        </div>
      </div>
    </div>
  );
};

export default EventsTypes;
