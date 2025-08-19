import { ClockIcon, ChartBarIcon, ArrowLongDownIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Book and Manage Tee Times.',
    description:
      'Save time and skip the hassle with easy scheduling, reminders, and seamless coordination for every round.',
    icon: ClockIcon,
  },
  {
    name: 'Track Your Stats.',
    description: 'Gain insights into every round with detailed scorecards, shot tracking, and performance trends tailored to your game.',
    icon: ChartBarIcon,
  },
  {
    name: 'Improve Your Stroke Game.',
    description: 'Make smarter decisions on the course with data-driven tools that guide your club selection and course management; focusing on areas that matter most.',
    icon: ArrowLongDownIcon,
  },
]

export default function BenefitsSection() {
  return (
    <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">Play Smarter with Foreplay</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Maximize Your Game with Our App
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Unlock your potential on the course with an app that lets you book & manage tee-times, track your stats, and helps you lower your scores — all while making golf more fun.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-400" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
