
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Heart, Star, Plus, Calendar } from 'lucide-react';

const ManifestationJournal = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: "2024-01-15",
      title: "Career Growth",
      content: "I am attracting the perfect job opportunity that aligns with my values and allows me to grow professionally while maintaining work-life balance.",
      category: "Career",
      mood: "Optimistic",
      gratitude: ["My supportive family", "Good health", "Learning opportunities"]
    },
    {
      id: 2,
      date: "2024-01-14",
      title: "Inner Peace",
      content: "I am cultivating deep inner peace through daily meditation and mindful breathing. I release all anxiety and embrace tranquility.",
      category: "Wellness",
      mood: "Peaceful",
      gratitude: ["Morning sunshine", "Quiet moments", "Personal growth"]
    },
    {
      id: 3,
      date: "2024-01-13",
      title: "Abundance Mindset",
      content: "I am worthy of abundance in all areas of my life. Money flows to me easily and I use it to create positive impact.",
      category: "Abundance",
      mood: "Confident",
      gratitude: ["Financial stability", "Generous friends", "New opportunities"]
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    title: "",
    content: "",
    category: "Personal",
    gratitude: ["", "", ""]
  });

  const [showNewEntry, setShowNewEntry] = useState(false);

  const categories = ["Personal", "Career", "Wellness", "Relationships", "Abundance", "Growth"];
  const moods = ["Optimistic", "Peaceful", "Confident", "Grateful", "Inspired", "Determined"];

  const addNewEntry = () => {
    if (newEntry.title && newEntry.content) {
      const entry = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        title: newEntry.title,
        content: newEntry.content,
        category: newEntry.category,
        mood: moods[Math.floor(Math.random() * moods.length)],
        gratitude: newEntry.gratitude.filter(item => item.trim() !== "")
      };
      setEntries(prev => [entry, ...prev]);
      setNewEntry({ title: "", content: "", category: "Personal", gratitude: ["", "", ""] });
      setShowNewEntry(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Manifestation Journal</h2>
        <p className="text-gray-600">Transform your thoughts into reality through focused intention</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-wellness-blue/10 to-wellness-blue/5">
          <CardContent className="p-6 text-center">
            <Sparkles className="w-8 h-8 text-wellness-blue mx-auto mb-3" />
            <div className="text-2xl font-bold text-wellness-blue">{entries.length}</div>
            <div className="text-sm text-gray-600">Total Entries</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-wellness-purple/10 to-wellness-purple/5">
          <CardContent className="p-6 text-center">
            <Heart className="w-8 h-8 text-wellness-purple mx-auto mb-3" />
            <div className="text-2xl font-bold text-wellness-purple">21</div>
            <div className="text-sm text-gray-600">Day Streak</div>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-wellness-teal/10 to-wellness-teal/5">
          <CardContent className="p-6 text-center">
            <Star className="w-8 h-8 text-wellness-teal mx-auto mb-3" />
            <div className="text-2xl font-bold text-wellness-teal">87%</div>
            <div className="text-sm text-gray-600">Manifestation Rate</div>
          </CardContent>
        </Card>
      </div>

      {/* Add New Entry Button */}
      {!showNewEntry && (
        <Card className="border-dashed border-2 border-gray-300 hover:border-wellness-blue transition-colors">
          <CardContent className="p-6">
            <Button 
              variant="ghost" 
              className="w-full h-20 text-gray-500 hover:text-wellness-blue"
              onClick={() => setShowNewEntry(true)}
            >
              <Plus className="w-8 h-8 mr-3" />
              Create New Manifestation Entry
            </Button>
          </CardContent>
        </Card>
      )}

      {/* New Entry Form */}
      {showNewEntry && (
        <Card className="border-wellness-blue border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-wellness-blue" />
              New Manifestation Entry
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                placeholder="What are you manifesting?"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wellness-blue"
                value={newEntry.title}
                onChange={(e) => setNewEntry(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wellness-blue"
                value={newEntry.category}
                onChange={(e) => setNewEntry(prev => ({ ...prev, category: e.target.value }))}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Manifestation Statement</label>
              <Textarea
                placeholder="Write your manifestation in present tense, as if it's already happening..."
                className="min-h-[120px] focus:ring-2 focus:ring-wellness-blue"
                value={newEntry.content}
                onChange={(e) => setNewEntry(prev => ({ ...prev, content: e.target.value }))}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Gratitude List</label>
              <div className="space-y-2">
                {newEntry.gratitude.map((item, index) => (
                  <input
                    key={index}
                    type="text"
                    placeholder={`Gratitude ${index + 1}`}
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-wellness-blue"
                    value={item}
                    onChange={(e) => {
                      const newGratitude = [...newEntry.gratitude];
                      newGratitude[index] = e.target.value;
                      setNewEntry(prev => ({ ...prev, gratitude: newGratitude }));
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button 
                onClick={addNewEntry}
                className="bg-gradient-to-r from-wellness-blue to-wellness-purple hover:from-wellness-purple hover:to-wellness-blue"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Create Entry
              </Button>
              <Button 
                variant="outline"
                onClick={() => setShowNewEntry(false)}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Journal Entries */}
      <div className="space-y-6">
        {entries.map((entry) => (
          <Card key={entry.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl mb-2">{entry.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-wellness-blue text-white">
                      {entry.category}
                    </Badge>
                    <Badge variant="outline">
                      {entry.mood}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(entry.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-wellness-lavender rounded-lg">
                  <p className="text-gray-700 leading-relaxed italic">"{entry.content}"</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-wellness-purple" />
                    Gratitude
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {entry.gratitude.map((item, index) => (
                      <Badge key={index} variant="secondary" className="bg-wellness-sage text-gray-700">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ManifestationJournal;
