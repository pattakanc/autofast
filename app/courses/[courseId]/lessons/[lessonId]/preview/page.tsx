"use client"
import React from 'react';
import { useParams } from 'next/navigation';

export default function LessonPreviewPage() {
  const params = useParams();
  const courseId = params?.courseId as string;
  const lessonId = params?.lessonId as string;
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Lesson Preview</h1>
      <p>Course: {courseId}</p>
      <p>Lesson: {lessonId}</p>
    </main>
  );
}
