import { Request, Response } from 'express'
import { sql } from '../db'

// GET ALL COURSES
export async function getAllCourses(req: Request, res: Response) {
  try {
    const courses = await sql`
      SELECT *
      FROM courses
      ORDER BY course_id
    `
    res.json(courses)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Failed to get courses',
    })
  }
}

// GET COURSE BY ID
export async function getCourseById(req: Request, res: Response) {
  try {
    const { id } = req.params
    const course = await sql`
      SELECT *
      FROM courses
      WHERE course_id = ${id}
    `
    res.json(course)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Failed to get course',
    })
  }
}

// ADD COURSE
export async function addCourse(req: Request, res: Response) {
  try {
    const { course_name } = req.body
    const course = await sql`
      INSERT INTO courses (course_name)
      VALUES (${course_name})
      RETURNING *
    `
    res.status(201).json(course)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Failed to create course',
    })
  }
}

// UPDATE COURSE
export async function updateCourse(req: Request, res: Response) {
  try {
    const { id } = req.params
    const { course_name } = req.body
    const course = await sql`
      UPDATE courses
      SET course_name = ${course_name}
      WHERE course_id = ${id}
      RETURNING *
    `
    res.json(course)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Failed to update course',
    })
  }
}

// DELETE COURSE
export async function deleteCourse(req: Request, res: Response) {
  try {
    const { id } = req.params
    const course = await sql`
      DELETE FROM courses
      WHERE course_id = ${id}
      RETURNING *
    `
    res.json(course)
  } catch (error) {
    console.error(error)
    res.status(500).json({
      error: 'Failed to delete course',
    })
  }
}
