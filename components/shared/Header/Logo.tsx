import Link from "next/link";

export default function Logo() {
  return (
   <div className="flex items-center gap-2 group md:w-1/3 ">
     <Link href={"/"}>
      Logo
    </Link>
    <span className="text-primary-text font-geist-mono">ts</span>
   </div>
  )
}
