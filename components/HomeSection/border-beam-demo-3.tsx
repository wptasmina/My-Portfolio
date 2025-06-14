import {
  Card,
} from "@/components/ui/card";

import { BorderBeam } from "../magicui/border-beam";
import { CountsUp } from "./CountsUp";


export default function Counts() {
  return (
    <Card className="relative bg-white/10 dark:bg-zinc-950/20 backdrop-blur-xl border border-white/10 dark:border-white/5 md:w-[80%] overflow-hidden">

        <div>
            <CountsUp />
        </div>
      <BorderBeam
        duration={4}
        size={200}
        reverse
        className="from-transparent via-[#03a5f0] to-transparent"
      />
    </Card>
  );
}
