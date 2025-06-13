import {
  Card,
} from "@/components/ui/card";

import { BorderBeam } from "../magicui/border-beam";
import { CountsUp } from "./CountsUp";


export default function Counts() {
  return (
    <Card className="relative w-full overflow-hidden">

         <div>
              <CountsUp />
        </div>
      <BorderBeam
        duration={4}
        size={300}
        reverse
        className="from-transparent via-green-500 to-transparent"
      />
    </Card>
  );
}
