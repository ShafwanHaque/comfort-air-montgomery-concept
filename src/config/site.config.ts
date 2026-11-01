export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "Comfort Air Inc.",
    shortName: "Comfort Air",
    logo: "/brand/company-logo.jpeg",
    logoLight: "/brand/company-logo.jpeg",
    region: "Montgomery · Central Alabama",

  },

  theme: {
    style: "clean",
    colors: {"brandPrimary": "#A91F32", "brandSecondary": "#E69D27", "brandAccent": "#317A94", "page": "#111C27", "surfaceDark": "#07131F", "surfaceDarkAlt": "#132538", "surfaceElevated": "#1C3449", "surfaceSoft": "#F4F7F8", "textPrimary": "#F7FAFC", "textSecondary": "#D8E1E7", "textMuted": "#95A5AF", "textOnBrand": "#FFFFFF", "borderSubtle": "#2B4150", "borderStrong": "#657B86", "glowPrimary": "#A91F32", "glowSecondary": "#E69D27", "networkLine": "#317A94", "success": "#70A982", "service1": "#A91F32", "service2": "#317A94", "service3": "#E69D27", "service4": "#F1A83B", "service5": "#6983BB"},

  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call 334-288-0990",
    ctaLabel: "Request service",
    mobileEyebrow: "MONTGOMERY · CENTRAL ALABAMA",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "MONTGOMERY · CENTRAL ALABAMA",
    line1: "Comfort Air",
    line2: "Local comfort.",
    detail: "Comfort Air Inc. provides residential and commercial heating and cooling service in Montgomery, including air conditioner and furnace repair, maintenance, installation, and Rheem equipment.",
    location: "Local heating and cooling in Montgomery",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "service-craft",
    eyebrow: "MONTGOMERY · CENTRAL ALABAMA · LOCAL HVAC",
    headlineLine1: "Comfort for home",
    headlineLine2: "and business.",
    description: "Air conditioner repair, furnace service, maintenance, and new system installation from a local Montgomery HVAC team.",
    primaryCta: "Request service",
    secondaryCta: "Call Comfort Air",
    locationLabel: "MONTGOMERY · CENTRAL ALABAMA",
    locationValue: "Montgomery · Central Alabama",
    edgeLabel: "MONTGOMERY · CENTRAL ALABAMA",
    bottomStatement: "AIR CONDITIONING · FURNACE · HVAC SERVICE",
    sillLabel: "Local heating and cooling in Montgomery",
    serviceLabels: ["AC repair", "Furnace repair", "Heat pumps"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {"primarySrc": "/hero/client-hero.jpg", "primaryAlt": "Wide Rheem heating and cooling campaign image with outdoor and indoor equipment shown on the Comfort Air website", "primaryPosition": "left center", "fit": "cover", "backdrop": "matte", "aspectRatio": "1920 / 550"},

  },

  seo: {
    title: "Comfort Air Inc. | HVAC Service in Montgomery",
    description: "Comfort Air Inc. provides residential and commercial heating and cooling service in Montgomery, including air conditioner and furnace repair, maintenance, installation, and Rheem equipment.",

  },

  contact: {
    phoneDisplay: "334-288-0990",
    phoneHref: "tel:+13342880990",
    email: "",
    address: "394 W Pleasant Grove Rd, Montgomery, AL 36105",
    contactUrl: "#contact",
    servicesUrl: "#services",

  },

  brandStandard: {
    eyebrow: "Local heating and cooling in Montgomery",
    titleLine1: "Comfort, handled locally.",
    titleLine2: "Service built around your home.",
    bodyTitle: "Local heating and cooling in Montgomery",
    body: "Comfort Air Inc. serves Montgomery homes and businesses with air conditioning and furnace repair, maintenance, and installation. The company services many equipment brands and installs Rheem systems.",
    callLabel: "Call now",
    availabilityLabel: "Montgomery · Central Alabama",
    panelEyebrow: "COMFORT AIR INC.",
    panelTitle: "Comfort Air Inc. serves Montgomery homes and businesses with air conditioning and furnace repair, maintenance, and installation. The company services many equipment brands and installs Rheem systems.",
    panelFooter: "Montgomery · Central Alabama",
    handoff: "Explore Comfort Air Inc. services.",
    items: [{"icon": "cooling", "label": "Air conditioning repair", "detail": "Diagnostics and repair for residential and commercial air conditioning."}, {"icon": "heating", "label": "Furnace repair", "detail": "Heating and furnace troubleshooting for homes and businesses."}, {"icon": "maintenance", "label": "Heat pumps", "detail": "Heat pump service for year-round heating and cooling."}],

  },

  services: {
    eyebrow: "COMFORT AIR INC. · SERVICES",
    introLine1: "Comfort,",
    introLine2: "done right.",
    summaryEyebrow: "MONTGOMERY · CENTRAL ALABAMA",
    summaryTitle: "Comfort Air Inc. serves Montgomery homes and businesses with air conditioning and furnace repair, maintenance, and installation. The company services many equipment brands and installs Rheem systems.",
    summaryBody: "Comfort Air Inc. serves Montgomery homes and businesses with air conditioning and furnace repair, maintenance, and installation. The company services many equipment brands and installs Rheem systems.",
    summaryCta: "Talk to the team",
    items: [{"name": "Air conditioning repair", "shortName": "AC repair", "image": "/services/01.svg", "description": "Diagnostics and repair for residential and commercial air conditioning."}, {"name": "Furnace repair", "shortName": "Furnace repair", "image": "/services/02.svg", "description": "Heating and furnace troubleshooting for homes and businesses."}, {"name": "Heat pumps", "shortName": "Heat pumps", "image": "/services/03.svg", "description": "Heat pump service for year-round heating and cooling."}, {"name": "System installation", "shortName": "Installation", "image": "/services/04.svg", "description": "New heating and cooling systems with in-home consultations."}, {"name": "Indoor air & thermostats", "shortName": "Indoor comfort", "image": "/services/05.svg", "description": "Indoor air quality options and digital thermostat support."}],

  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort close",
    titleLine2: "to home.",
    description: "Montgomery · Central Alabama",
    featuredLocation: "Montgomery, AL",
    locationDetail: "Serving Montgomery · Central Alabama.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Montgomery · Central Alabama",
    metrics: [{"value": "5 communities", "label": "Coverage shown"}, {"value": "Residential · commercial HVAC", "label": "Service commitment"}, {"value": "Local team", "label": "Montgomery · Central Alabama"}],
    locations: [{"name": "Montgomery, AL", "kind": "city", "lat": 32.3668, "lng": -86.3, "hub": true}, {"name": "Pike Road, AL", "kind": "city", "lat": 32.2846, "lng": -86.103, "hub": false}, {"name": "Prattville, AL", "kind": "city", "lat": 32.464, "lng": -86.4597, "hub": false}, {"name": "Wetumpka, AL", "kind": "city", "lat": 32.5437, "lng": -86.2119, "hub": false}, {"name": "Tuskegee, AL", "kind": "city", "lat": 32.424, "lng": -85.6916, "hub": false}],

  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact Comfort Air Inc. about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call Comfort Air",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call 334-288-0990 to contact Comfort Air Inc..",

  }
};
