import { MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function TopBar() {
    return (
        <div className="bg-slate-900 text-white text-sm">
            <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="flex items-center gap-4 text-sm text-center">
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

                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
                    <span className="flex items-center gap-1">
                        <MapPin size={14} className="text-orange-400" />
                        Gongabu Chowk, Ring Road
                    </span>
                    <span className="flex items-center gap-1">
                        <Phone size={14} className="text-orange-400" />
                        {CONTACT.hotline}
                    </span>
                </div>
            </div>
        </div>
    );
}
