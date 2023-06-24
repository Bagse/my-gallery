function Button({ number, label }) {
  return (
    <div className="bg-[#E5E5E5] font-mont font-semibold text-sm rounded-xl flex flex-col items-center w-[86px] py-2 my-2">
      <p className="text-[#4E5150] md:text-lg">{number}</p>
      <h3 className="text-[#BDBDBD] capitalize md:text-sm">{label}</h3>
    </div>
  );
}

export default Button;
