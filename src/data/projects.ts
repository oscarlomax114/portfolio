export interface ProjectSection {
  heading: string;
  body: string;
  images?: string[]; // Replace with actual image paths
  imageAspectRatio?: string; // e.g. "1/1", "4/3" — defaults to "16/10"
  subsection?: boolean; // visually nested under the previous section (no number)
  imageColumns?: number; // force N columns for images on desktop (e.g. 3)
  imageGrid?: string; // custom grid-template-columns value (e.g. "1fr 1fr 0.5fr")
  imageScale?: number; // e.g. 1.3 — scales image up within its frame to crop whitespace
  imagePosition?: string; // e.g. "center 45%" — CSS object-position for centering
  imageContain?: boolean[]; // parallel to images — true = object-fit contain (show full image)
  imageFillHeight?: boolean[]; // parallel to images — true = stretch to row height, auto width
  animated?: boolean[]; // parallel to images — true = use <img> for animated webp/gif
  link?: { label: string; url: string }; // optional link next to heading
}

export interface Project {
  title: string;
  slug: string;
  category: string;
  categories: string[];
  featured: boolean;
  description: string;
  longDescription: string;
  tags: string[];
  role: string;
  tools: string[];
  year: string;
  type: string;
  heroImage: string; // Replace with actual image path
  heroAspectRatio?: string; // aspect ratio for hero on detail page — defaults to "16/9"
  heroScale?: number; // zoom the hero image in cards/previews
  heroPosition?: string; // CSS object-position for hero image
  galleryImages: string[]; // Replace with actual image paths
  galleryAnimated?: boolean[]; // parallel to galleryImages — true for animated webp/gif
  sections: ProjectSection[];
  links: { label: string; url: string }[];
  relatedProjects: string[]; // slugs
}

export const projects: Project[] = [
  // ─── FEATURED / SYSTEMS ───────────────────────────────────────────
  {
    title: "Tinkorporated / Dosage",
    slug: "tinkorporated-dosage",
    category: "Featured",
    categories: ["Featured", "Systems", "Product & Brand"],
    featured: true,
    description:
      "A controlled art-commerce system spanning product, packaging, distribution, and platform — built to operate at the intersection of creative expression and commercial structure.",
    longDescription:
      "Tinkorporated is a conceptual brand system exploring the relationship between art and commerce through product design, packaging logic, and controlled distribution. Dosage is its primary product line.",
    tags: [
      "Brand System",
      "Product Design",
      "Ecommerce",
      "Packaging",
      "Art Direction",
      "Web",
    ],
    role: "Founder / Designer / Developer",
    tools: [
      "Illustrator",
      "Photoshop",
      "Next.js",
      "Stripe",
      "Netlify",
      "Blender",
    ],
    year: "2024–Present",
    type: "Brand System / Ecommerce",
    heroImage: "/images/projects/tinkorporated/tink-new-hero.png",
    galleryImages: [
      "/images/projects/tinkorporated/tink-hero.png",
      "/images/projects/tinkorporated/dosage-fig-1.png",
      "/images/projects/tinkorporated/dosage-fig-2.png",
      "/images/projects/tinkorporated/dosage-fig-3.png",
      "/images/projects/tinkorporated/dosage-label-v2.png",
      "/images/projects/tinkorporated/dosage-bottle-1.webp",
      "/images/projects/tinkorporated/dosage-bag.png",
      "/images/projects/tinkorporated/rappacks-label.png",
      "/images/projects/tinkorporated/dosage-logo.png",
      "/images/projects/tinkorporated/tink-1.png",
      "/images/projects/tinkorporated/tink-2.png",
      "/images/projects/tinkorporated/tink-3.png",
      "/images/projects/tinkorporated/tink-4.png",
    ],
    sections: [
      // 1. OVERVIEW
      {
        heading: "Overview",
        body: "Tinkorporated is a brand system that explores the relationship between art and commerce through product, packaging, and experience. Each release starts from a single observation and is built into a product that fits into a larger system. The result is an evolving body of work tied together by a consistent pharmacore framework.",
      },
      // 2. CORE THESIS
      {
        heading: "Core Thesis",
        body: "Tinkorporated's emphasis on the relationship between art and commerce starts in its naming convention. \"Tink\" refers to the sound a shimmer makes, the glitter of gold or the feeling seeing a loved one smile — a symbol of beauty and perfect form. \"Incorporated\" refers to industry, capitalism, the things that keep the lights on and food on the table, but maybe aren't as polished or glamorous. One side is the moments, the things that actually matter to you, while the other is the machine that makes those things possible. Even art has a budget and a deadline. This dichotomy can be paralleled to other dualities in life and Tinkorporated focuses to explore this tension.",
        images: ["/images/projects/tinkorporated/tink-hero.png"],
        imageAspectRatio: "16/9",
        imageScale: 1.3,
      },
      // 3. SYSTEM ARCHITECTURE
      {
        heading: "System Architecture",
        body: "Tinkorporated operates as a parent system. Sub-brands sit beneath it — Dosage and Rappacks are primary examples. Each sub-brand tries to adhere to a similar set of rules so they all operate within the same underlying logic.\n\nProducts are structured as compounds. Each item is assigned a compound identifier, and each instance is framed as a dose. This creates a consistent naming and packaging system across everything, regardless of the specific product.\n\nVisually and conceptually, each sub-brand maintains its own identity, but all exist within the same pharmacore framework — prescription-style labeling, standardized formats, and a shared tone. The goal is for everything to feel distinct, but still clearly part of the same world.\n\nThis mirrors how conglomerates operate: multiple brands, different products, but all owned and structured under a single parent. Tinkorporated functions the same way — not as a brand with extensions, but as a system that new ideas plug into.",
      },
      // 4. VISUAL LANGUAGE: PHARMACORE
      {
        heading: "Visual Language: Pharmacore",
        body: "Pharmacore is a visual system built from pharmaceutical and clinical references, applied outside of their original context.\n\nIt pulls from prescription labels, medical packaging, and institutional design — standardized clinical typography, a heavy black and white foundation, and controlled use of accent colors drawn from the space (pill bottle orange, scrub blues and purples). Information is presented through dense blocks, grid-based layouts, and clear hierarchy.\n\nSupporting elements come from the same environment — warning icons, dosage markers, regulatory symbols — used to reinforce the system rather than decorate it. Everything is treated as part of a consistent way to label and present work.\n\nThe direction comes from observing how other \"workwear\" aesthetics have moved into culture — construction, outdoor, utility — and extending that idea into a space that hasn't been explored in the same way: pharmacy and clinical environments.\n\nIt functions as an evolving framework. The labeling system, compound structure, and packaging formats are the most direct expressions of it, with the intent to expand into other areas — color systems, materials, and product categories — while maintaining the same underlying logic.",
        images: ["/images/projects/tinkorporated/rappacks-label.png"],
        imageAspectRatio: "4/1",
        imageContain: [true],
      },
      // 5. PRODUCT IMPLEMENTATION: DOSAGE
      {
        heading: "Product Implementation: Dosage",
        body: "Dosage is a product line within the Tinkorporated system focused on collectible figures.\n\nIt came from a gap — there aren't many desk collectibles centered on Black characters from popular culture. Dosage was built as a response to that.\n\nThe first run consists of 10 figures based on recognizable characters drawn from that space. The models were generated using AI tools and then produced as physical objects through 3D printing.\n\nWithin the system, each figure is treated as a compound. That structure carries through naming, labeling, and packaging.\n\nInstead of using standard collectible formats like blister packs or boxed figures, the pieces are housed in prescription-style pill bottles. This ties directly into the Pharmacore direction while also creating something more visually distinct — the bright orange containers function as both packaging and a key part of the identity.",
        images: ["/images/projects/tinkorporated/dosage-logo.png"],
        imageAspectRatio: "2/1",
        imageContain: [true],
      },
      {
        heading: "Dosage Figures",
        subsection: true,
        images: [
          "/images/projects/tinkorporated/dosage-fig-1.png",
          "/images/projects/tinkorporated/dosage-fig-2.png",
          "/images/projects/tinkorporated/dosage-fig-3.png",
        ],
        imageAspectRatio: "3/4",
        imageColumns: 3,
      },
      // 6. PACKAGING SYSTEM
      {
        heading: "Packaging System",
        body: "The packaging is built around a bottle format with structured label fields: compound number, batch identifier, dosage instructions, and quantity. Variant indicators differentiate release types without breaking the label hierarchy. A QR code replaces the traditional barcode — functional for tracking while maintaining the clinical format. The system is designed for clarity and repeatability across any SKU.",
        images: ["/images/projects/tinkorporated/dosage-label-v2.png", "/images/projects/tinkorporated/dosage-bottle-1.webp", "/images/projects/tinkorporated/dosage-bag.png"],
        imageAspectRatio: "1/1",
        imageColumns: 3,
        imageContain: [true, false, true],
      },
      // 7. PLATFORM
      {
        heading: "Platform: Distribution Interface",
        link: { label: "Live Site", url: "https://tinkorporated.com/" },
        body: "The website is not a storefront — it's a system interface. Lab Access gates entry. Patient Profile manages the account layer. Prescription handles checkout. Bulletin controls communication. Every interaction is framed through the system's language rather than standard e-commerce conventions. Built on Next.js with Stripe, deployed via Netlify.",
        images: [
          "/images/projects/tinkorporated/tink-1.png",
          "/images/projects/tinkorporated/tink-2.png",
          "/images/projects/tinkorporated/tink-3.png",
          "/images/projects/tinkorporated/tink-4.png",
        ],
        imageAspectRatio: "16/9",
      },
      // 8. OUTCOMES
      {
        heading: "Outcomes",
        body: "Complete brand, product, and platform system. Functional e-commerce pipeline from product page to fulfillment. Scalable structure that supports new sub-brands and SKUs without identity rework. Defined visual and conceptual language that holds across physical product, packaging, and digital interface.",
      },
      // 10. NEXT STEPS
      {
        heading: "Next Steps",
        body: "Expand sub-brands beyond Dosage. Increase product variation within existing compound structure. Refine production pipeline for faster turnaround. Develop campaign assets tied to specific release moments.",
      },
    ],
    links: [
      { label: "Live Site", url: "https://tinkorporated.com" },
    ],
    relatedProjects: ["rap-label-gm", "illustrator-setup-automation"],
  },
  {
    title: "RapLabelGM",
    slug: "rap-label-gm",
    category: "Featured",
    categories: ["Featured", "Systems", "Web / Interface"],
    featured: true,
    description:
      "A hip-hop label management simulation app focused on systems design, artist progression, data-heavy UI, game mechanics, and long-term strategic decision-making.",
    longDescription:
      "RapLabelGM puts users in the role of a hip-hop label executive. The simulation tracks artist careers, market conditions, release strategies, and financial performance through interconnected data systems and a dense, functional UI.",
    tags: [
      "React",
      "Simulation",
      "Game Systems",
      "UI Design",
      "Data Modeling",
      "Product Design",
    ],
    role: "Designer / Developer",
    tools: ["Next.js", "TypeScript", "Tailwind", "Zustand", "SQLite"],
    year: "2024–Present",
    type: "Simulation / Web App",
    heroImage: "/images/projects/rap-label-gm/rlgm-dashboard.png",
    galleryImages: [
      "/images/projects/rap-label-gm/rlgm-dashboard.png",
      "/images/projects/rap-label-gm/rlgm-scouting.png",
      "/images/projects/rap-label-gm/rlgm-studio.png",
      "/images/projects/rap-label-gm/rlgm-charts.png",
      "/images/projects/rap-label-gm/rlgm-finance.png",
      "/images/projects/rap-label-gm/rlgm-dashboard-mobile.jpg",
      "/images/projects/rap-label-gm/rlgm-studio-mobile.jpg",
      "/images/projects/rap-label-gm/rlgm-artist-card-mobile.jpg",
    ],
    sections: [
      {
        heading: "Overview",
        body: "RapLabelGM is a simulation app where users manage a hip-hop label through interconnected systems including artist development, music production, release strategy, and financial management. The project focuses on designing data-heavy systems that feel strategic and grounded in real-world music industry dynamics without requiring expert knowledge.",
      },
      {
        heading: "Design Goal",
        body: "The goal was to create a music industry simulation that feels as close to real-world label management as possible, while still being accessible to someone who is simply a fan of music. The experience is inspired by sports management games, where users can make high-level strategic decisions — signing talent, developing artists, planning releases, and managing finances — without needing deep industry expertise. The challenge was balancing multiple interconnected systems so that decisions feel meaningful and realistic without becoming overly complex or difficult to understand.",
      },
      {
        heading: "Simulation Systems",
        body: "",
      },
      {
        heading: "Artist Development & Roster Strategy",
        subsection: true,
        body: "Players build a roster of artists with varying attributes including skill, consistency, work ethic, and market appeal. Signing decisions depend on label reputation, and long-term contracts require strategic investment. Artist growth is not guaranteed, forcing players to balance risk across their roster.",
        images: ["/images/projects/rap-label-gm/rlgm-scouting.png"],
        imageAspectRatio: "16/9",
      },
      {
        heading: "Music Production & Output Strategy",
        subsection: true,
        body: "Music is created by pairing artists with producers, with outcomes influenced by both attributes and player decisions. Players can prioritize volume or quality, introducing a tradeoff between consistency and potential success. This system creates variability in results, making each release uncertain.",
        images: ["/images/projects/rap-label-gm/rlgm-studio.png"],
        imageAspectRatio: "16/9",
      },
      {
        heading: "Release, Performance & Growth Loop",
        subsection: true,
        body: "Releases are scheduled and evaluated based on performance across charts and audience reception. Successful releases generate revenue, reputation, and progression, feeding back into artist growth and label expansion. Timing and consistency play a critical role in long-term success.",
        images: ["/images/projects/rap-label-gm/rlgm-charts.png"],
        imageAspectRatio: "16/9",
      },
      {
        heading: "Economy, Expansion & Competition",
        subsection: true,
        body: "The label operates within a financial system that tracks revenue, expenses, and investments. Income can be generated through multiple channels, including music performance and touring. Competing labels introduce external pressure, requiring players to adapt strategy in response to market dynamics.",
        images: ["/images/projects/rap-label-gm/rlgm-finance.png"],
        imageAspectRatio: "16/9",
      },
      {
        heading: "Visual & Interface Design",
        body: "The experience is supported by custom character sprites and a structured interface system designed to present complex data clearly. Tables, dashboards, and simplified layouts allow players to manage multiple systems without being overwhelmed. The interface is optimized for both desktop and mobile, adapting layouts and controls to work across screen sizes.",
        images: [
          "/images/projects/rap-label-gm/rlgm-dashboard-mobile.jpg",
          "/images/projects/rap-label-gm/rlgm-studio-mobile.jpg",
          "/images/projects/rap-label-gm/rlgm-artist-card-mobile.jpg",
        ],
        imageAspectRatio: "9/16",
        imageColumns: 3,
        imageContain: [true, true, true],
      },
    ],
    links: [
      { label: "Live Demo", url: "https://rap-label-gm.netlify.app/" },
    ],
    relatedProjects: ["tinkorporated-dosage", "moviebase-api-clients"],
  },

  // ─── EXPERIMENTAL ─────────────────────────────────────────────────
  {
    title: "Illustrator Setup Automation",
    slug: "illustrator-setup-automation",
    category: "Experimental",
    categories: ["Experimental"],
    featured: false,
    description:
      "A set of Illustrator scripts written with AI to automate production file setup and routing, reducing a repetitive manual process to a one-click action.",
    longDescription:
      "Illustrator scripts that automate file setup, factory-specific formatting, and production routing across apparel, stickers, hats, and general items. Built with AI assistance to eliminate manual prep and reduce setup errors.",
    tags: [
      "Automation",
      "Illustrator",
      "Scripting",
      "AI-Assisted",
      "Production",
    ],
    role: "Workflow Developer",
    tools: ["Illustrator", "JavaScript", "AI Tools"],
    year: "2024",
    type: "Production Automation",
    heroImage: "/images/projects/illustrator-automation/spt-cap-1.png",
    galleryImages: [
      "/images/projects/illustrator-automation/spt-cap-1.png",
      "/images/projects/illustrator-automation/spt-cap-2.png",
      "/images/projects/illustrator-automation/spt-apparel-1.png",
      "/images/projects/illustrator-automation/spt-apparel-2.png",
      "/images/projects/illustrator-automation/spt-sticker-1.png",
      "/images/projects/illustrator-automation/spt-sticker-2.png",
      "/images/projects/illustrator-automation/spt-gen-1.png",
      "/images/projects/illustrator-automation/spt-gen-2.png",
    ],
    sections: [
      {
        heading: "Overview",
        body: "A set of Illustrator scripts written with AI to automate production file setup and routing. The goal was to take a repetitive manual process and reduce it to a one-click action, while ensuring every file met factory-specific requirements.",
      },
      {
        heading: "What It Does",
        body: "The scripts handle setup and routing across four categories: Apparel — built on required templates with defined color callouts, routed to a specific factory. Stickers — includes die cut / kiss cut setup, rasterized output, routed to a dedicated factory. Hats — supports multiple artwork pieces, isolates them across artboards, routed to its factory. General items — isolates a single piece of artwork (keychains, ornaments, etc.) and routes based on item type. For the first three, the destination is fixed. For general items, the script determines the correct factory and sends files to the appropriate location (SharePoint or SFTP).",
        images: [
          "/images/projects/illustrator-automation/spt-cap-1.png",
          "/images/projects/illustrator-automation/spt-cap-2.png",
          "/images/projects/illustrator-automation/spt-apparel-1.png",
          "/images/projects/illustrator-automation/spt-apparel-2.png",
          "/images/projects/illustrator-automation/spt-sticker-1.png",
          "/images/projects/illustrator-automation/spt-sticker-2.png",
          "/images/projects/illustrator-automation/spt-gen-1.png",
          "/images/projects/illustrator-automation/spt-gen-2.png",
        ],
      },
      {
        heading: "System Behavior",
        body: "Each script standardizes the file and applies setup requirements such as layer structure, template placement, color callouts, rasterization, die/kiss cut paths, and multi-artboard separation. The output is then placed directly into the correct production pipeline. This removes manual prep, manual routing, and reduces setup errors.",
      },
      {
        heading: "Impact",
        body: "Time per setup: 3–7 minutes → ~1 click\nWeekly volume: 10 artists × 15 setups = 150 setups/week\nWeekly time saved: 7.5–17.5 hours\nAnnual time saved: ~390 to 910 hours\nLabor savings at $30/hr: ~$11,700 to ~$27,300/year",
      },
      {
        heading: "Extension (Not Implemented)",
        body: "The scripts handled file prep and delivery, but not downstream system updates. Integration with Business Central would have allowed automatic updates across internal systems, extending the same time savings further.",
      },
    ],
    links: [],
    relatedProjects: ["tinkorporated-dosage"],
  },

  // ─── PRODUCT & BRAND ──────────────────────────────────────────────
  {
    title: "Venus Fly Trap Grabber",
    slug: "venus-fly-trap-grabber",
    category: "Product & Brand",
    categories: ["Product & Brand"],
    featured: false,
    description:
      "A custom grabber head and packaging system for a botanical garden retail product, featuring a Venus flytrap-inspired character design and branded die-cut box.",
    longDescription:
      "The project adapts a standard grabber mechanism by introducing a character-driven Venus flytrap head inspired by Audrey II, supported by color direction and retail packaging designed for gift shop environments.",
    tags: ["Product Design", "Illustration", "Packaging", "Concept Design"],
    role: "Designer / Illustrator",
    tools: ["Illustrator", "Photoshop"],
    year: "2023",
    type: "Product Concept",
    heroImage: "/images/projects/venus-fly-trap/venus-1.avif",
    heroScale: 1.3,
    galleryImages: [
      "/images/projects/venus-fly-trap/venus-1.avif",
      "/images/projects/venus-fly-trap/venus-2.webp",
      "/images/projects/venus-fly-trap/venus-3.webp",
      "/images/projects/venus-fly-trap/venus-5.png",
      "/images/projects/venus-fly-trap/venus-6.png",
    ],
    sections: [
      {
        heading: "Overview",
        body: "A custom-designed grabber head and packaging system developed for a botanical garden retail product. The project adapts a standard grabber by introducing a Venus flytrap-inspired character head, supported by packaging and color design for a gift shop environment.",
      },
      {
        heading: "Concept",
        body: "The design draws inspiration from the exaggerated, character-driven look of Audrey II from Little Shop of Horrors. The goal was to create a playful yet exaggerated Venus flytrap that would stand out in a retail setting. The design focuses on bold shapes, expressive teeth, and strong color contrast to give the product a clear and recognizable identity.",
        // TODO: insert reference images (Little Shop of Horrors / Audrey II)
      },
      {
        heading: "Scope of Work",
        body: "- Designed custom Venus flytrap head for existing grabber mechanism\n- Developed color direction for product\n- Designed retail packaging and graphics\n- Delivered factory-ready production files",
        images: ["/images/projects/venus-fly-trap/venus-3.webp"],
        imageScale: 1.2,
      },
      {
        heading: "Packaging",
        body: "The packaging is a die-cut box designed to wrap the grabber product. The flat layout features illustrated Venus Fly Trap vines and jaws covering the full surface, with 'Venus Fly Trap Grabber' branding in a bold serif treatment. Production details include a UPC barcode, ASTM compliance label, and choking hazard warning — all positioned within the layout to meet retail packaging standards while maintaining visual impact on shelf.",
        images: ["/images/projects/venus-fly-trap/venus-2.webp"],
        imageScale: 1.6,
        imagePosition: "center 42%",
      },
      {
        heading: "Final Renders",
        body: "The finished product render shows the grabber with its sculpted Venus Fly Trap head, detailed paint application, and branded box sleeve. A retail context render places the product on a botanical garden gift shop shelf alongside plants and garden accessories, demonstrating how it sits in its intended retail environment.",
        images: [
          "/images/projects/venus-fly-trap/venus-5.png",
          "/images/projects/venus-fly-trap/venus-6.png",
        ],
      },
    ],
    links: [],
    relatedProjects: ["rap-packs", "collegiate-collection"],
  },
  {
    title: '"Delusional" Cover Art',
    slug: "delusional-cover-art",
    category: "Product & Brand",
    categories: ["Product & Brand"],
    featured: false,
    description:
      "Cover art for Maryland-based artist PrincX, built around the contrast between self-confidence, vulnerability, and theatrical self-mythology.",
    longDescription:
      "The workflow included creative direction and digital painting in Photoshop, rendered in a pseudo-crayon style that channels childhood self-perception — seeing yourself as something grand before the world tells you otherwise. The result is a cover that feels both grandiose and tender.",
    tags: ["Cover Art", "Digital Painting", "Art Direction", "Photoshop"],
    role: "Art Director / Digital Painter",
    tools: ["Photoshop", "Camera"],
    year: "2023",
    type: "Cover Art / Art Direction",
    heroImage: "/images/projects/delusional/delusional-1.avif",
    galleryImages: [
      "/images/projects/delusional/delusional-1.avif",
      "/images/projects/delusional/delusional-2.webp",
      "/images/projects/delusional/delusional-3.avif",
      "/images/projects/delusional/deli-1.jpg",
      "/images/projects/delusional/deli-2.jpg",
      "/images/projects/delusional/deli-3.PNG",
    ],
    sections: [
      {
        heading: "Overview",
        body: "Cover art for PrincX's 'Delusional' project. The visual concept explores the gap between self-confidence and vulnerability — the theatrical self-mythology that artists construct as both armor and identity.",
      },
      {
        heading: "Concept",
        body: "The creative direction centers on the idea of childlike grandiosity — the way kids draw themselves as superheroes, kings, larger than life. The pseudo-crayon rendering style is deliberate: it evokes that early, unfiltered self-image where delusion and ambition are the same thing. The artwork sits in the tension between that wide-eyed self-belief and the weight of actually becoming something. It's theatrical, but rooted in something sincere.",
      },
      {
        heading: "Reference Photography",
        body: "The original reference photograph captures the artist's raw expression and physicality — a direct, unfiltered starting point before any creative transformation. The shot prioritized authentic emotion over posed perfection.",
        images: ["/images/projects/delusional/deli-3.PNG"],
        imageAspectRatio: "1/1",
      },
      {
        heading: "Digital Painting Process",
        body: "The Photoshop workflow built layers of paint, texture, and crayon-like strokes over the photographic base. Each pass pushed the image further from photorealism and closer to something hand-drawn and raw — reinforcing the childhood self-portrait quality at the heart of the concept.",
        images: [
          "/images/projects/delusional/deli-2.jpg",
          "/images/projects/delusional/deli-1.jpg",
        ],
        imageAspectRatio: "1/1",
      },
      {
        heading: "Final Artwork",
        body: "The final cover balances recognizability with artistic transformation. The artist is present but filtered through layers of stylized, crayon-textured interpretation — mirroring the project's thematic tension between who you are and who you see yourself becoming.",
        images: ["/images/projects/delusional/delusional-2.webp"],
      },
    ],
    links: [],
    relatedProjects: ["motion-direction"],
  },
  {
    title: "Rap Packs — Hip-Hop Trading Cards",
    slug: "rap-packs",
    category: "Product & Brand",
    categories: ["Product & Brand", "Experimental"],
    featured: false,
    description:
      "A series of hip-hop trading card concepts designed to capture the visual identity, tone, and cultural context of individual artists and albums.",
    longDescription:
      "Each card functions as a stylized artifact — translating music, imagery, and persona into a collectible format. Rather than enforcing a rigid template, each card adapts its visual style to the artist it represents.",
    tags: [
      "Trading Cards",
      "Illustration",
      "Collectibles",
      "Culture",
      "Art Direction",
    ],
    role: "Designer / Illustrator",
    tools: ["Illustrator", "Photoshop"],
    year: "2023",
    type: "Collectible Concept Series",
    heroImage: "/images/projects/rap-packs/rp-7.avif",
    galleryImages: [
      "/images/projects/rap-packs/RP-1.avif",
      "/images/projects/rap-packs/rp-2.webp",
      "/images/projects/rap-packs/rp-3.webp",
      "/images/projects/rap-packs/rp-4.webp",
      "/images/projects/rap-packs/rp-5.webp",
      "/images/projects/rap-packs/rp-6.webp",
      "/images/projects/rap-packs/rp-7.avif",
      "/images/projects/rap-packs/rp-8.png",
      "/images/projects/rap-packs/RAPPACKS_LABEL.png",
    ],
    galleryAnimated: [false, true, false, true, false, true, false, false, false],
    sections: [
      {
        heading: "Overview",
        body: "A series of hip-hop trading card concepts designed to capture the visual identity, tone, and cultural context of individual artists and albums. Each card functions as a stylized artifact — translating music, imagery, and persona into a collectible format.",
      },
      {
        heading: "Concept",
        body: "Rap Packs explores the idea of translating music culture into collectible visual artifacts. Inspired by trading cards, album artwork, and hip-hop iconography, each piece is built around a specific artist and project — using composition, typography, and illustration to reinterpret the identity of an album or era.\n\nRather than applying a fixed template, each card adapts its visual style to reflect the artist it represents. The result is a series that maintains a consistent conceptual foundation while allowing for variation in aesthetic direction, reference material, and visual storytelling.",
      },
      {
        heading: 'Travis Scott — "Days Before Rodeo"',
        body: "This card reinterprets Days Before Rodeo through the lens of a vintage Western comic book. The composition pulls from 1970s comic styling while integrating elements from the album's visual world. Travis is depicted in a cowboy-inspired outfit, referencing both Western imagery and pop culture archetypes, while background elements subtly incorporate figures like Quavo and Young Thug. The moon from the original album artwork is also carried through, anchoring the piece back to its source material. The goal was to merge Houston grit with stylized, nostalgic storytelling.",
        images: [
          "/images/projects/rap-packs/RP-1.avif",
          "/images/projects/rap-packs/rp-2.webp",
        ],
        imageAspectRatio: "5/7",
        animated: [false, true],
      },
      {
        heading: 'Latto — "Sugar Honey Iced Tea"',
        body: "This card builds on Latto's Sugar Honey Iced Tea by translating the project into a beverage-inspired visual identity. Drawing from Arizona iced tea packaging, the design uses peach-themed graphics as a nod to her Atlanta roots, while incorporating typography and layout cues from commercial drink branding. The result blends product design language with album identity, turning the concept into a stylized, collectible format.",
        images: [
          "/images/projects/rap-packs/rp-3.webp",
          "/images/projects/rap-packs/rp-4.webp",
        ],
        imageAspectRatio: "5/7",
        animated: [false, true],
      },
      {
        heading: '42 Dugg — "Forever Us, Never Them"',
        body: "This card is inspired by the album Forever Us, Never Them and reimagines its identity through a retro video game aesthetic. The design references the classic Dig Dug Atari cover, playing off the phonetic similarity between 'Dugg' and 'Dig Dug.' The composition is reworked with hip-hop elements, including jewelry references like a bust-down Rolex and symbolic imagery tied to the artist's persona. The result blends nostalgic gaming visuals with contemporary rap culture.",
        images: [
          "/images/projects/rap-packs/rp-5.webp",
          "/images/projects/rap-packs/rp-6.webp",
        ],
        imageAspectRatio: "5/7",
        animated: [false, true],
      },
      {
        heading: "Process",
        body: "Each card is developed through a combination of digital painting and compositing using Photoshop and Illustrator. The approach blends illustration, typography, and collage techniques to reinterpret each album's visual identity rather than replicate it directly.",
      },
      {
        heading: "Physical Presentation",
        body: "The series extends beyond flat artwork into a collectible format through packaging and presentation. Each card is paired with a custom Rap Packs label, designed as part of the broader Tinkorporated system. While Rap Packs maintains its own identity, the packaging ties back to the brand's pharmaceutical-inspired visual language, reinforcing the idea of controlled, collectible releases.\n\nThe label system acts as a unifying element across the series, providing consistency between otherwise visually distinct cards.",
        // TODO: insert packaging mockups (pack + booster box) when available
        images: [
          "/images/projects/rap-packs/RAPPACKS_LABEL.png",
          "/images/projects/rap-packs/rp-8.png",
        ],
        imageContain: [true, false],
      },
      {
        heading: "Outcome",
        body: "A flexible collectible concept that translates music identity into visual artifacts, with potential for expansion into a broader trading card system.",
      },
    ],
    links: [],
    relatedProjects: ["tinkorporated-dosage", "collegiate-collection"],
  },
  {
    title: "Collegiate Collection",
    slug: "collegiate-collection",
    category: "Product & Brand",
    categories: ["Product & Brand"],
    featured: false,
    description:
      "A commercial apparel graphics collection designed for tourist retail environments, combining collegiate-style typography with illustrated animal graphics optimized for screen printing.",
    longDescription:
      "Production-ready apparel graphics built under real-world constraints — limited ink counts, screen printing requirements, and a collegiate design language adapted for zoos, aquariums, and museums.",
    tags: [
      "Apparel",
      "Graphic Design",
      "Retail",
      "Illustration",
      "Screen Printing",
    ],
    role: "Graphic Designer / Illustrator",
    tools: ["Illustrator", "Photoshop"],
    year: "2023",
    type: "Apparel Graphics System",
    heroImage: "/images/projects/collegiate/c1.avif",
    galleryImages: [
      "/images/projects/collegiate/c1.avif",
      "/images/projects/collegiate/c2.webp",
      "/images/projects/collegiate/c3.webp",
      "/images/projects/collegiate/c4.webp",
      "/images/projects/collegiate/c5.webp",
      "/images/projects/collegiate/c6.webp",
      "/images/projects/collegiate/c7.webp",
      "/images/projects/collegiate/c8.webp",
    ],
    sections: [
      {
        heading: "Overview",
        body: "A commercial apparel graphics collection designed for tourist retail environments such as zoos, aquariums, and museums. The work focuses on bold, readable compositions that combine collegiate-style typography with illustrated animal graphics, optimized for screen printing and high-volume production.",
      },
      {
        heading: "Design Constraints",
        body: "Every design in the collection operates within a fixed set of constraints:\n\n- Audience: Tourist retail — families, broad age range, quick-read / high-visibility apparel\n- Production: Maximum 5 ink colors plus underbase, screen printing limitations\n- Style: Must adhere to a collegiate / varsity-inspired design language\n- Goal: Bold, readable, instantly recognizable from a retail display",
      },
      {
        heading: "Design System",
        body: "Each design follows a consistent layout structure: top script text (location name), arched collegiate-style primary typography, central animal illustration, secondary numeric element (year), and bottom label block (location / category). This repeatable framework allows variation in subject and color while maintaining a cohesive collection identity.",
        // TODO: annotate layout sections on one design (top script, main type, animal, year, bottom label)
        images: ["/images/projects/collegiate/c2.webp"],
        imageAspectRatio: "1/1",
      },
      {
        heading: "System Applied",
        body: "The system is applied across different locations and subjects, with variation in illustration, color palette, and naming while maintaining a consistent structure.",
        images: [
          "/images/projects/collegiate/c2.webp",
          "/images/projects/collegiate/c3.webp",
          "/images/projects/collegiate/c4.webp",
          "/images/projects/collegiate/c5.webp",
        ],
        imageAspectRatio: "1/1",
      },
      {
        heading: "Outcome",
        body: "Developed a set of production-ready apparel graphics that balance strong visual identity with real-world printing constraints.",
      },
    ],
    links: [],
    relatedProjects: ["venus-fly-trap-grabber", "rap-packs"],
  },

  // ─── WEB / INTERFACE ──────────────────────────────────────────────
  {
    title: "MovieBase API + Clients",
    slug: "moviebase-api-clients",
    category: "Web / Interface",
    categories: ["Web / Interface"],
    featured: false,
    description:
      "A movie database application ecosystem with backend API work and Angular/React client-side interfaces.",
    longDescription:
      "MovieBase combines a RESTful API built with Node, Express, and MongoDB with two client-side applications — one in Angular and one in React. The project demonstrates full-stack development across multiple frameworks and a shared data layer.",
    tags: ["Angular", "React", "Node", "Express", "MongoDB", "API"],
    role: "Full-Stack Developer",
    tools: ["Node.js", "Express", "MongoDB", "Angular", "React"],
    year: "2023",
    type: "Full-Stack Application",
    heroImage: "/images/projects/moviebase/movie-ang.avif",
    heroAspectRatio: "2/1",
    galleryImages: [
      "/images/projects/moviebase/movie-ang.avif",
      "/images/projects/moviebase/movie-react.avif",
    ],
    sections: [
      {
        heading: "Overview",
        body: "MovieBase is a full-stack movie database ecosystem. The project includes a RESTful API, an Angular client, and a React client — all sharing the same data layer and authentication system. It was built as a comprehensive exercise in full-stack architecture across multiple frontend frameworks.",
      },
      {
        heading: "Backend API",
        body: "The API is built with Node.js and Express, backed by MongoDB. It handles user authentication (JWT), movie CRUD operations, user profiles, and favorites management. The endpoint design follows REST conventions with consistent error handling and validation.",
      },
      {
        heading: "Angular Client",
        body: "The Angular client implements the full user flow — registration, login, movie browsing, detailed views, and profile management. It uses Angular Material for UI components and RxJS for state management and API communication.",
        images: ["/images/projects/moviebase/movie-ang.avif"],
        imageAspectRatio: "2/1",
      },
      {
        heading: "React Client",
        body: "The React client covers the same functionality with a different architectural approach. It uses React Router for navigation, Redux for state management, and Bootstrap for responsive layout. Comparing the two clients highlights framework-specific patterns and tradeoffs.",
        images: ["/images/projects/moviebase/movie-react.avif"],
        imageAspectRatio: "3/2",
      },
      {
        heading: "What I Learned",
        body: "Building the same application in two frameworks clarified the practical differences between Angular and React — particularly around state management, component lifecycle, and routing. The shared API forced consistent data contracts across both clients.",
      },
      {
        heading: "Why It Matters",
        body: "This project demonstrates the ability to work across the full stack and adapt to different frontend frameworks. The shared backend ensures both clients solve the same problems, making the architectural comparisons meaningful rather than superficial.",
      },
    ],
    links: [],
    relatedProjects: [],
  },

  // ─── MOTION ───────────────────────────────────────────────────────
  {
    title: "Motion / Direction",
    slug: "motion-direction",
    category: "Motion / Direction",
    categories: ["Motion / Direction"],
    featured: false,
    description:
      "Motion design and visual direction across digital animation and live production.",
    longDescription:
      "Motion design and visual direction across digital animation and live production. Focused on translating client ideas into clear, on-beat motion with clean, controlled execution.",
    tags: ["Motion Graphics", "After Effects", "Direction", "Editing"],
    role: "Motion Designer / Director",
    tools: ["After Effects", "Illustrator", "Premiere Pro"],
    year: "2022–2023",
    type: "Motion / Direction",
    heroImage: "/images/projects/motion/gemini-gif.gif",
    galleryImages: [],
    sections: [],
    links: [],
    relatedProjects: ["delusional-cover-art"],
  },

];

// Helper to get projects by category filter
export function getFilteredProjects(filter: string): Project[] {
  if (filter === "All") return projects;
  if (filter === "Featured") return projects.filter((p) => p.featured);
  return projects.filter((p) => p.categories.includes(filter));
}

// Helper to get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Helper to get related projects
export function getRelatedProjects(slugs: string[]): Project[] {
  return projects.filter((p) => slugs.includes(p.slug));
}

// Filter categories for the Work page
export const filterCategories = [
  "All",
  "Featured",
  "Systems",
  "Product & Brand",
  "Web / Interface",
  "Experimental",
  "Motion / Direction",
];
