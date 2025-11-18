import { SmartBankerssFlyer } from "./components/SmartBankerssFlyer";
import { SmartBankerssTableSticker } from "./components/SmartBankerssTableSticker";
import { SmartBankerssWallSticker } from "./components/SmartBankerssWallSticker";
import { SmartBankerssBusAd } from "./components/SmartBankerssBusAd";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function App() {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-white mb-2">SmartBankerss - Marketing Materials</h1>
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
            <SmartBankerssFlyer />
          </TabsContent>
          
          <TabsContent value="table">
            <SmartBankerssTableSticker />
          </TabsContent>
          
          <TabsContent value="wall">
            <SmartBankerssWallSticker />
          </TabsContent>
          
          <TabsContent value="bus">
            <SmartBankerssBusAd />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
