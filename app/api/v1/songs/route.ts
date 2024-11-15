import { songs } from "@/data/songs/songs";

export const dynamic = "force-static";

/**
 * @swagger
 * /api/v1/songs:
 *   get:
 *     description: Returns list of all songs
 *     tags:
 *      - Songs
 *     responses:
 *       200:
 *         description: Songs array
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   artist:
 *                     type: string
 *                   genre:
 *                     type: string
 *                   duration:
 *                     type: number
 */

export const GET = () => {
  return Response.json(
    songs.map((song) => ({
      id: song.id,
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      duration: song.duration,
    }))
  );
};
