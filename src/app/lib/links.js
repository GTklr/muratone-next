// lib/links.js
import pool from "./db";

export async function getLinks() {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM links ORDER BY id DESC");
    return result.rows;
  } finally {
    client.release();
  }
}

export async function createLink({ title, url, description }) {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "INSERT INTO links (title, url, description) VALUES ($1, $2, $3) RETURNING *",
      [title, url, description]
    );
    return result.rows[0];
  } finally {
    client.release();
  }
}
