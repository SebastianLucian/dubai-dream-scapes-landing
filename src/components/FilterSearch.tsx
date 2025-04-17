
import React, { useState } from 'react';
import { MapPin, Banknote, Home, Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const areas = [
  "Palm Jumeirah", 
  "Downtown Dubai", 
  "Dubai Marina", 
  "Emirates Hills", 
  "Jumeirah Golf Estates",
  "Arabian Ranches",
  "Dubai Hills Estate"
];

const FilterSearch = () => {
  const [area, setArea] = useState<string>("");
  const [budget, setBudget] = useState<number[]>([5000000]);
  const [sqMeters, setSqMeters] = useState<number[]>([200]);

  const handleSearch = () => {
    console.log("Searching with filters:", { area, budget: budget[0], sqMeters: sqMeters[0] });
    // Here you would typically handle the search functionality
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">Ask for it and we shall <span className="text-nexora-purple">deliver</span></h2>
          <div className="w-20 h-1 bg-nexora-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find your dream property in Dubai with our advanced property search
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-12">
              {/* Area Dropdown */}
              <div className="md:col-span-4 space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-nexora-gold" />
                  Area
                </label>
                <Select value={area} onValueChange={setArea}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    {areas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Budget Slider */}
              <div className="md:col-span-4 space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Banknote className="mr-2 h-4 w-4 text-nexora-gold" />
                  Budget (AED)
                </label>
                <div className="pt-6 px-2">
                  <Slider 
                    value={budget}
                    onValueChange={setBudget}
                    max={30000000}
                    min={1000000}
                    step={500000}
                  />
                </div>
                <div className="text-center text-sm font-medium text-nexora-purple mt-2">
                  {budget[0].toLocaleString()} AED
                </div>
              </div>
              
              {/* Square Meters Slider */}
              <div className="md:col-span-4 space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <Home className="mr-2 h-4 w-4 text-nexora-gold" />
                  Square Meters
                </label>
                <div className="pt-6 px-2">
                  <Slider
                    value={sqMeters}
                    onValueChange={setSqMeters}
                    max={1000}
                    min={50}
                    step={10}
                  />
                </div>
                <div className="text-center text-sm font-medium text-nexora-purple mt-2">
                  {sqMeters[0]} m²
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button 
                onClick={handleSearch}
                className="bg-nexora-gold hover:bg-amber-600 text-white px-8 py-3 rounded-full"
              >
                <Search className="mr-2 h-4 w-4" />
                Find Properties
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSearch;
