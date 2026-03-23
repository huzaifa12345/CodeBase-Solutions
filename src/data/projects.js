export const projects = [
  {
    id: 1,
    title: "ERP System",
    category: "Enterprise OS",
    description: "A versatile business engine designed for Manufacturing, Restaurants, and Retail. Manage your entire operation with a single platform tailored to your workflow.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    tags: ["Multi-Industry", "Custom Logic", "Cloud Based"],
    fullDescription: "OmniStream ERP is a comprehensive business management solution that can be fully customized for various sectors including Manufacturing, Restaurants, Clothing, and Engineering.",
    challenge: "Traditional software is often too rigid and fails to handle unique business requirements like custom production flows.",
    solution: "We engineered a modular system that is 100% customizable from accounting to complex production tracking.",
    
    // Dynamic Modules for ERP
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
    category: "E-Commerce & POS",
    description: "High-conversion storefronts and powerful admin panels. Perfect for Clothing, Sanitary, and Cutlery brands looking to scale online and offline.",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Order Sync", "Multi-Store", "POS Integration"],
    fullDescription: "Retail Cloud Suite bridges the gap between your digital storefront and physical outlets. It is engineered specifically for high-inventory businesses like Clothing, Cutlery, and Sanitary brands.",
    challenge: "Managing stock consistency between physical shops and online stores while handling complex order statuses manually.",
    solution: "A unified system that handles everything from the shopping cart to final delivery with automated stock alerts.",
    
    // Dynamic Modules for E-Commerce
    modules: [
      { title: "Point of Sale (POS)", desc: "Quick billing system for physical retail counters with barcode support." },
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
    title: "Insight Portal",
    category: "Infrastructure & Data",
    description: "Advanced data management and reporting for utility networks. Secure, fast, and production-ready analytics.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Secure Reporting", "Data Visualization", "Fast Queries"],
    fullDescription: "A high-security portal for data-heavy enterprises, allowing you to process thousands of records and generate complex reports in seconds.",
    challenge: "Extracting actionable insights from massive datasets is slow and creates decision-making bottlenecks.",
    solution: "Optimized database architecture and clean UI for instant report generation in Excel or PDF.",
    
    // Dynamic Modules for Data Portal
    modules: [
      { title: "Data Visualization", desc: "Interactive charts and graphs for real-time monitoring of infrastructure metrics." },
      { title: "Automated Reporting", desc: "Schedule and generate production-ready PDF reports automatically." },
      { title: "Access Control", desc: "Granular user permissions ensuring that sensitive data is only seen by authorized staff." },
      { title: "Secure API", desc: "Fast and encrypted data endpoints for seamless integration with other tools." }
    ],

    results: [
      "High-speed Large Scale Data Processing",
      "One-click PDF & Excel Report Export",
      "Granular Multi-user Access Control",
      "Encrypted Automatic Data Backups"
    ],
    technologies: ["Node.js", "SQL", "ExcelJS", "JWT Auth"],
    supportMessage: "Our technical team is available 24/7 for support and portal customization."
  }
];