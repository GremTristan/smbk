import { QRCodeSVG } from "qrcode.react";
import { AlertTriangle, Database, Shield, Users } from "lucide-react";

export function SmartBankerssFlyer() {
  const communityUrl = "https://smartbankerss.hk";

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Flyer Design - A5 Format */}
      <div className="bg-black border-2 border-white rounded-none shadow-2xl w-full max-w-md aspect-[148/210] p-8 flex flex-col">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block">
            <h2 className="text-white tracking-widest mb-2">SMARTBANKERSS</h2>
            <div className="w-full h-px bg-white"></div>
          </div>
        </div>

        {/* Main Message - Fear-based */}
        <div className="flex-1 flex flex-col justify-center mb-6">
          <div className="mb-6">
            <AlertTriangle className="w-16 h-16 text-white mx-auto mb-4" strokeWidth={1} />
            <h3 className="text-white text-center mb-4 leading-tight">
              Your AI Replacement
              <br />
              Is Already Trained
            </h3>
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-white text-center text-sm leading-relaxed">
              Banking professionals in Hong Kong are being replaced by the AI they trained with their own data.
            </p>
            <p className="text-white text-center text-sm leading-relaxed">
              Bank of China. CCB. ICBC. ABC.
              <br />
              It's happening now.
            </p>
          </div>

          <div className="bg-white p-px mb-6">
            <div className="bg-black p-4">
              <p className="text-white text-center text-sm">
                Take back control of your data.
                <br />
                Join the movement.
              </p>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3">
              <QRCodeSVG value={communityUrl} size={120} level="H" fgColor="#000000" bgColor="#FFFFFF" />
            </div>
          </div>

          <p className="text-white text-center text-xs tracking-wider">
            SCAN TO JOIN SMARTBANKERSS
          </p>
        </div>

        {/* Features - Minimal Icons */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
          <div className="text-center">
            <Database className="w-6 h-6 text-white mx-auto mb-1" strokeWidth={1} />
            <p className="text-white text-xs">Data<br />Control</p>
          </div>
          <div className="text-center">
            <Shield className="w-6 h-6 text-white mx-auto mb-1" strokeWidth={1} />
            <p className="text-white text-xs">NFT<br />Identity</p>
          </div>
          <div className="text-center">
            <Users className="w-6 h-6 text-white mx-auto mb-1" strokeWidth={1} />
            <p className="text-white text-xs">No<br />Censorship</p>
          </div>
        </div>
      </div>

      {/* Print Specifications */}
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 w-full max-w-md">
        <h4 className="text-white mb-4">Print Specifications - Flyer</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-slate-400">Format:</span>
            <span className="text-white ml-2">A5 (148mm × 210mm)</span>
          </div>
          <div>
            <span className="text-slate-400">Resolution:</span>
            <span className="text-white ml-2">300 DPI</span>
          </div>
          <div>
            <span className="text-slate-400">Colors:</span>
            <span className="text-white ml-2">Black + White only</span>
          </div>
          <div>
            <span className="text-slate-400">Paper:</span>
            <span className="text-white ml-2">Premium Matte</span>
          </div>
        </div>
      </div>
    </div>
  );
}