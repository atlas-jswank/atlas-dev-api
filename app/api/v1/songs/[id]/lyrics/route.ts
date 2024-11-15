import { songs } from "@/data/songs/songs";

export const dynamic = "force-static";

export const GET = async (
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const id = (await params).id;
  const song = songs.filter((song) => song.id === id);

  if (song.length === 0)
    return Response.json({ message: "Song not found" }, { status: 404 });

  return Response.json({ lyrics: song[0].lyrics });
};
