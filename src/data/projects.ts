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
    icon: "/totum.jpeg",
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
        title: "Wearable Health Data Integration",
        description:
          "Integrated Spike SDK to aggregate steps, heart rate, sleep, and calorie data from Apple HealthKit, Google Health Connect, and six major wearable brands. Background delivery keeps the dashboard's caloric rings and performance metrics in sync without draining battery.",
      },
      {
        title: "State Management",
        description:
          "Split between Zustand with Immer for client state (auth, modals, navigation) and TanStack Query for server state with automatic caching and invalidation across 44 query keys. Axios client with interceptors handles token refresh and offline detection.",
      },
      {
        title: "Real-Time Chat & Video",
        description:
          "Built 1:1 and group messaging with Stream Chat, plus WebRTC video calling via Stream Video SDK with VOIP push notifications, native CallKit screens on iOS, and background call handling on Android.",
      },
      {
        title: "Navigation & Deep Linking",
        description:
          "File-based routing with Expo Router across nested bottom tabs, top tabs, and push stacks. Auth guards via protected route groups, custom transitions, and deep linking with the `totum://` scheme and associated domains.",
      },
      {
        title: "E-Commerce & Payments",
        description:
          "Marketplace with product categories, coach storefronts, bundles, and cart. Stripe handles in-app purchases and subscriptions with Apple Pay and Google Pay support.",
      },
      {
        title: "CI/CD Pipeline",
        description:
          "EAS Build profiles for development, preview, and production with environment-specific app variants. OTA updates and automated store submissions via EAS Submit, achieving a 99% improvement in deployment frequency.",
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
          "Architected a WebSocket-based event system that keeps all three apps in sync. Order state transitions (placed → accepted → preparing → picked up → delivered) propagate across User, Vendor, and Rider apps within 200ms. Implemented optimistic UI updates with rollback on WebSocket disconnect, ensuring the UI stays responsive even on unstable networks.",
      },
      {
        title: "TanStack Query Server State Layer",
        description:
          "Replaced Redux-based API logic with TanStack Query for intelligent caching, automatic background refetching, and optimistic mutations. Configured stale-while-revalidate strategies for menu data, rider locations, and vendor availability. Custom query invalidation patterns ensure data consistency across the three apps without excessive network requests.",
      },
      {
        title: "Live Location Tracking",
        description:
          "Built a rider tracking system using background location updates with configurable accuracy modes. Implemented geofencing for order pickup/dropoff zones and used MapKit/Google Maps SDK for route visualization. Optimized location polling to balance accuracy with battery consumption using native location services with smart interval adjustments.",
      },
      {
        title: "Three-App Codebase Strategy",
        description:
          "Maintained shared component libraries and business logic across all three apps using internal packages. Extracted common types, API clients, and UI primitives into a monorepo-style structure within the Expo workspace. This reduced code duplication by approximately 60% and ensured consistent behavior across the ecosystem.",
      },
    ],
  },
  {
    slug: "sonder-business",
    name: "Sonder Business",
    role: "Mobile App Developer",
    icon: "/supplya.jpeg",
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
          "Used Supabase for authentication, database, storage, and real-time subscriptions. Google Sign-In and Apple Authentication handle OAuth with session persistence. Axios complements Supabase for file uploads to storage with progress tracking.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "Built interactive dashboards with bar charts and pie charts showing views, shares, likes, demographic breakdowns by age and gender, and highest-ranking content. Charts support filtering by day, week, and month with real-time data refresh.",
      },
      {
        title: "File Upload Queue",
        description:
          "Developed a persistent upload queue using React Context and expo-file-system that supports pause, resume, cancel, and retry. Upload state persists across app restarts via AsyncStorage, allowing users to close the app and resume uploads later.",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Implemented granular permissions system with format `resource.action` (e.g., `events.create`, `analytics.view_dashboard`). Permission guards conditionally render UI components, and the API layer enforces server-side access checks.",
      },
      {
        title: "Event & Content Management",
        description:
          "Full CRUD for events with access code gating, media upload with thumbnail generation, and category-based organization. Events are grouped by year with dual-column layouts and detailed content analytics per event.",
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
        title: "Modular Architecture",
        description:
          "Designed a feature-based architecture with clear separation between UI, business logic, and data layers. Each domain (catalog, orders, inventory, payments) lives in its own module with explicit APIs, enabling independent development and testing. This structure allowed rapid iteration on new features without introducing regressions in stable areas.",
      },
      {
        title: "RTK Query API Layer",
        description:
          "Built a comprehensive API integration layer using RTK Query with automatic cache invalidation, pagination support, and prefetching for product catalogs. Implemented custom baseQuery with retry logic, exponential backoff, and offline queue for unreliable network conditions common in the target market. Tag-based cache invalidation ensures product availability and pricing stay fresh without over-fetching.",
      },
      {
        title: "Bulk Ordering System",
        description:
          "Designed a specialized ordering flow for B2B users who frequently reorder large quantities. Built a quick-order form with barcode scanning, CSV import for bulk uploads, and saved order templates. Implemented debounced search with server-side filtering across thousands of SKUs, using FlatList with windowed rendering for smooth scrolling through large catalogs.",
      },
      {
        title: "Performance Optimization",
        description:
          "Profiled and eliminated JS thread bottlenecks across the app. Migrated heavy computations (price calculations, tax logic) to Web Workers where possible. Implemented image optimization with progressive loading, lazy-loaded below-the-fold content, and reduced initial bundle size through tree-shaking and dynamic imports for rarely-used features.",
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
