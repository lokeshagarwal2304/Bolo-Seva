import { Mic, Map, Camera, BarChart3, Globe, Wifi } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Mic className="h-10 w-10 text-primary" />,
      title: "Voice Complaint Registration",
      description:
        "Speak your complaints directly via microphone. Speech is converted to text and categorized automatically.",
    },
    {
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "AI Road Analysis",
      description:
        "Upload photos of roads. Our AI detects issues like potholes, cracks, and waterlogging with severity ratings.",
    },
    {
      icon: <Map className="h-10 w-10 text-primary" />,
      title: "Geolocation Tagging",
      description: "Every submission is automatically tagged with GPS coordinates for precise location tracking.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Multilingual Support",
      description: "Use the platform in multiple Indian languages including Hindi, Telugu, Tamil, and more.",
    },
    {
      icon: <Wifi className="h-10 w-10 text-primary" />,
      title: "Offline Mode",
      description: "Register complaints even without internet. Data syncs automatically when connection is restored.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: "Analytics Dashboard",
      description: "Authorities get access to comprehensive analytics with heatmaps and category-wise statistics.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform combines voice-based complaint registration with AI-powered road condition analysis
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              {feature.icon}
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-500 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
