import { StatItem } from '@/types';
import CountUp from 'react-countup';

const stats:  StatItem[] = [
    {
        num: 2,
        text: "Years of experience",
    },
    {
        num: 26,
        text: "Projects completed",
    },
    // {
    //     num: 10,
    //     text: "Technologies mastered",
    // },
    {
        num: 500,
        text: "Code commits",
    },
]


export const CountsUp = () => {
  return (
<section className="py-8">
  <div className="">
    <div className="d-grid gap-4">
      
      {stats.map(({ num, text }, index) => (
        <div
          key={index}
          className="d-flex gap-2 justify-self-center-safe"
        >
          <CountUp
            end={num}
            duration={5}
            delay={0.5}
            className="hero-title hero-title-color"
          />
          <p className={`text-xs sm:text-sm md:text-base leading-tight`}
          >
            {text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}
