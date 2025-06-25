
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Plus, Target, Zap, Heart } from 'lucide-react';

const HabitTracker = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Morning Meditation",
      streak: 7,
      completed: true,
      target: 30,
      category: "Mindfulness",
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: 2,
      name: "Breathing Exercise",
      streak: 12,
      completed: false,
      target: 21,
      category: "Wellness",
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 3,
      name: "Gratitude Journal",
      streak: 5,
      completed: true,
      target: 14,
      category: "Growth",
      icon: <Target className="w-5 h-5" />
    },
    {
      id: 4,
      name: "Evening Reflection",
      streak: 3,
      completed: false,
      target: 7,
      category: "Mindfulness",
      icon: <Heart className="w-5 h-5" />
    }
  ]);

  const toggleHabit = (id: number) => {
    setHabits(prev => prev.map(habit => 
      habit.id === id 
        ? { ...habit, completed: !habit.completed, streak: habit.completed ? habit.streak : habit.streak + 1 }
        : habit
    ));
  };

  const totalCompleted = habits.filter(h => h.completed).length;
  const completionRate = (totalCompleted / habits.length) * 100;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">AI Habit Tracker</h2>
        <p className="text-gray-600">Build lasting habits with AI-powered insights</p>
      </div>

      {/* Progress Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-wellness-blue" />
            Today's Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Daily Completion</span>
              <span className="text-2xl font-bold text-wellness-blue">{totalCompleted}/{habits.length}</span>
            </div>
            <Progress value={completionRate} className="h-3" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 bg-wellness-lavender rounded-lg">
                <div className="text-2xl font-bold text-wellness-blue">47</div>
                <div className="text-sm text-gray-600">Total Streak</div>
              </div>
              <div className="p-3 bg-wellness-sage rounded-lg">
                <div className="text-2xl font-bold text-wellness-teal">12</div>
                <div className="text-sm text-gray-600">Best Streak</div>
              </div>
              <div className="p-3 bg-wellness-lavender rounded-lg">
                <div className="text-2xl font-bold text-wellness-purple">85%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="p-3 bg-wellness-sage rounded-lg">
                <div className="text-2xl font-bold text-wellness-mint">4</div>
                <div className="text-sm text-gray-600">Active Habits</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Habit List */}
      <div className="grid gap-4">
        {habits.map((habit) => (
          <Card key={habit.id} className={`transition-all duration-300 ${habit.completed ? 'bg-green-50 border-green-200' : 'hover:shadow-md'}`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleHabit(habit.id)}
                    className="p-2"
                  >
                    {habit.completed ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <Circle className="w-6 h-6 text-gray-400" />
                    )}
                  </Button>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-wellness-lavender text-wellness-blue">
                      {habit.icon}
                    </div>
                    <div>
                      <h3 className={`font-medium ${habit.completed ? 'text-green-700' : 'text-gray-800'}`}>
                        {habit.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {habit.category}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {habit.streak} day streak
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-600">
                    Target: {habit.target} days
                  </div>
                  <Progress 
                    value={(habit.streak / habit.target) * 100} 
                    className="w-20 h-2 mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add New Habit */}
      <Card className="border-dashed border-2 border-gray-300 hover:border-wellness-blue transition-colors">
        <CardContent className="p-6">
          <Button variant="ghost" className="w-full h-20 text-gray-500 hover:text-wellness-blue">
            <Plus className="w-8 h-8 mr-3" />
            Add New Habit
          </Button>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="bg-gradient-to-r from-wellness-blue/10 to-wellness-purple/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-wellness-blue" />
            AI Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg border-l-4 border-wellness-blue">
              <p className="text-sm font-medium text-gray-800">💡 Your meditation streak is strong! Try extending sessions by 2 minutes.</p>
            </div>
            <div className="p-3 bg-white rounded-lg border-l-4 border-wellness-teal">
              <p className="text-sm font-medium text-gray-800">🎯 Best time for breathing exercises: 7-8 AM based on your completion pattern.</p>
            </div>
            <div className="p-3 bg-white rounded-lg border-l-4 border-wellness-purple">
              <p className="text-sm font-medium text-gray-800">🌟 You're 73% more likely to complete habits when paired with morning meditation.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HabitTracker;
