
export interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
}
