export const SectionTop = ({title}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-pulse border-t-3 border-amber-300 rounded-full size-full  lg:size-180 flex items-center justify-center">
        <div className="animate-pulse border-t-3 border-amber-300 rounded-full size-100 lg:size-150">
          <h1 className="text-white text-5xl lg:text-7xl lg:-mb-22 font-bold text-center pt-40 px-4">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};
