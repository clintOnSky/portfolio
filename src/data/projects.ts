export interface ProjectLink {
  label: string;
  url: string;
}

export interface TechSection {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  name: string;
  role: string;
  icon: string;
  iconAlt: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  metrics: string[];
  overview: string;
  techDeepDive: TechSection[];
}

export const projects: Project[] = [
  {
    slug: "totum",
    name: "Totum",
    role: "Senior Mobile App Developer (Lead)",
    icon: "/totum-icon.png",
    iconAlt: "Totum",
    description:
      "All-in-one health and fitness hub consolidating workout tracking, nutrition, community engagement, and a coach marketplace with automated biometric syncing.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Expo Router",
      "Stream Chat & Video",
      "Spike SDK",
      "Stripe",
      "NativeWind",
      "Reanimated",
    ],
    links: [
      { label: "App Store", url: "https://apps.apple.com/ng/app/totum/id6476566673" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.totum.coach&hl=en_US" },
    ],
    metrics: ["99% deployment frequency improvement via CI/CD"],
    overview:
      "Totum is a health and fitness platform combining workout tracking, nutrition logging, social features, video calling, and a coach marketplace. The app syncs biometric data from wearables including Apple Watch, Garmin, Oura, Whoop, and Fitbit. As co-lead of the mobile team, I co-architected the app using Expo Router, Zustand for client state, and TanStack Query for server state.",
    techDeepDive: [
      {
        title: "Biometric Data Aggregation",
        description:
          "Engineered a unified health data layer via Spike SDK aggregating Apple HealthKit, Google Health Connect, and six wearable brands — synchronizing steps, heart rate, sleep, and calorie metrics in the background while minimizing battery drain.",
      },
      {
        title: "Dual-State Architecture",
        description:
          "Architected a hybrid state management system leveraging Zustand with Immer for ephemeral client state and TanStack Query across 44 query keys for server state — eliminating stale UI and reducing redundant network calls through intelligent cache invalidation.",
      },
      {
        title: "Real-Time Communication",
        description:
          "Orchestrated 1:1 and group messaging with Stream Chat SDK and WebRTC video calling via Stream Video SDK — integrating VOIP push notifications, native CallKit call screens, and background call handling for uninterrupted coaching sessions.",
      },
      {
        title: "Payment & Commerce Engine",
        description:
          "Engineered a full marketplace with Stripe Payment Sheet integration supporting Apple Pay and Google Pay — handling subscription lifecycle, invoice reconciliation, and transaction history with idempotent payment flows.",
      },
      {
        title: "CI/CD Pipeline",
        description:
          "Configured EAS Build profiles across three environment-specific app variants and automated store submissions via EAS Submit — reducing deployment friction by 99% and enabling zero-touch OTA updates tied to app version.",
      },
    ],
  },
  {
    slug: "belachow",
    name: "Belachow",
    role: "Lead Mobile App Developer",
    icon: "/belarush.jpeg",
    iconAlt: "Belachow",
    description:
      "Three-app frontend strategy for a food delivery ecosystem — dedicated interfaces for Users, Riders, and Vendors with real-time server state synchronisation.",
    stack: ["React Native", "Expo", "TanStack Query", "Reanimated"],
    links: [
      { label: "User App (iOS)", url: "https://apps.apple.com/ng/app/belachow/id6741039377" },
      { label: "User App (Android)", url: "https://play.google.com/store/apps/details?id=com.belachow.user&hl=en_US" },
      { label: "Vendor (iOS)", url: "https://apps.apple.com/ng/app/bela-restaurant/id1668047783" },
      { label: "Vendor (Android)", url: "https://play.google.com/store/apps/details?id=com.belachow.vendor&hl=en_US" },
      { label: "Rider (iOS)", url: "https://apps.apple.com/ng/app/belachow-rider/id6740879166" },
      { label: "Rider (Android)", url: "https://play.google.com/store/apps/details?id=com.belarush.belarush_rider&hl=en_US" },
    ],
    metrics: ["30% performance improvement", "25% increase in user retention"],
    overview:
      "Belachow is a food delivery ecosystem comprising three distinct mobile applications for Users, Riders, and Vendors. I rebuilt the Vendor and Rider apps from scratch based on new product designs while maintaining the User app. The challenge was ensuring real-time synchronization across all three apps — when a user places an order, the vendor receives it instantly and a rider is dispatched for pickup and delivery, with live tracking visible to all parties.",
    techDeepDive: [
      {
        title: "Real-Time Order Synchronization",
        description:
          "Architected a WebSocket event system propagating order state transitions across three independent apps within 200ms — implementing optimistic UI with automatic rollback on disconnect to maintain responsiveness on unstable networks.",
      },
      {
        title: "Server State Optimization",
        description:
          "Migrated from Redux to TanStack Query with stale-while-revalidate caching strategies — reducing network overhead while ensuring menu data, rider locations, and vendor availability remain consistent across the ecosystem.",
      },
      {
        title: "Cross-App Codebase Strategy",
        description:
          "Extracted shared component libraries, API clients, and type definitions into a monorepo-style structure — reducing code duplication by 60% and enforcing behavioral consistency across User, Rider, and Vendor applications.",
      },
    ],
  },
  {
    slug: "sonder-business",
    name: "Sonder Business",
    role: "Mobile App Developer",
    icon: "/sonder.png",
    iconAlt: "Sonder Business",
    description:
      "B2B event management and content analytics platform for organizers to track event performance, manage content, and collaborate with teams.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Zustand",
      "TanStack Query",
      "Expo Router",
      "NativeWind",
      "React Hook Form",
      "Zod",
      "Sentry",
    ],
    links: [],
    metrics: [],
    overview:
      "Sonder Business is a B2B event management and content analytics platform built for event organizers and creators. The app lets businesses create and manage events, upload and track content performance, and collaborate with team members through role-based permissions. Built entirely with Expo and Supabase as the backend, it features interactive analytics dashboards, a persistent file upload queue, and OAuth authentication with Google and Apple.",
    techDeepDive: [
      {
        title: "Supabase Backend Integration",
        description:
          "Orchestrated a full backend integration leveraging Supabase Auth, database, storage, and real-time subscriptions — implementing Google and Apple OAuth with secure session persistence and automatic token refresh.",
      },
      {
        title: "Persistent Upload Queue",
        description:
          "Engineered a fault-tolerant file upload system via React Context and expo-file-system supporting pause, resume, cancel, and retry — persisting upload state across app restarts through AsyncStorage to prevent data loss on interruption.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Implemented a granular permission system with UI-level guards and server-side enforcement — ensuring data isolation between admin, creator, and manager roles across multi-tenant business accounts.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Built interactive data visualizations with configurable bar and pie charts tracking views, shares, and demographic breakdowns — supporting dynamic time-range filtering with efficient data aggregation queries.",
      },
    ],
  },
  {
    slug: "supplya",
    name: "Supplya",
    role: "Founding Mobile App Developer",
    icon: "/supplya.jpeg",
    iconAlt: "Supplya",
    description:
      "Centralised B2B e-commerce platform with modular architecture, scalable product management, and centralized API logic for rapid feature iteration.",
    stack: ["React Native", "Expo", "TypeScript", "Redux", "RTK Query"],
    links: [{ label: "Play Store", url: "https://play.google.com/store/apps?hl=en_US" }],
    metrics: ["15% speed improvement", "30% boost in user satisfaction"],
    overview:
      "Supplya is a B2B e-commerce marketplace connecting suppliers with retailers and businesses. As the founding mobile developer, I built the entire Android and iOS app from scratch, designing a modular architecture that could scale as the product evolved. The platform handles product catalog browsing, bulk ordering, inventory management, and real-time order tracking — all optimized for business users who need efficiency over consumer-grade engagement patterns.",
    techDeepDive: [
      {
        title: "Modular Feature Architecture",
        description:
          "Designed a domain-based architecture with strict separation between UI, business logic, and data layers — enabling parallel feature development without introducing regressions across catalog, orders, inventory, and payment modules.",
      },
      {
        title: "Resilient API Layer",
        description:
          "Engineered an RTK Query integration with automatic cache invalidation, pagination, and prefetching — implementing custom baseQuery with exponential backoff and an offline request queue to handle unreliable network conditions.",
      },
      {
        title: "Bulk Ordering System",
        description:
          "Architected a high-volume ordering flow with barcode scanning, CSV import, and saved order templates — optimizing catalog browsing through debounced server-side search and windowed FlatList rendering across thousands of SKUs.",
      },
      {
        title: "Performance Optimization",
        description:
          "Profiled and eliminated JS thread bottlenecks through memoization, native driver animations, and dynamic imports — reducing initial bundle size and improving app launch time by 15%.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
