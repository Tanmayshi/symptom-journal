import Particles from '../components/ui/StarsBackground'
import ShinyText from '../components/ui/ShinyText'
import BlurText from '../components/ui/BlurText'
import { FlipButton } from '../components/ui/FlipButton'
import { Link } from 'react-router-dom'

function LodingPage() {
  return (
    <div className="bg-black text-white w-full flex flex-col min-h-screen overflow-hidden relative">
<section className="relative w-full h-screen">
  <div className="absolute inset-0 z-0">
    <Particles particleCount={300} />
  </div>

  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center justify-center h-full text-center px-4 w-full">
    <div className=" pl-2">
      <BlurText
        text="Welcome to Symptom Journal"
        delay={100}
        animateBy="words"
        direction="top"
  className="text-6xl font-bold pt-6  bg-gradient-to-r text-white from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(0,255,255,0.5)] whitespace-nowrap"
      />
      <BlurText
  text="Log today’s entry — just below "
  delay={200}
  animateBy="words"
  direction="top"
  className="text-3xl font-bold pt-6 pl-42 bg-gradient-to-r text-white from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(0,255,255,0.5)] whitespace-nowrap"
/>

      <div className="flex justify-center pt-9 pr-14">
        <Link to="/dashboard">
          <FlipButton
            frontText="Start Your Health Journey"
            backText="Track Now 🚀"
            from="top"
            className="w-64 h-14 text-lg font-semibold rounded-xl shadow-lg"
            frontClassName="bg-white/10 text-white backdrop-blur-md border border-white/20"
            backClassName="bg-blue-600 text-white"
          />
        </Link>
      </div>
    </div>
  </div>

  <div className="absolute top-10 left-10 z-30 bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-lg text-white max-w-sm hidden md:block">
    <h4 className="text-lg font-semibold mb-2 text-cyan-300">📘 About the App</h4>
    <p className="text-white/80 text-sm leading-relaxed">
      Symptom Journal helps you record your daily health experiences, track mood and symptoms, and visualize your progress through interactive charts.
    </p>
  </div>

  <div className="absolute bottom-10 left-10 z-30 bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-lg text-white max-w-sm hidden md:block">
    <h4 className="text-lg font-semibold mb-2 text-green-400">🛠️ How to Use</h4>
    <ul className="list-disc list-inside text-white/80 text-sm space-y-1">
      <li>Login or register your account</li>
      <li>Click “Add Symptom” and record entries</li>
      <li>View progress in the Symptom Trends section</li>
    </ul>
  </div>

  <div className="absolute bottom-10 right-10 z-30 bg-white/5 p-5 rounded-xl border border-white/10 backdrop-blur-lg text-white max-w-sm hidden md:block">
    <h4 className="text-lg font-semibold mb-2 text-yellow-300">💡 Daily Boost</h4>
    <p className="text-white/80 text-sm italic">
      “Taking care of yourself is productive.”
      <br />
      Even one small journal entry is a big win. Keep going!
    </p>
  </div>
</section>

    </div>
  )
}

export default LodingPage
