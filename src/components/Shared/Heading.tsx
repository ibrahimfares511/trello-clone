interface HeadingProps {
  text: string;
}
const Heading = ({ text }: HeadingProps) => {
  return (
    <div className="relative w-fit h-16">
      <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500 rounded-md"></div>
      <p className="text-center font-extrabold text-5xl font-poppins">{text}</p>
    </div>
  );
};

export default Heading;
