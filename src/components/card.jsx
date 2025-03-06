const Card = ({ name, hospital, doctor, time, logo }) => {
    return (
      <div className="w-[359px] h-[209px] bg-white shadow-md rounded-lg p-4">
        <div className="flex justify-between">
          <h3 className="font-semibold">{name}</h3>
          <img src={logo} alt="Logo" className="w-8 h-8" />
        </div>
        <p className="text-sm text-gray-500">{hospital}</p>
        <p className="text-sm text-gray-700">Dr(a): {doctor}</p>
        <div className="flex justify-between mt-4">
          <span className="text-gray-600">{time} min</span>
          <button className="text-blue-500">➡</button>
        </div>
      </div>
    );
  };
  
  export default Card;
  