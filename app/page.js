'use client'
import Main from "@/components/Landing_page/Main";
import {NextUIProvider} from "@nextui-org/react"
export default function Home() {
  return (
    <div>
      <NextUIProvider>
      <Main />
      </NextUIProvider>
    </div>
  );
}
