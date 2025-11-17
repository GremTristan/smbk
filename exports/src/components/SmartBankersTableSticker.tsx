import { QRCodeSVG } from "qrcode.react";
import { AlertTriangle, Database } from "lucide-react";

export function SmartBankersTableSticker() {
  const communityUrl = "https://smartbankers.hk";

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Design 1 - Square Minimal */}
        <div className="flex flex-col items-center">
          <h3 className="text-white mb-4">Square - 100mm × 100mm</h3>
          <div className="bg-black border-4 border-white w-80 h-80 flex flex-col items-center justify-center p-6">
            <div className="text-center mb-4">
              <AlertTriangle className="w-10 h-10 text-white mx-auto mb-3" strokeWidth={1.5} />
              <p className="text-white text-sm tracking-widest">ARE YOU NEXT?</p>
            </div>
            
            <div className="bg-white p-2 mb-4">
              <QRCodeSVG value={communityUrl} size={120} level="H" fgColor="#000000" bgColor="#FFFFFF" />
            </div>
            
            <div className="text-center">
              <p className="text-white text-xs tracking-wider">SMARTBANKERS</p>
              <p className="text-white/60 text-xs mt-1">Take Back Control</p>
            </div>
          </div>
        </div>

        {/* Design 2 - Circular Elegant */}
        <div className="flex flex-col items-center">
          <h3 className="text-white mb-4">Circle - Ø 100mm</h3>
          <div className="bg-black border-4 border-white rounded-full w-80 h-80 flex flex-col items-center justify-center p-6">
            <div className="text-center mb-3">
              <p className="text-white text-xs tracking-widest mb-3">AI TOOK</p>
              <p className="text-white text-xs tracking-widest">YOUR JOB</p>
            </div>
            
            <div className="bg-white p-3 mb-3">
              <QRCodeSVG value={communityUrl} size={110} level="H" fgColor="#000000" bgColor="#FFFFFF" />
            </div>
            
            <p className="text-white text-xs tracking-wider">JOIN THE MOVEMENT</p>
          </div>
        </div>

        {/* Design 3 - Rectangle Minimal Statement */}
        <div className="flex flex-col items-center">
          <h3 className="text-white mb-4">Rectangle - 150mm × 80mm</h3>
          <div className="bg-black border-2 border-white w-full max-w-lg h-64 flex items-center justify-between p-6 gap-6">
            <div className="flex-1">
              <p className="text-white mb-2 text-sm tracking-wide">
                YOU TRAINED THE AI
              </p>
              <p className="text-white mb-4 text-sm tracking-wide">
                NOW IT REPLACES YOU
              </p>
              <div className="w-12 h-px bg-white mb-4"></div>
              <p className="text-white/80 text-xs">
                SmartBankers Community
              </p>
            </div>
            
            <div className="bg-white p-2">
              <QRCodeSVG value={communityUrl} size={100} level="H" fgColor="#000000" bgColor="#FFFFFF" />
            </div>
          </div>
        </div>

        {/* Design 4 - Ultra Minimal Square */}
        <div className="flex flex-col items-center">
          <h3 className="text-white mb-4">Small Square - 70mm × 70mm</h3>
          <div className="bg-black border border-white w-64 h-64 flex flex-col items-center justify-center p-4">
            <div className="bg-white p-2 mb-3">
              <QRCodeSVG value={communityUrl} size={100} level="H" fgColor="#000000" bgColor="#FFFFFF" />
            </div>
            
            <div className="text-center">
              <Database className="w-6 h-6 text-white mx-auto mb-2" strokeWidth={1} />
              <p className="text-white text-xs tracking-widest">SMARTBANKERS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Specifications */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 w-full max-w-4xl">
        <h4 className="text-white mb-4">Table Stickers Specifications</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-slate-400">Material:</span>
            <span className="text-white ml-2">Premium Vinyl</span>
          </div>
          <div>
            <span className="text-slate-400">Finish:</span>
            <span className="text-white ml-2">Matte Black</span>
          </div>
          <div>
            <span className="text-slate-400">Waterproof:</span>
            <span className="text-white ml-2">Yes</span>
          </div>
          <div>
            <span className="text-slate-400">Adhesive:</span>
            <span className="text-white ml-2">Removable</span>
          </div>
        </div>
        <div className="mt-4 p-4 bg-black border border-slate-700 rounded">
          <p className="text-slate-300 text-sm">
            <strong className="text-white">Placement:</strong> Coffee shops, co-working spaces, bank cafeterias in Central, Admiralty, Causeway Bay areas
          </p>
        </div>
      </div>
    </div>
  );
}