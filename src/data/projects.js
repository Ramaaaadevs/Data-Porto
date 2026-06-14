// ============================================================
// DATA PROJECTS — tambah project baru di sini
// ============================================================
export const PROJECTS = [
  {
    id: 1,
    title: "FaceFit Barber",
    category: "machine-learning",
    categoryLabel: "Machine Learning",
    tags: ["Python", "MediaPipe", "Streamlit", "OpenCV"],
    shortDesc: {
      id: "Pipeline deteksi bentuk wajah untuk rekomendasi gaya rambut.",
      en: "Face shape detection pipeline for hairstyle recommendation."
    },
    fullDesc: {
      id: "Dibangun sebagai bagian dari DBS Foundation Coding Camp 2026 (Tim CC26-PSU304). Menggunakan MediaPipe FaceMesh dengan ambang rasio geometris untuk mengklasifikasikan 5 bentuk wajah. Dataset akhir yang seimbang terdiri dari 5.820 gambar dengan Imbalance Ratio (IR) terkendali sebesar 1.45×.",
      en: "Built as part of DBS Foundation Coding Camp 2026 (Team CC26-PSU304). Uses MediaPipe FaceMesh with geometric ratio thresholds to classify 5 face shapes. Final balanced dataset of 5,820 images with IR 1.45×."
    },
    problem: {
      id: "Menentukan gaya rambut yang cocok seringkali didasarkan pada intuisi subjektif, bukan analisis geometris wajah yang akurat. Hal ini menyebabkan ketidakcocokan gaya bagi pelanggan.",
      en: "Choosing a matching hairstyle is often based on subjective intuition rather than accurate facial geometric analysis, leading to styling mismatches for customers."
    },
    methodology: {
      id: "Menggunakan MediaPipe FaceMesh untuk mendeteksi landmark wajah secara real-time. Rasio geometris wajah dihitung untuk mengklasifikasikan bentuk wajah ke dalam 5 kategori. Dataset diseimbangkan dengan teknik augmentasi untuk rasio ketidakseimbangan (IR) 1.45×.",
      en: "Uses MediaPipe FaceMesh to detect facial landmarks in real-time. Facial geometric ratios are calculated to classify face shapes into 5 categories. The dataset is balanced using augmentation techniques for an Imbalance Ratio (IR) of 1.45×."
    },
    impact: {
      id: "Pipeline machine learning berhasil mengklasifikasikan 5 bentuk wajah utama secara akurat pada 5.820 gambar uji, memberikan sistem rekomendasi gaya rambut otomatis yang objektif.",
      en: "The machine learning pipeline successfully classified 5 main face shapes accurately across 5,820 test images, providing an objective automated hairstyle recommendation system."
    },
    metrics: [
      { label: { id: "Dataset", en: "Dataset" }, value: "5,820 imgs" },
      { label: { id: "Kelas", en: "Classes" }, value: "5" },
      { label: { id: "Rasio IR", en: "IR Ratio" }, value: "1.45×" },
    ],
    github: "https://github.com/raphael707/FaceFit-Barber-Data-Science",
    demo: null,
    icon: "fa-id-badge",
    color: "#6558f5",
    colorLight: "rgba(101,88,245,0.10)",
  },
  {
    id: 2,
    title: "Air Quality Beijing",
    category: "analysis",
    categoryLabel: {
      id: "Analisis Data",
      en: "Data Analysis"
    },
    tags: ["Python", "Pandas", "Streamlit", "Matplotlib"],
    shortDesc: {
      id: "Dashboard interaktif menganalisis kualitas udara Beijing di 12 stasiun pemantauan.",
      en: "Interactive dashboard analyzing Beijing air quality across 12 stations."
    },
    fullDesc: {
      id: "Menganalisis data kualitas udara Beijing dari 12 stasiun pemantauan. Menampilkan tren deret waktu (time-series), heatmap polutan, dan perbandingan antar stasiun. Dideploy di Streamlit Cloud.",
      en: "Analyzes Beijing air quality data from 12 monitoring stations. Features time-series trends, pollutant heatmaps, and station comparisons. Deployed to Streamlit Cloud."
    },
    problem: {
      id: "Data kualitas udara perkotaan sangat besar dan kompleks (terdiri dari 6 polutan utama di 12 stasiun pemantauan). Tanpa visualisasi yang baik, pola spasial dan tren polusi sulit dipahami oleh publik.",
      en: "Urban air quality data is large and complex (composed of 6 main pollutants across 12 monitoring stations). Without proper visualization, spatial patterns and pollution trends are difficult for the public to understand."
    },
    methodology: {
      id: "Melakukan analisis data eksploratif (EDA) pada dataset historis polusi Beijing. Menggunakan Pandas untuk agregasi data dan membangun dashboard interaktif dengan Streamlit untuk visualisasi heatmap polutan.",
      en: "Performed exploratory data analysis (EDA) on Beijing historical pollution dataset. Used Pandas for data aggregation and built an interactive dashboard with Streamlit for pollutant heatmap visualization."
    },
    impact: {
      id: "Dashboard berhasil dideploy secara publik, memungkinkan perbandingan polutan antar stasiun secara instan dan membantu melacak efektivitas kebijakan pengendalian emisi kota.",
      en: "The dashboard was successfully deployed publicly, enabling instant pollutant comparisons between stations and helping track the effectiveness of city emission control policies."
    },
    metrics: [
      { label: { id: "Stasiun", en: "Stations" }, value: "12" },
      { label: { id: "Polutan", en: "Pollutants" }, value: "6" },
      { label: { id: "Deploy", en: "Deployment" }, value: "Streamlit" },
    ],
    github: "https://github.com/Ramaaaadevs/DBS-Air-Quality-Beijing",
    demo: "https://rama-air-quality-beijing.streamlit.app",
    icon: "fa-cloud",
    color: "#4a7cf7",
    colorLight: "rgba(74,124,247,0.10)",
  },
  {
    id: 3,
    title: "UK Road Accident Viz",
    category: "visualization",
    categoryLabel: {
      id: "Visualisasi Data",
      en: "Data Visualization"
    },
    tags: ["Tableau", "Power BI", "Kepler.gl", "Python"],
    shortDesc: {
      id: "Visualisasi multi-alat pola kecelakaan lalu lintas di Inggris Raya tahun 2024.",
      en: "Multi-tool visualization of 2024 UK traffic accident patterns."
    },
    fullDesc: {
      id: "Proyek akhir mata kuliah Visualisasi Data dan Informasi di ITERA. Menganalisis data kecelakaan lalu lintas Inggris Raya tahun 2024 menggunakan Tableau, Power BI, dan Kepler.gl untuk pemetaan spasial.",
      en: "Final project for Visualisasi Data and Informasi at ITERA. Analyzes 2024 UK road accident data using Tableau, Power BI, and Kepler.gl for geospatial mapping."
    },
    problem: {
      id: "Pola kecelakaan lalu lintas di Inggris Raya memiliki faktor risiko spasial dan temporal tersembunyi yang sulit diidentifikasi dari data tabel mentah kepolisian.",
      en: "UK traffic accident patterns have hidden spatial and temporal risk factors that are difficult to identify from raw police tabular data."
    },
    methodology: {
      id: "Memadukan visualisasi multi-alat: Tableau untuk dashboard interaktif, Power BI untuk analisis metrik keparahan, dan Kepler.gl untuk pemetaan spasial 3D pola sebaran kecelakaan lalu lintas 2024.",
      en: "Integrated multi-tool visualization: Tableau for interactive dashboards, Power BI for severity metrics analysis, and Kepler.gl for 3D geospatial mapping of 2024 traffic accident distribution patterns."
    },
    impact: {
      id: "Menghasilkan visualisasi interaktif terintegrasi yang berhasil memetakan area rawan kecelakaan tinggi (hotspots) serta mengidentifikasi faktor cuaca dan pencahayaan utama yang berkontribusi pada kecelakaan.",
      en: "Produced integrated interactive visualizations that mapped high road accident hotspots and identified key weather and lighting factors contributing to accidents."
    },
    metrics: [
      { label: { id: "Alat", en: "Tools" }, value: "3" },
      { label: { id: "Tahun Data", en: "Data Year" }, value: "2024" },
      { label: { id: "Fokus", en: "Focus" }, value: "Geospatial" },
    ],
    github: "https://github.com/Ramaaaadevs/Visualisasi-Data-dan-Informasi",
    demo: null,
    icon: "fa-map-marked-alt",
    color: "#f5a623",
    colorLight: "rgba(245,166,35,0.10)",
  },
  // ============================================================
  // TEMPLATE PROYEK BARU:
  // Untuk menambah proyek baru, hilangkan tanda komen (//) di bawah ini:
  // {
  //   id: 4,
  //   title: "Nama Project",
  //   category: "analysis", // analysis | visualization | machine-learning | web
  //   categoryLabel: {
  //     id: "Nama Kategori (ID)",
  //     en: "Category Name (EN)"
  //   },
  //   tags: ["Tag1", "Tag2"],
  //   shortDesc: {
  //     id: "Deskripsi singkat (ID).",
  //     en: "Short description (EN)."
  //   },
  //   fullDesc: {
  //     id: "Deskripsi panjang untuk modal (ID).",
  //     en: "Detailed description for modal (EN)."
  //   },
  //   thumbnail: "/Gambar/nama_thumbnail.png",
  //   problem: {
  //     id: "Tantangan/Masalah (ID)...",
  //     en: "Challenge/Problem (EN)..."
  //   },
  //   methodology: {
  //     id: "Metodologi (ID)...",
  //     en: "Methodology (EN)..."
  //   },
  //   impact: {
  //     id: "Dampak (ID)...",
  //     en: "Impact (EN)..."
  //   },
  //   metrics: [
  //     { label: { id: "Label (ID)", en: "Label (EN)" }, value: "Value" },
  //   ],
  //   github: "https://github.com/...",
  //   demo: null,
  //   icon: "fa-chart-bar",
  //   color: "#hexcolor",
  //   colorLight: "rgba(r,g,b,0.10)",
  // },
  // ============================================================
];

export const CATEGORIES = [
  { value: "all", label: { id: "Semua", en: "All" } },
  { value: "analysis", label: { id: "Analisis", en: "Analysis" } },
  { value: "visualization", label: { id: "Visualisasi", en: "Visualization" } },
  { value: "machine-learning", label: { id: "Sains Data & ML", en: "Data Science & ML" } },
];

// ============================================================
// VIZ SOURCES — dropdown viz card di Hero (Home)
// ============================================================
export const VIZ_SOURCES = [
  {
    id: "streamlit-airquality",
    label: "Air Quality Beijing — Streamlit",
    src: "https://rama-air-quality-beijing.streamlit.app?embed=true",
    link: "https://rama-air-quality-beijing.streamlit.app",
    fallbackText: {
      id: "Memuat dashboard Streamlit...",
      en: "Loading Streamlit dashboard..."
    },
    fallbackSub: {
      id: "Kualitas Udara Beijing · 12 Stasiun Pemantauan",
      en: "Beijing Air Quality · 12 Monitoring Stations"
    },
    icon: "fa-cloud",
  },
  {
    id: "tableau-ukaccident",
    label: "UK Road Accident — Tableau Public",
    src: "https://public.tableau.com/views/VisdatKelompok11/Dashboard?:embed=y&:showVizHome=no&:toolbar=yes&:tabs=no",
    link: "https://public.tableau.com/views/VisdatKelompok11/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link",
    fallbackText: {
      id: "Memuat dashboard Tableau...",
      en: "Loading Tableau dashboard..."
    },
    fallbackSub: {
      id: "Kecelakaan Lalu Lintas Inggris 2024 · Tableau Public",
      en: "UK Road Accident 2024 · Tableau Public"
    },
    icon: "fa-map-marked-alt",
  },
  // ============================================================
  // TEMPLATE DASHBOARD BARU:
  // Untuk menambah dashboard baru ke dropdown, hilangkan tanda komen (//) di bawah ini:
  // {
  //   id: "dashboard-id-unik",
  //   label: "Nama Judul Dashboard di Dropdown",
  //   src: "https://url-dashboard-embed.com", 
  //   link: "https://url-dashboard-publik.com", 
  //   fallbackText: {
  //     id: "Memuat dashboard...",
  //     en: "Loading dashboard..."
  //   },
  //   fallbackSub: {
  //     id: "Keterangan Subtitle saat Loading (ID)",
  //     en: "Subtitle description when loading (EN)"
  //   },
  //   icon: "fa-chart-pie",
  // },
  // ============================================================
];

// ============================================================
// CERTIFICATIONS — About page
// ============================================================
export const CERTS = [
  {
    title: {
      id: "Belajar Fundamental Analisis Data",
      en: "Learn Fundamentals of Data Analysis"
    },
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Data Analysis", "Python", "Pandas", "EDA"],
    color: "#3572A5",
    colorLight: "rgba(53,114,165,0.10)",
    image: "/Gambar/dicoding-square.png",
    credentialId: "6RPN7R989X2M",
    credentialUrl: "https://www.dicoding.com/certificates/6RPN7R989X2M",
    validity: {
      id: "Diterbitkan 29 Apr 2026 · Berlaku s.d. 29 Apr 2029",
      en: "Issued 29 Apr 2026 · Expires 29 Apr 2029"
    },
    pages: [
      "/Sertifikat/sertifikat_course_555_4116833_290426193909_page-1.png",
      "/Sertifikat/sertifikat_course_555_4116833_290426193909_page-2.png"
    ]
  },
  {
    title: {
      id: "Belajar Machine Learning untuk Pemula",
      en: "Learn Machine Learning for Beginners"
    },
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Machine Learning", "Python", "Scikit-learn"],
    color: "#6558f5",
    colorLight: "rgba(101,88,245,0.10)",
    image: "/Gambar/dicoding-square.png",
    credentialId: "MEPJOYORLZ3V",
    credentialUrl: "https://www.dicoding.com/certificates/MEPJOYORLZ3V",
    validity: {
      id: "Diterbitkan 04 Apr 2026 · Berlaku s.d. 04 Apr 2029",
      en: "Issued 04 Apr 2026 · Expires 04 Apr 2029"
    },
    pages: [
      "/Sertifikat/sertifikat_course_184_4116833_040426104658_page-1.png",
      "/Sertifikat/sertifikat_course_184_4116833_040426104658_page-2.png",
      "/Sertifikat/sertifikat_course_184_4116833_040426104658_page-3.png"
    ]
  },
  {
    title: {
      id: "Belajar Fundamental Pemrosesan Data",
      en: "Learn Fundamentals of Data Processing"
    },
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Data Wrangling", "Python", "Data Cleaning"],
    color: "#00758f",
    colorLight: "rgba(0,117,143,0.10)",
    image: "/Gambar/dicoding-square.png",
    credentialId: "JLX1VVJ22Z72",
    credentialUrl: "https://www.dicoding.com/certificates/JLX1VVJ22Z72",
    validity: {
      id: "Diterbitkan 14 Mei 2026 · Berlaku s.d. 14 Mei 2029",
      en: "Issued 14 May 2026 · Expires 14 May 2029"
    },
    pages: [
      "/Sertifikat/sertifikat_course_708_4116833_140526190301_page-1.png",
      "/Sertifikat/sertifikat_course_708_4116833_140526190301_page-2.png"
    ]
  },
  {
    title: {
      id: "Belajar Matematika untuk Data Science",
      en: "Learn Mathematics for Data Science"
    },
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Mathematics", "Data Science", "Statistics"],
    color: "#e97627",
    colorLight: "rgba(233,118,39,0.10)",
    image: "/Gambar/dicoding-square.png",
    credentialId: "JMZVO5E3QXN9",
    credentialUrl: "https://www.dicoding.com/certificates/JMZVO5E3QXN9",
    validity: {
      id: "Diterbitkan 07 Jun 2026 · Berlaku s.d. 07 Jun 2029",
      en: "Issued 07 Jun 2026 · Expires 07 Jun 2029"
    },
    pages: [
      "/Sertifikat/sertifikat_course_831_4116833_110626175137_page-1.png",
      "/Sertifikat/sertifikat_course_831_4116833_110626175137_page-2.png"
    ]
  },
  // ============================================================
  // TEMPLATE SERTIFIKASI BARU:
  // Untuk menambah sertifikasi baru, hilangkan tanda komen (//) di bawah ini:
  // {
  //   title: {
  //     id: "Nama Kelas/Sertifikasi (ID)",
  //     en: "Course/Certification Title (EN)"
  //   },
  //   issuer: "Nama Penerbit (e.g., Dicoding Indonesia)",
  //   year: "Tahun Penerbitan (e.g., 2026)",
  //   tags: ["Tag1", "Tag2"],
  //   color: "#hexcolor", 
  //   colorLight: "rgba(r,g,b,0.10)", 
  //   image: "/Gambar/nama-logo-square.png", 
  //   credentialId: "IDKredensialUnik",
  //   credentialUrl: "https://link-verifikasi-sertifikat.com",
  //   validity: {
  //     id: "Diterbitkan Apr 2026 · Berlaku s.d. Apr 2029",
  //     en: "Issued Apr 2026 · Expires Apr 2029"
  //   },
  //   pages: [
  //     "/Sertifikat/nama_file_sertifikat_page-1.png",
  //     "/Sertifikat/nama_file_sertifikat_page-2.png"
  //   ]
  // },
  // ============================================================
];

// ============================================================
// SKILLS DETAILED — Skills page grid
// ============================================================
export const SKILLS_DETAILED = [
  {
    name: "Python",
    pct: 90,
    color: "#3572A5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/python/python-original.svg",
    desc: {
      id: "Analisis Data, Machine Learning (MediaPipe, OpenCV, Scikit-learn), dan Scripting",
      en: "Data Analysis, Machine Learning (MediaPipe, OpenCV, Scikit-learn), and Scripting"
    },
  },
  {
    name: "MySQL",
    pct: 85,
    color: "#00758f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/mysql/mysql-original.svg",
    desc: {
      id: "Desain Database, Optimasi Query, dan Pemodelan Data Relasional",
      en: "Database Design, Query Optimization, and Relational Data Modeling"
    },
  },
  {
    name: "Tableau",
    pct: 90,
    color: "#e97627",
    icon: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/tableau.svg",
    desc: {
      id: "Dashboard Business Intelligence Interaktif, Storytelling, dan Analisis Visual",
      en: "Interactive Business Intelligence Dashboards, Storytelling, and Visual Analytics"
    },
  },
  {
    name: "Power BI",
    pct: 85,
    color: "#f2c811",
    icon: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/microsoft-power-bi.svg",
    desc: {
      id: "Pelaporan BI, Transformasi Data (Power Query), dan Analisis Metrik Keparahan",
      en: "BI Reporting, Data Transformation (Power Query), and Severity Analysis Metrics"
    },
  },
  {
    name: "Microsoft Excel",
    pct: 95,
    color: "#107c41",
    icon: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons/icons/file_type_excel.svg",
    desc: {
      id: "Kalkulasi Lanjutan, Wrangling Data, Pivot Tables, dan Pelaporan Ad-hoc",
      en: "Advanced Calculations, Data Wrangling, Pivot Tables, and Ad-hoc Reporting"
    },
  },
  {
    name: "Git & GitHub",
    pct: 80,
    color: "#f05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/git/git-original.svg",
    desc: {
      id: "Kontrol Versi, Alur Kerja Kolaboratif, dan Manajemen Repositori",
      en: "Version Control, Collaborative Workflows, and Repository Management"
    },
  },
  // ============================================================
  // TEMPLATE SKILL BARU:
  // Untuk menambah skill baru, hilangkan tanda komen (//) di bawah ini:
  // {
  //   name: "Nama Skill",
  //   pct: 85, 
  //   color: "#hexcolor", 
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/nama_skill/nama_skill-original.svg", 
  //   desc: {
  //     id: "Deskripsi singkat skill (ID)",
  //     en: "Short skill description (EN)"
  //   },
  // },
  // ============================================================
];

// ============================================================
// TIMELINE — Skills page riwayat proyek
// ============================================================
export const TIMELINE = [
  {
    title: "FaceFit Barber",
    role: {
      id: "Pengembang Machine Learning (Ketua Tim)",
      en: "Machine Learning Developer (Team Lead)"
    },
    date: "Feb 2026 - Mar 2026",
    desc: {
      id: "Mengembangkan pipeline deteksi bentuk wajah menggunakan MediaPipe FaceMesh untuk merekomendasikan gaya rambut secara otomatis dan objektif berdasarkan rasio geometris wajah. Berhasil mengumpulkan, membersihkan, dan menyeimbangkan dataset sebanyak 5.820 gambar menggunakan teknik augmentasi data dengan Imbalance Ratio (IR) terkendali sebesar 1.45×. Dikerjakan dalam rangka program DBS Foundation Coding Camp 2026.",
      en: "Developed a face shape detection pipeline using MediaPipe FaceMesh to automatically and objectively recommend hairstyles based on facial geometric ratios. Successfully gathered, cleaned, and balanced a dataset of 5,820 images using data augmentation with a controlled Imbalance Ratio (IR) of 1.45×. Completed for the DBS Foundation Coding Camp 2026 program."
    },
    tags: ["Python", "MediaPipe", "Streamlit", "OpenCV", "Machine Learning"],
    dir: "left",
  },
  {
    title: "Air Quality Beijing",
    role: {
      id: "Analis Data",
      en: "Data Analyst"
    },
    date: "Okt 2025 - Nov 2025",
    desc: {
      id: "Menganalisis data historis kualitas udara di Beijing yang mencakup 12 stasiun pemantauan terpisah. Melakukan pembersihan data kotor (handling missing values, outliers) dan pengelompokan data polutan utama (PM2.5, PM10, SO2, NO2, CO, O3) menggunakan Pandas. Membangun dashboard analitik interaktif berbasis web menggunakan Streamlit Cloud untuk mempermudah pemantauan kualitas udara secara spasial.",
      en: "Analyzed historical air quality data in Beijing across 12 separate monitoring stations. Handled dirty data cleaning (missing values, outliers) and grouping of main pollutants (PM2.5, PM10, SO2, NO2, CO, O3) using Pandas. Built an interactive web-based analytics dashboard using Streamlit Cloud to facilitate spatial air quality monitoring."
    },
    tags: ["Python", "Pandas", "Streamlit", "Matplotlib", "Data Analysis"],
    dir: "right",
  },
  {
    title: "UK Road Accident Viz",
    role: {
      id: "Spesialis Visualisasi Data",
      en: "Data Visualization Specialist"
    },
    date: "Mei 2024 - Jun 2024",
    desc: {
      id: "Membangun visualisasi data interaktif terintegrasi untuk menganalisis kecelakaan lalu lintas di Inggris Raya tahun 2024. Memanfaatkan Tableau Public untuk dashboard performa, Power BI untuk memetakan keparahan kecelakaan lalu lintas (severity analysis), serta Kepler.gl untuk melakukan pemetaan geospatial 3D pola persebaran rawan kecelakaan (hotspots). Dikerjakan sebagai proyek akhir mata kuliah Visualisasi Data di ITERA.",
      en: "Built integrated interactive data visualizations to analyze traffic accidents in the United Kingdom in 2024. Utilized Tableau Public for performance dashboards, Power BI for mapping road accident severity (severity analysis), and Kepler.gl for 3D geospatial mapping of accident hotspot distributions. Done as a final project for the Data Visualization course at ITERA."
    },
    tags: ["Tableau", "Power BI", "Kepler.gl", "Python", "Data Visualization"],
    dir: "left",
  },
  // ============================================================
  // TEMPLATE RIWAYAT PROYEK TIMELINE BARU:
  // Untuk menambah riwayat baru di timeline, hilangkan tanda komen (//) di bawah ini:
  // {
  //   title: "Nama Proyek",
  //   role: {
  //     id: "Peran Anda (ID)",
  //     en: "Your Role (EN)"
  //   },
  //   date: "Bulan Tahun - Bulan Tahun (e.g., Jan 2026 - Mar 2026)",
  //   desc: {
  //     id: "Deskripsi lengkap mengenai kontribusi dan lingkup pekerjaan Anda di proyek tersebut (ID).",
  //     en: "Full description of your contribution and scope of work on this project (EN)."
  //   },
  //   tags: ["Tag1", "Tag2"],
  //   dir: "left", // 'left' atau 'right'
  // },
  // ============================================================
];
