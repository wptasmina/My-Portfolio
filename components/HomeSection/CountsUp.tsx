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
    {
        num: 10,
        text: "Technologies mastered",
    },
    {
        num: 500,
        text: "Code commits",
    },
]


export const CountsUp = () => {
  return (
<section>
    <div className="d-grid gap-2">
      
      {stats.map(({ num, text }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-self-center-safe gap-2 px-4"
        >
          <CountUp
            end={num}
            duration={5}
            delay={0.5}
            className="hero-title hero-title-color"
          />
          <p className={`text-xs sm:text-sm md:text-base text-zinc-950 dark:text-zinc-50 text-center leading-tight`}
          >
            {text}
          </p>
        </div>
      ))}
    </div>
</section>

  )
}
