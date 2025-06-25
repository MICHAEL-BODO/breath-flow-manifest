
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw } from 'lucide-react';

const BreathingSession = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('inhale'); // inhale, hold, exhale, pause
  const [timeLeft, setTimeLeft] = useState(4);
  const [cycle, setCycle] = useState(0);
  const [totalCycles] = useState(10);

  const phases = {
    inhale: { duration: 4, next: 'hold', instruction: 'Breathe In' },
    hold: { duration: 7, next: 'exhale', instruction: 'Hold' },
    exhale: { duration: 8, next: 'pause', instruction: 'Breathe Out' },
    pause: { duration: 1, next: 'inhale', instruction: 'Pause' }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      const currentPhase = phases[phase as keyof typeof phases];
      const nextPhase = currentPhase.next;
      
      if (phase === 'pause') {
        setCycle(prev => prev + 1);
        if (cycle + 1 >= totalCycles) {
          setIsActive(false);
          setPhase('inhale');
          setTimeLeft(4);
          setCycle(0);
          return;
        }
      }
      
      setPhase(nextPhase);
      setTimeLeft(phases[nextPhase as keyof typeof phases].duration);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, phase, cycle, totalCycles]);

  const toggleSession = () => {
    setIsActive(!isActive);
  };

  const resetSession = () => {
    setIsActive(false);
    setPhase('inhale');
    setTimeLeft(4);
    setCycle(0);
  };

  const progress = ((cycle) / totalCycles) * 100;
  const phaseProgress = ((phases[phase as keyof typeof phases].duration - timeLeft) / phases[phase as keyof typeof phases].duration) * 100;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">4-7-8 Breathing Session</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className={`w-full h-full rounded-full bg-gradient-to-r from-wellness-blue to-wellness-purple flex items-center justify-center text-white text-lg font-medium ${isActive ? 'animate-breathe' : ''}`}>
              <div className="text-center">
                <div className="text-3xl font-bold">{timeLeft}</div>
                <div className="text-sm opacity-80">{phases[phase as keyof typeof phases].instruction}</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Cycle Progress</span>
                <span>{cycle} / {totalCycles}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Phase Progress</span>
                <span>{phases[phase as keyof typeof phases].instruction}</span>
              </div>
              <Progress value={phaseProgress} className="h-2" />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <Button
            onClick={toggleSession}
            size="lg"
            className="bg-gradient-to-r from-wellness-blue to-wellness-purple hover:from-wellness-purple hover:to-wellness-blue"
          >
            {isActive ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
            {isActive ? 'Pause' : 'Start'}
          </Button>
          
          <Button
            onClick={resetSession}
            size="lg"
            variant="outline"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset
          </Button>
        </div>

        <div className="bg-wellness-lavender p-4 rounded-lg">
          <h4 className="font-medium mb-2">Instructions:</h4>
          <ul className="text-sm space-y-1 text-gray-600">
            <li>• Inhale through your nose for 4 seconds</li>
            <li>• Hold your breath for 7 seconds</li>
            <li>• Exhale through your mouth for 8 seconds</li>
            <li>• Repeat for 10 cycles</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default BreathingSession;
