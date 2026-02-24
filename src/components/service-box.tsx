export const ServiceBox = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="rounded-2xl border bg-white py-6 px-5 shadow-sm hover:shadow-md transition-all">
      <div className="w-12 h-12 border-2 bg[#E68E40] text-[#E68E40] rounded-full flex items-center justify-center textwhite text-xl">
        {icon}
      </div>

      <h3 className="mt-4 text-[22px] leading-6.5 font-semibold">{name}</h3>

      <p className="mt-2 text-[16px] font-normal text-[#000000] leading-6.5">
        {description}
      </p>
    </div>
  );
};
