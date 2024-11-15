import { songs } from "@/data/songs/songs";

export const dynamic = "force-static";

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
