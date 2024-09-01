"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LinkCreatePage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [links, setLinks] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      fetchLinks();
    }
  }, [isAuthenticated]);

  const fetchLinks = async () => {
    try {
      const response = await fetch("/api/links");
      if (response.ok) {
        const data = await response.json();
        setLinks(data);
      } else {
        throw new Error("Failed to fetch links");
      }
    } catch (err) {
      setError("Failed to fetch links");
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === "muratone123") {
      setIsAuthenticated(true);
    } else {
      setError("Incorrect password");
    }
  };

  const handleLinkSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, url, description }),
      });

      if (response.ok) {
        setTitle("");
        setUrl("");
        setDescription("");
        fetchLinks();
      } else {
        throw new Error("Failed to create link");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/links/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchLinks();
      } else {
        throw new Error("Failed to delete link");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-primary p-4">
        <div className="max-w-md w-full bg-secondary rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-4 text-white text-center">
            Enter Password
          </h1>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded"
              placeholder="Enter password"
            />
            <button
              type="submit"
              className="w-full bg-success text-white p-2 rounded hover:bg-success-dark"
            >
              Submit
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-primary p-4">
      <div className="max-w-screen-md w-full bg-secondary rounded-lg p-8 mb-8 text-wrap">
        <h1 className="text-2xl font-bold mb-4 text-white text-center">
          Create New Link
        </h1>
        <form onSubmit={handleLinkSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded"
            placeholder="Title"
            required
          />
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full p-2 rounded"
            placeholder="URL"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded"
            placeholder="Description"
            rows="3"
          />
          <button
            type="submit"
            className="w-full bg-success text-white p-2 rounded hover:bg-success-dark"
          >
            Create Link
          </button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <h2 className="text-xl font-bold mb-4 text-white mt-10">All Links</h2>
        {links.length > 0 ? (
          <ul className="space-y-4 text-wrap ">
            {links.map((link) => (
              <li
                key={link.id}
                className="border-2 bg-primary rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div className="w-full sm:w-3/4">
                  <h3 className="text-lg font-semibold text-white">
                    {link.title}
                  </h3>
                  <a
                    href={link.url}
                    className="text-blue-300 hover:underline break-all overflow-wrap-normal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.url}
                  </a>
                  {link.description && (
                    <p className="text-gray-300 mt-1 break-words">
                      {link.description}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleDelete(link.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mt-2 sm:mt-0"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">No links available.</p>
        )}
      </div>
    </div>
  );
}
