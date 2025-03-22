export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'user' | 'author' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserProfile extends Omit<User, 'password'> {
  bio?: string;
  website?: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
  totalThemes?: number;
  totalSales?: number;
  rating?: number;
} 