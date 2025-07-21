import { Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="w-[100vw] h-[100vh] pb-5 bg-[url(/landing/bg-desktop.svg)] bg-primary">
      <div className="container flex flex-col h-full justify-between w-[540px] lg:w-[1140px] md:w-[960px] sm:w-[720px] ">
        <nav className="py-16">
          <img src="/landing/logo.svg" alt="Logo" className="max-w-full" />
        </nav>
        <header className="flex items-center justify-between gap-12">
          <div className="basis-1/2">
            <img
              src="/landing/illustration-mockups.svg"
              alt="illustration-mockups"
              className="max-w-full"
            />
          </div>
          <div className="basis-1/2">
            <h2 className="text-5xl text-white mb-5 leading-relaxed font-poppins font-bold">
              Build The Community Your Fans Will Love
            </h2>
            <p className="text-white leading-normal text-xl mb-5">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <div className="flex gap-8">
              <Link
                to="/login"
                className="bg-white text-primary text-lg text-center w-[170px] p-4 rounded-4xl outline-0 border-0"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-white text-primary text-lg text-center w-[170px] p-4 rounded-4xl outline-0 border-0"
              >
                Register
              </Link>
            </div>
          </div>
        </header>
        <footer className="flex items-center justify-end gap-5">
          <div className="flex items-center justify-center rounded-full bg-transparent border-[1px] border-white h-9 w-9 text-center leading-9">
            <Facebook fill="white" strokeWidth={0} />
          </div>
          <div className="flex items-center justify-center rounded-full bg-transparent border-[1px] border-white h-9 w-9 text-center leading-9">
            <Twitter fill="white" strokeWidth={0} />
          </div>
          <div className="flex items-center justify-center rounded-full bg-transparent border-[1px] border-white h-9 w-9 text-center leading-9">
            <Instagram stroke="white" />
          </div>
        </footer>
      </div>
    </main>
  );
};

export default LandingPage;
