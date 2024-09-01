import { NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const client = await pool.connect();
    try {
      await client.query("DELETE FROM links WHERE id = $1", [id]);
      return NextResponse.json(
        { message: "Link deleted successfully" },
        { status: 200 }
      );
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Error deleting link:", error);
    return NextResponse.json(
      { error: "Failed to delete link" },
      { status: 500 }
    );
  }
}
