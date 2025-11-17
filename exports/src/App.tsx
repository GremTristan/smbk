import { SmartBankersFlyer } from "./components/SmartBankersFlyer";
import { SmartBankersTableSticker } from "./components/SmartBankersTableSticker";
import { SmartBankersWallSticker } from "./components/SmartBankersWallSticker";
import { SmartBankersBusAd } from "./components/SmartBankersBusAd";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function App() {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-white mb-2">SmartBankers - Marketing Materials</h1>
          <p className="text-slate-400">Premium minimalist designs for Hong Kong banking community</p>
        </div>

        <Tabs defaultValue="flyer" className="w-full">
          <TabsList className="mb-6 bg-slate-900 border border-slate-800">
            <TabsTrigger value="flyer">Flyer</TabsTrigger>
            <TabsTrigger value="table">Table Stickers</TabsTrigger>
            <TabsTrigger value="wall">Wall Stickers</TabsTrigger>
            <TabsTrigger value="bus">Bus Stop Posters</TabsTrigger>
          </TabsList>
          
          <TabsContent value="flyer">
            <SmartBankersFlyer />
          </TabsContent>
          
          <TabsContent value="table">
            <SmartBankersTableSticker />
          </TabsContent>
          
          <TabsContent value="wall">
            <SmartBankersWallSticker />
          </TabsContent>
          
          <TabsContent value="bus">
            <SmartBankersBusAd />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
