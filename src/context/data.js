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


export const data = {
    categories: [
        "STATIONS",
        "SATELLITES",
        "TRIP JETS",
        "WAR JETS",
        "DEFENSE SYSTEMS"
    ],
    products: [
        {
            id: 1,
            name: "Orbital Relay Station",
            category: "STATIONS",
            price: 105000,
            description: "Transmits encrypted interstellar data across multiple planetary sectors.",
            image: station_1,
        },
        {
            id: 2,
            name: "Deep Space Nexus",
            category: "STATIONS",
            price: 128000,
            description: "A high-capacity refueling and docking hub for deep space travelers.",
            image: station_2,
        },
        {
            id: 3,
            name: "VoltArc Satellite",
            category: "SATELLITES",
            price: 86000,
            description: "Emits pulses of ionized energy to stabilize local power grids in orbit.",
            image: satellite_1,
        },
        {
            id: 4,
            name: "IonStorm Beacon",
            category: "SATELLITES",
            price: 94000,
            description: "Generates artificial ion storms to scramble enemy communications.",
            image: satellite_2,
        },
        {
            id: 5,
            name: "Stratosphere Runner",
            category: "TRIP JETS",
            price: 152500,
            description: "Ultra-light craft optimized for atmospheric gliding and long-range travel.",
            image: trip_jet_1,
        },
        {
            id: 6,
            name: "Photon Glider X",
            category: "TRIP JETS",
            price: 165000,
            description: "Powered by dual-core photon thrusters for silent traversal.",
            image: trip_jet_2,
        },
        {
            id: 7,
            name: "Nebula Drifter MkIII",
            category: "TRIP JETS",
            price: 178000,
            description: "Equipped with hyperspace sails to navigate dense nebula zones.",
            image: trip_jet_3,
        },
        {
            id: 8,
            name: "Vortex Interceptor",
            category: "WAR JETS",
            price: 212000,
            description: "Fast-attack unit with rotating plasma cannons and warp-dodge engines.",
            image: war_jet_1,
        },
        {
            id: 9,
            name: "Plasma Talon",
            category: "WAR JETS",
            price: 235000,
            description: "Built for orbital dogfights with rapid target lock and precision missiles.",
            image: war_jet_2,
        },
        {
            id: 10,
            name: "Aegis Barrier Array",
            category: "DEFENSE SYSTEMS",
            price: 182500,
            description: "Deploys hex-shield matrices to protect colonies from meteor storms.",
            image: defense_1,
        },
        {
            id: 11,
            name: "Omega Pulse Grid",
            category: "DEFENSE SYSTEMS",
            price: 198000,
            description: "Unleashes synchronized energy pulses to disable incoming threats.",
            image: defense_2,
        }
    ]

};

export const avatars = [
    {
        id: 1,
        name: "Galactic Guardian",
        image: avatar_1,
        description: "A seasoned protector of the cosmos, known for their strategic brilliance.",
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
        description: "An expert in mapping uncharted territories and discovering new worlds.",
    }
];