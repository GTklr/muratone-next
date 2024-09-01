// app/page.js
import Link from "next/link";
import { getLinks } from "../lib/links";

export const dynamic = "force-dynamic";

async function LinktreePage() {
  let links = [];
  try {
    links = await getLinks();
  } catch (error) {
    console.error("Error fetching links:", error);
  }

  return (
    <div className="flex justify-center items-center min-h-svh bg-primary p-4">
      <video
        autoPlay
        loop
        muted
        className="z-0 w-full h-full object-cover absolute top-0 left-0"
      >
        <source src="/hero12.webm" type="video/webm" />
      </video>

      <div className="max-w-screen-lg w-full border border-secondary rounded-lg p-6 z-10 bg-dark bg-opacity-30">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          Links
        </h1>
        {links && links.length > 0 ? (
          <ul className="space-y-4">
            {links.map((link) => (
              <li
                key={link.id}
                className="bg-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-bold text-white text-xl">
                      {link.title}
                    </h2>
                    {link.description && (
                      <p className="text-gray-300 ">{link.description}</p>
                    )}
                  </div>

                  <Link
                    href={link.url}
                    target="blank"
                    className="bg-success text-dark px-4 py-2 rounded hover:bg-opacity-80 transition-colors duration-300"
                  >
                    Visit
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white text-center">No links available.</p>
        )}
      </div>
    </div>
  );
}

export default LinktreePage;
