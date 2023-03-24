const Cities = () => {
  return (
    <div className=" max-w-screen-lg flex justify-between z-10 gap-5	mt-5 mx-auto">
      <div className="relative text-white overflow-hidden h-64 flex-[1]">
        <img
          src="https://www.e-madina.org/wp-content/uploads/2015/07/Morocco-Casablanca-Twin-Towers.jpg"
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-5 left-5">
          <h1>Casablanca</h1>
          <h2>10 Events</h2>
        </div>
      </div>

      <div className="relative text-white overflow-hidden h-64 flex-[1]">
        <img
          src="https://images.partir.com/aSju_gX19C5jKVYt4iGjvaABVEA=/800x/ou-se-loger/maroc-marrakech-hotel-medina.jpg"
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-5 left-5">
          <h1>Marrakech</h1>
          <h2>5 Events</h2>
        </div>
      </div>
      <div className="relative text-white overflow-hidden h-64 flex-[1]">
        <img
          src="https://i0.wp.com/leseco.ma/wp-content/uploads/2021/06/Tanger-Tetouan.jpg?w=1200&ssl=1"
          alt=""
          className="w-full h-full object-cover rounded-xl "
        />
        <div className="absolute bottom-5 left-5">
          <h1>Tanger</h1>
          <h2>15 Events</h2>
        </div>
      </div>
    </div>
  );
};

export default Cities;
