'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { questions, letterMeanings } from '../data/questions'

const questionsData = questions

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState(new Array(questionsData.length).fill(null))
  const router = useRouter()

  const handleAnswer = (type) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = type
    setAnswers(newAnswers)

    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handleSubmit = () => {
    // Count preferences
    const counts = {
      S: 0, U: 0,  // Sweet vs Umami
      M: 0, H: 0,  // Mild vs Hot
      C: 0, T: 0,  // Crunchy vs Tender
      P: 0, L: 0   // Pure vs Layered
    }
    
    // Count total questions for each dimension
    const totals = {
      SU: 0, // Sweet vs Umami questions
      MH: 0, // Mild vs Hot questions
      CT: 0, // Crunchy vs Tender questions
      PL: 0  // Pure vs Layered questions
    }

    answers.forEach(answer => {
      if (answer) {
        counts[answer]++
        // Increment the total for the corresponding dimension
        if (answer === 'S' || answer === 'U') totals.SU++
        if (answer === 'M' || answer === 'H') totals.MH++
        if (answer === 'C' || answer === 'T') totals.CT++
        if (answer === 'P' || answer === 'L') totals.PL++
      }
    })

    // Calculate percentages ensuring pairs sum to 100
    const percentages = {
      S: Math.round((counts.S / totals.SU) * 100) || 50,
      U: Math.round((counts.U / totals.SU) * 100) || 50,
      M: Math.round((counts.M / totals.MH) * 100) || 50,
      H: Math.round((counts.H / totals.MH) * 100) || 50,
      C: Math.round((counts.C / totals.CT) * 100) || 50,
      T: Math.round((counts.T / totals.CT) * 100) || 50,
      P: Math.round((counts.P / totals.PL) * 100) || 50,
      L: Math.round((counts.L / totals.PL) * 100) || 50
    }

    // Ensure each pair sums to 100%
    const adjustPercentages = (a, b) => {
      const total = percentages[a] + percentages[b]
      if (total !== 100) {
        const ratio = 100 / total
        percentages[a] = Math.round(percentages[a] * ratio)
        percentages[b] = 100 - percentages[a] // Ensure exact 100% total
      }
    }

    adjustPercentages('S', 'U')
    adjustPercentages('M', 'H')
    adjustPercentages('C', 'T')
    adjustPercentages('P', 'L')

    // Determine dominant type
    const foodType = [
      counts.S >= counts.U ? 'S' : 'U',
      counts.M >= counts.H ? 'M' : 'H',
      counts.C >= counts.T ? 'C' : 'T',
      counts.P >= counts.L ? 'P' : 'L'
    ].join('')

    // Navigate to results with percentages
    router.push(`/results/${foodType}?percentages=${JSON.stringify(percentages)}`)
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
              <span className="text-[var(--text-gray)]"> of {questionsData.length}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="card p-4 mb-8">
            <div className="w-full bg-[var(--bg-lavender)] rounded-full h-3">
              <div 
                className="bg-[var(--primary-purple)] h-3 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questionsData.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="card p-8 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-[var(--text-dark)]">
              {questionsData[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {questionsData[currentQuestion].answers.map((answer, index) => (
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

            {currentQuestion === questionsData.length - 1 && answers[currentQuestion] ? (
              <button
                onClick={handleSubmit}
                className="primary-button"
              >
                See Results
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={currentQuestion === questionsData.length - 1 || !answers[currentQuestion]}
                className={`card px-6 py-3 flex items-center gap-2 ${
                  currentQuestion === questionsData.length - 1 || !answers[currentQuestion]
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
