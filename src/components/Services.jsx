import React, { useState } from 'react';
import { Snowflake, Flame, Droplets, Zap, Wrench, Shield, CheckCircle2, ArrowRight, Sparkles, Phone, ZoomIn } from 'lucide-react';
import { useMediaModal } from '../context/MediaModalContext';
import serviceCoolingFix from '../assets/service_cooling_fix.jpg';
import serviceGasRefill from '../assets/service_gas_refill.jpg';
import serviceWaterLeak from '../assets/service_water_leak.jpg';
import serviceElectricalRepair from '../assets/service_electrical_repair.jpg';
import serviceJetCleaning from '../assets/service_jet_cleaning.jpg';
import serviceInstallation from '../assets/service_installation.jpg';

const servicesData = [
    {
        id: 'cooling-issue',
        title: 'Cooling Issue Fixing',
        category: 'repair',
        tag: 'Most Requested',
        icon: Snowflake,
        image: serviceCoolingFix,
        accentColor: 'from-cyan-500 to-blue-600',
        description: 'AC running but not chilling your room? We fix coil ice-ups, blower motor slowdowns, clogged filters, and faulty thermostat sensors.',
        points: [
            'Rapid air temperature & CFM CFM airflow testing',
            'Evaporator & condenser coil freeze-up diagnosis',
            'Fan motor, capacitor & blower wheel restoration',
            'Thermostat & room temperature sensor recalibration',
        ],
        warranty: '30 Days Repair Warranty',
    },
    {
        id: 'gas-refilling',
        title: 'Gas Refilling & Leak Fix',
        category: 'gas',
        tag: 'Pure Refrigerant',
        icon: Flame,
        image: serviceGasRefill,
        accentColor: 'from-sky-500 to-cyan-600',
        description: '100% pure R-32, R-410A, and R-22 refrigerant charging with advanced nitrogen pressure testing to locate and seal micro-leaks permanently.',
        points: [
            'Pinpoint leak detection using soap-bubble & nitrogen test',
            'Copper brazing, flare-nut tightening & valve repair',
            'Deep system vacuuming before refrigerant top-up',
            'Precision weight-scale gas charging for max cooling',
        ],
        warranty: '60 Days Gas Leak Warranty',
    },
    {
        id: 'water-leakage',
        title: 'Water Leakage Solution',
        category: 'repair',
        tag: 'Same-Day Clean',
        icon: Droplets,
        image: serviceWaterLeak,
        accentColor: 'from-blue-500 to-indigo-600',
        description: 'Eliminate embarrassing water drops damaging your walls, wallpapers, and wooden flooring. Full drain line declogging & tray balancing.',
        points: [
            'High-pressure water flush for clogged drainage pipes',
            'Condensate drainage tray realigning & crack sealing',
            'Indoor unit wall-mounting bracket leveling check',
            'Anti-bacterial flush to prevent fungus & bad odor',
        ],
        warranty: '30 Days No-Drip Warranty',
    },
    {
        id: 'electrical-fault',
        title: 'Electrical Fault Repair',
        category: 'repair',
        tag: 'Advanced Diagnostics',
        icon: Zap,
        image: serviceElectricalRepair,
        accentColor: 'from-amber-500 to-orange-600',
        description: 'Fix frequent MCB tripping, AC not turning on, inverter PCB board faults, sensor errors, remote unresponsiveness, and capacitor burnouts.',
        points: [
            'Inverter AC motherboard / PCB circuit micro-soldering',
            'Dual running capacitor & relay replacement',
            'Compressor wiring harness & terminal repair',
            'Voltage fluctuation stabilizer troubleshooting',
        ],
        warranty: '30 Days Electrical Warranty',
    },
    {
        id: 'jet-cleaning',
        title: 'Deep Jet Pump Servicing',
        category: 'maintenance',
        tag: 'Eco Jet Wash',
        icon: Wrench,
        image: serviceJetCleaning,
        accentColor: 'from-teal-500 to-emerald-600',
        description: 'High-pressure jet wash with foam jacket protection. Cleans deep into aluminum cooling fins to boost cooling efficiency and reduce electricity bills.',
        points: [
            'Indoor AC jacket-covered high-pressure jet wash',
            'Outdoor condenser unit chemical dirt blast',
            'Filter, blower wheel & casing disinfectant wash',
            'Amperage and cooling efficiency test post-cleaning',
        ],
        warranty: 'Icy Chill Guaranteed',
    },
    {
        id: 'installation',
        title: 'AC Installation & Uninstallation',
        category: 'installation',
        tag: 'Standardized Fit',
        icon: Shield,
        image: serviceInstallation,
        accentColor: 'from-purple-500 to-indigo-600',
        description: 'Precision split and window AC mounting with core drilling, vacuum testing, heavy-duty brackets, and leak-proof copper piping insulation.',
        points: [
            'Precision wall hole drilling with zero structural mess',
            'Heavy-gauge outdoor unit stand fitting',
            'Complete vacuum pump air purge before start',
            'Safe gas lock-down during uninstallation',
        ],
        warranty: '60 Days Fitment Warranty',
    },
];

const servicesMediaList = servicesData.map((s, i) => ({
    id: i + 1,
    type: 'image',
    src: s.image,
    title: s.title,
    category: s.tag,
    desc: s.description,
}));

const Services = () => {
    const { openModal } = useMediaModal();
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredServices = activeFilter === 'all'
        ? servicesData
        : servicesData.filter((s) => s.category === activeFilter);

    return (
        <section id="services" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
            {/* Background glow and cooling elements */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        Our Core AC Repair Services
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                        Specialized AC Solutions For Every Problem
                    </h2>
                    <p className="mt-4 text-slate-300 text-base sm:text-lg">
                        From emergency cooling repairs and leak solutions to precision gas refilling and PCB repairs, our certified technicians have you covered.
                    </p>

                    {/* Service Category Filter Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                        {[
                            { id: 'all', label: 'All Services' },
                            { id: 'repair', label: 'Repairs & Fixes' },
                            { id: 'gas', label: 'Gas Refilling' },
                            { id: 'maintenance', label: 'Jet Servicing' },
                            { id: 'installation', label: 'Installation' },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveFilter(tab.id)}
                                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${activeFilter === tab.id
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 hover:text-white border border-slate-700'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Services Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {filteredServices.map((service) => {
                        const Icon = service.icon;
                        const fullIndex = servicesData.findIndex((s) => s.id === service.id);
                        return (
                            <div
                                key={service.id}
                                className="group rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/80 hover:border-cyan-500/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden shadow-xl"
                            >
                                <div>
                                    {/* Service Image with Category Overlay - Clickable to open modal */}
                                    <div
                                        onClick={() => openModal(servicesMediaList, fullIndex >= 0 ? fullIndex : 0)}
                                        className="relative h-48 overflow-hidden cursor-pointer"
                                        title="Click to view photo in modal"
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                openModal(servicesMediaList, fullIndex >= 0 ? fullIndex : 0);
                                            }
                                        }}
                                    >
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                                        {/* Badge */}
                                        <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                                            {service.tag}
                                        </span>

                                        {/* Floating Service Icon */}
                                        <div className="absolute bottom-3 left-4 w-12 h-12 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-lg backdrop-blur-md">
                                            <Icon className="w-6 h-6" />
                                        </div>

                                        {/* Zoom Icon Hint */}
                                        <div className="absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-600/90 text-white text-[10px] font-bold shadow-md">
                                            <ZoomIn className="w-3 h-3" />
                                            <span>Zoom</span>
                                        </div>
                                    </div>

                                    {/* Service Details */}
                                    <div className="p-5 sm:p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Checkpoints */}
                                        <div className="space-y-2 pt-2 border-t border-slate-700/60">
                                            {service.points.map((pt, idx) => (
                                                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                                    <span>{pt}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer of Card: Warranty & Book Action (Prices Removed) */}
                                <div className="px-5 sm:px-6 pb-5 pt-3 bg-slate-850/80 border-t border-slate-700/50 flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-semibold">
                                        <Shield className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                                        <span>{service.warranty}</span>
                                    </div>
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-600/30 transition-all hover:gap-2 shrink-0"
                                    >
                                        <span>Book Service</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Emergency Assistance Banner */}
                <div className="mt-14 rounded-2xl bg-gradient-to-r from-cyan-950 via-slate-850 to-blue-950 border border-cyan-800/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                    <div className="space-y-1 text-center md:text-left">
                        <h4 className="text-xl sm:text-2xl font-black text-white flex items-center justify-center md:justify-start gap-2">
                            <Phone className="w-5 h-5 text-cyan-400 animate-bounce" />
                            Need Immediate AC Breakdown Assistance?
                        </h4>
                        <p className="text-slate-300 text-sm">
                            Our technicians carry portable gas cylinders and spares across Kolkata for instant fixes.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <a
                            href="tel:+919804685701"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-extrabold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg text-sm"
                            title="Call Main Number: +91 98046 85701"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Call +91 98046 85701</span>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-sm"
                        >
                            Get Free Consultation
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
