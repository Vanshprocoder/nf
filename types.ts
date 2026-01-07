
import React from 'react';
import { Program, Trainer, PricingPlan, Testimonial } from './types';
import { Dumbbell, Zap, Target, UserPlus, Flame } from 'lucide-react';

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Muscle Building',
    description: 'Hypertrophy focused training for maximum gains and strength.',
    icon: <Dumbbell className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Fat Loss',
    description: 'High-intensity metabolic conditioning to shred body fat.',
    icon: <Flame className="w-6 h-6" />,
    image: '/images/fatloss.jpg'
  },
  {
    id: '3',
    title: 'Functional Training',
    description: 'Improve mobility, stability, and everyday performance.',
    icon: <Zap className="w-6 h-6" />,
    image: '/images/trainig.jpg'
  },
  {
    id: '4',
    title: 'Strength & Conditioning',
    description: 'Elite athletic preparation for peak human performance.',
    icon: <Target className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=800'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Marcus Thorne',
    specialization: 'Bodybuilding & Nutrition',
    experience: '12 Years Experience',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800',
    bio: 'Dedicated to helping athletes reach their natural potential through science-based lifting.'
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    specialization: 'HIIT & Weight Loss',
    experience: '8 Years Experience',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800',
    bio: 'Certified metabolic specialist focused on sustainable transformation and lifestyle change.'
  },
  {
    id: '3',
    name: 'Viktor Ivanov',
    specialization: 'Strength Athletics',
    experience: '15 Years Experience',
    image: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?auto=format&fit=crop&q=80&w=800',
    bio: 'Former powerlifting champion teaching the core mechanics of absolute strength.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: '1',
    name: '1 Month',
    price: 'INR 699',
    duration: '/Month',
    features: ['Unlimited Gym Access', 'Locker Room Access', 'Standard Gym App']
  },
  {
    id: '2',
    name: '1 Year + 6 Month Free',
    price: 'INR 4999',
    duration: '@ 416/month',
    isPopular: true,
    features: ['Everything in shorter plans', '6 Months free' ,'Free Nutrition Consult', '4 PT Sessions/Month', 'Priority Support']
  },
  {
    id: '3',
    name: '3 Month',
    price: 'INR 1699',
    duration: '@ 566/month',
    features: ['Unlimited Gym Access', 'Locker Room Access', 'Standard Gym App']
  },

  {
    id: '4',
    name: '6 Month',
    price: 'INR 2799',
    duration: '@ 466/month',
    
    features: ['Unlimited Gym Access', 'Locker Room Access', 'Standard Gym App']
  },
  {
    id: '5',
    name: 'Personal Training',
    price: 'INR 1999',
    duration: '/month',
    isPersonal: true,
    features: ['1-on-1 Dedicated Training', 'Custom Meal Plans', 'Daily Accountability', 'Body Composition Analysis']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'David Miller',
    role: 'Member since 2022',
    text: 'Lost 25lbs in 3 months. The atmosphere here is different—it actually makes you want to work hard.',
    image: '../public/images/img1.jpeg'
  },
  {
    id: '2',
    name: 'Elena Rodriguez',
    role: 'Corporate Professional',
    text: 'Best PT I’ve ever had. My strength has doubled and my posture issues from work are gone.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];
