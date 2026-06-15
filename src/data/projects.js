// ============================================================
// DATA PROJECTS — tambah project baru di sini
// ============================================================
export const PROJECTS = [
  {
    id: 1,
    title: "FaceFit Barber",
    category: "machine-learning",
    categoryLabel: {
      id: "Sains Data & ML",
      en: "Data Science & ML"
    },
    tags: ["Python", "MediaPipe", "Streamlit", "OpenCV"],
    shortDesc: {
      id: "Pipeline deteksi bentuk wajah untuk rekomendasi gaya rambut.",
      en: "Face shape detection pipeline for hairstyle recommendation."
    },
    fullDesc: {
      id: "Mengembangkan pipeline deteksi bentuk wajah menggunakan MediaPipe FaceMesh untuk merekomendasikan gaya rambut secara otomatis dan objektif berdasarkan rasio geometris wajah. Berhasil mengumpulkan, membersihkan, dan menyeimbangkan dataset sebanyak 5.820 gambar menggunakan teknik augmentasi data dengan Imbalance Ratio (IR) terkendali sebesar 1.45×. Dikerjakan dalam rangka program DBS Foundation Coding Camp 2026.",
      en: "Developed a face shape detection pipeline using MediaPipe FaceMesh to automatically and objectively recommend hairstyles based on facial geometric ratios. Successfully gathered, cleaned, and balanced a dataset of 5,820 images using data augmentation with a controlled Imbalance Ratio (IR) of 1.45×. Completed for the DBS Foundation Coding Camp 2026 program."
    },
    thumbnail: "/Gambar/facefit_thumbnail.webp",
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
    role: { id: "Pengembang Machine Learning (Ketua Tim)", en: "Machine Learning Developer (Team Lead)" },
    date: "Feb 2026 - Mar 2026",
    context: { id: "Proyek Bootcamp (Dicoding x DBS)", en: "Bootcamp Project (Dicoding x DBS)" },
    featured: true,
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
      id: "Menganalisis data historis kualitas udara di Beijing yang mencakup 12 stasiun pemantauan terpisah. Melakukan pembersihan data kotor (handling missing values, outliers) dan pengelompokan data polutan utama (PM2.5, PM10, SO2, NO2, CO, O3) menggunakan Pandas. Membangun dashboard analitik interaktif berbasis web menggunakan Streamlit Cloud untuk mempermudah pemantauan kualitas udara secara spasial.",
      en: "Analyzed historical air quality data in Beijing across 12 separate monitoring stations. Handled dirty data cleaning (missing values, outliers) and grouping of main pollutants (PM2.5, PM10, SO2, NO2, CO, O3) using Pandas. Built an interactive web-based analytics dashboard using Streamlit Cloud to facilitate spatial air quality monitoring."
    },
    thumbnail: "/Gambar/air_quality_thumbnail.webp",
    problem: {
      id: "Data kualitas udara perkotaan sangat besar dan kompleks (terdiri dari 6 polutan utama di 12 stasiun pemantauan). Tanpa visualisasi yang baik, pola spasial dan tren polusi sulit dipahami oleh publik.",
      en: "Urban air quality data is large and complex (composed of 6 main pollutants across 12 monitoring stations). Without proper visualization, spatial patterns and pollution trends are difficult for the public to understand."
    },
    methodology: {
      id: "Melakukan analisis data eksploratif (EDA) pada dataset historis polusi Beijing. Menggunakan Pandas untuk agregasi data dan membangun dashboard interaktif dengan Streamlit untuk visualisasi heatmap polutan.",
      en: "Performed exploratory data analysis (EDA) on Beijing historical dataset. Used Pandas for data aggregation and built an interactive dashboard with Streamlit for pollutant heatmap visualization."
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
    role: { id: "Analis Data", en: "Data Analyst" },
    date: "Okt 2025 - Nov 2025",
    context: { id: "Tugas Bootcamp (Dicoding x DBS)", en: "Bootcamp Assignment (Dicoding x DBS)" },
    featured: true,
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
      id: "Membangun visualisasi data interaktif terintegrasi untuk menganalisis kecelakaan lalu lintas di Inggris Raya tahun 2024. Memanfaatkan Tableau Public untuk dashboard performa, Power BI untuk memetakan keparahan kecelakaan lalu lintas (severity analysis), serta Kepler.gl untuk melakukan pemetaan geospatial 3D pola persebaran rawan kecelakaan (hotspots). Dikerjakan sebagai proyek akhir mata kuliah Visualisasi Data di ITERA.",
      en: "Built integrated interactive data visualizations to analyze traffic accidents in the United Kingdom in 2024. Utilized Tableau Public for performance dashboards, Power BI for mapping road accident severity (severity analysis), and Kepler.gl for 3D geospatial mapping of accident hotspot distributions. Done as a final project for the Data Visualization course at ITERA."
    },
    thumbnail: "/Gambar/uk_accident_thumbnail.webp",
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
    role: { id: "Spesialis Visualisasi Data", en: "Data Visualization Specialist" },
    date: "Mei 2024 - Jun 2024",
    context: { id: "Tugas Kuliah ", en: "College Project " },
    featured: true,
  },
  {
    id: 4,
    title: "60KUIZ",
    category: "web-dev",
    categoryLabel: {
      id: "Pengembangan Web",
      en: "Web Development"
    },
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    shortDesc: {
      id: "Aplikasi kuis dan materi pembelajaran interaktif berbasis web untuk siswa Sekolah Dasar.",
      en: "Interactive quiz and educational material web application designed for primary school students."
    },
    fullDesc: {
      id: "Platform pembelajaran interaktif berbasis web yang dikembangkan menggunakan Next.js dan Tailwind CSS untuk SDN 39 Tulang Bawang Tengah. Menyediakan modul kuis interaktif, materi edukasi multimedia, dan dashboard sederhana untuk memantau pemahaman belajar siswa secara menyenangkan.",
      en: "An interactive web-based learning platform developed using Next.js and Tailwind CSS for SDN 39 Tulang Bawang Tengah. It features interactive quiz modules, multimedia educational content, and a simple dashboard to monitor student learning progress in a fun way."
    },
    thumbnail: "/Gambar/60kuiz_thumbnail.webp",
    problem: {
      id: "Metode pembelajaran konvensional di tingkat Sekolah Dasar seringkali kurang menarik bagi siswa digital native, sehingga menurunkan tingkat keterlibatan dan pemahaman materi dasar.",
      en: "Conventional teaching methods at the primary school level are often less engaging for digital native students, leading to lower engagement and retention of basic concepts."
    },
    methodology: {
      id: "Menggunakan Next.js untuk static site generation (SSG) demi performa cepat, dibalut desain visual ramah anak menggunakan Tailwind CSS. Komponen kuis interaktif dibangun menggunakan React state management untuk feedback real-time saat menjawab soal.",
      en: "Utilized Next.js for static site generation (SSG) to ensure fast load times, wrapped in a child-friendly visual interface using Tailwind CSS. Interactive quiz components were built using React state management to provide real-time feedback."
    },
    impact: {
      id: "Meningkatkan partisipasi belajar siswa kelas dasar, mendigitalisasi materi ajar sekolah secara ramah anak, dan mempermudah guru dalam memberikan evaluasi harian secara otomatis.",
      en: "Increased class participation among primary students, digitized school teaching materials in a child-friendly format, and simplified automated daily evaluations for teachers."
    },
    metrics: [
      { label: { id: "Teknologi", en: "Technology" }, value: "Next.js" },
      { label: { id: "Target", en: "Target Users" }, value: "SDN 39 TBT" },
      { label: { id: "Umpan Balik", en: "Feedback" }, value: "Real-time" },
    ],
    github: "https://github.com/Ramaaaadevs/Website-Edukasi-SDN39TBT",
    demo: "https://60kuiz.web.id/",
    icon: "fa-graduation-cap",
    color: "#2ec4b6",
    colorLight: "rgba(46,196,182,0.10)",
    role: { id: "Pengembang Web Fullstack", en: "Fullstack Web Developer" },
    date: "Nov 2024 - Des 2024",
    context: { id: "Tugas Kuliah ", en: "College Project " },
    featured: true,
  },
  {
    id: 5,
    title: "GOR Nusantara",
    category: "web-dev",
    categoryLabel: {
      id: "Pengembangan Web",
      en: "Web Development"
    },
    tags: ["Laravel", "Laravel Reverb", "Vanilla JS", "MySQL", "Tailwind CSS"],
    shortDesc: {
      id: "Sistem reservasi gelanggang olahraga real-time berbasis WebSocket untuk mencegah pemesanan ganda.",
      en: "Real-time sports venue reservation system utilizing WebSockets to prevent double-booking."
    },
    fullDesc: {
      id: "Aplikasi pemesanan lapangan olahraga (GOR) terintegrasi menggunakan Laravel dan WebSocket (Laravel Reverb + Echo) pada frontend Vanilla JS. Memungkinkan pengguna memeriksa ketersediaan jadwal dan melakukan pemesanan secara instan, serta menyinkronkan status slot lapangan secara langsung ke semua pengguna aktif.",
      en: "An integrated sports court booking system powered by Laravel and WebSockets (Laravel Reverb + Echo) on a Vanilla JS frontend. It enables users to check schedule availability and book courts instantly, broadcasting slot updates in real-time to prevent overlapping bookings."
    },
    thumbnail: "/Gambar/gor_nusantara_thumbnail.webp",
    problem: {
      id: "Sistem pemesanan lapangan manual sering menyebabkan tabrakan jadwal (double-booking) karena keterlambatan sinkronisasi data antar pengguna.",
      en: "Manual court reservation systems frequently lead to double-booking conflicts due to delayed data synchronization between users."
    },
    methodology: {
      id: "Membangun REST API backend dengan Laravel dan database MySQL. Integrasi real-time diimplementasikan menggunakan protokol WebSocket via Laravel Reverb dan Echo client. Kalender reservasi interaktif dibuat dengan Vanilla JS.",
      en: "Developed a robust REST API backend with Laravel and MySQL. Real-time synchronization was implemented using WebSocket protocol via Laravel Reverb and Echo client, with an interactive reservation calendar built in Vanilla JS."
    },
    impact: {
      id: "Mencegah tabrakan jadwal hingga 100%, mempercepat proses reservasi lapangan olahraga, dan mengeliminasi proses konfirmasi manual yang tidak efisien.",
      en: "Eliminated booking conflicts completely (100% reduction), speeded up court reservation processing times, and removed inefficient manual validation workflows."
    },
    metrics: [
      { label: { id: "Sinkronisasi", en: "Sync Type" }, value: "WebSockets" },
      { label: { id: "Backend", en: "Backend" }, value: "Laravel 13" },
      { label: { id: "Pencegahan", en: "Prevention" }, value: "100%" },
    ],
    github: "https://github.com/Ramaaaadevs/gor-nusantara",
    demo: "https://ramaaaadevs.github.io/gor-nusantara/",
    icon: "fa-futbol",
    color: "#ff9f1c",
    colorLight: "rgba(255,159,28,0.10)",
    role: { id: "Pengembang Web Fullstack", en: "Fullstack Web Developer" },
    date: "Jan 2025 - Feb 2025",
    context: { id: "Proyek Mandiri", en: "Self Project" },
    featured: false,
  },
  {
    id: 6,
    title: "LibSearch",
    category: "web-dev",
    categoryLabel: {
      id: "Pengembangan Web",
      en: "Web Development"
    },
    tags: ["HTML", "CSS", "JavaScript", "Open Library API"],
    shortDesc: {
      id: "Aplikasi pencarian katalog buku interaktif yang terintegrasi dengan Open Library API.",
      en: "Interactive book catalog search application integrated with the Open Library API."
    },
    fullDesc: {
      id: "Aplikasi berbasis web client-side untuk menjelajahi jutaan judul buku secara gratis. Menggunakan Vanilla JS untuk melakukan fetch data asinkronus ke Open Library API, dilengkapi fitur pencarian dinamis, filter subjek, dan kartu detail informasi buku.",
      en: "A client-side web application designed to browse millions of books. Built with Vanilla JS to perform asynchronous API requests to the Open Library API, featuring dynamic searches, subject filters, and detailed book cards."
    },
    thumbnail: "/Gambar/libsearch_thumbnail.webp",
    problem: {
      id: "Mencari buku referensi akademik atau umum secara cepat di antara database perpustakaan yang besar seringkali rumit dan lambat tanpa antarmuka pencarian yang efisien.",
      en: "Finding academic or general reference books quickly across massive catalogs is often complicated and slow without an efficient search client."
    },
    methodology: {
      id: "Mengimplementasikan HTML5 semantik dan vanilla CSS modern untuk UI responsif. Logika pencarian dibuat menggunakan JavaScript ES6 Async/Await fetch untuk mengakses Open Library endpoint secara dinamis.",
      en: "Implemented semantic HTML5 and modern CSS for a responsive layout. The search and filter logic was built using ES6 JavaScript Async/Await fetch to query the Open Library API endpoints."
    },
    impact: {
      id: "Menyediakan portal pencarian pustaka yang ringan, responsif, dan mudah diakses tanpa memerlukan login atau resource server backend tambahan.",
      en: "Provided a lightweight, highly responsive, and accessible book catalog viewer without requiring login flows or backend server resources."
    },
    metrics: [
      { label: { id: "Integrasi", en: "Integration" }, value: "REST API" },
      { label: { id: "Responsif", en: "Responsive" }, value: "Yes" },
      { label: { id: "Katalog", en: "Catalog Size" }, value: "Millions" },
    ],
    github: "https://github.com/Ramaaaadevs/uts-pemweb-123140116",
    demo: "https://libsearch-pencarianbuku.vercel.app/",
    icon: "fa-book",
    color: "#118ab2",
    colorLight: "rgba(17,138,178,0.10)",
    role: { id: "Pengembang Frontend", en: "Frontend Developer" },
    date: "Okt 2024 - Nov 2024",
    context: { id: "Tugas Kuliah ", en: "College Project " },
    featured: false,
  },
  {
    id: 7,
    title: "TripMate",
    category: "mobile-game",
    categoryLabel: {
      id: "Mobile & Game",
      en: "Mobile & Games"
    },
    tags: ["Kotlin Multiplatform", "Compose Multiplatform", "Gemini API", "Ktor", "SQLDelight"],
    shortDesc: {
      id: "Aplikasi travel planner lintas platform Android & iOS dengan asisten rencana perjalanan berbasis AI.",
      en: "Cross-platform Android & iOS travel planning app with an AI-powered itinerary generator."
    },
    fullDesc: {
      id: "TripMate adalah aplikasi perencana perjalanan lintas platform yang dibangun menggunakan Kotlin Multiplatform (KMP) dan Compose Multiplatform. Mengintegrasikan Gemini API untuk menyusun itinerary otomatis berdasarkan minat, Ktor client untuk konsumsi API eksternal, dan SQLDelight untuk penyimpanan pengeluaran serta catatan perjalanan secara offline.",
      en: "TripMate is a cross-platform travel companion app built using Kotlin Multiplatform (KMP) and Compose Multiplatform. It integrates the Gemini API to generate custom itineraries based on user preferences, Ktor client for networking, and SQLDelight for offline database tracking of travel expenses and logs."
    },
    thumbnail: "/Gambar/tripmate_thumbnail.webp",
    problem: {
      id: "Merencanakan liburan membutuhkan riset destinasi yang melelahkan, sementara mencatat pengeluaran di tengah perjalanan secara manual seringkali tercecer.",
      en: "Planning a trip requires tedious destination research, while manually tracking travel expenses on-the-go is highly prone to data loss and disorganization."
    },
    methodology: {
      id: "Menggunakan arsitektur KMP untuk berbagi logika (sharing business logic) antara Android dan iOS. Compose Multiplatform digunakan untuk UI deklaratif yang seragam. Gemini API digunakan sebagai AI Itinerary Planner, dan SQLDelight untuk local caching database.",
      en: "Used Kotlin Multiplatform framework to share core business logic between Android and iOS. Implemented declarative UI via Compose Multiplatform, AI itinerary planning via Gemini API, and local storage via SQLDelight."
    },
    impact: {
      id: "Mempercepat pembuatan itinerary perjalanan dari hitungan jam menjadi hitungan detik dengan AI, serta memfasilitasi pencatatan keuangan perjalanan secara offline yang andal.",
      en: "Reduced itinerary planning times from hours to seconds using AI, while providing a reliable offline tracker for travel finance management."
    },
    metrics: [
      { label: { id: "Platform", en: "Platforms" }, value: "Android/iOS" },
      { label: { id: "AI Generator", en: "AI Engine" }, value: "Gemini API" },
      { label: { id: "Penyimpanan", en: "Offline Sync" }, value: "SQLDelight" },
    ],
    github: "https://github.com/Ramaaaadevs/Proyek-Pengembangan-Aplikasi-Mobile",
    demo: null,
    icon: "fa-route",
    color: "#ef476f",
    colorLight: "rgba(239,71,111,0.10)",
    role: { id: "Pengembang Mobile", en: "Mobile Developer" },
    date: "Mar 2025 - Mei 2025",
    context: { id: "Tugas Kuliah ", en: "College Project " },
    featured: true,
  },
  {
    id: 8,
    title: "BotVoid",
    category: "mobile-game",
    categoryLabel: {
      id: "Mobile & Game",
      en: "Mobile & Games"
    },
    tags: ["Python", "Greedy Algorithm", "Docker", "Node.js"],
    shortDesc: {
      id: "Game bot berbasis algoritma Greedy Time-Weighted untuk memenangkan kompetisi Etimo Diamonds.",
      en: "Time-Weighted Greedy algorithm bot designed to dominate the Etimo Diamonds game."
    },
    fullDesc: {
      id: "Mengembangkan bot AI otonom untuk game Etimo Diamonds menggunakan algoritma Greedy dengan pembobotan waktu (time-weighted). Bot mengevaluasi skor diamond, jarak kisi, portal, dan batas waktu kembali ke pangkalan untuk memaksimalkan perolehan diamond secara dinamis.",
      en: "Developed an autonomous AI bot for the Etimo Diamonds competition. Powered by a custom Time-Weighted Greedy algorithm, the bot dynamically evaluates diamond scores, grid distances, portals, and safe return-to-base timing to maximize points."
    },
    thumbnail: "/Gambar/botvoid_thumbnail.webp",
    problem: {
      id: "Algoritma Greedy sederhana hanya mengejar objek terdekat secara buta (short-sighted), yang berakibat pada kekalahan dari musuh karena mengabaikan diamond berharga tinggi di kejauhan atau kehabisan waktu di jalan.",
      en: "Simple greedy bots blindly target the nearest diamonds (short-sighted), losing out on high-value clusters or failing to return to base before rounds expire."
    },
    methodology: {
      id: "Merancang fungsi objektif time-weighted: di awal game, bot memprioritaskan nilai diamond tinggi; menjelang akhir game, bot memprioritaskan jarak terdekat. Mengintegrasikan pencarian rute portal dan kalkulator waktu pulang ke base yang aman.",
      en: "Designed a time-weighted utility function: targeting high-value diamonds early in the match and prioritizing proximity near the end. Integrated portal path-finding and a safety margin calculator for base returns."
    },
    impact: {
      id: "Bot berhasil mengungguli bot greedy standar dengan efisiensi pengumpulan poin yang lebih tinggi dan tingkat kegagalan simpan (diamond hangus) sebesar 0%.",
      en: "The bot outperformed standard greedy bots, achieving higher collection efficiency and a 0% point loss (burnt diamonds) rate."
    },
    metrics: [
      { label: { id: "Algoritma", en: "Algorithm" }, value: "Greedy TW" },
      { label: { id: "Kehilangan", en: "Point Loss" }, value: "0%" },
      { label: { id: "Bahasa", en: "Language" }, value: "Python 3" },
    ],
    github: "https://github.com/Ramaaaadevs/Tubes1_Void",
    demo: null,
    icon: "fa-robot",
    color: "#06d6a0",
    colorLight: "rgba(6,214,160,0.10)",
    role: { id: "Pengembang Game & AI", en: "Game & AI Developer" },
    date: "Sep 2024 - Okt 2024",
    context: { id: "Tugas Kuliah ", en: "College Project " },
    featured: false,
  },
  {
    id: 9,
    title: "MathSprint",
    category: "mobile-game",
    categoryLabel: {
      id: "Mobile & Game",
      en: "Mobile & Games"
    },
    tags: ["Python", "Pygame", "JSON"],
    shortDesc: {
      id: "Game edukasi aritmetika cepat berfitur Time Attack dengan penyimpanan skor tertinggi lokal.",
      en: "Educational arithmetic speed game featuring Time Attack and local high score tracking."
    },
    fullDesc: {
      id: "Game edukasi matematika berbasis desktop yang dikembangkan dengan pustaka Pygame. Melatih kecepatan berhitung dengan operasi aritmetika dasar (tambah, kurang, kali, bagi) dalam batasan waktu tertentu, dilengkapi dengan feedback audio-visual yang kaya dan papan skor lokal.",
      en: "A desktop educational mathematics game built using Pygame. It trains user calculation speed on basic arithmetic operations under strict time constraints, featuring rich audio-visual feedback and local high-score persistence."
    },
    thumbnail: "/Gambar/mathsprint_thumbnail.webp",
    problem: {
      id: "Metode latihan matematika tradisional seringkali membosankan bagi anak-anak dan kurang menantang untuk mengukur peningkatan kecepatan reaksi berhitung secara objektif.",
      en: "Traditional math practice can be monotonous, lacking the interactive urgency needed to measure and improve mental calculation speed."
    },
    methodology: {
      id: "Membangun game loop Pygame dengan render font kustom. Menghasilkan soal matematika secara acak sesuai dengan 3 tingkat kesulitan (Easy, Medium, Hard). Hasil permainan disimpan secara lokal dalam file JSON.",
      en: "Built a Pygame event loop with custom font rendering. Programmed dynamic math question generators tailored to 3 difficulty settings, and integrated a local JSON high-score tracker."
    },
    impact: {
      id: "Menciptakan media belajar aritmetika yang interaktif dan menyenangkan untuk siswa SD, merangsang jiwa kompetitif mereka melalui fitur Time Attack dan High Score.",
      en: "Created an interactive and engaging tool for primary school students, encouraging repetitive practice through high-score incentives and Time Attack constraints."
    },
    metrics: [
      { label: { id: "Pustaka", en: "Library" }, value: "Pygame" },
      { label: { id: "Tingkat", en: "Difficulties" }, value: "3 Modes" },
      { label: { id: "Skor", en: "Score Save" }, value: "JSON Local" },
    ],
    github: "https://github.com/Ramaaaadevs/MathSprint",
    demo: null,
    icon: "fa-calculator",
    color: "#833ab4",
    colorLight: "rgba(131,58,180,0.10)",
    role: { id: "Pengembang Game", en: "Game Developer" },
    date: "Jul 2024 - Agu 2024",
    context: { id: "Proyek Mandiri", en: "Self Project" },
    featured: false,
  },
];

export const CATEGORIES = [
  { value: "all", label: { id: "Semua", en: "All" } },
  { value: "analysis", label: { id: "Analisis", en: "Analysis" } },
  { value: "visualization", label: { id: "Visualisasi", en: "Visualization" } },
  { value: "machine-learning", label: { id: "Sains Data & ML", en: "Data Science & ML" } },
  { value: "web-dev", label: { id: "Pengembangan Web", en: "Web Development" } },
  { value: "mobile-game", label: { id: "Mobile & Game", en: "Mobile & Games" } },
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
  {
    id: "60kuiz-web",
    label: "60KUIZ — Website Edukasi",
    src: "https://60kuiz.web.id/",
    link: "https://60kuiz.web.id/",
    fallbackText: {
      id: "Memuat website 60KUIZ...",
      en: "Loading 60KUIZ website..."
    },
    fallbackSub: {
      id: "Platform kuis & materi pembelajaran interaktif SDN 39 TBT",
      en: "Interactive quiz & learning platform for SDN 39 TBT"
    },
    icon: "fa-graduation-cap",
  },
  {
    id: "gor-nusantara-web",
    label: "GOR Nusantara — Reservasi Lapangan",
    src: "https://ramaaaadevs.github.io/gor-nusantara/",
    link: "https://ramaaaadevs.github.io/gor-nusantara/",
    fallbackText: {
      id: "Memuat website GOR Nusantara...",
      en: "Loading GOR Nusantara website..."
    },
    fallbackSub: {
      id: "Sistem reservasi gelanggang olahraga real-time",
      en: "Real-time sports venue reservation system"
    },
    icon: "fa-futbol",
  },
  {
    id: "libsearch-web",
    label: "LibSearch — Katalog Buku",
    src: "https://libsearch-pencarianbuku.vercel.app/",
    link: "https://libsearch-pencarianbuku.vercel.app/",
    fallbackText: {
      id: "Memuat website LibSearch...",
      en: "Loading LibSearch website..."
    },
    fallbackSub: {
      id: "Aplikasi pencarian katalog buku dengan Open Library API",
      en: "Book catalog search client powered by Open Library API"
    },
    icon: "fa-book",
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
    image: "/Gambar/dicoding-square.webp",
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
    image: "/Gambar/dicoding-square.webp",
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
    image: "/Gambar/dicoding-square.webp",
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
    image: "/Gambar/dicoding-square.webp",
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
  {
    title: {
      id: "Memulai Pemrograman dengan Python",
      en: "Starting Programming with Python"
    },
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Python", "Programming"],
    color: "#3572A5",
    colorLight: "rgba(53,114,165,0.10)",
    image: "/Gambar/dicoding-square.webp",
    credentialId: "JMZVOW2YQXN9",
    credentialUrl: "https://www.dicoding.com/certificates/JMZVOW2YQXN9",
    validity: {
      id: "Diterbitkan 28 Feb 2026 · Berlaku s.d. 28 Feb 2029",
      en: "Issued 28 Feb 2026 · Expires 28 Feb 2029"
    },
    pages: [
      "/Sertifikat/sertifikat_course_86_4116833_150626173017_page-1.png",
      "/Sertifikat/sertifikat_course_86_4116833_150626173017_page-2.png",
      "/Sertifikat/sertifikat_course_86_4116833_150626173017_page-3.png"
    ]
  },
  {
    title: {
      id: "Belajar Dasar Visualisasi Data",
      en: "Learn Basics Data Visualization"
    },
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Data Viz", "Matplotlib"],
    color: "#f5a623",
    colorLight: "rgba(245,166,35,0.10)",
    image: "/Gambar/dicoding-square.webp",
    credentialId: "L4PQ9K3O4PO1",
    credentialUrl: "https://www.dicoding.com/certificates/L4PQ9K3O4PO1",
    validity: {
      id: "Diterbitkan 20 Feb 2026 · Berlaku s.d. 20 Feb 2029",
      en: "Issued 20 Feb 2026 · Expires 20 Feb 2029"
    },
    pages: [
      "/Sertifikat/sertifikat_course_177_4116833_150626173109_page-1.png",
      "/Sertifikat/sertifikat_course_177_4116833_150626173109_page-2.png"
    ]
  },
  {
    title: {
      id: "Belajar Dasar Data Science",
      en: "Learn Basics Data Science"
    },
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Data Science", "Python"],
    color: "#4a7cf7",
    colorLight: "rgba(74,124,247,0.10)",
    image: "/Gambar/dicoding-square.webp",
    credentialId: "KEXLQD35YPG2",
    credentialUrl: "https://www.dicoding.com/certificates/KEXLQD35YPG2",
    validity: {
      id: "Diterbitkan 19 Feb 2026 · Berlaku s.d. 19 Feb 2029",
      en: "Issued 19 Feb 2026 · Expires 19 Feb 2029"
    },
    pages: [
      "/Sertifikat/sertifikat_course_615_4116833_150626173124_page-1.png",
      "/Sertifikat/sertifikat_course_615_4116833_150626173124_page-2.png",
      "/Sertifikat/sertifikat_course_615_4116833_150626173124_page-3.png",
      "/Sertifikat/sertifikat_course_615_4116833_150626173124_page-4.png"
    ]
  },
  {
    title: {
      id: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      en: "Introduction to Programming Logic (Programming Logic 101)"
    },
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Programming Logic", "Basic"],
    color: "#2ec4b6",
    colorLight: "rgba(46,196,182,0.10)",
    image: "/Gambar/dicoding-square.webp",
    credentialId: "72ZDJWE4JZYW",
    credentialUrl: "https://www.dicoding.com/certificates/72ZDJWE4JZYW",
    validity: {
      id: "Diterbitkan 15 Feb 2026 · Berlaku s.d. 15 Feb 2029",
      en: "Issued 15 Feb 2026 · Expires 15 Feb 2029"
    },
    pages: [
      "/Sertifikat/sertifikat_course_302_4116833_150626173153_page-1.png",
      "/Sertifikat/sertifikat_course_302_4116833_150626173153_page-2.png"
    ]
  },
  {
    title: {
      id: "Memulai Dasar Pemrograman untuk Menjadi Pengembang",
      en: "Starting Basic Programming to Become a Developer"
    },
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Programming Logic", "Basic"],
    color: "#4a7cf7",
    colorLight: "rgba(74,124,247,0.10)",
    image: "/Gambar/dicoding-square.webp",
    credentialId: "JLX1VQ3NJZ72",
    credentialUrl: "https://www.dicoding.com/certificates/JLX1VQ3NJZ72",
    validity: {
      id: "Diterbitkan 12 Feb 2026 · Berlaku s.d. 12 Feb 2029",
      en: "Issued 12 Feb 2026 · Expires 12 Feb 2029"
    },
    pages: [
      "/Sertifikat/sertifikat_course_237_4116833_150626173218_page-1.png",
      "/Sertifikat/sertifikat_course_237_4116833_150626173218_page-2.png",
      "/Sertifikat/sertifikat_course_237_4116833_150626173218_page-3.png"
    ]
  },
  {
    title: {
      id: "Introduction to Financial Literacy",
      en: "Introduction to Financial Literacy"
    },
    issuer: "Dicoding Indonesia",
    year: "2026",
    tags: ["Financial Literacy", "Basic"],
    color: "#00758f",
    colorLight: "rgba(0,117,143,0.10)",
    image: "/Gambar/dicoding-square.webp",
    credentialId: "MRZMW3K23PYQ",
    credentialUrl: "https://www.dicoding.com/certificates/MRZMW3K23PYQ",
    validity: {
      id: "Diterbitkan 12 Jan 2026 · Berlaku s.d. 12 Jan 2029",
      en: "Issued 12 Jan 2026 · Expires 12 Jan 2029"
    },
    pages: [
      "/Sertifikat/sertifikat_course_905_4116833_150626173229_page-1.png",
      "/Sertifikat/sertifikat_course_905_4116833_150626173229_page-2.png",
      "/Sertifikat/sertifikat_course_905_4116833_150626173229_page-3.png"
    ]
  },
  {
    title: {
      id: "Asisten Tutorial Matematika Dasar I",
      en: "Mathematics Teaching Assistant for Basic Mathematics I"
    },
    issuer: "Institut Teknologi Sumatera",
    year: "2024",
    tags: ["Mathematics", "Teaching"],
    color: "#7f52ff",
    colorLight: "rgba(127,82,255,0.10)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo_ITERA.png",
    credentialId: "01astut012",
    credentialUrl: "https://docs.google.com/spreadsheets/d/1Z9tKEuFrp-AiczzZB5w3MoJzqYVln8m0--wRjw0p5Eg/edit?gid=0#gid=0",
    validity: {
      id: "Diterbitkan Des 2024",
      en: "Issued Dec 2024"
    },
    pages: [
      "/Sertifikat/astutmatdas_page-1.png"
    ]
  },
  {
    title: {
      id: "Asisten Praktikum Pengantar Komputer dan Software I",
      en: "Introduction to Computer and Software Lab Assistant I"
    },
    issuer: "Institut Teknologi Sumatera",
    year: "2025",
    tags: ["PKS", "IT", "Teaching"],
    color: "#00758f",
    colorLight: "rgba(0,117,143,0.10)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo_ITERA.png",
    credentialId: "6812/IT9.3.4/PK.01.06/2025",
    credentialUrl: "",
    validity: {
      id: "Diterbitkan 06 Jan 2025",
      en: "Issued 06 Jan 2025"
    },
    pages: [
      "/Sertifikat/pks1_page-1.png"
    ]
  },
  {
    title: {
      id: "Asisten Praktikum Pengantar Komputer dan Software II",
      en: "Introduction to Computer and Software Lab Assistant II"
    },
    issuer: "Institut Teknologi Sumatera",
    year: "2025",
    tags: ["PKS", "IT", "Teaching"],
    color: "#2ec4b6",
    colorLight: "rgba(46,196,182,0.10)",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo_ITERA.png",
    credentialId: "7048/IT9.4.3/PK.01.04/2025",
    credentialUrl: "https://digisign.itera.ac.id/pengajuan/scan/eyJpdiI6InAxK1YxS2tIelFoNUYzdHR1Q1A3enc9PSIsInZhbHVlIjoiWmUrREVvVGR5NzQwcjR3T3R3VGVWZz09IiwibWFjIjoiYTRjMTk5NDc0N2M4MjQyNjhiZDkzZWQ3NGMyODdmZmJkMGU3NGZkNzRiMDE1MjFmYjk2MTEyNjkxNDY1MmMzMSIsInRhZyI6IiJ9",
    validity: {
      id: "Diterbitkan 09 Sep 2025",
      en: "Issued 09 Sep 2025"
    },
    pages: [
      "/Sertifikat/pks2_page-1.png",
      "/Sertifikat/pks2_page-2.png"
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
  {
    name: "React",
    pct: 80,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: {
      id: "Pengembangan antarmuka pengguna SPA yang dinamis, reaktif, dan berbasis komponen",
      en: "Development of dynamic, reactive, and component-based SPA user interfaces"
    },
  },
  // {
  //   name: "Next.js",
  //   pct: 60,
  //   color: "#000000",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  //   desc: {
  //     id: "Framework React untuk SSR, SSG, optimasi performa SEO, dan routing halaman otomatis",
  //     en: "React framework for SSR, SSG, SEO performance optimization, and automatic routing"
  //   },
  // },
  // {
  //   name: "Laravel",
  //   pct: 60,
  //   color: "#ff2d20",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  //   desc: {
  //     id: "Penyusunan API backend, routing MVC, database ORM Eloquent, dan WebSocket real-time",
  //     en: "Backend API orchestration, MVC routing, Eloquent database ORM, and real-time WebSockets"
  //   },
  // },
  {
    name: "Kotlin",
    pct: 60,
    color: "#7f52ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
    desc: {
      id: "Bahasa pemrograman modern untuk pengembangan aplikasi mobile Android & iOS (KMP)",
      en: "Modern programming language for cross-platform Android & iOS mobile apps (KMP)"
    },
  },
  // {
  //   name: "Tailwind CSS",
  //   pct: 60,
  //   color: "#38b2ac",
  //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  //   desc: {
  //     id: "Pembuatan antarmuka responsif dengan pendekatan utility-first CSS yang cepat",
  //     en: "Building responsive interfaces with a fast utility-first CSS approach"
  //   },
  // },
  {
    name: "Docker",
    pct: 80,
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    desc: {
      id: "Kontainerisasi aplikasi untuk lingkungan pengembangan dan deploy yang konsisten",
      en: "Application containerization for consistent development and deployment environments"
    },
  },
  // {
  //   name: "Vercel",
  //   pct: 60,
  //   color: "#000000",
  //   icon: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/vercel-icon.svg",
  //   desc: {
  //     id: "Platform cloud untuk hosting dan deployment aplikasi web frontend secara instan",
  //     en: "Cloud platform for hosting and instantly deploying frontend web applications"
  //   },
  // },
  // {
  //   name: "Streamlit",
  //   pct: 70,
  //   color: "#ff4b4b",
  //   icon: "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/streamlit.svg",
  //   desc: {
  //     id: "Pembuatan aplikasi web interaktif untuk machine learning dan data science dengan cepat",
  //     en: "Rapid creation of interactive web applications for machine learning and data science"
  //   },
  // },
];




export const TECH_ICONS = {
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Vanilla JS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Kotlin": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "Kotlin Multiplatform": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  "OpenCV": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  "Compose Multiplatform": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg",
  "Tableau": "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/tableau.svg",
  "Power BI": "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/microsoft-power-bi.svg",
  "Streamlit": "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/streamlit.svg",
  "Vercel": "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/vercel-icon.svg",
  "Matplotlib": "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/matplotlib.svg",
  "Gemini API": "https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/google-gemini.svg"
};

export const EDUCATION = [
  {
    institution: "Institut Teknologi Sumatera ",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo_ITERA.png",
    degree: {
      id: "S1 Teknik Informatika",
      en: "B.Cs. Informatics Engineering"
    },
    period: "2023 - 2027",
    grade: "Grade: 3.44",
    desc: {
      id: "Mahasiswa S1 program studi Teknik Informatika.",
      en: "Undergraduate Student in Informatics Engineering."
    }
  },
  {
    institution: "MA Negeri 2 Bandar Lampung",
    logo: "/Gambar/man2.webp",
    degree: {
      id: "Matematika dan Ilmu Pengetahuan Alam (MIPA)",
      en: "Mathematics and Natural Sciences"
    },
    period: "Jul 2020 - Mei 2022",
    grade: "",
    desc: {
      id: "Pendidikan Menengah Atas.",
      en: "High School Education."
    }
  }
];

export const EXPERIENCE = [
  {
    type: "single",
    company: "Coding Camp powered by DBS Foundation",
    logo: "https://framerusercontent.com/images/0gACeXzlMF8hvaAwmBBBg7QunA.png",
    role: {
      id: "Data Scientist Cohort",
      en: "Data Scientist Cohort"
    },
    employmentType: {
      id: "Paruh Waktu",
      en: "Part-time"
    },
    period: {
      id: "Feb 2026 - Sekarang · 5 Bln",
      en: "Feb 2026 - Present · 5 Months"
    },
    location: {
      id: "Daring",
      en: "Remote"
    },
    bullets: [
      {
        id: "Terpilih sebagai salah satu dari 3.000 penerima beasiswa dari puluhan ribu pendaftar di seluruh Indonesia untuk program intensif Data Science oleh DBS Foundation x Dicoding.",
        en: "Selected as 1 of 3000 scholars out of tens of thousands of applicants nationwide for an intensive Data Science program by DBS Foundation x Dicoding."
      },
      {
        id: "Menyelesaikan alur belajar terstruktur dan proyek praktis yang berfokus pada masalah data dunia nyata.",
        en: "Completing structured learning paths and hands-on projects focused on real-world data problems."
      }
    ]
  },
  {
    type: "grouped",
    company: "Institut Teknologi Sumatera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo_ITERA.png",
    employmentType: {
      id: "Paruh Waktu",
      en: "Part-time"
    },
    location: {
      id: "Kabupaten Lampung Selatan, Lampung, Indonesia · Luring",
      en: "South Lampung Regency, Lampung, Indonesia · On-site"
    },
    roles: [
      {
        role: {
          id: "Asisten Praktikum Teknologi Digital Dasar",
          en: "Basic Digital Technology Practicum Assistant"
        },
        period: {
          id: "Sep 2025 - Des 2025 · 4 Bln",
          en: "Sep 2025 - Dec 2025 · 4 Months"
        },
        bullets: [
          {
            id: "Membimbing 70+ mahasiswa dalam literasi digital, keamanan data, dan topik etika AI.",
            en: "Guided 70+ students in digital literacy, data security, and AI ethics topics."
          },
          {
            id: "Membekali mahasiswa dengan keterampilan kolaborasi praktis menggunakan Google Workspace (Sheets, Docs, dan Apps Script) untuk otomasi alur kerja.",
            en: "Equipped students with practical collaboration skills using Google Workspace tools including Google Sheets, Google Docs, and Google Apps Script for real-world workflow automation."
          },
          {
            id: "Memfasilitasi sesi langsung tentang teknik prompt AI yang efektif.",
            en: "Facilitated hands-on sessions on effective AI prompting techniques."
          }
        ]
      },
      {
        role: {
          id: "Asisten Praktikum Pengantar Komputer & Software II",
          en: "Introduction to Computer and Software Lab Assistant II"
        },
        period: {
          id: "Feb 2025 - Mei 2025 · 4 Bln",
          en: "Feb 2025 - May 2025 · 4 Months"
        },
        bullets: [
          {
            id: "Membantu 70+ mahasiswa menguasai pemrograman C++ dasar, mencakup percabangan, perulangan, nested loops, array, dan operasi matriks.",
            en: "Assisted 70+ students in mastering fundamental C++ programming, covering branching, loops, nested loops, arrays, and matrix operations."
          },
          {
            id: "Merancang dan mengevaluasi tugas mingguan serta kuis untuk melacak pemahaman dan kemajuan belajar mahasiswa.",
            en: "Designed and evaluated weekly assignments and quizzes to track student understanding and learning progress throughout the semester."
          }
        ]
      },
      {
        role: {
          id: "Asisten Praktikum Pengantar Komputer & Software I",
          en: "Introduction to Computer and Software Lab Assistant I"
        },
        period: {
          id: "Sep 2024 - Des 2024 · 4 Bln",
          en: "Sep 2024 - Dec 2024 · 4 Months"
        },
        bullets: [
          {
            id: "Membimbing 70+ mahasiswa dalam topik dasar ilmu komputer, termasuk sejarah komputer, Microsoft Excel, Word, dan dasar-dasar VBA Macro.",
            en: "Guided 70+ students through foundational computer science topics including computer history, Microsoft Excel, Word, and VBA Macro basics."
          },
          {
            id: "Bertanggung jawab atas sesi praktikum mingguan selama 100 menit, pembuatan tugas, pelaksanaan kuis, dan evaluasi nilai.",
            en: "Responsible for weekly 100-minute sessions, assignment creation, quiz administration, and grade evaluation."
          }
        ]
      },
      {
        role: {
          id: "Asisten Tutorial Matematika",
          en: "Mathematics Teaching Assistant"
        },
        period: {
          id: "Sep 2024 - Des 2024 · 4 Bln",
          en: "Sep 2024 - Dec 2024 · 4 Months"
        },
        bullets: [
          {
            id: "Membimbing 60+ mahasiswa tahun pertama dalam matematika dasar melalui sesi tutorial mingguan terstruktur selama 100 menit.",
            en: "Mentored 60+ first-year students in foundational mathematics through structured weekly 100-minute sessions."
          },
          {
            id: "Mendukung keberhasilan mahasiswa dengan mengelola kuis, penilaian tugas, dan memantau kemajuan belajar individu.",
            en: "Supported student success by managing quizzes, grading, and monitoring individual learning progress across the semester."
          }
        ]
      }
    ]
  }
];

