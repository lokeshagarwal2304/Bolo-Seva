export default function HowItWorks() {
  const steps = [
    {
      title: "Register a Complaint",
      description: "Use your voice to register a complaint or upload a photo of a road issue.",
    },
    {
      title: "AI Analysis",
      description: "Our AI analyzes road images to detect issues and assign severity levels.",
    },
    {
      title: "Authorities Notified",
      description: "Local authorities are automatically notified of the complaint with all details.",
    },
    {
      title: "Track Progress",
      description: "Track the status of your complaint from submission to resolution.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simple steps to register and track your complaints
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                {index + 1}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-center">{step.title}</h3>
                <p className="text-gray-500 text-center">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-6 hidden h-0.5 w-full translate-x-1/2 bg-gray-300 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
