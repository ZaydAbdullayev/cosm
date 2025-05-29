import station_1 from "../assets/product8.png";
import station_2 from "../assets/product9.png";

import satellite_1 from "../assets/product1.png";
import satellite_2 from "../assets/product5.png";

import trip_jet_1 from "../assets/product11.png";
import trip_jet_2 from "../assets/product2.png";
import trip_jet_3 from "../assets/product4.png";

import war_jet_1 from "../assets/product3.png";
import war_jet_2 from "../assets/product10.png";

import defense_1 from "../assets/product7.png";
import defense_2 from "../assets/product6.png";

import avatar_1 from "../assets/avatar-1.png";
import avatar_2 from "../assets/avatar-2.png";
import avatar_3 from "../assets/avatar-3.png";
import avatar_4 from "../assets/avatar-4.png";

import planet_1 from "../assets/planet_1.png";
import planet_2 from "../assets/planet_2.png";
import planet_3 from "../assets/planet_3.png";
import planet_4 from "../assets/planet_4.png";
import planet_5 from "../assets/planet_5.png";
import planet_6 from "../assets/planet_6.png";

export const data = {
    categories: [
        "STATIONS",
        "SATELLITES",
        "TRIP JETS",
        "WAR JETS",
        "DEFENSE",
    ],
    products: [
        {
            id: 1,
            name: "Orbital Relay Station",
            category: "STATIONS",
            price: 105000,
            description:
                "Transmits encrypted interstellar data across multiple planetary sectors.",
            image: station_1,
        },
        {
            id: 2,
            name: "Deep Space Nexus",
            category: "STATIONS",
            price: 128000,
            description:
                "A high-capacity refueling and docking hub for deep space travelers.",
            image: station_2,
        },
        {
            id: 3,
            name: "VoltArc Satellite",
            category: "SATELLITES",
            price: 86000,
            description:
                "Emits pulses of ionized energy to stabilize local power grids in orbit.",
            image: satellite_1,
        },
        {
            id: 4,
            name: "IonStorm Beacon",
            category: "SATELLITES",
            price: 94000,
            description:
                "Generates artificial ion storms to scramble enemy communications.",
            image: satellite_2,
        },
        {
            id: 5,
            name: "Stratosphere Runner",
            category: "TRIP JETS",
            price: 152500,
            description:
                "Ultra-light craft optimized for atmospheric gliding and long-range travel.",
            image: trip_jet_1,
        },
        {
            id: 6,
            name: "Photon Glider X",
            category: "TRIP JETS",
            price: 165000,
            description:
                "Powered by dual-core photon thrusters for silent traversal.",
            image: trip_jet_2,
        },
        {
            id: 7,
            name: "Nebula Drifter MkIII",
            category: "TRIP JETS",
            price: 178000,
            description:
                "Equipped with hyperspace sails to navigate dense nebula zones.",
            image: trip_jet_3,
        },
        {
            id: 8,
            name: "Vortex Interceptor",
            category: "WAR JETS",
            price: 212000,
            description:
                "Fast-attack unit with rotating plasma cannons and warp-dodge engines.",
            image: war_jet_1,
        },
        {
            id: 9,
            name: "Plasma Talon",
            category: "WAR JETS",
            price: 235000,
            description:
                "Built for orbital dogfights with rapid target lock and precision missiles.",
            image: war_jet_2,
        },
        {
            id: 10,
            name: "Aegis Barrier Array",
            category: "DEFENSE",
            price: 182500,
            description:
                "Deploys hex-shield matrices to protect colonies from meteor storms.",
            image: defense_1,
        },
        {
            id: 11,
            name: "Omega Pulse Grid",
            category: "DEFENSE",
            price: 198000,
            description:
                "Unleashes synchronized energy pulses to disable incoming threats.",
            image: defense_2,
        },
    ],
};

export const avatars = [
    {
        id: 1,
        name: "Galactic Guardian",
        image: avatar_1,
        description:
            "A seasoned protector of the cosmos, known for their strategic brilliance.",
    },
    {
        id: 2,
        name: "Nebula Nomad",
        image: avatar_2,
        description: "A wanderer of the stars, skilled in navigation and survival.",
    },
    {
        id: 3,
        name: "Stellar Sentinel",
        image: avatar_3,
        description: "An elite warrior with unmatched combat skills and loyalty.",
    },
    {
        id: 4,
        name: "Cosmic Cartographer",
        image: avatar_4,
        description:
            "An expert in mapping uncharted territories and discovering new worlds.",
    },
];

export const galacticFacts = [
    "Galactic Fact: Deep Space Nexus is banned in 9 star sectors.",
    "Clone Log: Unit A-221 failed to stabilize the core.",
    "Black Market Rumor: Relay stations may hide wormhole tech.",
    "Galactic Fact: IonStorm Beacons can disrupt enemy fleets.",
    "Clone Log: Unit B-334 successfully navigated the Nebula Drift.",
    "Black Market Rumor: Plasma Talon has a secret cloaking device.",
    "Galactic Fact: Aegis Barrier Arrays are essential for colony defense.",
    "Clone Log: Unit C-445 detected an anomaly in Sector Z-9.",
    "Black Market Rumor: Omega Pulse Grids can disable planetary shields.",
    "Galactic Fact: Vortex Interceptors are the fastest war jets in the fleet.",
    "Clone Log: Unit D-556 encountered hostile drones in the asteroid belt.",
    "Black Market Rumor: Photon Glider X can traverse black holes safely.",
    "Galactic Fact: Nebula Drifters are equipped with hyperspace sails.",
    "Clone Log: Unit E-667 reported a rare mineral find in Sector Y-3.",
    "Black Market Rumor: Stratosphere Runners can evade detection by enemy radars.",
];

export const transmissions = [
    "Incoming transmission detected in Sector X-22...",
    "System Overload Alert at CryoVaults...",
    "Wormhole coordinates updated...",
    "Blackhole Miner incoming — next drop in 03:24:11",
    "Galactic Council meeting scheduled for 12:00 Galactic Standard Time.",
    "New mission briefing available: Explore Sector Z-9.",
    "Emergency alert: IonStorm detected in Sector Y-5.",
    "Data packet received from Orbital Relay Station.",
    "Clone Unit A-221 has been activated for mission.",
    "Black Market activity reported in Sector W-3.",
    "New trade routes established between sectors X-1 and Y-2.",
    "Galactic Fact: The Nebula Drift is a treacherous region of space.",
    "Clone Unit B-334 has successfully completed its mission.",
    "Black Market Rumor: A secret weapon is being developed in Sector V-7.",
    "Transmission from Galactic Council: New regulations on space travel.",
    "Emergency transmission: Defense Systems required in Sector Z-8.",
];

export const titles = [
    { name: "Cadet", minBalance: 0 },
    { name: "Enlisted Ape", minBalance: 10000 },
    { name: "Tactical Pilot", minBalance: 30000 },
    { name: "War Ape", minBalance: 60000 },
    { name: "Commander", minBalance: 100000 },
    { name: "Sector General", minBalance: 200000 },
    { name: "Galactic Guardian", minBalance: 500000 },
    { name: "Voidwalker Supreme", minBalance: 1000000 },
    { name: "Cosmic Overlord", minBalance: 2000000 },
    { name: "Galactic Emperor", minBalance: 5000000 },
    { name: "Celestial Monarch", minBalance: 10000000 },
    { name: "Stellar Deity", minBalance: 20000000 },
    { name: "Cosmic Legend", minBalance: 50000000 },
    { name: "Galactic Mythos", minBalance: 100000000 },
    { name: "Eternal Sovereign", minBalance: 200000000 },
];


export const planets = [
    {
        id: 1,
        name: "Aurelia Prime",
        image: planet_1,
        climate: "Tropical",
        description:
            "A lush, vibrant world with dense jungles and abundant resources.",
        faction: "Neutral",
        coordinates: "X-12 Y-34 Z-56",
        resources: ["Rare Flora", "Exotic Minerals", "Water Crystals"],
    },
    {
        id: 2,
        name: "Cryos",
        image: planet_2,
        climate: "Frozen",
        description:
            "An icy planet with extreme cold and vast frozen landscapes.",
        faction: "Neutral",
        coordinates: "X-23 Y-45 Z-67",
        resources: ["Ice Crystals", "Frozen Minerals"],
    },
    {
        id: 3,
        name: "Voltra",
        image: planet_3,
        climate: "Volcanic",
        description:
            "A fiery world with active volcanoes and molten rivers.",
        faction: "Neutral",
        coordinates: "X-34 Y-56 Z-78",
        resources: ["Lava Stones", "Volcanic Ash", "Rare Metals"],
    },
    {
        id: 4,
        name: "Zephyris",
        image: planet_4,
        climate: "Windy",
        description:
            "A windy planet with constant storms and floating islands.",
        faction: "Neutral",
        coordinates: "X-45 Y-67 Z-89",
        resources: ["Wind Crystals", "Floating Flora", "Storm Minerals"],
    },
    {
        id: 5,
        name: "Aquara",
        image: planet_5,
        climate: "Oceanic",
        description:
            "A water-covered world with deep oceans and scattered islands.",
        faction: "Neutral",
        coordinates: "X-56 Y-78 Z-90",
        resources: ["Oceanic Minerals", "Coral Crystals", "Water Flora"],
    },
    {
        id: 6,
        name: "Terranova",
        image: planet_6,
        climate: "Temperate",
        description:
            "A balanced world with diverse ecosystems and moderate climates.",
        faction: "Neutral",
        coordinates: "X-67 Y-89 Z-01",
        resources: ["Terra Crystals", "Diverse Flora", "Mineral Deposits"],
    },
];
