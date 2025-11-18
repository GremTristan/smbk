import { QRCodeSVG } from "qrcode.react";
import { AlertTriangle, Brain, TrendingDown } from "lucide-react";

export function SmartBankerssWallSticker() {
  const communityUrl = "https://smartbankerss.hk";

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Design 1 - Large Impact Statement */}
        <div className="flex flex-col items-center">
          <h3 className="text-white mb-4">Large Wall Sticker - 600mm × 400mm</h3>
          <div className="bg-black border-4 border-white w-full aspect-[3/2] p-8 flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <AlertTriangle className="w-20 h-20 text-white mb-4" strokeWidth={1} />
              </div>
              
              <div className="space-y-4 mb-8">
                <h2 className="text-white tracking-wide leading-tight">
                  YOUR DATA
                  <br />
                  THEIR PROFIT
                  <br />
                  YOUR JOB LOSS
                </h2>
              </div>

              <div className="w-24 h-px bg-white mb-6"></div>

              <p className="text-white text-sm mb-6 max-w-md">
                Bank of China, CCB, ICBC, ABC employees in Hong Kong: 
                Your expertise trained the AI. Now take back control.
              </p>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-white tracking-widest mb-1">SMARTBANKERSS</p>
                <p className="text-white/60 text-sm">Community Portal</p>
              </div>
              <div className="bg-white p-3">
                <QRCodeSVG value={communityUrl} size={120} level="H" fgColor="#000000" bgColor="#FFFFFF" />
              </div>
            </div>
          </div>
        </div>

        {/* Design 2 - Vertical Statement */}
        <div className="flex flex-col items-center">
          <h3 className="text-white mb-4">Vertical Wall Sticker - 400mm × 600mm</h3>
          <div className="bg-black border-4 border-white w-full max-w-sm aspect-[2/3] p-6 flex flex-col items-center justify-between text-center">
            <div className="flex-1 flex flex-col justify-center w-full">
              <Brain className="w-12 h-12 text-white mx-auto mb-4" strokeWidth={1} />
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-white text-xs tracking-widest mb-1">STEP 1</p>
                  <p className="text-white/80 text-xs">You train the AI</p>
                </div>
                
                <TrendingDown className="w-6 h-6 text-white mx-auto" strokeWidth={1} />
                
                <div>
                  <p className="text-white text-xs tracking-widest mb-1">STEP 2</p>
                  <p className="text-white/80 text-xs">AI takes your position</p>
                </div>

                <div className="w-full h-px bg-white my-4"></div>

                <div>
                  <p className="text-white text-xs tracking-widest mb-1">YOUR MOVE</p>
                  <p className="text-white text-sm">Join SmartBankerss</p>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="bg-white p-2 mb-3 inline-block">
                <QRCodeSVG value={communityUrl} size={110} level="H" fgColor="#000000" bgColor="#FFFFFF" />
              </div>
              <p className="text-white text-xs tracking-wider">SCAN TO JOIN</p>
            </div>
          </div>
        </div>

        {/* Design 3 - Ultra Wide Banner */}
        <div className="flex flex-col items-center lg:col-span-2">
          <h3 className="text-white mb-4">Wide Banner - 800mm × 200mm</h3>
          <div className="bg-black border-2 border-white w-full aspect-[4/1] p-6 flex items-center justify-between gap-8">
            <div className="flex items-center gap-8 flex-1">
              <AlertTriangle className="w-16 h-16 text-white flex-shrink-0" strokeWidth={1} />
              <div>
                <h3 className="text-white mb-2 tracking-wide">
                  AI DOESN'T SLEEP. AI DOESN'T TAKE BREAKS. AI TOOK YOUR JOB.
                </h3>
                <p className="text-white/70 text-sm">
                  SmartBankerss: Tokenize your data. Control your future. Uncensored community for HK finance professionals.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-2 flex-shrink-0">
              <QRCodeSVG value={communityUrl} size={100} level="H" fgColor="#000000" bgColor="#FFFFFF" />
            </div>
          </div>
        </div>

        {/* Design 4 - Minimalist Square */}
        <div className="flex flex-col items-center lg:col-span-2">
          <h3 className="text-white mb-4">Square Statement - 500mm × 500mm</h3>
          <div className="bg-black border-4 border-white w-full max-w-lg aspect-square p-12 flex flex-col items-center justify-center text-center">
            <div className="mb-8">
              <h2 className="text-white tracking-wider leading-tight mb-6">
                THE AI YOU BUILT
                <br />
                <span className="text-white/40">—————</span>
                <br />
                REPLACED YOU
              </h2>
              
              <p className="text-white/70 text-sm mb-8">
                Bank of China • CCB • ICBC • ABC
                <br />
                Hong Kong banking professionals
              </p>
            </div>

            <div className="bg-white p-4 mb-6">
              <QRCodeSVG value={communityUrl} size={140} level="H" fgColor="#000000" bgColor="#FFFFFF" />
            </div>

            <div>
              <p className="text-white tracking-widest mb-2">SMARTBANKERSS</p>
              <p className="text-white/60 text-xs">Take back control • No censorship • NFT Identity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Specifications */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 w-full max-w-6xl">
        <h4 className="text-white mb-4">Wall Stickers Specifications</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
          <div>
            <span className="text-slate-400">Material:</span>
            <span className="text-white ml-2">Premium Vinyl</span>
          </div>
          <div>
            <span className="text-slate-400">Finish:</span>
            <span className="text-white ml-2">Matte</span>
          </div>
          <div>
            <span className="text-slate-400">Application:</span>
            <span className="text-white ml-2">Dry/Wet</span>
          </div>
          <div>
            <span className="text-slate-400">Removal:</span>
            <span className="text-white ml-2">Clean Peel</span>
          </div>
        </div>
        <div className="p-4 bg-black border border-slate-700 rounded">
          <p className="text-slate-300 text-sm">
            <strong className="text-white">Strategic Placement:</strong> Office buildings in Central, co-working spaces, business centers near Bank of China Tower, Cheung Kong Center, IFC Mall corridors
          </p>
        </div>
      </div>
    </div>
  );
}