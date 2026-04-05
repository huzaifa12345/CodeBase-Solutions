// projects.js
import erpMain from '../assets/projects/erp-main.png';
import erpSS1 from '../assets/projects/erp-detail-4.png';
import erpSS2 from '../assets/projects/erp-detail-1.png';
import erpSS3 from '../assets/projects/erp-detail-2.png';
import erpSS4 from '../assets/projects/erp-detail-3.png';
import ecommerceMain from '../assets/projects/e-com-main.png';
import ecomSS1 from '../assets/projects/ecom-detail-1.jpeg';
import ecomSS2 from '../assets/projects/ecom-detail-2.jpeg';
import ecomSS3 from '../assets/projects/ecom-detail-3.jpeg';
// import insightMain from '../assets/projects/insight-portal.png';
// Isi tarah detail screenshots bhi import kar sakte hain ya direct path use karein

export const projects = [
  {
    id: 1,
    title: "ERP System",
    category: "Enterprise OS",
    description: "A versatile business engine designed for Manufacturing, Restaurants, and Retail. Manage your entire operation with a single platform tailored to your workflow.",
    
    // Main Dashboard Image for Card
    image: erpMain, 
    demoUrl: "https://demo-erp-beta.vercel.app/",
    
    // Additional Screenshots for Detail Page Gallery
    screenshots: [erpSS1, erpSS2, erpSS3, erpSS4],

    tags: ["Multi-Industry", "Custom Logic", "Cloud Based"],
    fullDescription: "ERP is a comprehensive business management solution that can be fully customized for various sectors including Manufacturing, Restaurants, Clothing, and Engineering.",
    challenge: "Traditional software is often too rigid and fails to handle unique business requirements like custom production flows.",
    solution: "We engineered a modular system that is 100% customizable from accounting to complex production tracking.",
    
    modules: [
      { title: "Accounts & Ledger", desc: "Automated Customer, Supplier, and Employee ledgers with real-time balance tracking." },
      { title: "Inventory & FIFO", desc: "Smart stock management with FIFO/Weighted Average logic to prevent inventory leakage." },
      { title: "Purchase & Sales", desc: "Complete order lifecycle from quotations to final sale with automated tax calculations." },
      { title: "Invoicing & PDF", desc: "Generate professional invoices and download reports in PDF or Excel formats instantly." }
    ],

    results: [
      "100% Customizable based on requirements",
      "Automated Customer & Supplier Ledgers",
      "Integrated Employee Payroll & Attendance",
      "Production & Manufacturing Unit Tracking",
      "Full On-site Support & Staff Training"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "RDS"],
    supportMessage: "Our team provides complete hands-on training and ongoing support to ensure smooth operations."
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description: "High-conversion storefronts and powerful admin panels. Perfect for Clothing, Chemical Detergents, Sanitary, and Cutlery brands looking to scale online and offline.",
    
    // Main Storefront Image for Card
    image: ecommerceMain,
    demoUrl: "https://demo-e-com-seven.vercel.app/",

    // Additional Screenshots for Detail Page
    screenshots: [ecomSS1, ecomSS2, ecomSS3],

    tags: ["Order Sync", "Multi-Store", "Payment Integrations"],
    fullDescription: "Retail Cloud Suite bridges the gap between your digital storefront and physical outlets. It is engineered specifically for high-inventory businesses like Clothing, Cutlery, and Sanitary brands.",
    challenge: "Managing stock consistency between physical shops and online stores while handling complex order statuses manually.",
    solution: "A unified system that handles everything from the shopping cart to final delivery with automated stock alerts.",
    
    modules: [
      // { title: "Point of Sale (POS)", desc: "Quick billing system for physical retail counters with barcode support." },
      { title: "Order Management", desc: "Track orders from 'Pending' to 'Delivered' with automated status notifications." },
      { title: "Payment Gateways", desc: "Secure integrations with Stripe, PayPal, and local bank transfer methods." },
      { title: "Product Management", desc: "Bulk import/export via Excel with support for multi-variation products (Size/Color)." }
    ],

    results: [
      "Seamless Storefront & POS Synchronization",
      "Automated Stock Alerts & Reorder Levels",
      "Customer Account Portals & History",
      "Bulk Data Migration & Management",
      "Advanced Sales Analytics Dashboard"
    ],
    technologies: ["React", "Express", "PostgreSQL NeonDB", "Cloudinary"],
    supportMessage: "We provide specialized training for your retail staff on managing stock and processing web orders."
  },
 {
    id: 3,
    title: "Blog Website",
    category: "Content Engine", 
    description: "A high-performance blogging ecosystem designed for thought leaders and digital publishers. SEO-optimized, lightning-fast, and built for deep reader engagement.",
    
    // Placeholder Image for modern blog UI
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop", 

    // screenshots: [
    //   "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    //   "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1974&auto=format&fit=crop",
    //   "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop"
    // ],

    tags: ["SEO Optimized", "Rich Text Editor", "Ad-Sense Ready", "Fast Loading"],
    
    fullDescription: "Vantage is a modern blogging platform built to solve the performance issues of traditional CMS. It provides a clutter-free writing experience for authors and a lightning-fast reading experience for users, ensuring maximum retention and search engine rankings.",
    
    challenge: "Slow loading times and complex, bloated interfaces in traditional blogging tools that hurt SEO and distract readers.",
    
    solution: "A headless-inspired blog architecture featuring a clean, minimalist UI, automated metadata management, and high-speed asset delivery for a premium reading experience.",
    
    modules: [
      { 
        title: "Advanced Rich Editor", 
        desc: "A distraction-free writing environment with support for multi-media embeds, syntax highlighting, and real-time previews." 
      },
      { 
        title: "SEO Management Hub", 
        desc: "Automated XML sitemaps, schema markup generation, and custom meta-tagging to dominate search rankings." 
      },
      { 
        title: "Reader Analytics", 
        desc: "Track read-time, bounce rates, and popular categories with a simplified, privacy-focused dashboard." 
      },
      { 
        title: "Newsletter Integration", 
        desc: "Build your audience with built-in subscription forms and seamless integration with email services like Resend." 
      }
    ],

    results: [
      "95+ Google PageSpeed Performance Score",
      "Built-in Social Media Open Graph Optimization",
      "Dynamic Category & Tagging System",
      "Fully Responsive & Reader-First Layouts",
      "Zero-Config Image Optimization (WebP Support)"
    ],
    
    technologies: ["Node.js", "Express", "PostgreSQL", "Tailwind CSS", "Resend API"],
    supportMessage: "We offer complete setup, domain migration, and custom theme design to make your voice stand out."
  }
];