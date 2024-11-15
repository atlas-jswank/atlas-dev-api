import { courses } from "@/data/songs/courses";

export const dynamic = "force-static";

export const GET = () => {
  return Response.json(courses);
};
