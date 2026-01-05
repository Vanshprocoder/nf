
import React, { useState } from 'react';

const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = (e: React.FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      const hInMeters = parseFloat(height) / 100;
      const w = parseFloat(weight);
      const bmiValue = w / (hInMeters * hInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue < 25) setCategory('Normal weight');
      else if (bmiValue < 30) setCategory('Overweight');
      else setCategory('Obese');
    }
  };

  return (
    <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
      <h3 className="text-2xl mb-6 font-bold text-center">BMI Calculator</h3>
      <form onSubmit={calculateBMI} className="space-y-4">
        <div>
          <label className="block text-sm text-zinc-400 mb-1">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none"
            placeholder="e.g. 75"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-zinc-400 mb-1">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-white focus:border-neon focus:ring-1 focus:ring-neon outline-none"
            placeholder="e.g. 180"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-neon text-zinc-950 font-bold py-3 rounded-lg hover:bg-lime-300 transition-colors uppercase tracking-wider"
        >
          Calculate
        </button>
      </form>

      {bmi !== null && (
        <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
          <p className="text-zinc-400 text-sm">Your BMI</p>
          <h4 className="text-4xl font-bold text-neon my-2">{bmi}</h4>
          <p className="text-lg font-semibold">{category}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
