"use client";

import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MagicCard } from "../magicui/magic-card";
// import { useTheme } from "next-themes";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBuildingCommunity,
  IconDevicesSearch,
  IconMailSpark,
  IconBrandGithub,
} from "@tabler/icons-react";


export default function SidebarCard() {
  // const { theme } = useTheme();
  return (
    <>
      {/*Contact Section (MagicCard) */}
      <div className="mx-auto w-full max-w-md bg-none rounded-2xl ">
         <MagicCard
            // gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="p-0"
          >
            <CardHeader className="border-b p-4">
              <CardTitle className="pt-5 text-2xl">Address</CardTitle>
              <CardDescription>
                Search social media and email to contact me.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 py-8">
                {/* Full-width section on all screen sizes */}
                <div className="border md:col-span-4 p-4 rounded-md font-medium shadow text-center">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center border-2 border-dashed shadow-xl rounded-full">
                    <IconBuildingCommunity className="w-6 h-6 " />
                  </div>
                  <div className="mt-4">Sylhet, Bangladesh</div>
                </div>

                {/* Two columns below on medium screens and icons */}
                <div className="border rounded-md md:col-span-2 shadow text-center">
                  <div className="w-16 h-16 mt-4 mx-auto flex items-center justify-center border-2 border-dashed shadow-xl rounded-full">
                    <IconDevicesSearch className="w-6 h-6 " />
                  </div>

                  <div className="mt-4 border-t py-2 bg-black/60 rounded-b-lg overflow-hidden flex flex-row items-center justify-center space-x-2">
                    {[
                      {
                        icon: IconBrandGithub,
                        url: "https://github.com/wptasmina",
                      },
                      {
                        icon: IconBrandFacebook,
                        url: "https://facebook.com/wptasmina",
                      },
                      {
                        icon: IconBrandInstagram,
                        url: "https://instagram.com/wptasmina",
                      },
                      {
                        icon: IconBrandLinkedin,
                        url: "https://www.linkedin.com/in/wptasmina",
                      },
                    ].map(({ icon: Icon, url }, index) => (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn h-8 flex items-center justify-center gap-2 rounded-md bg-gray-50 px-2 text-black shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626] relative"
                        type="button"
                      >
                        <Icon className="h-5 w-5 text-neutral-800 dark:text-neutral-300" />
                        <BottomGradient />
                      </a>
                    ))}
                  </div>

                </div>
                {/* Two columns below on medium screens  */}
                <div className="border p-4 rounded-md md:col-span-2 shadow">
                  <div className="w-16 h-16 mx-auto flex items-center justify-center border-2 border-dashed shadow-xl rounded-full">
                    <IconMailSpark className="w-6 h-6 " />
                  </div>
                  <div className="mt-4 text-xs dark:text-gray-400 text-zinc-900">
                    tasmina163@gmail.com
                  </div>
                </div>
              </div>
            </CardContent>
          </MagicCard>
      </div>
    </>
  );
}
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

