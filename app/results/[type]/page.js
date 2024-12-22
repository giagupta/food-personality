'use client'

import Link from 'next/link'

const letterMeanings = {
  S: {
    name: 'Sweet',
    description: 'You have a strong preference for sweet flavors, desserts, and foods with natural sweetness.',
    emoji: '🍯'
  },
  U: {
    name: 'Umami',
    description: 'You gravitate towards savory, rich flavors and foods with deep, complex taste profiles.',
    emoji: '🍖'
  },
  M: {
    name: 'Mild',
    description: 'You prefer balanced, gentle flavors and appreciate subtle heat and spice notes.',
    emoji: '🌿'
  },
  H: {
    name: 'Hot',
    description: 'You love spicy food and enjoy the excitement of heat in your dishes.',
    emoji: '🌶️'
  },
  C: {
    name: 'Crunchy',
    description: 'You seek out foods with crispy textures and enjoy the satisfaction of crunch.',
    emoji: '🥨'
  },
  T: {
    name: 'Tender',
    description: 'You prefer soft, melt-in-your-mouth textures and well-cooked, tender foods.',
    emoji: '🍲'
  },
  P: {
    name: 'Pure',
    description: 'You appreciate simple, clean flavors and dishes with fewer, high-quality ingredients.',
    emoji: '🍳'
  },
  L: {
    name: 'Layered',
    description: 'You enjoy complex dishes with multiple components and intricate flavor combinations.',
    emoji: '👨‍🍳'
  }
}

const foodTypes = {
  // Sweet, Mild, Crunchy, Pure
  'SMCP': {
    title: 'The Sweet Snacker',
    description: 'You gravitate towards simple, sweet treats with a satisfying crunch. Think honey-roasted nuts, caramel popcorn, and crispy cookies.',
    traits: ['Sweet tooth', 'Enjoys snacking', 'Loves crunch', 'Prefers simple flavors'],
    recommendations: ['Candied nuts', 'Shortbread cookies', 'Caramel popcorn', 'Apple chips']
  },
  // Umami, Hot, Tender, Layered
  'UHTL': {
    title: 'The Spice Seeker',
    description: 'You love complex, spicy dishes with rich umami flavors and tender textures. Think curry, slow-cooked spicy stews, and braised meats.',
    traits: ['Heat lover', 'Enjoys rich flavors', 'Appreciates tenderness', 'Loves complex dishes'],
    recommendations: ['Spicy curry', 'Braised short ribs', 'Hot pot', 'Szechuan dishes']
  },
  // Sweet, Hot, Tender, Layered
  'SHTL': {
    title: 'The Fusion Explorer',
    description: 'You enjoy the interplay of sweet and spicy, with complex layers of flavor in tender dishes. Think Korean BBQ, Thai curries, and fusion desserts.',
    traits: ['Sweet & spicy fan', 'Adventurous palate', 'Enjoys soft textures', 'Loves flavor complexity'],
    recommendations: ['Thai mango curry', 'Korean BBQ', 'Spicy chocolate desserts', 'Caramelized dishes']
  },
  // Umami, Mild, Crunchy, Layered
  'UMCL': {
    title: 'The Texture Enthusiast',
    description: 'You seek out complex savory dishes with contrasting textures. Think tempura, crispy duck, and layered pastries with savory fillings.',
    traits: ['Savory preference', 'Texture focused', 'Enjoys contrasts', 'Appreciates complexity'],
    recommendations: ['Tempura dishes', 'Crispy duck', 'Savory pastries', 'Textured salads']
  },
  // Sweet, Mild, Tender, Pure
  'SMTP': {
    title: 'The Comfort Seeker',
    description: 'You love simple, sweet comfort foods with soft textures. Think puddings, fresh bread, and smooth desserts.',
    traits: ['Sweet comfort foods', 'Gentle flavors', 'Soft textures', 'Simple preparations'],
    recommendations: ['Rice pudding', 'Fresh bread', 'Vanilla custard', 'Steamed cakes']
  },
  // Umami, Hot, Crunchy, Pure
  'UHCP': {
    title: 'The Bold Minimalist',
    description: 'You enjoy straightforward, spicy dishes with satisfying crunch. Think spicy chips, crispy chicken wings, and roasted nuts.',
    traits: ['Spice lover', 'Texture seeker', 'Direct flavors', 'Simple preparations'],
    recommendations: ['Spicy chips', 'Hot wings', 'Roasted nuts', 'Crispy chili']
  }
}

export default function Results({ params }) {
  const { type } = params
  const profile = foodTypes[type] || {
    title: 'Unique Food Explorer',
    description: 'Your taste profile is uniquely yours! You have a distinctive combination of preferences that makes your palate special.',
    traits: ['Unique combination', 'Personal style', 'Individual taste', 'Special preferences'],
    recommendations: ['Custom tasting menus', 'Fusion restaurants', 'Experimental cooking', 'Food exploration']
  }

  return (
    <div className="min-h-screen gradient-bg py-16 relative">
      {/* Decorative shapes */}
      <div className="geometric-shape shape-1 top-20 left-20"></div>
      <div className="geometric-shape shape-2 bottom-40 right-20"></div>
      <div className="geometric-shape shape-3 top-40 right-40"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Profile Header */}
          <div className="card p-8 mb-8 text-center">
            <div className="mascot mx-auto mb-6">
              <span className="text-2xl">🎉</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">
              Your Food Type is <span className="text-[var(--primary-purple)]">{type}</span>
            </h1>
            <h2 className="text-2xl text-[var(--text-gray)] mb-6">{profile.title}</h2>
            <p className="text-lg mb-8 text-[var(--text-gray)]">
              {profile.description}
            </p>
          </div>

          {/* Type Breakdown */}
          <div className="card p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Understanding Your Type</h3>
            <div className="grid gap-4">
              {type.split('').map((letter, index) => (
                <div key={index} className="card p-6 hover:bg-[var(--bg-lavender)] transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[var(--accent-green)] rounded-xl flex items-center justify-center">
                      {letterMeanings[letter].emoji}
                    </div>
                    <div>
                      <div className="font-bold text-[var(--primary-purple)]">
                        {letterMeanings[letter].name} ({letter})
                      </div>
                      <p className="text-[var(--text-gray)]">
                        {letterMeanings[letter].description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traits */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Your Food Profile</h3>
              <div className="grid gap-3">
                {profile.traits.map((trait, index) => (
                  <div key={index} 
                    className="p-4 bg-[var(--bg-lavender)] rounded-xl text-[var(--text-gray)]">
                    {trait}
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-6">Recommended Dishes</h3>
              <div className="grid gap-3">
                {profile.recommendations.map((dish, index) => (
                  <div key={index} 
                    className="p-4 bg-[var(--bg-lavender)] rounded-xl text-[var(--text-gray)]">
                    {dish}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="text-center">
            <Link 
              href="/"
              className="primary-button inline-block"
            >
              Take Test Again
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
