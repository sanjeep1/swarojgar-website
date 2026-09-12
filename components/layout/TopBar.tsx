import { CONTACT } from "@/lib/constants";
import { Phone, MapPin } from "lucide-react";

export default function TopBar() {
    return (
        <div className="bg-slate-900 text-white text-sm">
            <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                        <span className="font-medium text-orange-400">
                            CTEVT
                        </span>{" "}
                        Affiliated & DOFE Approved
                    </span>
                    <span className="hidden md:inline">|</span>
                    <span className="hidden md:inline">
                        Ministry of Labour & CTEVT Verified Skill Training
                        Partner
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
                    <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-orange-400" />
                        Kathmandu Campus: Gongabu Chowk, Ring Road
                    </span>
                    <span className="flex items-center gap-1">
                        <Phone size={14} className="text-orange-400" />
                        Hotline: {CONTACT.hotline}
                    </span>
                </div>
            </div>
        </div>
    );
}
