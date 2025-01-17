import React from 'react';
import { Trophy, Users, Rocket, Mail } from 'lucide-react';
import { ContactForm } from './components/ContactForm';
import { SponsorCategories } from './components/SponsorCategories';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://brevet.hitopia.org/storage/img/korolux-logo-transparant.png"
                alt="Korolux Logo"
                className="h-32 mb-6"
              />
              <h1 className="text-4xl font-bold mb-4">
                Équipe Korolux
              </h1>
              <p className="text-xl mb-6">
                Participants au challenge Course en Cours - L'innovation au cœur de notre projet
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Course en Cours"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Trophy className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Notre Challenge</h3>
              <p className="text-gray-600">
                Participation au concours Course en Cours, un défi pédagogique et technologique unique.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Notre Équipe</h3>
              <p className="text-gray-600">
                Une équipe passionnée d'étudiants déterminés à repousser les limites de l'innovation.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Rocket className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Notre Projet</h3>
              <p className="text-gray-600">
                Conception et réalisation d'une mini voiture de course électrique innovante.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Categories Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Offres de Partenariat</h2>
          <SponsorCategories />
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vous souhaitez devenir partenaire ou en savoir plus sur notre projet ? 
              N'hésitez pas à nous contacter via le formulaire ci-dessous.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <img
            src="https://brevet.hitopia.org/storage/img/korolux-logo-transparant.png"
            alt="Korolux Logo"
            className="h-16 mx-auto mb-4"
          />
          <p className="text-gray-400">
            © {new Date().getFullYear()} Équipe Korolux - Course en Cours
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;