import Image from 'next/image';
import { ProjectName } from '@/data/Data';
import { ExampleProjectName } from '@/data/ExampleData';
import TeamPhanes from '@/public/TeamPhanes.jpg';

export default function GlobalNavBer() {
  return (
    <div className="h-20 w-full shadow-md bg-bgBlack flex items-center">
      <div className="flex items-center justify-between w-xl xl:mx-auto mx-10">
        <div className="flex items-center gap-4">
          <Image
            src={TeamPhanes}
            alt="Logo"
            width={64}
            height={64}
            className="w-16 h-16 rounded-full"
            priority
          />
          <p className="font-semibold">TeamPhanes API Docs</p>
        </div>
        <p className="hidden md:block">
          Project : {ProjectName ?? ExampleProjectName}
        </p>
      </div>
    </div>
  );
}
