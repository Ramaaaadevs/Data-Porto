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
    shortDesc: "Face shape detection pipeline for hairstyle recommendation.",
    fullDesc:
      "Built as part of DBS Foundation Coding Camp 2026 (Team CC26-PSU304). Uses MediaPipe FaceMesh with geometric ratio thresholds to classify 5 face shapes. Final balanced dataset of 5,820 images with IR 1.45×.",
    thumbnail: "/Gambar/facefit_thumbnail.png",
    problem:
      "Menentukan gaya rambut yang cocok seringkali didasarkan pada intuisi subjektif, bukan analisis geometris wajah yang akurat. Hal ini menyebabkan ketidakcocokan gaya bagi pelanggan.",
    methodology:
      "Menggunakan MediaPipe FaceMesh untuk mendeteksi landmark wajah secara real-time. Rasio geometris wajah dihitung untuk mengklasifikasikan bentuk wajah ke dalam 5 kategori. Dataset diseimbangkan dengan teknik augmentasi untuk rasio ketidakseimbangan (IR) 1.45×.",
    impact:
      "Pipeline machine learning berhasil mengklasifikasikan 5 bentuk wajah utama secara akurat pada 5,820 gambar uji, memberikan sistem rekomendasi gaya rambut otomatis yang objektif.",
    metrics: [
      { label: "Dataset", value: "5,820 imgs" },
      { label: "Classes", value: "5" },
      { label: "IR", value: "1.45×" },
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
    categoryLabel: "Data Analysis",
    tags: ["Python", "Pandas", "Streamlit", "Matplotlib"],
    shortDesc: "Interactive dashboard analyzing Beijing air quality across 12 stations.",
    fullDesc:
      "Analyzes Beijing air quality data from 12 monitoring stations. Features time-series trends, pollutant heatmaps, and station comparisons. Deployed to Streamlit Cloud.",
    thumbnail: "/Gambar/air_quality_thumbnail.png",
    problem:
      "Data kualitas udara perkotaan sangat besar dan kompleks (terdiri dari 6 polutan utama di 12 stasiun pemantauan). Tanpa visualisasi yang baik, pola spasial dan tren polusi sulit dipahami oleh publik.",
    methodology:
      "Melakukan analisis data eksploratif (EDA) pada dataset historis polusi Beijing. Menggunakan Pandas untuk agregasi data dan membangun dashboard interaktif dengan Streamlit untuk visualisasi heatmap polutan.",
    impact:
      "Dashboard berhasil dideploy secara publik, memungkinkan perbandingan polutan antar stasiun secara instan dan membantu melacak efektivitas kebijakan pengendalian emisi kota.",
    metrics: [
      { label: "Stations", value: "12" },
      { label: "Pollutants", value: "6" },
      { label: "Deployed", value: "Streamlit" },
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
    categoryLabel: "Data Visualization",
    tags: ["Tableau", "Power BI", "Kepler.gl", "Python"],
    shortDesc: "Multi-tool visualization of 2024 UK traffic accident patterns.",
    fullDesc:
      "Final project for Visualisasi Data dan Informasi at ITERA. Analyzes 2024 UK road accident data using Tableau, Power BI, and Kepler.gl for geospatial mapping.",
    thumbnail: "/Gambar/uk_accident_thumbnail.png",
    problem:
      "Pola kecelakaan lalu lintas di Inggris Raya memiliki faktor risiko spasial dan temporal tersembunyi yang sulit diidentifikasi dari data tabel mentah kepolisian.",
    methodology:
      "Memadukan visualisasi multi-alat: Tableau untuk dashboard interaktif, Power BI untuk analisis metrik keparahan, dan Kepler.gl untuk pemetaan spasial 3D pola sebaran kecelakaan lalu lintas 2024.",
    impact:
      "Menghasilkan visualisasi interaktif terintegrasi yang berhasil memetakan area rawan kecelakaan tinggi (hotspots) serta mengidentifikasi faktor cuaca dan pencahayaan utama yang berkontribusi pada kecelakaan.",
    metrics: [
      { label: "Tools", value: "3" },
      { label: "Data year", value: "2024" },
      { label: "Focus", value: "Geospatial" },
    ],
    github: "https://github.com/Ramaaaadevs/Visualisasi-Data-dan-Informasi",
    demo: null,
    icon: "fa-map-marked-alt",
    color: "#f5a623",
    colorLight: "rgba(245,166,35,0.10)",
  },
  // ============================================================
  // TAMBAH PROJECT BARU DI SINI:
  // {
  //   id: 4,
  //   title: "Nama Project",
  //   category: "analysis", // analysis | visualization | machine-learning | web | mobile
  //   categoryLabel: "Data Analysis",
  //   tags: ["Tag1", "Tag2"],
  //   shortDesc: "Deskripsi singkat.",
  //   fullDesc: "Deskripsi panjang untuk modal.",
  //   thumbnail: "/Gambar/nama_thumbnail.png",
  //   problem: "...",
  //   methodology: "...",
  //   impact: "...",
  //   metrics: [
  //     { label: "Label", value: "Value" },
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
  { value: "all", label: "All" },
  { value: "analysis", label: "Analysis" },
  { value: "visualization", label: "Visualization" },
  { value: "machine-learning", label: "Machine Learning" },
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
    fallbackText: "Loading Streamlit dashboard…",
    fallbackSub: "Air Quality Beijing · 12 Stations",
    icon: "fa-cloud",
  },
  {
    id: "tableau-ukaccident",
    label: "UK Road Accident — Tableau Public",
    src: "https://public.tableau.com/views/VisdatKelompok11/Dashboard?:embed=y&:showVizHome=no&:toolbar=yes&:tabs=no",
    link: "https://public.tableau.com/views/VisdatKelompok11/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link",
    fallbackText: "Loading Tableau dashboard…",
    fallbackSub: "UK Road Accident 2024 · Tableau Public",
    icon: "fa-map-marked-alt",
  },
  // ============================================================
  // TEMPLATE DASHBOARD BARU:
  // Untuk menambah dashboard baru ke dropdown, hilangkan tanda komen (//) di bawah ini:
  // {
  //   id: "dashboard-id-unik",
  //   label: "Nama Judul Dashboard di Dropdown",
  //   src: "https://url-dashboard-embed.com", // Link iframe embed
  //   link: "https://url-dashboard-publik.com", // Link tautan luar (open in new tab)
  //   fallbackText: "Loading dashboard...",
  //   fallbackSub: "Keterangan Subtitle saat Loading",
  //   icon: "fa-chart-pie", // Icon internal (tidak tampil di dropdown, bisa biarkan default)
  // },
  // ============================================================
];

// ============================================================
// CERTIFICATIONS — About page
// ============================================================
export const CERTS = [
  {
    title: "Belajar Fundamental Analisis Data",
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Data Analysis", "Python", "Pandas", "EDA"],
    color: "#3572A5",
    colorLight: "rgba(53,114,165,0.10)",
    image: "/Gambar/dicoding-square.png",
    credentialId: "6RPN7R989X2M",
    credentialUrl: "https://www.dicoding.com/certificates/6RPN7R989X2M",
    validity: "Issued 29 Apr 2026 · Expires 29 Apr 2029",
    pages: [
      "/Sertifikat/sertifikat_course_555_4116833_290426193909_page-1.png",
      "/Sertifikat/sertifikat_course_555_4116833_290426193909_page-2.png"
    ]
  },
  {
    title: "Belajar Machine Learning untuk Pemula",
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Machine Learning", "Python", "Scikit-learn"],
    color: "#6558f5",
    colorLight: "rgba(101,88,245,0.10)",
    image: "/Gambar/dicoding-square.png",
    credentialId: "MEPJOYORLZ3V",
    credentialUrl: "https://www.dicoding.com/certificates/MEPJOYORLZ3V",
    validity: "Issued 04 Apr 2026 · Expires 04 Apr 2029",
    pages: [
      "/Sertifikat/sertifikat_course_184_4116833_040426104658_page-1.png",
      "/Sertifikat/sertifikat_course_184_4116833_040426104658_page-2.png",
      "/Sertifikat/sertifikat_course_184_4116833_040426104658_page-3.png"
    ]
  },
  {
    title: "Belajar Fundamental Pemrosesan Data",
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Data Wrangling", "Python", "Data Cleaning"],
    color: "#00758f",
    colorLight: "rgba(0,117,143,0.10)",
    image: "/Gambar/dicoding-square.png",
    credentialId: "JLX1VVJ22Z72",
    credentialUrl: "https://www.dicoding.com/certificates/JLX1VVJ22Z72",
    validity: "Issued 14 May 2026 · Expires 14 May 2029",
    pages: [
      "/Sertifikat/sertifikat_course_708_4116833_140526190301_page-1.png",
      "/Sertifikat/sertifikat_course_708_4116833_140526190301_page-2.png"
    ]
  },
  {
    title: "Belajar Matematika untuk Data Science",
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Mathematics", "Data Science", "Statistics"],
    color: "#e97627",
    colorLight: "rgba(233,118,39,0.10)",
    image: "/Gambar/dicoding-square.png",
    credentialId: "JMZVO5E3QXN9",
    credentialUrl: "https://www.dicoding.com/certificates/JMZVO5E3QXN9",
    validity: "Issued 07 Jun 2026 · Expires 07 Jun 2029",
    pages: [
      "/Sertifikat/sertifikat_course_831_4116833_110626175137_page-1.png",
      "/Sertifikat/sertifikat_course_831_4116833_110626175137_page-2.png"
    ]
  },
  // ============================================================
  // TEMPLATE SERTIFIKASI BARU:
  // Untuk menambah sertifikasi baru, hilangkan tanda komen (//) di bawah ini:
  // {
  //   title: "Nama Kelas/Sertifikasi",
  //   issuer: "Nama Penerbit (e.g., Dicoding Indonesia)",
  //   year: "Tahun Penerbitan (e.g., 2026)",
  //   tags: ["Tag1", "Tag2"],
  //   color: "#hexcolor", // Warna aksen untuk thumbnail/kartu
  //   colorLight: "rgba(r,g,b,0.10)", // Warna latar transparan untuk thumbnail/kartu
  //   image: "/Gambar/nama-logo-square.png", // Logo penerbit
  //   credentialId: "IDKredensialUnik",
  //   credentialUrl: "https://link-verifikasi-sertifikat.com",
  //   validity: "Issued Apr 2026 · Expires Apr 2029",
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
    desc: "Data Analysis, Machine Learning (MediaPipe, OpenCV, Scikit-learn), and Scripting",
  },
  {
    name: "MySQL",
    pct: 85,
    color: "#00758f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/mysql/mysql-original.svg",
    desc: "Database Design, Query Optimization, and Relational Data Modeling",
  },
  {
    name: "Tableau",
    pct: 90,
    color: "#e97627",
    icon: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/tableau.svg",
    desc: "Interactive Business Intelligence Dashboards, Storytelling, and Visual Analytics",
  },
  {
    name: "Power BI",
    pct: 85,
    color: "#f2c811",
    icon: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/microsoft-power-bi.svg",
    desc: "BI Reporting, Data Transformation (Power Query), and Severity Analysis Metrics",
  },
  {
    name: "Microsoft Excel",
    pct: 95,
    color: "#107c41",
    icon: "https://cdn.jsdelivr.net/gh/vscode-icons/vscode-icons/icons/file_type_excel.svg",
    desc: "Advanced Calculations, Data Wrangling, Pivot Tables, and Ad-hoc Reporting",
  },
  {
    name: "Git & GitHub",
    pct: 80,
    color: "#f05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/git/git-original.svg",
    desc: "Version Control, Collaborative Workflows, and Repository Management",
  },
  // ============================================================
  // TEMPLATE SKILL BARU:
  // Untuk menambah skill baru, hilangkan tanda komen (//) di bawah ini:
  // {
  //   name: "Nama Skill",
  //   pct: 85, // Angka persentase kemahiran (0-100)
  //   color: "#hexcolor", // Warna aksen visual
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/icons/nama_skill/nama_skill-original.svg", // URL icon SVG devicon/gilbarbara
  //   desc: "Deskripsi keahlian secara singkat",
  // },
  // ============================================================
];

// ============================================================
// TIMELINE — Skills page riwayat proyek
// ============================================================
export const TIMELINE = [
  {
    title: "FaceFit Barber",
    role: "Machine Learning Developer (Team Lead)",
    date: "Feb 2026 - Mar 2026",
    desc: "Mengembangkan pipeline deteksi bentuk wajah menggunakan MediaPipe FaceMesh untuk merekomendasikan gaya rambut secara otomatis dan objektif berdasarkan rasio geometris wajah. Berhasil mengumpulkan, membersihkan, dan menyeimbangkan dataset sebanyak 5.820 gambar menggunakan teknik augmentasi data dengan Imbalance Ratio (IR) terkendali sebesar 1.45×. Dikerjakan dalam rangka program DBS Foundation Coding Camp 2026.",
    tags: ["Python", "MediaPipe", "Streamlit", "OpenCV", "Machine Learning"],
    dir: "left",
  },
  {
    title: "Air Quality Beijing",
    role: "Data Analyst",
    date: "Okt 2025 - Nov 2025",
    desc: "Menganalisis data historis kualitas udara di Beijing yang mencakup 12 stasiun pemantauan terpisah. Melakukan pembersihan data kotor (handling missing values, outliers) dan pengelompokan data polutan utama (PM2.5, PM10, SO2, NO2, CO, O3) menggunakan Pandas. Membangun dashboard analitik interaktif berbasis web menggunakan Streamlit Cloud untuk mempermudah pemantauan kualitas udara secara spasial.",
    tags: ["Python", "Pandas", "Streamlit", "Matplotlib", "Data Analysis"],
    dir: "right",
  },
  {
    title: "UK Road Accident Viz",
    role: "Data Visualization Specialist",
    date: "Mei 2024 - Jun 2024",
    desc: "Membangun visualisasi data interaktif terintegrasi untuk menganalisis kecelakaan lalu lintas di Inggris Raya tahun 2024. Memanfaatkan Tableau Public untuk dashboard performa, Power BI untuk memetakan keparahan kecelakaan lalu lintas (severity analysis), serta Kepler.gl untuk melakukan pemetaan geospatial 3D pola persebaran rawan kecelakaan (hotspots). Dikerjakan sebagai proyek akhir mata kuliah Visualisasi Data di ITERA.",
    tags: ["Tableau", "Power BI", "Kepler.gl", "Python", "Data Visualization"],
    dir: "left",
  },
  // ============================================================
  // TEMPLATE RIWAYAT PROYEK TIMELINE BARU:
  // Untuk menambah riwayat baru di timeline, hilangkan tanda komen (//) di bawah ini:
  // {
  //   title: "Nama Proyek",
  //   role: "Peran Anda (e.g., Data Analyst)",
  //   date: "Bulan Tahun - Bulan Tahun (e.g., Jan 2026 - Mar 2026)",
  //   desc: "Deskripsi lengkap mengenai kontribusi dan lingkup pekerjaan Anda di proyek tersebut.",
  //   tags: ["Tag1", "Tag2"],
  //   dir: "left", // 'left' atau 'right' untuk penempatan di sisi kiri/kanan garis timeline
  // },
  // ============================================================
];
