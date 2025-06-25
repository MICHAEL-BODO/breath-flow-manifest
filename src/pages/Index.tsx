
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Sparkles, Target, TrendingUp, Wind, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      title: "Breathing Techniques",
      description: "Master 7 different breathing techniques for stress relief, focus, and energy",
      icon: Wind,
      color: "from-wellness-blue to-wellness-teal",
      path: "/breathing",
      techniques: ["4-7-8 Breathing", "Box Breathing", "Pranayama", "Wim Hof Method"]
    },
    {
      title: "AI Habit Tracker",
      description: "Build lasting habits with AI-powered insights and personalized recommendations",
      icon: Target,
      color: "from-wellness-purple to-wellness-blue",
      path: "/habits",
      features: ["Smart Goal Setting", "Progress Analytics", "Habit Streaks", "AI Coaching"]
    },
    {
      title: "Manifestation Journal",
      description: "Transform your thoughts into reality with guided journaling and visualization",
      icon: Sparkles,
      color: "from-wellness-mint to-wellness-teal",
      path: "/journal",
      features: ["Daily Affirmations", "Vision Board", "Gratitude Practice", "Goal Manifestation"]
    },
    {
      title: "AI Insights",
      description: "Get personalized wellness recommendations based on your progress and patterns",
      icon: TrendingUp,
      color: "from-wellness-sage to-wellness-mint",
      path: "/insights",
      features: ["Progress Analytics", "Wellness Trends", "Personal Insights", "Recommendations"]
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
              <Badge className="bg-wellness-sage text-white px-4 py-2 text-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                AI Insights
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Transform Your Life</h2>
          <p className="text-xl text-gray-600">Explore our AI-powered wellness tools</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${feature.color} text-white`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    <CardDescription className="text-white/80 mt-2">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {feature.features ? feature.features.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs justify-center">
                        {item}
                      </Badge>
                    )) : feature.techniques?.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs justify-center">
                        {item}
                      </Badge>
                    ))}
                  </div>
                  <Link to={feature.path} className="block">
                    <Button className={`w-full bg-gradient-to-r ${feature.color} hover:opacity-90 transition-opacity`}>
                      Explore {feature.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-r from-wellness-blue/10 to-wellness-purple/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose MindFlow AI?</h2>
            <p className="text-xl text-gray-600">Science-backed techniques powered by artificial intelligence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-wellness-blue to-wellness-purple rounded-full flex items-center justify-center mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-600">Personalized recommendations based on your progress and preferences</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-wellness-teal to-wellness-mint rounded-full flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Science-Based</h3>
              <p className="text-gray-600">Evidence-based techniques proven to improve mental and physical wellbeing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-wellness-purple to-wellness-sage rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-gray-600">Track your progress and see measurable improvements in your wellness journey</p>
            </div>
          </div>
        </div>
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
