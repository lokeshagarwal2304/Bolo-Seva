"use client"

import { useState, useEffect } from "react"
import { Upload, Camera, Loader2, MapPin, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function RoadAnalysisForm() {
  // Basic state
  const [images, setImages] = useState([])
  const [previews, setPreviews] = useState([])
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState(null)
  const [locationName, setLocationName] = useState("")
  const [isGettingLocation, setIsGettingLocation] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisProgress, setAnalysisProgress] = useState(0)
  const [analysisResults, setAnalysisResults] = useState([])
  const { toast } = useToast()

  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files)
      setImages((prev) => [...prev, ...selectedFiles])

      // Create previews
      selectedFiles.forEach((file) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          setPreviews((prev) => [...prev, reader.result])
        }
        reader.readAsDataURL(file)
      })
    }
  }

  // Get location
  const getLocation = () => {
    setIsGettingLocation(true)

    // Use fallback location
    setTimeout(() => {
      setLocationName("Main Road, Ganeshpur, Maharashtra")
      setLocation({ lat: 19.076, lng: 72.8777 })
      setIsGettingLocation(false)

      toast({
        title: "Using Approximate Location",
        description: "We are using an approximate location. You can update it manually if needed.",
      })
    }, 1000)
  }

  // Capture image
  const captureImage = () => {
    toast({
      title: "Camera Access",
      description: "Camera functionality is simulated in this demo.",
    })

    setTimeout(() => {
      const mockImageUrl = "/placeholder.svg?height=400&width=600"
      setPreviews((prev) => [...prev, mockImageUrl])
    }, 1000)
  }

  // Analyze images
  const analyzeImages = () => {
    if (previews.length === 0) {
      toast({
        title: "No Images",
        description: "Please upload at least one image to analyze.",
        variant: "destructive",
      })
      return
    }

    setIsAnalyzing(true)
    setAnalysisProgress(0)

    // Simulate analysis
    const interval = setInterval(() => {
      setAnalysisProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)

          // Mock results
          const mockResults = previews.map((_, index) => ({
            id: index,
            issues: Math.random() > 0.5 ? "Pothole" : "Crack",
            severity: Math.random() > 0.7 ? "High" : Math.random() > 0.4 ? "Medium" : "Low",
            confidence: Math.floor(Math.random() * 30) + 70,
          }))

          setAnalysisResults(mockResults)
          setIsAnalyzing(false)

          toast({
            title: "Analysis Complete",
            description: "Analyzed " + previews.length + " images successfully.",
          })

          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault()

    if (previews.length === 0) {
      toast({
        title: "No Images",
        description: "Please upload at least one image to report a road issue.",
        variant: "destructive",
      })
      return
    }

    if (analysisResults.length === 0) {
      toast({
        title: "Analysis Required",
        description: "Please analyze the images before submitting.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Report Submitted",
        description: "Your road issue report has been successfully submitted. Authorities have been notified.",
      })
      setIsSubmitting(false)
      setImages([])
      setPreviews([])
      setDescription("")
      setAnalysisResults([])
    }, 2000)
  }

  // Get location on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      getLocation()
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="images">Road Images</Label>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={captureImage}
              className="flex items-center gap-2"
            >
              <Camera className="h-4 w-4" />
              Capture
            </Button>
            <Label
              htmlFor="image-upload"
              className="cursor-pointer inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-xs text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Label>
            <Input
              id="image-upload"
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {previews.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {previews.map((preview, index) => (
              <div key={index} className="relative">
                <img
                  src={preview || "/placeholder.svg"}
                  alt="Road issue"
                  className="h-40 w-full object-cover rounded-md border"
                />
                {analysisResults[index] && (
                  <Badge
                    className={`absolute top-2 right-2 ${
                      analysisResults[index].severity === "High"
                        ? "bg-red-500"
                        : analysisResults[index].severity === "Medium"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                    }`}
                  >
                    {analysisResults[index].severity}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed rounded-md p-8 text-center">
            <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-500">Upload or capture images of road issues</p>
          </div>
        )}

        {previews.length > 0 && !isAnalyzing && analysisResults.length === 0 && (
          <Button type="button" variant="secondary" className="w-full mt-4" onClick={analyzeImages}>
            Analyze Images with AI
          </Button>
        )}

        {isAnalyzing && (
          <div className="space-y-2 mt-4">
            <div className="flex justify-between text-sm">
              <span>Analyzing images...</span>
              <span>{analysisProgress}%</span>
            </div>
            <Progress value={analysisProgress} className="h-2" />
          </div>
        )}

        {analysisResults.length > 0 && (
          <Card className="mt-4">
            <CardContent className="p-4">
              <h3 className="font-medium mb-2 flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2 text-yellow-500" />
                AI Analysis Results
              </h3>
              <ul className="space-y-2">
                {analysisResults.map((result, index) => (
                  <li key={index} className="text-sm flex justify-between">
                    <span>
                      Image {index + 1}: {result.issues}
                    </span>
                    <span className="flex items-center">
                      <Badge
                        className={`mr-2 ${
                          result.severity === "High"
                            ? "bg-red-500"
                            : result.severity === "Medium"
                              ? "bg-yellow-500"
                              : "bg-blue-500"
                        }`}
                      >
                        {result.severity}
                      </Badge>
                      <span className="text-gray-500 ml-2">{result.confidence}% confidence</span>
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Additional Details</Label>
        <Textarea
          id="description"
          placeholder="Provide any additional details about the road issue..."
          className="min-h-24"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <div className="flex items-center gap-2">
          <Input
            id="location"
            placeholder="Road location"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            className="flex-1"
          />
          <Button type="button" variant="outline" size="icon" onClick={getLocation} disabled={isGettingLocation}>
            {isGettingLocation ? <Loader2 className="h-4 w-4 animate-spin" /> : <MapPin className="h-4 w-4" />}
          </Button>
        </div>
        {location && (
          <p className="text-sm text-gray-500">
            GPS: {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting || isAnalyzing || analysisResults.length === 0}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Road Issue Report"
        )}
      </Button>
    </form>
  )
}
