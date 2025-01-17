import React from 'react';
import { Diamond, Award, Medal } from 'lucide-react';

const categories = [
  {
    title: 'Platine',
    icon: Diamond,
    description: 'Partenaire principal avec visibilité maximale',
    amount: '80€ ou plus',
    benefits: ['Logo sur la voiture', 'Présence sur tous nos supports', 'Mention lors des événements', 'Et tous les avantages précédents']
  },
  {
    title: 'Or',
    icon: Award,
    description: 'Partenaire majeur du projet',
    amount: '30€ à 79€',
    benefits: ['Logo sur nos supports', 'Présence sur nos réseaux sociaux']
  },
  {
    title: 'Argent',
    icon: Medal,
    description: 'Partenaire de soutien',
    amount: '5€ à 29€',
    benefits: ['Mention sur notre site', 'Remerciements officiels']
  }
];

export function SponsorCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <div key={category.title} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
            <Icon className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="text-blue-600 font-semibold mb-4">{category.amount}</div>
            <ul className="space-y-2">
              {category.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="mr-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  );
}