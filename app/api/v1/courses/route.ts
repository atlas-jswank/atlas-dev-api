import { courses } from "@/data/songs/courses";

export const dynamic = "force-static";

/**
 * @swagger
 * /api/v1/courses:
 *   get:
 *     description: Returns list of all courses
 *     tags:
 *      - Courses
 *     responses:
 *       200:
 *         description: course array
 */
export const GET = () => {
  return Response.json(courses);
};
