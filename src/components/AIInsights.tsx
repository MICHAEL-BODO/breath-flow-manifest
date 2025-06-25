
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Brain, Target, Sparkles, Calendar, Award, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const AIInsights = () => {
  const weeklyData = [
    { day: 'Mon', mood: 8, breathing: 2, habits: 3, manifestation: 1 },
    { day: 'Tue', mood: 7, breathing: 3, habits: 4, manifestation: 2 },
    { day: 'Wed', mood: 9, breathing: 1, habits: 3, manifestation: 1 },
    { day: 'Thu', mood: 8, breathing: 2, habits: 4, manifestation: 3 },
    { day: 'Fri', mood: 9, breathing: 3, habits: 4, manifestation: 2 },
    { day: 'Sat', mood: 8, breathing: 4, habits: 3, manifestation: 2 },
    { day: 'Sun', mood: 9, breathing: 2, habits: 4, manifestation: 3 }
  ];

  const progressData = [
    { category: 'Breathing', current: 75, target: 100 },
    { category: 'Habits', current: 88, target: 100 },
    { category: 'Manifestation', current: 65, target: 100 },
    { category: 'Mindfulness', current: 82, target: 100 }
  ];

  const aiInsights = [
    {
      type: "achievement",
      icon: <Award className="w-5 h-5 text-yellow-500" />,
      title: "Consistency Master",
      description: "You've maintained a 21-day streak! Your discipline is paying off.",
      confidence: 95
    },
    {
      type: "recommendation",
      icon: <Brain className="w-5 h-5 text-wellness-blue" />,
      title: "Optimal Breathing Time",
      description: "Your stress levels are lowest when you practice breathing at 7 AM. Consider making this your routine.",
      confidence: 87
    },
    {
      type: "pattern",
      icon: <TrendingUp className="w-5 h-5 text-wellness-teal" />,
      title: "Manifestation Pattern",
      description: "Your manifestation success rate increases by 43% when paired with gratitude practices.",
      confidence: 91
    },
    {
      type: "prediction",
      icon: <Sparkles className="w-5 h-5 text-wellness-purple" />,
      title: "Goal Prediction",
      description: "Based on your current progress, you'll reach your 30-day meditation goal 3 days early!",
      confidence: 78
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">AI Insights & Analytics</h2>
        <p className="text-gray-600">Discover patterns and optimize your wellness journey</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-600">89%</div>
            <div className="text-sm text-gray-600">Overall Progress</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-6 text-center">
            <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-600">Goals Achieved</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6 text-center">
            <Brain className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-600">8.4</div>
            <div className="text-sm text-gray-600">Avg Mood Score</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-teal-50 to-teal-100">
          <CardContent className="p-6 text-center">
            <Zap className="w-8 h-8 text-teal-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-teal-600">47</div>
            <div className="text-sm text-gray-600">Active Days</div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Mood Trend */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-wellness-blue" />
            Weekly Mood & Activity Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="mood" stroke="#6B73FF" strokeWidth={3} name="Mood Score" />
              <Line type="monotone" dataKey="breathing" stroke="#1ABC9C" strokeWidth={2} name="Breathing Sessions" />
              <Line type="monotone" dataKey="habits" stroke="#9B59B6" strokeWidth={2} name="Habits Completed" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Progress Breakdown */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-wellness-teal" />
            Category Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {progressData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-sm text-gray-600">{item.current}%</span>
                </div>
                <Progress value={item.current} className="h-3" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Brain className="w-6 h-6 text-wellness-blue" />
          AI-Powered Insights
        </h3>
        
        {aiInsights.map((insight, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gray-100">
                  {insight.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-gray-800">{insight.title}</h4>
                    <Badge variant="outline" className="text-xs">
                      {insight.confidence}% confidence
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{insight.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recommendations */}
      <Card className="bg-gradient-to-r from-wellness-blue/10 to-wellness-purple/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-wellness-purple" />
            Personalized Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg border-l-4 border-wellness-blue">
              <h5 className="font-medium text-gray-800 mb-2">🧘 Breathing Focus</h5>
              <p className="text-sm text-gray-600">Try the Wim Hof method - your energy levels show optimal response to power breathing techniques.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border-l-4 border-wellness-teal">
              <h5 className="font-medium text-gray-800 mb-2">⏰ Timing Optimization</h5>
              <p className="text-sm text-gray-600">Schedule manifestation journaling for 8 PM - your reflection quality peaks in the evening.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border-l-4 border-wellness-purple">
              <h5 className="font-medium text-gray-800 mb-2">🎯 Goal Adjustment</h5>
              <p className="text-sm text-gray-600">Consider increasing your meditation target to 15 minutes - you're ready for the next level.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border-l-4 border-wellness-mint">
              <h5 className="font-medium text-gray-800 mb-2">🌟 Habit Stacking</h5>
              <p className="text-sm text-gray-600">Pair gratitude practice with your morning coffee - context cues improve consistency by 67%.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIInsights;
