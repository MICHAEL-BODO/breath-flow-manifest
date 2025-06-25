
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import AIInsights from '@/components/AIInsights';

const InsightsPage = () => {
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
              AI Insights
            </h1>
            <p className="text-gray-600 mt-2">Personalized wellness recommendations</p>
          </div>
        </div>
        
        <AIInsights />
      </div>
    </div>
  );
};

export default InsightsPage;
