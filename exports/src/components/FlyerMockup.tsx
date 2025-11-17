import { QRCodeSVG } from "qrcode.react";
import { Smartphone, Wifi, UtensilsCrossed } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FlyerMockup() {
  const restaurantUrl = "https://restaurant-menu.example.com";

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Flyer Preview */}
      <div className="bg-white rounded-lg shadow-2xl p-12 w-full max-w-2xl aspect-[8.5/11]">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <UtensilsCrossed className="w-12 h-12 text-orange-600" />
          </div>
          <h2 className="text-orange-600 mb-2">Delicious Bites Restaurant</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
        </div>

        {/* Hero Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Restaurant ambiance"
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="text-center mb-8">
          <h3 className="text-slate-900 mb-4">Scan for Our Digital Menu</h3>
          <p className="text-slate-600 mb-6">
            Experience seamless ordering with our contactless menu. 
            Scan the QR code below to browse our full selection of dishes, 
            daily specials, and place your order directly from your phone.
          </p>
        </div>

        {/* QR Code Section */}
        <div className="bg-slate-50 rounded-lg p-8 mb-8">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <QRCodeSVG value={restaurantUrl} size={180} level="H" />
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Smartphone className="w-5 h-5" />
              <span>Scan with your phone camera</span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <Wifi className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-slate-700 text-sm">Free WiFi</p>
          </div>
          <div className="text-center">
            <Smartphone className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-slate-700 text-sm">Easy Ordering</p>
          </div>
          <div className="text-center">
            <UtensilsCrossed className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-slate-700 text-sm">Fresh Daily</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center border-t border-slate-200 pt-4">
          <p className="text-slate-600 text-sm">
            123 Main Street | (555) 123-4567 | Open Daily 11AM - 10PM
          </p>
        </div>
      </div>

      {/* Print Specifications */}
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl">
        <h4 className="text-slate-900 mb-4">Print Specifications</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-slate-600">Format:</span>
            <span className="text-slate-900 ml-2">Letter (8.5" × 11")</span>
          </div>
          <div>
            <span className="text-slate-600">Resolution:</span>
            <span className="text-slate-900 ml-2">300 DPI</span>
          </div>
          <div>
            <span className="text-slate-600">Color Mode:</span>
            <span className="text-slate-900 ml-2">CMYK</span>
          </div>
          <div>
            <span className="text-slate-600">Bleed:</span>
            <span className="text-slate-900 ml-2">0.125"</span>
          </div>
        </div>
      </div>
    </div>
  );
}
