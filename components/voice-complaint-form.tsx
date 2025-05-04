"use client"

import { useState, useEffect } from "react"
import { Mic, MicOff, Loader2, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function VoiceComplaintForm() {
  // Basic state
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [location, setLocation] = useState(null)
  const [locationName, setLocationName] = useState("")
  const [isGettingLocation, setIsGettingLocation] = useState(false)
  const [category, setCategory] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Mock SpeechRecognition API
  useEffect(() => {
    if (isRecording) {
      // Simulate speech recognition with a timeout
      const timer = setTimeout(() => {
        setTranscript((prev) => {
          if (prev) {
            return (
              prev + " There has been no water supply in our village for the last 3 days. We need immediate assistance."
            )
          }
          return "There has been no water supply in our village for the last 3 days. We need immediate assistance."
        })
        setIsRecording(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isRecording])

  // Get location
  const getLocation = () => {
    setIsGettingLocation(true)

    // Use fallback location
    setTimeout(() => {
      setLocationName("Rampur Village, Uttar Pradesh")
      setLocation({ lat: 26.8467, lng: 80.9462 })
      setIsGettingLocation(false)

      toast({
        title: "Using Approximate Location",
        description: "We are using an approximate location. You can update it manually if needed.",
      })
    }, 1000)
  }

  // Toggle recording
  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true)
      toast({
        title: "Recording Started",
        description: "Speak clearly to record your complaint.",
      })
    } else {
      setIsRecording(false)
      toast({
        title: "Recording Stopped",
        description: "Your voice has been converted to text.",
      })
    }
  }

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!transcript) {
      toast({
        title: "Empty Complaint",
        description: "Please provide details about your complaint.",
        variant: "destructive",
      })
      return
    }

    if (!category) {
      toast({
        title: "Category Required",
        description: "Please select a category for your complaint.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Complaint Registered",
        description: "Your complaint has been successfully registered. You can track its status in your dashboard.",
      })
      setIsSubmitting(false)
      setTranscript("")
      setCategory("")
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
          <Label htmlFor="complaint">Your Complaint</Label>
          <Button
            type="button"
            variant={isRecording ? "destructive" : "outline"}
            size="sm"
            onClick={toggleRecording}
            className="flex items-center gap-2"
          >
            {isRecording ? (
              <>
                <MicOff className="h-4 w-4" />
                Stop Recording
              </>
            ) : (
              <>
                <Mic className="h-4 w-4" />
                Start Recording
              </>
            )}
          </Button>
        </div>
        {isRecording && (
          <div className="flex items-center justify-center p-4 bg-red-50 rounded-md">
            <Mic className="h-6 w-6 text-red-500 animate-pulse mr-2" />
            <span>Recording... Speak clearly</span>
          </div>
        )}
        <Textarea
          id="complaint"
          placeholder="Describe your complaint in detail..."
          className="min-h-32"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="water">Water Supply</SelectItem>
            <SelectItem value="electricity">Electricity</SelectItem>
            <SelectItem value="road">Road Issues</SelectItem>
            <SelectItem value="sanitation">Sanitation</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <div className="flex items-center gap-2">
          <Input
            id="location"
            placeholder="Your location"
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

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Complaint"
        )}
      </Button>
    </form>
  )
}
