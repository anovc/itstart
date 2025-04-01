import SeminarItems from "@/components/SeminarItems";
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <div className="bg-gray-50 flex flex-col p-5 items-center">
      <Toaster />
      <div className="max-w-6xl">
        <SeminarItems />
      </div>
    </div>
  );
}
