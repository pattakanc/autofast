
export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'article' | 'quiz';
  previewable?: boolean;
  contentUrl?: string; // for video
  contentText?: string; // for article
}

export interface CurriculumSection {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Instructor {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  rating?: number;
  reviews?: number;
  coursesCount?: number;
}

export interface Review {
  id: string;
  reviewerName: string;
  reviewerAvatarUrl?: string; // Optional: URL to reviewer's avatar
  rating: number; // 1-5 stars
  date: string; // ISO date string or formatted
  comment: string;
  // Possible future additions:
  // userId: string;
  // helpfulVotes?: number;
}

export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  instructor: Instructor;
  description: string;
  longDescription?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  thumbnailUrl: string;
  category: string;
  tags?: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string; // e.g., '10 hours', '6 weeks'
  studentsEnrolled: number;
  lastUpdated: string; // ISO date string or formatted
  whatYouWillLearn?: string[];
  requirements?: string[];
  curriculum?: CurriculumSection[];
  language?: string;
  certificate?: boolean;
  reviews?: Review[]; // Added reviews property
}

export interface Category {
  id: string;
  name: string;
  slug: string; // for URL
}
