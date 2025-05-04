import { Suspense } from "react"
import { Loader2 } from "lucide-react"
import VoiceComplaintForm from "@/components/voice-complaint-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterComplaintPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Register a Complaint</h1>
        <Card>
          <CardHeader>
            <CardTitle>Voice Complaint Registration</CardTitle>
            <CardDescription>
              Speak your complaint or type it directly. Your location will be automatically detected.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-64">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              }
            >
              <VoiceComplaintForm />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
