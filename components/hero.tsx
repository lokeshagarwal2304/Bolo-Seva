import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Bolo Seva - Smart Gaav Complaint & Road Safety AI Portal
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                A unified platform for rural citizens to register complaints by voice and monitor road conditions with
                AI.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register-complaint">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Register a Complaint
                </Button>
              </Link>
              <Link href="/road-analysis">
                <Button size="lg" variant="outline">
                  Report Road Issue
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              alt="Bolo Seva Hero"
              className="aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="500"
              src="/placeholder.svg?height=500&width=800"
              width="800"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
