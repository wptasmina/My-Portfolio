import CountUp from 'react-countup';
import stats from '@/data/stats';

export const CountsUp = () => {
  return (
    <section>
      <div className="d-grid gap-2">
        {stats.map(({ num, text }, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="flex flex-col items-center text-center px-2">
              <CountUp
                end={num}
                duration={3}
                className="hero-title hero-title-color"
              />
              <p className="text-xs sm:text-sm md:text-base text-zinc-950 dark:text-zinc-50 leading-tight">
                {text}
              </p>
            </div>

            {i !== stats.length - 1 && (
              <div className="h-10 w-px bg-zinc-300 dark:bg-zinc-600 mx-2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
