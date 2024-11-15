import { songs } from "@/data/songs/songs";

export const dynamic = "force-static";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const id = (await params).id;
  const song = songs
    .filter((song) => song.id === id)
    .map((song) => ({
      id: song.id,
      title: song.title,
      artist: song.artist,
      genre: song.genre,
      duration: song.duration,
      cover: song.cover,
      song: song.song,
    }));

  if (song.length === 0)
    return Response.json({ message: "Song not found" }, { status: 404 });

  return Response.json(song[0]);
};
