import { QRCodeSVG } from "qrcode.react";
import { AlertTriangle, Database, TrendingDown, Brain } from "lucide-react";

export function SmartBankerssBusAd() {
  const communityUrl = "https://smartbankerss.hk";

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-1 gap-8 w-full max-w-6xl">
        {/* Design 1 - Standard Bus Stop Poster */}
        <div className="flex flex-col items-center">
          <h3 className="text-white mb-4">Standard Bus Poster - 1200mm × 1800mm (Portrait)</h3>
          <div className="bg-black border-4 border-white w-full max-w-2xl aspect-[2/3] p-12 flex flex-col">
            {/* Top Section - Impact */}
            <div className="mb-auto">
              <div className="text-center mb-12">
                <AlertTriangle className="w-24 h-24 text-white mx-auto mb-8" strokeWidth={1} />
                
                <h1 className="text-white tracking-wide leading-tight mb-8">
                  YOU TRAINED
                  <br />
                  THE AI THAT
                  <br />
                  FIRED YOU
                </h1>
              </div>

              <div className="max-w-xl mx-auto mb-12">
                <div className="bg-white p-px mb-8">
                  <div className="bg-black p-6">
                    <p className="text-white text-center leading-relaxed">
                      Banking professionals at Bank of China, CCB, ICBC, and ABC in Hong Kong are being systematically replaced by AI systems they helped train with their own professional expertise and data.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <Database className="w-6 h-6 text-white flex-shrink-0 mt-1" strokeWidth={1} />
                    <div>
                      <p className="text-white mb-1">Take Back Your Data</p>
                      <p className="text-white/60 text-sm">Tokenize and control your professional information</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Brain className="w-6 h-6 text-white flex-shrink-0 mt-1" strokeWidth={1} />
                    <div>
                      <p className="text-white mb-1">NFT Digital Identity</p>
                      <p className="text-white/60 text-sm">Unique MyDigiSelf identity protection</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-white flex-shrink-0 mt-1" strokeWidth={1} />
                    <div>
                      <p className="text-white mb-1">Uncensored Community</p>
                      <p className="text-white/60 text-sm">Connect with HK finance professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - CTA */}
            <div className="mt-auto">
              <div className="text-center mb-8">
                <div className="inline-block bg-white p-4 mb-6">
                  <QRCodeSVG value={communityUrl} size={200} level="H" fgColor="#000000" bgColor="#FFFFFF" />
                </div>
                <p className="text-white tracking-wider mb-2">SCAN TO JOIN THE MOVEMENT</p>
                <p className="text-white/60 text-sm">smartbankerss.hk</p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-white text-center tracking-widest text-sm">SMARTBANKERSS</p>
              </div>
            </div>
          </div>
        </div>

        {/* Design 2 - Landscape Bus Shelter */}
        <div className="flex flex-col items-center">
          <h3 className="text-white mb-4">Bus Shelter Panel - 1800mm × 1200mm (Landscape)</h3>
          <div className="bg-black border-4 border-white w-full aspect-[3/2] p-10 flex items-stretch gap-8">
            {/* Left Side - Message */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <TrendingDown className="w-20 h-20 text-white mb-8" strokeWidth={1} />
                
                <h2 className="text-white tracking-wide leading-tight mb-8">
                  YOUR JOB
                  <br />
                  YOUR DATA
                  <br />
                  THEIR AI
                  <br />
                  YOUR LOSS
                </h2>

                <div className="w-32 h-px bg-white mb-8"></div>

                <p className="text-white max-w-lg mb-8 leading-relaxed">
                  Chinese banking institutions in Hong Kong are replacing experienced professionals with AI trained on their own data. You created the intelligence. Now take back control.
                </p>

                <div className="space-y-3 mb-8">
                  <p className="text-white text-sm">→ No censorship community portal</p>
                  <p className="text-white text-sm">→ Tokenize your professional data</p>
                  <p className="text-white text-sm">→ NFT-based digital identity</p>
                  <p className="text-white text-sm">→ Rewards in tokens & NFT</p>
                </div>
              </div>

              <div>
                <p className="text-white tracking-widest">SMARTBANKERSS</p>
                <p className="text-white/60 text-sm">Hong Kong Finance Professionals Community</p>
              </div>
            </div>

            {/* Right Side - QR & Visual */}
            <div className="flex flex-col items-center justify-center border-l-2 border-white pl-8">
              <div className="text-center mb-8">
                <p className="text-white mb-4 tracking-wide">JOIN NOW</p>
                <div className="bg-white p-4">
                  <QRCodeSVG value={communityUrl} size={240} level="H" fgColor="#000000" bgColor="#FFFFFF" />
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-white/60 text-sm mb-2">Scan to access portal</p>
                <p className="text-white text-sm">smartbankerss.hk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Design 3 - Minimal Impact Statement */}
        <div className="flex flex-col items-center">
          <h3 className="text-white mb-4">Large Format - 2000mm × 1500mm</h3>
          <div className="bg-black border-2 border-white w-full aspect-[4/3] p-16 flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl">
              <div className="mb-12">
                <h1 className="text-white tracking-wider leading-tight mb-12">
                  AI TOOK YOUR JOB
                  <br />
                  <span className="text-white/30">———————————</span>
                  <br />
                  TAKE BACK YOUR DATA
                </h1>
              </div>

              <div className="grid grid-cols-3 gap-8 mb-12">
                <div className="border border-white/20 p-6">
                  <p className="text-white/40 text-sm mb-2">BANK OF CHINA</p>
                  <p className="text-white text-sm">Affected</p>
                </div>
                <div className="border border-white/20 p-6">
                  <p className="text-white/40 text-sm mb-2">CCB • ICBC • ABC</p>
                  <p className="text-white text-sm">Affected</p>
                </div>
                <div className="border border-white/20 p-6">
                  <p className="text-white/40 text-sm mb-2">YOUR BANK?</p>
                  <p className="text-white text-sm">Next</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-12 mb-12">
                <div className="flex-1 max-w-md text-left">
                  <p className="text-white mb-6">
                    Hong Kong banking professionals: Join the uncensored community taking control of their professional data and digital identity.
                  </p>
                  <p className="text-white/60 text-sm">
                    SmartBankerss • NFT Identity • Token Rewards • Data Ownership
                  </p>
                </div>
                
                <div className="bg-white p-5">
                  <QRCodeSVG value={communityUrl} size={200} level="H" fgColor="#000000" bgColor="#FFFFFF" />
                </div>
              </div>

              <div className="border-t border-white/20 pt-8">
                <p className="text-white tracking-widest">SMARTBANKERSS.HK</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Specifications */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 w-full max-w-6xl">
        <h4 className="text-white mb-4">Bus Stop Posters Specifications</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
          <div>
            <span className="text-slate-400">Material:</span>
            <span className="text-white ml-2">Outdoor Vinyl</span>
          </div>
          <div>
            <span className="text-slate-400">Finish:</span>
            <span className="text-white ml-2">UV Protected</span>
          </div>
          <div>
            <span className="text-slate-400">Resolution:</span>
            <span className="text-white ml-2">150 DPI (large format)</span>
          </div>
          <div>
            <span className="text-slate-400">Weather:</span>
            <span className="text-white ml-2">All-weather proof</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-black border border-slate-700 rounded">
            <p className="text-slate-300 text-sm">
              <strong className="text-white">Priority Locations:</strong> Central, Admiralty, Causeway Bay, Tsim Sha Tsui - near Bank of China Tower, IFC, major financial districts
            </p>
          </div>
          <div className="p-4 bg-black border border-slate-700 rounded">
            <p className="text-slate-300 text-sm">
              <strong className="text-white">Target Times:</strong> Morning rush (7-9 AM) and evening commute (6-8 PM) when banking professionals travel
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}