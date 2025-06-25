
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import BreathingSession from '@/components/BreathingSession';

const BreathingPage = () => {
  const [selectedTechnique, setSelectedTechnique] = useState<string | null>(null);

  const breathingTechniques = [
    {
      id: '4-7-8',
      name: "4-7-8 Breathing",
      description: "Inhale for 4, hold for 7, exhale for 8",
      duration: "5 min",
      difficulty: "Beginner",
      benefits: ["Stress relief", "Better sleep"]
    },
    {
      id: 'box',
      name: "Box Breathing",
      description: "Equal counts for inhale, hold, exhale, hold",
      duration: "8 min",
      difficulty: "Intermediate",
      benefits: ["Focus", "Calm mind"]
    },
    {
      id: 'pranayama',
      name: "Pranayama",
      description: "Ancient yogic breathing technique",
      duration: "10 min",
      difficulty: "Advanced",
      benefits: ["Energy boost", "Spiritual connection"]
    },
    {
      id: 'belly',
      name: "Belly Breathing",
      description: "Deep diaphragmatic breathing",
      duration: "6 min",
      difficulty: "Beginner",
      benefits: ["Relaxation", "Better oxygen flow"]
    },
    {
      id: 'alternate',
      name: "Alternate Nostril",
      description: "Balance your nervous system",
      duration: "7 min",
      difficulty: "Intermediate",
      benefits: ["Mental clarity", "Emotional balance"]
    },
    {
      id: 'coherent',
      name: "Coherent Breathing",
      description: "5 seconds in, 5 seconds out",
      duration: "12 min",
      difficulty: "Beginner",
      benefits: ["Heart rate variability", "Stress reduction"]
    },
    {
      id: 'wim-hof',
      name: "Wim Hof Method",
      description: "Power breathing technique",
      duration: "15 min",
      difficulty: "Advanced",
      benefits: ["Energy", "Cold tolerance", "Immune boost"]
    }
  ];

  if (selectedTechnique) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-wellness-lavender via-white to-wellness-sage p-4">
        <div className="container mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedTechnique(null)}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Techniques
          </Button>
          <BreathingSession />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-wellness-lavender via-white to-wellness-sage p-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-wellness-blue to-wellness-purple bg-clip-text text-transparent">
              Breathing Techniques
            </h1>
            <p className="text-gray-600 mt-2">Master your breath, master your mind</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {breathingTechniques.map((technique) => (
            <Card key={technique.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-between">
                  {technique.name}
                  <Badge variant={technique.difficulty === 'Beginner' ? 'secondary' : technique.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                    {technique.difficulty}
                  </Badge>
                </CardTitle>
                <CardDescription>{technique.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Duration</span>
                    <span className="font-medium">{technique.duration}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {technique.benefits.map((benefit, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-wellness-blue to-wellness-purple hover:from-wellness-purple hover:to-wellness-blue"
                    onClick={() => setSelectedTechnique(technique.id)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreathingPage;
