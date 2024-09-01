// app/api/links/route.js
import { NextResponse } from "next/server";
import { getLinks, createLink } from "@/app/lib/links";

export async function GET() {
  try {
    const links = await getLinks();
    return NextResponse.json(links);
  } catch (error) {
    console.error("Error fetching links:", error);
    return NextResponse.json(
      { error: "Failed to fetch links" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { title, url, description } = await request.json();

    if (!title || !url) {
      return NextResponse.json(
        { error: "Title and URL are required" },
        { status: 400 }
      );
    }

    const newLink = await createLink({ title, url, description });
    return NextResponse.json(newLink, { status: 201 });
  } catch (error) {
    console.error("Error creating link:", error);
    return NextResponse.json(
      { error: "Failed to create link" },
      { status: 500 }
    );
  }
}
