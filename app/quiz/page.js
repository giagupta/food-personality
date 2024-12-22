'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const questions = [
  {
    id: 1,
    question: "When you're feeling down, what kind of comfort food do you reach for?",
    answers: [
      { text: "A warm chocolate chip cookie or ice cream", type: "S" },
      { text: "A bowl of rich ramen or mac and cheese", type: "U" }
    ]
  },
  {
    id: 2,
    question: "At a buffet, which section do you visit first?",
    answers: [
      { text: "The dessert station with pastries and cakes", type: "S" },
      { text: "The grilled meats and seafood section", type: "U" }
    ]
  },
  {
    id: 3,
    question: "At an Asian restaurant, your go-to order would be:",
    answers: [
      { text: "Pad Thai or mild curry with coconut milk", type: "M" },
      { text: "Szechuan dishes or spicy Korean ramyeon", type: "H" }
    ]
  },
  {
    id: 4,
    question: "When trying a new cuisine, you prefer:",
    answers: [
      { text: "Starting with familiar, milder dishes", type: "M" },
      { text: "Going straight for the authentic spicy specialties", type: "H" }
    ]
  },
  {
    id: 5,
    question: "Your ideal snack while watching a movie would be:",
    answers: [
      { text: "Popcorn, chips, or crackers", type: "C" },
      { text: "Chocolate, cheese, or fruit", type: "T" }
    ]
  },
  {
    id: 6,
    question: "When eating a sandwich, what matters most?",
    answers: [
      { text: "The crunch of fresh lettuce and toasted bread", type: "C" },
      { text: "The tenderness of the fillings and bread", type: "T" }
    ]
  },
  {
    id: 7,
    question: "When cooking pasta, you prefer it:",
    answers: [
      { text: "Al dente with a bit of bite", type: "C" },
      { text: "Soft and tender throughout", type: "T" }
    ]
  },
  {
    id: 8,
    question: "Your ideal breakfast would be:",
    answers: [
      { text: "Simple eggs and toast", type: "P" },
      { text: "A loaded breakfast burrito with multiple toppings", type: "L" }
    ]
  },
  {
    id: 9,
    question: "When making a salad, you prefer:",
    answers: [
      { text: "A few fresh ingredients with light dressing", type: "P" },
      { text: "Many ingredients with various textures and flavors", type: "L" }
    ]
  },
  {
    id: 10,
    question: "At a café, your coffee order is usually:",
    answers: [
      { text: "Black coffee or espresso", type: "P" },
      { text: "A specialty drink with multiple flavors", type: "L" }
    ]
  },
  {
    id: 11,
    question: "When having pizza, you typically:",
    answers: [
      { text: "Stick to classic margherita or pepperoni", type: "P" },
      { text: "Load it up with multiple toppings", type: "L" }
    ]
  },
  {
    id: 12,
    question: "Your ideal sushi roll would be:",
    answers: [
      { text: "A simple nigiri or basic tuna roll", type: "P" },
      { text: "A dragon roll with multiple ingredients", type: "L" }
    ]
  },
  {
    id: 13,
    question: "At a food festival, you're most excited about:",
    answers: [
      { text: "Traditional dishes made perfectly", type: "P" },
      { text: "Innovative fusion creations", type: "L" }
    ]
  },
  {
    id: 14,
    question: "When ordering ice cream, you prefer:",
    answers: [
      { text: "Classic vanilla or chocolate", type: "S" },
      { text: "Savory-sweet combinations like salted caramel", type: "U" }
    ]
  },
  {
    id: 15,
    question: "Your ideal taco would be:",
    answers: [
      { text: "Mild chicken or fish with fresh salsa", type: "M" },
      { text: "Spicy carne asada with hot sauce", type: "H" }
    ]
  }
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null))
  const router = useRouter()

  const handleAnswer = (type) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = type
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleSubmit = () => {
    // Calculate food personality type
    const types = {
      S: 0, U: 0,  // Sweet vs Umami
      M: 0, H: 0,  // Mild vs Hot
      C: 0, T: 0,  // Crunchy vs Tender
      P: 0, L: 0   // Pure vs Layered
    }
    
    answers.forEach(answer => {
      if (answer) types[answer]++
    })

    const foodType = [
      types.S > types.U ? 'S' : 'U',
      types.M > types.H ? 'M' : 'H',
      types.C > types.T ? 'C' : 'T',
      types.P > types.L ? 'P' : 'L'
    ].join('')

    router.push(`/results/${foodType}`)
  }

  return (
    <div className="min-h-screen gradient-bg py-16 relative">
      {/* Decorative shapes */}
      <div className="geometric-shape shape-1 top-20 left-20"></div>
      <div className="geometric-shape shape-2 bottom-40 right-20"></div>
      <div className="geometric-shape shape-3 top-40 right-40"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Mascot and Progress */}
          <div className="flex items-center justify-between mb-8">
            <div className="mascot">
              <span className="text-2xl">🍽️</span>
            </div>
            <div className="card px-4 py-2">
              <span className="font-semibold text-[var(--primary-purple)]">
                Question {currentQuestion + 1}
              </span>
              <span className="text-[var(--text-gray)]"> of {questions.length}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="card p-4 mb-8">
            <div className="w-full bg-[var(--bg-lavender)] rounded-full h-3">
              <div 
                className="bg-[var(--primary-purple)] h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="card p-8 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-[var(--text-dark)]">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {questions[currentQuestion].answers.map((answer, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(answer.type)}
                  className={`w-full text-left card p-6 transition-all ${
                    answers[currentQuestion] === answer.type 
                      ? 'bg-[var(--primary-purple)] text-white'
                      : 'hover:bg-[var(--bg-lavender)]'
                  }`}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className={`card px-6 py-3 flex items-center gap-2 ${
                currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[var(--bg-lavender)]'
              }`}
            >
              <span className="text-xl">←</span>
              Back
            </button>

            {currentQuestion === questions.length - 1 && answers[currentQuestion] ? (
              <button
                onClick={handleSubmit}
                className="primary-button"
              >
                See Results
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={currentQuestion === questions.length - 1 || !answers[currentQuestion]}
                className={`card px-6 py-3 flex items-center gap-2 ${
                  currentQuestion === questions.length - 1 || !answers[currentQuestion]
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-[var(--bg-lavender)]'
                }`}
              >
                Next
                <span className="text-xl">→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
