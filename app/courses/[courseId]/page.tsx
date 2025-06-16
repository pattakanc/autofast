"use client"
import React from 'react';
import { useParams } from 'next/navigation';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params?.courseId as string;
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Course Detail</h1>
      <p>Course ID: {courseId}</p>
    </main>
  );
}
