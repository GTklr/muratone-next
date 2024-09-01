import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div
      id="intro"
      className="flex items-center justify-center text-center h-svh w-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/ITS1.jpg')",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.678)",
      }}
    >
      <div className="container mt-20">
        <Image
          src="/logo 1.png"
          width={500}
          height={300}
          alt="Muratone Logo"
          className="mx-auto w-1/2"
          id="muratonelogo"
        />
        <h1 className="text-4xl font-bold py-4 text-white">DJ | Producer</h1>
        <div className="mx-auto">
          <div>
            <Link
              href="/"
              className="btn bg-transparent text-white border border-white rounded py-1 px-5 font-bold mx-2 opacity-50 cursor-not-allowed"
            >
              profile
            </Link>
            <Link
              href="/music"
              className="btn bg-success  mx-2 rounded py-1 px-5 font-bold text-dark hover:bg-opacity-80"
            >
              music
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
