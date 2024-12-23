'use client'

import { useParams, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { profiles } from '@/app/data/profiles'
import { letterMeanings } from '@/app/data/questions'

const preferencePairs = [
  { left: 'S', right: 'U', label: 'Taste' },
  { left: 'M', right: 'H', label: 'Heat' },
  { left: 'C', right: 'T', label: 'Texture' },
  { left: 'P', right: 'L', label: 'Complexity' }
]

export default function Results() {
  const { type } = useParams()
  const searchParams = useSearchParams()
  
  // Debug logs
  console.log('Raw type:', type)
  console.log('Available profiles:', Object.keys(profiles))
  
  // Convert type to uppercase and trim any whitespace
  const normalizedType = type?.toUpperCase()?.trim()
  console.log('Normalized type:', normalizedType)
  console.log('Profile found:', profiles[normalizedType])
  
  const profile = profiles[normalizedType] || {
    title: `Unknown Type (${normalizedType})`, // Add type to error message
    description: `Profile not found for type: ${normalizedType}`,
    traits: [],
    recommendations: []
  }

  // Get percentages from URL parameters
  const percentagesParam = searchParams.get('percentages')
  const percentages = percentagesParam ? JSON.parse(percentagesParam) : null

  const getPercentage = (letter) => {
    if (percentages && percentages[letter]) {
      return percentages[letter]
    }
    // Fallback if percentages aren't available
    // For each pair, if one letter is in the type, it gets 60%, its complement gets 40%
    const getComplementaryPercentage = (mainLetter, complementLetter) => {
      if (type.includes(mainLetter)) {
        return letter === mainLetter ? 60 : 40
      } else if (type.includes(complementLetter)) {
        return letter === complementLetter ? 60 : 40
      }
      return 50
    }

    switch(letter) {
      case 'S':
      case 'U':
        return getComplementaryPercentage('S', 'U')
      case 'M':
      case 'H':
        return getComplementaryPercentage('M', 'H')
      case 'C':
      case 'T':
        return getComplementaryPercentage('C', 'T')
      case 'P':
      case 'L':
        return getComplementaryPercentage('P', 'L')
      default:
        return 50
    }
  }

  const handleShare = async () => {
    // Create emoji grid based on percentages
    const createEmojiBar = (percent) => {
      if (percent >= 80) return '🟪🟪🟪🟪🟪';
      if (percent >= 60) return '🟪🟪🟪🟪⬜';
      if (percent >= 40) return '🟪🟪🟪⬜⬜';
      if (percent >= 20) return '🟪🟪⬜⬜⬜';
      return '🟪⬜⬜⬜⬜';
    };

    const pairs = [
      { left: 'S', right: 'U', leftName: 'Sweet', rightName: 'Umami' },
      { left: 'M', right: 'H', leftName: 'Mild', rightName: 'Hot' },
      { left: 'C', right: 'T', leftName: 'Crunchy', rightName: 'Tender' },
      { left: 'P', right: 'L', leftName: 'Pure', rightName: 'Layered' }
    ];

    const emojiGrid = pairs.map(({ left, right, leftName, rightName }) => {
      const leftPercent = getPercentage(left);
      const rightPercent = getPercentage(right);
      const bar = createEmojiBar(leftPercent);
      return `${leftName.padEnd(8)} ${bar} ${rightName}`;
    }).join('\n');

    const shareText = `🍽️ The Taste Bud Test 🍽️\n\nI'm a ${type} (${profile.title})!\n\n${emojiGrid}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My Food Personality Type',
          text: shareText
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        alert('Results copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

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

          {/* Preference Breakdown */}
          <div className="card p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Your Preference Breakdown</h3>
            <div className="space-y-6">
              {preferencePairs.map(({ left, right, label }) => {
                const leftPercent = getPercentage(left)
                const rightPercent = getPercentage(right)
                const isLeftDominant = leftPercent >= rightPercent

                return (
                  <div key={label} className="relative">
                    <div className="flex justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 bg-[var(--accent-pink)] rounded-lg flex items-center justify-center">
                          {letterMeanings[left].emoji}
                        </span>
                        <span className="font-medium">
                          {letterMeanings[left].name} ({left})
                        </span>
                        <span className="text-[var(--text-gray)]">{leftPercent}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[var(--text-gray)]">{rightPercent}%</span>
                        <span className="font-medium">
                          {letterMeanings[right].name} ({right})
                        </span>
                        <span className="w-8 h-8 bg-[var(--accent-blue)] rounded-lg flex items-center justify-center">
                          {letterMeanings[right].emoji}
                        </span>
                      </div>
                    </div>
                    <div className="h-3 bg-[var(--bg-lavender)] rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-[var(--primary-purple)] rounded-full transition-all duration-500`}
                        style={{ 
                          width: `${Math.max(leftPercent, rightPercent)}%`,
                          marginLeft: isLeftDominant ? '0' : 'auto',
                          marginRight: isLeftDominant ? 'auto' : '0'
                        }}
                      ></div>
                    </div>
                    <div className="text-center text-sm text-[var(--text-gray)] mt-1">
                      {label}
                    </div>
                  </div>
                )
              })}
            </div>
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

          {/* Share Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleShare}
              className="bg-[var(--primary-purple)] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share Results
            </button>
          </div>

          {/* Action Button */}
          <div className="text-center mt-8">
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
