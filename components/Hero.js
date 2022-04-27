import Image from 'next/image';
import { hero } from '@/data/config';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="w-20 h-20 relative overflow-hidden">
          <Image
            src="/static/profile.webp"
            layout="fill"
            objectFit="contain"
            alt="Atharva Joshi"
          />
        </div>
        <Image
          src="/static/icons/sun.svg"
          width={30}
          height={30}
          alt="Toggle theme"
          className="cursor-pointer toggleTheme"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
      <h1 className="mt-5 mb-4">{hero.title}</h1>
      <p className="text-lg">{hero.desc}</p>
    </div>
  );
}
