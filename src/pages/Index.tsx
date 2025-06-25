
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Heart, Sparkles, Target, TrendingUp, Wind, Zap, Play, Pause, RotateCcw } from 'lucide-react';
import BreathingSession from '@/components/BreathingSession';
import HabitTracker from '@/components/HabitTracker';
import ManifestationJournal from '@/components/ManifestationJournal';
import AIInsights from '@/components/AIInsights';

const Index = () => {
  const [activeTab, setActiveTab] = useState("breathing");

  const breathingTechniques = [
    {
      name: "4-7-8 Breathing",
      description: "Inhale for 4, hold for 7, exhale for 8",
      duration: "5 min",
      difficulty: "Beginner",
      benefits: ["Stress relief", "Better sleep"]
    },
    {
      name: "Box Breathing",
      description: "Equal counts for inhale, hold, exhale, hold",
      duration: "8 min",
      difficulty: "Intermediate",
      benefits: ["Focus", "Calm mind"]
    },
    {
      name: "Pranayama",
      description: "Ancient yogic breathing technique",
      duration: "10 min",
      difficulty: "Advanced",
      benefits: ["Energy boost", "Spiritual connection"]
    },
    {
      name: "Belly Breathing",
      description: "Deep diaphragmatic breathing",
      duration: "6 min",
      difficulty: "Beginner",
      benefits: ["Relaxation", "Better oxygen flow"]
    },
    {
      name: "Alternate Nostril",
      description: "Balance your nervous system",
      duration: "7 min",
      difficulty: "Intermediate",
      benefits: ["Mental clarity", "Emotional balance"]
    },
    {
      name: "Coherent Breathing",
      description: "5 seconds in, 5 seconds out",
      duration: "12 min",
      difficulty: "Beginner",
      benefits: ["Heart rate variability", "Stress reduction"]
    },
    {
      name: "Wim Hof Method",
      description: "Power breathing technique",
      duration: "15 min",
      difficulty: "Advanced",
      benefits: ["Energy", "Cold tolerance", "Immune boost"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-wellness-lavender via-white to-wellness-sage">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wellness-blue/20 to-wellness-purple/20 animate-pulse-slow"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="animate-float mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-r from-wellness-blue to-wellness-purple rounded-full flex items-center justify-center mb-6">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-wellness-blue to-wellness-purple bg-clip-text text-transparent mb-6">
              MindFlow AI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Your AI-powered companion for breathing techniques, habit formation, and manifestation
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge className="bg-wellness-teal text-white px-4 py-2 text-sm">
                <Wind className="w-4 h-4 mr-2" />
                7 Breathing Techniques
              </Badge>
              <Badge className="bg-wellness-purple text-white px-4 py-2 text-sm">
                <Target className="w-4 h-4 mr-2" />
                AI Habit Tracking
              </Badge>
              <Badge className="bg-wellness-mint text-white px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Manifestation Journal
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="breathing" className="flex items-center gap-2">
              <Wind className="w-4 h-4" />
              Breathing
            </TabsTrigger>
            <TabsTrigger value="habits" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Habits
            </TabsTrigger>
            <TabsTrigger value="journal" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Journal
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="breathing" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Breathing Techniques</h2>
              <p className="text-gray-600">Master your breath, master your mind</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {breathingTechniques.map((technique, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
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
                      <Button className="w-full bg-gradient-to-r from-wellness-blue to-wellness-purple hover:from-wellness-purple hover:to-wellness-blue">
                        <Play className="w-4 h-4 mr-2" />
                        Start Session
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <BreathingSession />
          </TabsContent>

          <TabsContent value="habits">
            <HabitTracker />
          </TabsContent>

          <TabsContent value="journal">
            <ManifestationJournal />
          </TabsContent>

          <TabsContent value="insights">
            <AIInsights />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-wellness-blue" />
              <span className="text-xl font-bold bg-gradient-to-r from-wellness-blue to-wellness-purple bg-clip-text text-transparent">
                MindFlow AI
              </span>
            </div>
            <p className="text-gray-600">Transform your life through mindful breathing and AI-powered insights</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
