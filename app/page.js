import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      {/* Decorative shapes */}
      <div className="geometric-shape shape-1 top-20 left-20"></div>
      <div className="geometric-shape shape-2 bottom-40 right-20"></div>
      <div className="geometric-shape shape-3 top-40 right-40"></div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Mascot */}
          <div className="mascot mx-auto mb-6">
            <span className="text-2xl">🍽️</span>
          </div>
          
          <div className="card p-8 mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Hello, Food Explorer!
            </h1>
            <p className="text-xl mb-8 text-[var(--text-gray)]">
              Ready to discover your unique food personality?
            </p>
            
            <Link 
              href="/quiz"
              className="primary-button inline-block"
            >
              Start Quiz
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="card p-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-[var(--accent-yellow)] rounded-full flex items-center justify-center">
                  <span className="text-xl">📝</span>
                </div>
                <span className="font-semibold text-lg">{15} Questions</span>
              </div>
              <p className="text-[var(--text-gray)]">Quick and fun to answer</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-[var(--accent-green)] rounded-full flex items-center justify-center">
                  <span className="text-xl">⏱️</span>
                </div>
                <span className="font-semibold text-lg">{3} Minutes</span>
              </div>
              <p className="text-[var(--text-gray)]">Fast and insightful</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-[var(--accent-blue)] rounded-full flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <span className="font-semibold text-lg">Instant Results</span>
              </div>
              <p className="text-[var(--text-gray)]">Get your type right away</p>
            </div>
          </div>

          {/* Food Profile Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-2xl mx-auto">
            <div className="card p-3 flex flex-col items-center justify-center text-center h-[120px]">
              <div className="w-10 h-10 bg-[var(--accent-pink)] rounded-lg mb-2 flex items-center justify-center">
                <span className="text-xl" style={{ fontSize: '20px' }}>🍰</span>
              </div>
              <h3 className="font-bold text-base mb-0.5">Taste</h3>
              <p className="text-[var(--text-gray)] text-xs">Sweet or Savory?</p>
            </div>

            <div className="card p-3 flex flex-col items-center justify-center text-center h-[120px]">
              <div className="w-10 h-10 bg-[var(--accent-yellow)] rounded-lg mb-2 flex items-center justify-center">
                <span className="text-xl" style={{ fontSize: '20px' }}>🌶️</span>
              </div>
              <h3 className="font-bold text-base mb-0.5">Heat</h3>
              <p className="text-[var(--text-gray)] text-xs">Mild or Spicy?</p>
            </div>

            <div className="card p-3 flex flex-col items-center justify-center text-center h-[120px]">
              <div className="w-10 h-10 bg-[var(--accent-green)] rounded-lg mb-2 flex items-center justify-center">
                <span className="text-xl" style={{ fontSize: '20px' }}>🥨</span>
              </div>
              <h3 className="font-bold text-base mb-0.5">Texture</h3>
              <p className="text-[var(--text-gray)] text-xs">Crunchy or Tender?</p>
            </div>

            <div className="card p-3 flex flex-col items-center justify-center text-center h-[120px]">
              <div className="w-10 h-10 bg-[var(--accent-blue)] rounded-lg mb-2 flex items-center justify-center">
                <span className="text-xl" style={{ fontSize: '20px' }}>👨‍🍳</span>
              </div>
              <h3 className="font-bold text-base mb-0.5">Complexity</h3>
              <p className="text-[var(--text-gray)] text-xs">Pure or Layered?</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
