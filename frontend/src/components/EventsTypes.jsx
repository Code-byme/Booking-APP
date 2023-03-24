const EventsTypes = () => {
  return (
    <div className="max-w-screen-lg flex justify-between gap-5 mx-auto mt-3">
      <div className="flex-[1] overflow-hidden cursor-pointer rounded-[10px]">
        <img
          src="https://i0.wp.com/havefun.travel/wp-content/uploads/2021/06/best-live-concerts-in-budapest-early-autumn-2943968.jpg?resize=768%2C432&ssl=1"
          alt=""
          className="w-full h-[150px] object-cover rounded-xl"
        />
        <div className="pListTitles">
          <h1 className="text-lg ">Concerts</h1>
          <h2 className="text-sm font-light"></h2>
        </div>
      </div>
      <div className="flex-[1] overflow-hidden cursor-pointer rounded-[10px]">
        <img
          src="https://lemag.ales.fr/wp-content/uploads/2021/11/NOEL-SPECTACLE-THEATRE-1280x1280.jpg"
          alt=""
          className="w-full h-[150px] object-cover rounded-xl"
        />
        <div className="pListTitles">
          <h1 className="text-lg ">Theater Humor</h1>
          <h2 className="text-sm font-light"></h2>
        </div>
      </div>
      <div className="flex-[1] overflow-hidden cursor-pointer rounded-[10px]">
        <img
          src="https://media.resources.festicket.com/image/1519x554/smart/filters:quality(70)/www/magazine/BestEuro_B.jpg"
          alt=""
          className="w-full h-[150px] object-cover rounded-xl"
        />
        <div className="pListTitles">
          <h1 className="text-lg ">Festivals</h1>
          <h2 className="text-sm font-light"></h2>
        </div>
      </div>
      <div className="flex-[1] overflow-hidden cursor-pointer rounded-[10px]">
        <img
          src="https://www.smartraveller.gov.au/sites/default/files/2022-04/Cultural%20events%202.jpg"
          alt=""
          className="w-full h-[150px] object-cover rounded-xl"
        />
        <div className="pListTitles">
          <h1 className="text-lg ">Loisirs</h1>
          <h2 className="text-sm font-light"></h2>
        </div>
      </div>
    </div>
  );
};

export default EventsTypes;
