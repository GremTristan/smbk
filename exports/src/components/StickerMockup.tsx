import { QRCodeSVG } from "qrcode.react";
import { Smartphone, Scan, Menu } from "lucide-react";

export function StickerMockup() {
  const restaurantUrl = "https://restaurant-menu.example.com";

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Sticker Design 1 - Square */}
        <div className="flex flex-col items-center">
          <h3 className="text-slate-900 mb-4">Square Sticker (4" × 4")</h3>
          <div className="bg-white rounded-lg shadow-xl p-8 w-80 h-80 flex flex-col items-center justify-center border-4 border-orange-500">
            <div className="text-center mb-4">
              <Menu className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h4 className="text-orange-600">View Our Menu</h4>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-md mb-4">
              <QRCodeSVG value={restaurantUrl} size={140} level="H" />
            </div>
            
            <div className="flex items-center gap-2 text-slate-700">
              <Scan className="w-4 h-4" />
              <span className="text-sm">Scan to Order</span>
            </div>
          </div>
        </div>

        {/* Sticker Design 2 - Circular */}
        <div className="flex flex-col items-center">
          <h3 className="text-slate-900 mb-4">Circular Sticker (4" diameter)</h3>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full shadow-xl p-8 w-80 h-80 flex flex-col items-center justify-center">
            <div className="text-center mb-3">
              <h4 className="text-white">Scan Here</h4>
              <p className="text-orange-100 text-sm">for Digital Menu</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg mb-3">
              <QRCodeSVG value={restaurantUrl} size={130} level="H" />
            </div>
            
            <div className="flex items-center gap-2 text-white">
              <Smartphone className="w-5 h-5" />
              <span className="text-sm">Contactless Ordering</span>
            </div>
          </div>
        </div>

        {/* Sticker Design 3 - Rectangle Minimal */}
        <div className="flex flex-col items-center">
          <h3 className="text-slate-900 mb-4">Rectangle Sticker (6" × 3")</h3>
          <div className="bg-slate-900 rounded-lg shadow-xl p-6 w-full h-64 flex items-center justify-between gap-6">
            <div className="flex-1">
              <h4 className="text-white mb-2">Order From Your Table</h4>
              <p className="text-slate-300 text-sm mb-3">
                Scan the QR code to browse our menu and place your order
              </p>
              <div className="flex items-center gap-2 text-orange-400">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm">Quick & Easy</span>
              </div>
            </div>
            
            <div className="bg-white p-3 rounded-lg shadow-lg">
              <QRCodeSVG value={restaurantUrl} size={120} level="H" />
            </div>
          </div>
        </div>

        {/* Sticker Design 4 - Small Compact */}
        <div className="flex flex-col items-center">
          <h3 className="text-slate-900 mb-4">Small Square (3" × 3")</h3>
          <div className="bg-white rounded-lg shadow-xl p-6 w-64 h-64 flex flex-col items-center justify-center border-2 border-slate-200">
            <div className="bg-orange-50 p-2 rounded-lg mb-3">
              <QRCodeSVG value={restaurantUrl} size={110} level="H" />
            </div>
            
            <div className="text-center">
              <p className="text-slate-900 text-sm mb-1">Scan for Menu</p>
              <p className="text-slate-500 text-xs">Delicious Bites</p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Specifications */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
        <h4 className="text-slate-900 mb-4">Sticker Print Specifications</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-slate-600">Material:</span>
            <span className="text-slate-900 ml-2">Vinyl</span>
          </div>
          <div>
            <span className="text-slate-600">Finish:</span>
            <span className="text-slate-900 ml-2">Matte/Gloss</span>
          </div>
          <div>
            <span className="text-slate-600">Waterproof:</span>
            <span className="text-slate-900 ml-2">Yes</span>
          </div>
          <div>
            <span className="text-slate-600">Adhesive:</span>
            <span className="text-slate-900 ml-2">Permanent</span>
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-slate-700 text-sm">
            <strong>💡 Tip:</strong> For table stickers, we recommend waterproof vinyl with a matte finish to reduce glare and make QR codes easier to scan.
          </p>
        </div>
      </div>
    </div>
  );
}
