const site = {
  name: 'Yoonow Technologies',
  url: 'https://www.yoonowtech.com',
  email: 'info@yoonowtech.com',
  phone: '+91 86105 07446',
  whatsapp: 'https://wa.me/918610507446',
  location: 'Nagercoil · India · UAE · Dubai · Remote Support',
  tagline: 'IT Support · CCTV · Networking · Websites · Software',
  description: 'Yoonow Technologies provides practical IT support, computer and laptop service, networking, CCTV installation, FortiGate firewall setup, QNAP NAS storage, printer support, AMC maintenance, genuine software licensing support, websites, mobile apps, and custom software development for businesses in Nagercoil, India, UAE, Dubai, and remote locations.',
  serviceArea: 'Nagercoil, India, UAE, Dubai, and remote/global support'
};

const nav = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Services',
    href: '/services'
  },
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'Get Quote',
    href: '/quote'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];

const technologies = [
  {
    name: 'Windows',
    slug: 'windows11',
    domain: 'microsoft.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128'
  },
  {
    name: 'Microsoft 365',
    slug: 'microsoftoffice',
    domain: 'microsoft.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=128'
  },
  {
    name: 'Google Workspace',
    slug: 'googleworkspace',
    domain: 'workspace.google.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=workspace.google.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=workspace.google.com&sz=128'
  },
  {
    name: 'Azure',
    slug: 'microsoftazure',
    domain: 'azure.microsoft.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=azure.microsoft.com&sz=128'
  },
  {
    name: 'AWS',
    slug: 'amazonwebservices',
    domain: 'aws.amazon.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128'
  },
  {
    name: 'Sophos',
    slug: 'sophos',
    domain: 'sophos.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=sophos.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=sophos.com&sz=128'
  },
  {
    name: 'D-Link',
    slug: 'dlink',
    domain: 'dlink.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=dlink.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=dlink.com&sz=128'
  },
  {
    name: 'Cloudflare',
    slug: 'cloudflare',
    domain: 'cloudflare.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=128'
  },
  {
    name: 'GitHub',
    slug: 'github',
    domain: 'github.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=github.com&sz=128'
  },
  {
    name: 'Vercel',
    slug: 'vercel',
    domain: 'vercel.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=vercel.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=vercel.com&sz=128'
  },
  {
    name: 'Supabase',
    slug: 'supabase',
    domain: 'supabase.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=supabase.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=supabase.com&sz=128'
  },
  {
    name: 'WordPress',
    slug: 'wordpress',
    domain: 'wordpress.org',
    logoUrl: 'https://www.google.com/s2/favicons?domain=wordpress.org&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=wordpress.org&sz=128'
  },
  {
    name: 'Shopify',
    slug: 'shopify',
    domain: 'shopify.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=shopify.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=shopify.com&sz=128'
  },
  {
    name: 'Dell',
    slug: 'dell',
    domain: 'dell.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=dell.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=dell.com&sz=128'
  },
  {
    name: 'HP',
    slug: 'hp',
    domain: 'hp.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=hp.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=hp.com&sz=128'
  },
  {
    name: 'Lenovo',
    slug: 'lenovo',
    domain: 'lenovo.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=lenovo.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=lenovo.com&sz=128'
  },
  {
    name: 'ASUS',
    slug: 'asus',
    domain: 'asus.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=asus.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=asus.com&sz=128'
  },
  {
    name: 'Acer',
    slug: 'acer',
    domain: 'acer.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=acer.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=acer.com&sz=128'
  },
  {
    name: 'Apple',
    slug: 'apple',
    domain: 'apple.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=apple.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=apple.com&sz=128'
  },
  {
    name: 'Android',
    slug: 'android',
    domain: 'android.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=android.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=android.com&sz=128'
  },
  {
    name: 'Ubuntu',
    slug: 'ubuntu',
    domain: 'ubuntu.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=ubuntu.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=ubuntu.com&sz=128'
  },
  {
    name: 'Intel',
    slug: 'intel',
    domain: 'intel.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=intel.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=intel.com&sz=128'
  },
  {
    name: 'AMD',
    slug: 'amd',
    domain: 'amd.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=amd.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=amd.com&sz=128'
  },
  {
    name: 'Cisco',
    slug: 'cisco',
    domain: 'cisco.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=cisco.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=cisco.com&sz=128'
  },
  {
    name: 'Fortinet / FortiGate',
    slug: 'fortinet',
    domain: 'fortinet.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=fortinet.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=fortinet.com&sz=128'
  },
  {
    name: 'Ubiquiti',
    slug: 'ubiquiti',
    domain: 'ui.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=ui.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=ui.com&sz=128'
  },
  {
    name: 'MikroTik',
    slug: 'mikrotik',
    domain: 'mikrotik.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=mikrotik.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=mikrotik.com&sz=128'
  },
  {
    name: 'TP-Link',
    slug: 'tplink',
    domain: 'tp-link.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=tp-link.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=tp-link.com&sz=128'
  },
  {
    name: 'Netgear',
    slug: 'netgear',
    domain: 'netgear.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=netgear.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=netgear.com&sz=128'
  },
  {
    name: 'QNAP NAS',
    slug: 'qnap',
    domain: 'qnap.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=qnap.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=qnap.com&sz=128'
  },
  {
    name: 'Synology NAS',
    slug: 'synology',
    domain: 'synology.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=synology.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=synology.com&sz=128'
  },
  {
    name: 'VMware',
    slug: 'vmware',
    domain: 'vmware.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=vmware.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=vmware.com&sz=128'
  },
  {
    name: 'Proxmox',
    slug: 'proxmox',
    domain: 'proxmox.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=proxmox.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=proxmox.com&sz=128'
  },
  {
    name: 'Hikvision',
    slug: 'hikvision',
    domain: 'hikvision.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=hikvision.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=hikvision.com&sz=128'
  },
  {
    name: 'Dahua',
    slug: 'dahua',
    domain: 'dahuasecurity.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=dahuasecurity.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=dahuasecurity.com&sz=128'
  },
  {
    name: 'Canon',
    slug: 'canon',
    domain: 'canon.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=canon.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=canon.com&sz=128'
  },
  {
    name: 'Epson',
    slug: 'epson',
    domain: 'epson.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=epson.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=epson.com&sz=128'
  },
  {
    name: 'Brother',
    slug: 'brother',
    domain: 'brother.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=brother.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=brother.com&sz=128'
  },
  {
    name: 'Adobe',
    slug: 'adobe',
    domain: 'adobe.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=adobe.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=adobe.com&sz=128'
  },
  {
    name: 'Autodesk',
    slug: 'autodesk',
    domain: 'autodesk.com',
    logoUrl: 'https://www.google.com/s2/favicons?domain=autodesk.com&sz=128',
    fallbackLogoUrl: 'https://www.google.com/s2/favicons?domain=autodesk.com&sz=128'
  }
];

const completedProjects = [
  {
    slug: 'electra-attendance-software',
    priority: '01',
    title: 'Electra Attendance Software',
    subtitle: 'Web and Android attendance system for field surveyors, draftsmen, approvals, reminders, reporting, and admin control.',
    category: 'Software + Android + Admin System',
    image: '/assets/images/projects/electra-attendance-preview.png',
    status: 'Completed project',
    liveLabel: 'Request private demo access',
    liveNote: 'This attendance software is a private client/internal system. Public login access is restricted to protect company users, attendance data, documents and internal workflow records.',
    introHighlights: [
      'Built as a practical web and Android workflow for daily site data upload, attendance submission and admin review.',
      'The system connects user roles, file uploads, approval status, notifications, analysis and data manager modules in one flow.',
      'This project demonstrates mobile-first UI thinking, PHP API logic, JSON/CSV data handling and real office usage planning.'
    ],
    stack: [
      'HTML',
      'CSS',
      'JavaScript',
      'PHP APIs',
      'JSON / CSV Data',
      'Firebase Cloud Messaging',
      'Python PDF Automation',
      'Android WebView APK',
      'NAS Storage Workflow'
    ],
    summary: 'Electra Attendance Software is a complete web and Android attendance platform for survey field teams, draftsman users and admin users. It handles daily site data upload, attendance submission, pending approval, admin review, notifications, reminders, analytics, data manager, licence control and reporting workflow in one structured system. The system was designed for practical office usage, mobile access and NAS-friendly file/data handling.',
    businessProblem: 'Manual attendance and site data collection becomes difficult when surveyors and draftsmen work on different projects, use different vehicles, carry different equipment and submit work from different locations. The business needed one controlled platform to collect daily attendance, review pending submissions, track users, manage master data, maintain logs and support monthly reporting without scattered manual follow-up.',
    solution: 'A role-based attendance platform was developed with separate flows for surveyors, draftsmen, admins and licence/admin controls. Users submit site data and attendance from mobile or desktop, while admin users can approve or reject submissions, view analysis, manage users/devices, maintain project/activity/car/equipment lists, send notifications and monitor complete system activity.',
    gallery: [
      '/assets/images/projects/electra-site-data-upload.png',
      '/assets/images/projects/electra-approval-workflow.png',
      '/assets/images/projects/electra-notifications.png',
      '/assets/images/projects/electra-admin-panel.png',
      '/assets/images/projects/electra-attendance-analysis.png',
      '/assets/images/projects/electra-data-manager.png'
    ],
    modules: [
      'Splash/session verification screen for controlled app opening before user workflow starts.',
      'Surveyor site data upload and attendance submission with project, activity, car, equipment and receipt/file reference flow.',
      'Separate draftsman daily work log module with check attendance, history and role-based page routing.',
      'Admin approval workflow for submitted attendance with approve, reject, pending review and file verification flow.',
      'Admin panel modules for users, device sessions, analytics, logs, data manager, notifications and licence administration.',
      'Attendance analysis view for total, submitted and not-submitted users with daily follow-up support.',
      'Notification inbox with submitted, approved, rejected and reminder tracking for admin follow-up.',
      'Data manager for projects, activities, cars, equipment and equipment serial list maintenance.',
      'Android bottom navigation for Home, Admin, Notifications, History and More user access.',
      'Android WebView APK delivery with version metadata and internal update control.',
      'Admin notification and reminder logic to reduce manual follow-up and improve daily submission discipline.',
      'Report-friendly data structure prepared for management review, salary report logic and historical audit checking.'
    ],
    howItWorks: [
      'User opens the Android app or web app and the system verifies the session/device before allowing access.',
      'Role detection routes the user to the correct workflow for surveyor, draftsman, admin or licence/admin access.',
      'Surveyor submits site data with project, files, CSV/ZIP references and daily work details from the mobile interface.',
      'Attendance details are stored and routed to the pending approval workflow when approval control is enabled.',
      'Admin reviews each submission, checks files, edits required values and approves or rejects the record.',
      'Notification inbox and FCM alerts inform admins/users about submissions, approvals, reminders and follow-up items.',
      'Admin analysis screens show total users, submitted users and missing submissions for daily monitoring.',
      'Data manager and cron/report workflows keep master lists, reminders, logs and salary/report automation structured.'
    ],
    technical: [
      'Mobile-first frontend built with HTML, CSS and JavaScript for web and Android WebView usage.',
      'PHP API layer for attendance submission, approval action, pending state, analytics, uploads, logs and notification delivery.',
      'Role-based routing for surveyors, draftsmen, admin users and licence-admin access paths.',
      'Server-side validation, duplicate/pending attendance protection, manual entry control and Dubai timezone handling.',
      'JSON/CSV storage structure for master data, attendance status, FCM tokens, licence users and report-related data.',
      'Firebase Cloud Messaging integration with token save/register/delete helpers and admin broadcast support.',
      'Cron automation for attendance reminders, admin alerts, pending approval alerts, birthday/holiday wishes and salary reports.',
      'Python PDF automation support for reporting workflow.',
      'Android APK package with version metadata and optional mandatory update handling.',
      'QNAP/NAS-friendly file reference and internal office storage workflow. Sensitive emails, keys, tokens and internal logs are not shown publicly.',
      'Mobile-friendly spacing, large touch targets and fixed bottom navigation were prepared for practical Android WebView usage.',
      'Public portfolio content is documented safely by converting internal records, user emails, tokens and logs into client-safe technical wording.'
    ],
    visualStructure: [
      'Site Data Upload screen locks the surveyor to the logged-in user, captures project selection, pictures, CSV and ZIP files, then submits the site record.',
      'Attendance Approvals screen lets admins review each submission with submitted time, work date, status, type, project and file proof before approve/reject action.',
      'Notifications inbox groups submitted, approved, rejected and reminder alerts so admins can track daily follow-up items quickly.',
      'Admin Panel controls user/device sessions with search, refresh, logout-all, lock and user access actions.',
      'Attendance Analysis screen shows total, submitted and not-submitted users for the selected date with daily monitoring status.',
      'Add / Update Details screen manages project, activity, car and equipment master data with add, edit and delete actions.'
    ],
    trustNotes: [
      'Shows complete product thinking from mobile UI to admin approval, reporting and notification workflow.',
      'Proves backend API, data validation, device/session, FCM and automation understanding.',
      'Built for real office operations, not only a static demo page.',
      'Demonstrates ability to connect software, Android delivery and NAS-friendly business usage.'
    ],
    filters: [
      'software',
      'android'
    ],
    accessType: 'internalPopup',
    internalTitle: 'Private Client System',
    internalMessage: 'Electra Attendance Software is a private attendance and admin workflow system. Public access is restricted for user privacy, attendance proof protection, internal records and operational security. A safe demo walkthrough can be arranged directly through Yoonow Technologies on request.',
    internalBullets: [
      'Private client system',
      'Attendance data protected',
      'Demo available on request'
    ],
    needLabel: 'Need Similar Software?',
    needTitle: 'Do you need attendance management software like this?',
    needText: 'Yoonow Technologies can build custom attendance, approval, reporting and admin software based on your company workflow, user roles, documents, notifications and reporting requirements.'
  },
  {
    slug: 'project-management-software',
    priority: '02',
    title: 'Project Expense Management Software',
    subtitle: 'Internal expense dashboard that converts Electra attendance days into surveyor and draftsman salary cost reports.',
    category: 'Software + Expense + Salary System',
    image: '/assets/images/projects/project-expense-system.png',
    imageFit: 'contain',
    status: 'Completed project',
    accessType: 'internalPopup',
    liveLabel: 'Click here to view the project page',
    liveNote: 'This project is connected with Electra office attendance and salary workflow. Public access is restricted for internal network security.',
    internalTitle: 'Internal Office System',
    internalMessage: 'This project is connected with Electra Surveying Engineering Services internal attendance and salary workflow. Access is restricted to the Electra office network only for data security, employee salary protection, and internal project cost management. Please contact Yoonow Technologies for a private demo or similar custom software development.',
    internalBullets: [
      'Office network only',
      'Salary data protected',
      'Private demo available'
    ],
    introHighlights: [
      'Built as an internal expense control layer connected with the Electra Attendance Software workflow.',
      'It converts surveyor and draftsman attendance days into month-wise, project-wise and employee-wise salary expense visibility.'
    ],
    stack: [
      'Web Dashboard UI',
      'Attendance Data Integration',
      'Monthly Expense Filters',
      'Employee Salary Rate Logic',
      'Project-wise Cost Summary',
      'Surveyor / Draftsman Role Mapping',
      'Searchable Expense Table',
      'Report Download Workflow',
      'Salary Privacy Control',
      'Internal Network Access'
    ],
    summary: 'Project Expense Management Software is an internal cost control dashboard created to use attendance data from Electra Attendance Software and convert it into working-day and salary expense visibility. It helps the office review surveyor and draftsman effort by month, project and employee without preparing separate manual salary sheets. The dashboard shows total projects, total employees, total work days and total expense in one screen, then gives a searchable project-wise table for daily management checking. This project acts as the second business layer after attendance submission, so management can quickly understand manpower usage, project cost movement, employee-wise allocation and monthly salary impact while keeping sensitive salary data inside the internal office network.',
    businessProblem: 'Attendance was already collected through the Electra Attendance Software, but management still needed a clear way to convert those daily attendance records into project expense and salary cost visibility. Manual checking by project, employee, role, working days and rate can take time, create calculation mistakes and make project cost review difficult.',
    solution: 'A dedicated internal expense dashboard was prepared to read attendance-based working day data, group it by project and employee, separate surveyor and draftsman roles, apply salary/rate values and calculate total expense. The system gives management a simple monthly view with project filter, employee filter, summary cards, searchable table and download/report option.',
    workflowNote: 'This workflow is documented from the provided real project screenshot and the internal business concept shared for the Electra salary expense system.',
    gallery: [
      '/assets/images/projects/project-expense-system.png'
    ],
    modules: [
      'Monthly expense dashboard connected with the attendance workflow from Electra Attendance Software.',
      'Project filter to review all projects or one selected project cost at a time.',
      'Employee filter to check individual surveyor or draftsman attendance-based expense.',
      'Summary cards for total projects, total employees, total work days and total expense amount.',
      'Project-wise table showing project name, employee name, role, days, rate and calculated total.',
      'Surveyor and draftsman role separation for clearer manpower cost monitoring.',
      'Month-based salary review flow for office management and project costing follow-up.',
      'Search and table listing support for quick review of large project attendance records.',
      'Refresh option to reload the latest attendance-to-expense calculation data.',
      'Download/export button for management report usage and monthly office follow-up.',
      'Internal-only access message to avoid exposing protected salary and project cost information.',
      'Simple management dashboard layout designed for quick decision-making inside the office.'
    ],
    howItWorks: [
      'Attendance records are taken from the Electra attendance workflow where surveyors and draftsmen submit daily work.',
      'Management selects the required month to calculate expense only for that salary/reporting period.',
      'The dashboard loads available projects and allows all-project or single-project filtering.',
      'Employee filtering allows management to check one staff member or all employees together.',
      'The system maps each person with their role such as Surveyor or Draftsman for proper cost grouping.',
      'Working days are calculated from submitted attendance records for each project and employee combination.',
      'Salary/rate values are used with the calculated days to show employee-wise and project-wise total expense.',
      'The final table can be refreshed, searched and downloaded for salary review or project cost checking.'
    ],
    howItWorksTitles: [
      'Attendance Source',
      'Month Selection',
      'Project Filter',
      'Employee Filter',
      'Role Mapping',
      'Work Day Count',
      'Expense Calculation',
      'Report Export'
    ],
    technical: [
      'Attendance-to-expense logic prepared as a second layer on top of the Electra attendance system.',
      'Month, project and employee filter controls for quick management review.',
      'Dashboard summary cards showing total projects, total employees, total work days and total expense.',
      'Project table structure with project, employee, role, days, rate and total amount columns.',
      'Role-based grouping for surveyors and draftsmen so manpower cost can be reviewed separately.',
      'Working-day calculation flow designed to reduce manual Excel checking and repeated salary verification work.',
      'Salary/rate mapping concept to convert approved attendance days into expense values.',
      'Searchable tabular view prepared for fast checking of employee and project records.',
      'Refresh action to update the dashboard after attendance or salary data changes.',
      'Download/report action for monthly management review and project cost documentation.',
      'Private internal deployment model because employee salary and project cost records must not be exposed publicly.',
      'Portfolio-safe public wording prepared without showing internal URLs, salary rates or confidential employee data.'
    ],
    visualStructure: [
      'The Project Expense System dashboard shows month, project and employee filters, total projects, total employees, total work days, total expense and a detailed project-wise salary calculation table.'
    ],
    trustNotes: [
      'Shows how Yoonow can extend one real software project into a connected business reporting system.',
      'Demonstrates practical office understanding by converting attendance records into management expense reports.',
      'Protects sensitive employee salary information by keeping the live system restricted to the internal network.',
      'Proves ability to build custom software around real company workflows instead of generic demo screens.'
    ],
    trustTitles: [
      'Connected Workflow',
      'Cost Visibility',
      'Salary Privacy',
      'Custom Software'
    ],
    filters: [
      'software'
    ],
    needLabel: 'Need Similar Software?',
    needTitle: 'Do you need project expense management software like this?'
  },
  {
    slug: 'billnova-billing-software',
    priority: '03',
    title: 'BillNova Billing Software',
    subtitle: 'Cloud billing workspace for customers, quotations, invoices, receipts, payments, print sharing, backups, and exports.',
    category: 'Billing Software + Web App + Supabase',
    image: '/assets/images/projects/billnova-dashboard.png',
    imageFit: 'contain',
    status: 'Completed project',
    liveUrl: 'https://bill-nova-two.vercel.app',
    liveLabel: 'Click here to view the project page',
    liveNote: 'Opens the secure BillNova login workspace. Client data is protected behind authentication and no public credentials are shown.',
    introHighlights: [
      'Built as a secure billing workspace for customer records, quotations, invoices, receipts, payments and business document follow-up.',
      'The uploaded source folder shows a React + TypeScript + Supabase application with OTP login, Google sign-in, protected routes, database tables, backups and export workflow.'
    ],
    stack: [
      'React + TypeScript',
      'Vite Web App',
      'Supabase Auth',
      'Supabase PostgreSQL',
      'Google OAuth',
      'Email OTP Verification',
      'Protected Routes',
      'Customer Management',
      'Quotation / Invoice / Receipt Flow',
      'Payments Tracking',
      'Recharts Dashboard',
      'Backup / JSON Export',
      'Print / Share PDF',
      'Vercel Deployment',
      'Capacitor-ready App Config'
    ],
    summary: 'BillNova Billing Software is a cloud billing and invoicing workspace created for small businesses, academies and service teams that need clean document management without manual Excel tracking. The system manages customers, company profile, quotations, invoices, receipts, payments, dashboard totals, document printing, sharing, backups and exports from one protected web app. It supports a full office billing workflow from secure sign-in to customer creation, quotation preparation, invoice conversion, receipt generation, payment follow-up and final data backup. With Supabase authentication, database tables, protected routes and deployment-ready Vite structure, BillNova demonstrates a complete client-ready SaaS-style product that can be customised for different businesses, institutions and service companies.',
    businessProblem: 'Small businesses often create quotations, invoices, receipts and payment records in separate files. This can cause duplicate document numbers, missed payment follow-up, difficult customer tracking, weak backup practice and slow reporting. A clean billing workspace was needed to keep company details, customer records, document history, payment status and business exports in one controlled system.',
    solution: 'BillNova was developed as a secure billing platform with authentication, company setup, customer management, quotation/invoice/receipt modules, payment tracking, dashboard analytics, print/share output, backup snapshots and export tools. The system uses Supabase for cloud database and authentication, while the React interface keeps billing tasks simple for daily office use.',
    workflowNote: 'This workflow is prepared from the uploaded BillNova source folder analysis and provided real screenshots. The folder contains 72 files, including React/TypeScript source, Supabase schema/migrations, Vercel configuration, PWA assets, Capacitor configuration and documentation files.',
    gallery: [
      '/assets/images/projects/billnova-login.png',
      '/assets/images/projects/billnova-otp.png',
      '/assets/images/projects/billnova-dashboard.png',
      '/assets/images/projects/billnova-settings.png'
    ],
    modules: [
      'Login screen with password access, keep-me-signed-in option and Google sign-in button.',
      'Registration screen with full name, email, password and 6-digit email OTP verification flow.',
      'OTP verification screen with resend timer and shared OTP input component for secure access.',
      'Protected dashboard showing total customers, total invoiced, total received and outstanding amount.',
      'Customer management module for client/student details, contact information and service/course fields.',
      'Quotation, invoice and receipt document modules with numbering, status and document history flow.',
      'Payment tracking module connected with invoice balance and paid/partially-paid status logic.',
      'Company setup module for business profile, phone, email, address, GST options, bank, signature and seal.',
      'Settings module for account email, password change, daily backup status and manual backup/export actions.',
      'Export data module for downloading records and maintaining business data outside the app when required.',
      'Print page for quotation, invoice and receipt output with contact links, amount in words and payment details.',
      'Desktop wrapper readiness for opening the same billing workspace inside a Windows app style screen when required.',
      'Vercel-ready deployment setup with Supabase configuration and Capacitor-ready app configuration.'
    ],
    howItWorks: [
      'User creates an account or signs in using password, OTP verification or Google authentication.',
      'After login, the company profile is prepared with business details, document prefixes, terms, bank details and branding fields.',
      'Customer records are added with contact details, address, course/service and category/board information.',
      'Quotation records are created first when a customer needs a price estimate or service proposal.',
      'Accepted quotations can be continued into invoices, keeping customer and document data connected.',
      'Payments are recorded against invoices so paid amount, balance amount and invoice status can be tracked clearly.',
      'Receipts and print views support professional PDF/print sharing for clients and office records.',
      'Dashboard, backup and export tools help the business review totals and protect data during regular usage.'
    ],
    howItWorksTitles: [
      'Secure Sign-in',
      'Company Setup',
      'Customer Records',
      'Quotation Flow',
      'Invoice Flow',
      'Payment Tracking',
      'Print / Receipt',
      'Backup & Export'
    ],
    technical: [
      'React 18 and TypeScript frontend with Vite build structure and route-based application pages.',
      'Supabase authentication integration for sign-up, password login, email OTP verification and Google OAuth.',
      'ProtectedRoute, AuthContext and CompanyContext used to control session access and active company data.',
      'Supabase PostgreSQL schema includes profiles, companies, customers, documents, document_items, payments and backup tables.',
      'Row Level Security policies restrict company, customer, document, item and payment records to the authenticated user.',
      'Database RPC functions handle next document number generation and transactional save of document rows with line items.',
      'Payment triggers recalculate paid amount, balance amount and invoice status after payment insert/update/delete.',
      'Dashboard logic computes customers, invoiced amount, received amount, outstanding balance and recent document lists.',
      'Recharts is used for payment and invoice health visualization inside the dashboard.',
      'Backup utility creates daily/manual database snapshots and settings page shows latest backup status.',
      'Export utilities support full JSON backup/export for business data handover and recovery planning.',
      'InvoicePrintView supports browser printing, native share fallback and AndroidBillNova print/share bridge hooks.',
      'PWA assets, service worker, Vercel config and Capacitor config prepare the app for web, desktop wrapper and mobile wrapper workflows.'
    ],
    visualStructure: [
      'Password login screen with BillNova branding, remember-device option, OTP step and Google sign-in access.',
      'OTP verification screen with six-digit code boxes, resend timer and secure sign-in confirmation flow.',
      'Dashboard screen showing total customers, total invoiced, total received, outstanding amount, backup status, charts and recent documents.',
      'Settings screen showing account email, password change, backup status, manual database backup and JSON download options.'
    ],
    trustNotes: [
      'Shows complete product thinking from authentication to billing, payment follow-up, backups, print output and deployment.',
      'Uses Supabase database security, RLS policies and protected frontend routes to keep client data private.',
      'Prepared for real business use with document numbering, invoice status logic, payment tracking and export workflow.',
      'Demonstrates Yoonow capability to build cloud software, desktop-friendly workflows and client-ready business applications.'
    ],
    trustTitles: [
      'Product Thinking',
      'Data Security',
      'Business Ready',
      'Yoonow Capability'
    ],
    filters: [
      'software'
    ],
    needLabel: 'Need Similar Software?',
    needTitle: 'Do you need billing or invoice software like this?'
  },
  {
    slug: 'drone-data-visualization-platform',
    priority: '04',
    title: '360° Drone Data Visualization Platform',
    subtitle: 'Laravel based 360° drone panorama viewer with elevation switching, map markers, node navigation, and multi-domain project deployment.',
    category: 'Drone + 360° Viewer + Map Platform',
    image: '/assets/images/projects/drone-viewer-map.png',
    imageFit: 'contain',
    status: 'Completed project',
    accessType: 'internalPopup',
    liveLabel: 'Click here to view the project page',
    liveNote: 'This 360° drone viewer is a private client project. Public domain access is restricted to protect client confidentiality and hosted panorama data.',
    internalTitle: 'Private Client Project',
    internalMessage: 'This 360° drone visualization platform was developed for a private Dubai client project. Public access is restricted to protect client confidentiality, project location data, drone survey assets and hosted panorama files. A demo or similar custom viewer can be arranged directly through Yoonow Technologies.',
    internalBullets: [
      'Client restricted',
      'Drone assets protected',
      'Private demo available'
    ],
    heroVideo: '/assets/video/drone-visualization-demo.mp4',
    visualVideo: '/assets/video/drone-visualization-demo.mp4',
    videoPoster: '/assets/images/projects/drone-viewer-map.png',
    introHighlights: [
      'Built as a browser-based 360° drone data visualization platform for viewing site panoramas together with a Google satellite map and location markers.',
      'The uploaded source sample shows a Laravel 9 / PHP 8 Blade project using Pano2VR player files, Google Maps API, elevation folders and route-based panorama loading.'
    ],
    stack: [
      'Laravel 9',
      'PHP 8',
      'Blade Views',
      'Pano2VR Player',
      'Google Maps API',
      'JavaScript',
      '360° Panorama XML',
      'Elevation Folders h1-h6',
      'Multi-domain Hosting'
    ],
    summary: '360° Drone Data Visualization Platform is a Laravel-based browser viewer created to present heavy drone panorama data in a simple and professional way. Instead of sharing very large raw folders, the system opens a project domain and loads an interactive 360° panorama together with Google satellite map context, node markers and elevation switching. Users can choose levels such as 5m, 10m, 20m, 50m, 80m and 120m, then review site conditions directly from the browser.',
    businessProblem: 'Drone and 360° survey output can become very large, sometimes reaching many gigabytes across panorama tiles, project folders and multiple site locations. Sharing those raw folders is not practical for clients or management because users need a simple way to open the project, choose a height level, view a panorama and understand where that image belongs on the site map.',
    solution: 'A Laravel based web viewer was prepared to host the heavy panorama assets on the server and show only the clean viewing interface to users. The system loads the correct pano.xml by elevation, displays the 360° viewer through Pano2VR, shows Google satellite map context with markers, and allows the project to be accessed through a normal domain without downloading the full drone data folder.',
    workflowNote: 'This workflow is prepared from the uploaded Laravel source sample, project folder screenshots, and the live viewer screenshot shared for the Palm Jebel Ali 360 project.',
    gallery: [
      '/assets/images/projects/drone-viewer-map.png',
      '/assets/images/projects/drone-viewer-node120.png'
    ],
    modules: [
      'Project domain landing flow that opens the 360° viewer directly in the browser.',
      'Pano2VR panorama player integration for interactive 360° visual movement.',
      'Google satellite map section with drone location markers and site point references.',
      'Elevation selector for switching between 5m, 10m, 20m, 50m, 80m and 120m datasets.',
      'Laravel route handling for elevation and node based panorama access.',
      'Blade layout shared across all elevation views for consistent viewer loading.',
      'Public h1-h6 folder structure for separate panorama XML, skin, image and tile assets.',
      'Split viewer and map layout to compare panorama view with actual site location.',
      'Multi-domain project structure for different 360° projects under separate client/project URLs.',
      'Node based direct access flow for opening a selected panorama point from the URL.',
      'Server-hosted large data workflow where heavy panorama tiles stay outside the public portfolio files.',
      'Client review presentation flow for showing survey progress, island views and site locations clearly.'
    ],
    howItWorks: [
      'User opens the project domain and the Laravel route loads the default 360° viewer screen.',
      'The system checks the selected elevation folder and reads the related pano.xml configuration file.',
      'Pano2VR player renders the panorama inside the browser with navigation skin and compass style controls.',
      'Google Maps loads below the panorama to give satellite context and show the project site area.',
      'The elevation dropdown lets the user switch between height datasets such as 5m, 10m, 20m, 50m, 80m and 120m.',
      'Map pins and node references help users understand which panorama point or site location they are viewing.',
      'The route keeps elevation and node values in the URL so selected views can be opened again directly.',
      'Large image tiles and panorama data stay hosted in the public project folders instead of being downloaded by the portfolio viewer.'
    ],
    howItWorksTitles: [
      'Open Domain',
      'Load XML',
      'Render Panorama',
      'Map Context',
      'Elevation Switch',
      'Node Markers',
      'Direct Route',
      'Server Assets'
    ],
    technical: [
      'Laravel 9 project structure with routes, controller, Blade views, config and package files.',
      'PHP 8 controller checks public elevation folders, validates pano.xml availability and falls back safely when required.',
      'Routes support /{elevation}/{node} for opening a selected height level and node inside the viewer workflow.',
      'Shared Blade layout loads Pano2VR player, viewer skin JavaScript, Google Maps and WebXR helper scripts.',
      'Separate elevation Blade views load their respective pano.xml files from public h1-h6 folders.',
      'Elevation select form maps visible labels 5m, 10m, 20m, 50m, 80m and 120m to h1-h6 datasets.',
      'Split-screen separator and drag workflow support panorama and map viewing in one screen.',
      'Multiple project domains can reuse the same technical pattern with different public panorama datasets.',
      'Security-safe portfolio review avoids including .env, API secrets, cache, vendor, node_modules or large storage folders.'
    ],
    visualStructure: [
      'Screen-recorded private demo video showing the 360° drone viewer, elevation selector, panorama movement and map context without exposing the client logo or public domain.'
    ],
    trustNotes: [
      'Shows capability to handle real large-scale drone visualization data instead of only normal website pages.',
      'Demonstrates connection between Laravel routing, panorama XML, JavaScript viewer logic and map-based presentation.',
      'Gives clients a professional way to review site conditions without downloading 25GB project folders.',
      'Proves Yoonow can build domain-based project viewers for surveying, construction, island development and visual progress reporting.'
    ],
    trustTitles: [
      'Large Data Handling',
      'Viewer Integration',
      'Client Review',
      'Survey Workflow'
    ],
    filters: [
      'drone',
      'tools-platforms'
    ],
    needLabel: 'Need Similar Platform?',
    needTitle: 'Do you need a similar 360° drone visualization platform?',
    needText: 'Yoonow Technologies can build private drone, mapping and 360° visualization platforms for inspection, documentation, site progress review and client presentation workflows.'
  },
  {
    slug: 'fortigate-qnap-cctv-office-setup',
    priority: '05',
    title: 'FortiGate + QNAP NAS + CCTV Office Setup',
    subtitle: 'One complete office infrastructure project combining firewall security, shared NAS storage, and CCTV recording in the same office network.',
    category: 'Network + NAS + CCTV',
    image: '/assets/images/projects/office-infrastructure-preview.png',
    status: 'Completed project',
    needLabel: 'Need Similar Setup?',
    needTitle: 'Do you need a similar office IT, firewall, NAS or CCTV setup?',
    needText: 'Yoonow Technologies can plan, configure and support a professional office setup with firewall security, NAS storage, CCTV recording, monitoring, documentation and future maintenance requirements.',
    stack: [
      'FortiGate Firewall',
      'LAN / WAN Network',
      'Office Switches',
      'Structured Cabling',
      'QNAP NAS',
      'Shared Office Folders',
      'User Access Control',
      'CCTV Cameras',
      'QNAP QVR Pro',
      'Monitoring Screen',
      'Recording Storage',
      'Office IT Documentation'
    ],
    summary: 'This project combines FortiGate office network setup, QNAP NAS file storage and CCTV recording workflow inside one office infrastructure implementation. Instead of treating network, storage and surveillance as separate jobs, the office was planned as one connected IT environment where internet, LAN users, shared folders, NAS storage, camera recording and monitoring work together from the same secured office setup.',
    businessProblem: 'The office needed one reliable infrastructure foundation instead of separate unmanaged systems for internet, file storage and CCTV. Without a controlled firewall, shared NAS access and proper camera recording workflow, users may face network confusion, scattered files, weak access control, storage duplication and difficulty reviewing office security footage.',
    solution: 'A combined office IT setup was prepared with FortiGate firewall for network security, switches and cabling for stable workstation connectivity, QNAP NAS for centralised shared folders and CCTV recording integration, plus monitoring access for office camera review. The result is a cleaner, controlled and easier-to-maintain office infrastructure workflow.',
    workflowNote: 'This portfolio entry merges the earlier Project 05 FortiGate Office Network Setup, Project 06 QNAP NAS Office File System and Project 07 CCTV + QNAP QVR Pro Setup because all three belong to the same completed office infrastructure environment.',
    gallery: [
      '/assets/images/projects/office-infrastructure-fortigate.png',
      '/assets/images/projects/office-infrastructure-qnap-nas.png',
      '/assets/images/projects/office-infrastructure-cctv.png'
    ],
    modules: [
      'FortiGate firewall gateway configuration for office internet, LAN control and secured network traffic flow.',
      'WAN, LAN and switch-side connectivity planning for office computers, printers, NAS devices and surveillance equipment.',
      'Firewall policy and access control planning to support normal office usage while reducing unnecessary exposure.',
      'Structured rack and cable management with organised patching, switch ports and device placement for future maintenance.',
      'QNAP NAS shared folder workflow for department/project data storage and centralised office file access.',
      'User and computer access assignment for shared folders so office files stay controlled instead of scattered across PCs.',
      'NAS storage planning prepared for backup, future expansion, permissions review and documentation support.',
      'Indoor CCTV camera connection workflow integrated with the office network and monitoring screen.',
      'QNAP QVR Pro style recording workflow for camera storage, playback and office security review.',
      'Monitoring display setup for quick camera view checking from the office/server area.',
      'Office infrastructure documentation mindset covering device roles, network purpose, storage purpose and support follow-up.',
      'Sensitive firewall values, public IPs, passwords, usernames, serial numbers and license details are excluded from the public portfolio.'
    ],
    howItWorks: [
      'Internet reaches the office network through the FortiGate firewall so connectivity and basic security control start from one central device.',
      'Switches and structured cables distribute the office network to computers, printers, NAS storage and CCTV devices.',
      'Firewall rules and access planning help separate normal office traffic from unnecessary or unsafe access routes.',
      'QNAP NAS keeps shared folders in one central place so office users can access project files through controlled permissions.',
      'User and workstation access is assigned based on practical office roles, helping staff use the correct shared folders every day.',
      'CCTV cameras send their recording stream through the office network to the NAS/QVR recording workflow.',
      'The monitoring screen gives quick live-view checking, while storage planning supports playback and evidence review when needed.',
      'The complete setup is maintained as one office infrastructure system, making support, upgrades and troubleshooting easier.'
    ],
    howItWorksTitles: [
      'Firewall Gateway',
      'Network Distribution',
      'Security Rules',
      'Shared Storage',
      'User Access',
      'Camera Recording',
      'Monitoring Review',
      'Support Ready'
    ],
    technical: [
      'FortiGate firewall, LAN/WAN, network switch and patch panel workflow prepared for office connectivity and controlled access.',
      'Firewall rule planning, traffic control and device connectivity checks completed without exposing confidential configuration data.',
      'Organised rack-side equipment placement and cable routing prepared for easier maintenance and future expansion.',
      'QNAP NAS shared folder structure planned for office project files, department folders and controlled user access.',
      'Computer mapping and access assignment workflow prepared so users can work from shared storage instead of local-only files.',
      'Storage capacity and permission planning considered for backup readiness, centralised data management and future growth.',
      'CCTV camera integration prepared through office network connectivity and NAS/QVR recording workflow.',
      'Monitoring and playback workflow documented for daily review, incident checking and maintenance follow-up.',
      'Firewall, NAS and CCTV devices are presented as one connected office infrastructure setup for easier support handling.',
      'Device placement, rack space and cable flow were planned so future maintenance can be done without disturbing office users.',
      'Recording storage, shared files and network access are treated as separate responsibilities inside one controlled infrastructure plan.',
      'Public portfolio images and descriptions use safe infrastructure wording without passwords, public IPs, VPN keys, usernames, serial numbers or license details.'
    ],
    visualStructure: [
      'FortiGate firewall, switches and organised cabling shown as the network/security control layer for the office infrastructure.',
      'QNAP NAS storage units shown as the central shared-file system for office users and project data.',
      'CCTV cameras and monitoring screen shown as the surveillance and QVR-style recording workflow for the same office.'
    ],
    trustNotes: [
      'Shows Yoonow can plan office infrastructure as one connected system instead of only fixing devices one by one.',
      'Combines firewall, network, storage and CCTV knowledge in a practical real-office workflow.',
      'Protects sensitive details while still explaining the business value and technical scope clearly.',
      'Gives clients confidence that the same team can handle installation, configuration, documentation and future support.'
    ],
    trustTitles: [
      'One Office System',
      'Network + Storage + CCTV',
      'Confidential Safe',
      'Support Ready'
    ],
    filters: [
      'infrastructure',
      'network',
      'nas',
      'cctv'
    ]
  },
  {
    slug: 'geometa-pro-website',
    priority: '06',
    title: 'GeoMeta Pro GPS & EXIF Toolkit',
    subtitle: 'Browser-based EXIF metadata viewer with GPS mapping, privacy review, metadata editing, and export tools.',
    category: 'GPS + EXIF + Mapping Tool',
    image: '/assets/images/projects/geometa-pro-dashboard.png',
    imageFit: 'contain',
    status: 'Completed project',
    liveUrl: 'https://geometa-pro.web.app/',
    liveLabel: 'Click here to view the project page',
    liveNote: 'Opens the public GeoMeta Pro live tool where visitors can upload photos locally in the browser, inspect EXIF metadata, map GPS-tagged images, review privacy exposure and export reports.',
    introHighlights: [
      'GeoMeta Pro is a privacy-first browser tool built to inspect EXIF metadata, detect GPS coordinates, preview photo locations and export structured reports without requiring account login or desktop software.',
      'The uploaded source folder shows a modular static web application with dedicated HTML pages, custom CSS, JavaScript modules, export helpers, mapping logic, SEO-ready content pages and Firebase-ready deployment structure.',
      'The provided real screenshots confirm the live workflow: landing dashboard, interactive telemetry mapping, EXIF inspector panel, GPS-tagged file table and Google Earth style location output.'
    ],
    stack: [
      'Browser-based EXIF Reader',
      'GPS Coordinate Extraction',
      'Interactive Leaflet Map',
      'OpenStreetMap Tiles',
      'Privacy Exposure Review',
      'Metadata Edit Workflow',
      'EXIF Scrub & Save',
      'CSV Export',
      'PDF Report Export',
      'KML Export',
      'GeoJSON Export',
      'Responsive Dark/Light UI'
    ],
    summary: 'GeoMeta Pro is a browser-based GPS and EXIF inspection toolkit created to help survey teams, inspectors, GIS users, photographers and privacy-conscious users check hidden image metadata before sharing or submitting photos. The tool reads EXIF data locally in the browser, identifies GPS-tagged images, shows coordinates on an interactive map, builds a simple walk path, lets users inspect camera details, supports metadata editing and EXIF scrubbing, and exports photo evidence in CSV, PDF, KML and GeoJSON formats for reporting and mapping workflows.',
    businessProblem: 'Many image collections contain hidden location data, timestamps, device details and software history, but field teams and office users often do not have a quick way to verify that information before sending photos to clients, using them for GIS review or publishing them publicly. Manual checking through multiple tools can be slow, inconsistent and risky when privacy-sensitive GPS information is overlooked.',
    solution: 'GeoMeta Pro was created as a private browser-first toolkit that reads image metadata locally, detects GPS tags, plots photo locations on a map, highlights privacy exposure, supports address resolution, allows metadata editing or EXIF removal and provides structured export files for office reporting, Google Earth and GIS workflows. This makes the full metadata review process much faster and easier for non-technical users.',
    workflowNote: 'This workflow is documented from the uploaded GeoMeta Pro source folder, the shared real screenshots and the live public project page.',
    gallery: [
      '/assets/images/projects/geometa-pro-dashboard.png',
      '/assets/images/projects/geometa-pro-telemetry.png',
      '/assets/images/projects/geometa-pro-google-earth.png'
    ],
    modules: [
      'Landing dashboard with upload area, statistics cards and privacy-first product introduction.',
      'Multi-image drag-and-drop uploader supporting JPEG, TIFF and PNG files up to the defined size limit.',
      'EXIF parsing workflow to read date, device, camera settings and embedded GPS metadata.',
      'Interactive map panel that plots GPS-tagged images with marker selection and map centering controls.',
      'Telemetry route option to connect image points in sequence and visualise movement path.',
      'Active EXIF Inspector panel that displays file preview, risk level, coordinates and technical image details.',
      'Searchable image table showing filename, timestamp, GPS status, coordinates and quick actions.',
      'Resolve-address workflow to translate coordinates into human-readable street location output.',
      'Metadata editing modal to adjust latitude and longitude values for selected records.',
      'EXIF scrub and save action to create a clean JPG copy without metadata exposure.',
      'Structured export actions for CSV, PDF report, KML and GeoJSON file generation.',
      'Guides, about, contact and legal pages to support SEO, product clarity and public launch readiness.',
      'Google Earth style review support so mapped photo points can also be checked visually outside the main dashboard workflow.'
    ],
    howItWorks: [
      'Users upload one or more image files by drag-and-drop or through the file picker, and the browser starts reading supported photo types locally.',
      'The EXIF parser extracts metadata such as capture time, camera make/model, aperture, focal length, software history and GPS coordinates when available.',
      'The dashboard updates total files, GPS-tagged percentage, top camera and detected location counts for quick batch overview.',
      'GPS-tagged images are placed on the interactive map so users can review location points and optionally visualise the travel path between them.',
      'The table and Active EXIF Inspector allow users to inspect one file in detail, preview coordinates and review privacy exposure factors.',
      'When required, the resolve-address action converts coordinates into readable location names to make evidence review easier for office teams.',
      'Users can edit metadata coordinates or use the scrub action to download a clean JPG copy without original EXIF headers.',
      'After review, the collection can be exported as CSV, PDF, KML or GeoJSON for client submission, GIS workflows or internal documentation.'
    ],
    howItWorksTitles: [
      'Upload Images',
      'Read EXIF Data',
      'Batch Overview',
      'Map GPS Points',
      'Inspect Records',
      'Resolve Addresses',
      'Edit or Scrub',
      'Export Reports'
    ],
    technical: [
      'Modular front-end codebase separated into application controller, EXIF reader, export utilities, map manager and theme logic.',
      'Client-side image processing approach so uploaded photos are read in the browser instead of requiring account-based server upload.',
      'EXIF extraction workflow built with EXIF.js to read metadata tags quickly from supported image files.',
      'Coordinate conversion logic changes DMS GPS values into decimal degree format for mapping and export readiness.',
      'Leaflet-based mapping engine with OpenStreetMap tiles for interactive GPS plotting and map navigation.',
      'Marker refresh and telemetry path logic for visualising multiple photo positions and walk sequences.',
      'Compressed thumbnail generation workflow to keep previews lightweight and improve browser memory usage.',
      'Privacy assessment logic that highlights exposure risk using GPS, timestamp, camera model and software factors.',
      'Metadata edit and scrub workflow to support privacy cleaning and coordinate correction use cases.',
      'Export engine generates CSV, KML, GeoJSON and branded PDF outputs directly in the browser.',
      'Dark/light theme switching, responsive layout and dashboard components improve usability across devices.',
      'Static deployment structure with SEO pages, sitemap, robots.txt and Firebase hosting configuration for public release.'
    ],
    visualStructure: [
      'Main dashboard view showing the GeoMeta Pro hero section, feature highlights, statistics cards, drag-and-drop uploader and privacy-first interface layout.',
      'Interactive telemetry and review workspace showing mapped GPS-tagged images, searchable records table and the Active EXIF Inspector panel with metadata details.',
      'Google Earth style location output showing exported or verified image points for geographical review and visual validation outside the main web interface.'
    ],
    trustNotes: [
      'Shows Yoonow can build a focused utility product, not only brochure websites, by turning a real technical workflow into a usable browser tool.',
      'Demonstrates practical knowledge in EXIF metadata, GPS coordinates, mapping logic, privacy handling and export-ready reporting.',
      'Uses a privacy-first browser workflow that gives end users confidence when checking sensitive photo data before sharing.',
      'Presents a polished product with live deployment, legal pages, guidance content and real screenshots instead of only concept text.'
    ],
    trustTitles: [
      'Utility Product Thinking',
      'Metadata + Mapping Knowledge',
      'Privacy-first Workflow',
      'Public Launch Ready'
    ],
    filters: [
      'tools-platforms'
    ],
    needLabel: 'Need Similar Tool?',
    needTitle: 'Do you need a similar GPS / EXIF mapping tool?',
    needText: 'Yoonow Technologies can build browser-based tools, mapping dashboards, privacy review utilities and data export workflows based on your business process.'
  },
  {
    slug: 'niya-education-academy-website',
    priority: '07',
    title: 'Niya Education Academy Website',
    subtitle: 'Professional education academy website for 10th and 12th learners, board guidance, counseling, enquiries, calls and WhatsApp admission support.',
    category: 'Education Website + Lead Enquiry',
    image: '/assets/images/projects/niya-education-academy-home.png',
    imageFit: 'contain',
    status: 'Completed project',
    liveUrl: 'https://www.niyaeducationacademy.com',
    liveLabel: 'Click here to view the project page',
    liveNote: 'Opens the live Niya Education Academy website with academy branding, programme details, board guidance, counselling content, call action, WhatsApp action and admission enquiry flow.',
    needLabel: 'Need Similar Website?',
    needTitle: 'Do you need a similar education website like this?',
    needText: 'Yoonow Technologies can design and develop professional education websites with course sections, enquiry buttons, contact details, local SEO content and WhatsApp lead flow.',
    introHighlights: [
      'Built as a professional education academy website for students who want to continue, restart or complete 10th and 12th education through guided board options.',
      'The uploaded source folder shows a React + TypeScript + TanStack Start website with route pages, responsive sections, counselling forms, Supabase enquiry support, SMTP email logic and SEO-ready structure.',
      'The provided screenshot shows the final hero layout with NIYA branding, navigation, call button, WhatsApp button, academy message, learner-focused CTA buttons and professional education visual design.'
    ],
    stack: [
      'React 19',
      'TypeScript',
      'TanStack Start',
      'TanStack Router',
      'Vite',
      'Tailwind CSS',
      'Lucide Icons',
      'Supabase Integration',
      'Nodemailer SMTP Enquiry',
      'Google Analytics Events',
      'SEO Landing Pages',
      'Responsive Mobile UI',
      'Admission Lead Capture',
      'Call / WhatsApp CTA',
      'Local SEO Pages'
    ],
    summary: 'Niya Education Academy Website is a professional education lead-generation website created for students and parents looking for 10th and 12th education guidance. The website presents NIYA Education Academy as a trusted learning academy for second-chance learners, discontinued students, private students and home-study learners. It explains board options such as NIOS, BOSSE, NWAC and APOSS, provides counselling-focused content, supports call and WhatsApp actions, includes enquiry forms, and creates a clean online presence for admission guidance and local trust building.',
    businessProblem: 'The academy needed a clear and trustworthy online presence where students and parents could understand available 10th and 12th options, compare boards, get counselling, contact the academy quickly and submit admission enquiries. A normal static page would not be enough because the website needed strong messaging, enquiry capture, WhatsApp support, phone actions, SEO pages and mobile-friendly presentation.',
    solution: 'A modern responsive academy website was prepared with a strong hero section, NIYA branding, programme sections, board guidance, counselling content, testimonials, FAQ, contact actions, enquiry submission workflow, WhatsApp CTA, call CTA and SEO-focused route pages. The source also includes Supabase and SMTP enquiry logic so leads can be captured and sent to the academy team for follow-up.',
    workflowNote: 'This workflow is documented from the uploaded Niya Training Academy source folder and the provided real website screenshot. Only one main visual is used for this portfolio entry as requested.',
    gallery: [
      '/assets/images/projects/niya-education-academy-home.png'
    ],
    modules: [
      'Professional landing hero with NIYA logo, academy tagline, 10th and 12th education message and admission call-to-actions.',
      'Header navigation for Home, About, Counseling, Programs, Boards, Testimonials, FAQ and Contact sections.',
      'Call Now button with direct phone action for fast parent/student enquiry conversion.',
      'WhatsApp button with prepared admission guidance message for instant chat follow-up.',
      'Programme content for 10th learners, 12th learners, discontinued students, private students and home-study learners.',
      'Board guidance content covering NIOS, BOSSE, NWAC and APOSS in simple parent-friendly language.',
      'Counselling section explaining board selection, subject guidance, eligibility clarity and exam preparation support.',
      'Lead enquiry forms connected with validation, consent fields and student/parent contact details.',
      'SMTP email workflow prepared to send enquiry details directly to the academy for admission follow-up.',
      'Supabase integration and migration structure prepared for enquiry data handling and future backend expansion.',
      'Testimonials and trust-building sections to improve parent confidence and academy credibility.',
      'SEO-focused route pages for local Nagercoil education searches such as 10th fail, 12th fail, NIOS admission and open schooling.'
    ],
    howItWorks: [
      'Visitors land on the hero section and immediately understand that NIYA supports 10th and 12th learners who want to continue or restart education.',
      'Parents and students can review the academy message, board options and student support information before making an enquiry.',
      'The website guides users through counselling content so they can understand eligibility, board selection and study support options.',
      'Call and WhatsApp actions allow direct contact without searching for phone numbers or manually typing a message.',
      'The enquiry form collects student details, class requirement, board interest and contact information for follow-up.',
      'Form validation helps reduce invalid submissions and supports cleaner lead capture for the academy team.',
      'SMTP email logic sends the enquiry to the academy mailbox so staff can respond by phone or WhatsApp.',
      'SEO landing pages help the academy reach students searching for 10th, 12th, NIOS, open schooling and second-chance learner support in Nagercoil.'
    ],
    howItWorksTitles: [
      'Hero Message',
      'Board Review',
      'Counselling Flow',
      'Quick Contact',
      'Lead Form',
      'Validation',
      'Email Follow-up',
      'SEO Reach'
    ],
    technical: [
      'React 19 and TypeScript codebase structured for a modern frontend web application.',
      'TanStack Start and TanStack Router used for route-based page structure and future scalable navigation.',
      'Vite-powered development/build setup with npm scripts for dev, build, preview, lint and format workflows.',
      'Tailwind CSS styling and responsive utility classes used for professional academy layout and mobile-friendly sections.',
      'Reusable site configuration stores academy phone, WhatsApp, email, address, opening hours and Google Maps query data.',
      'Lucide React icons used for polished call-to-action buttons, trust elements and section visuals.',
      'Enquiry server function includes schema validation, Indian phone checking, spam-blocking logic and structured form handling.',
      'Nodemailer SMTP workflow prepared for sending admission enquiry email notifications to the academy.',
      'Supabase client, server client and migration files included for enquiry data support and future backend expansion.',
      'Google Analytics event helpers included for lead, phone and WhatsApp click tracking.',
      'SEO route pages prepared for 10th fail students, 12th fail students, NIOS admission, open schooling and second-chance learners in Nagercoil.',
      'Favicon, sitemap, robots.txt and responsive metadata assets prepared for public launch and search engine readiness.'
    ],
    visualStructure: [
      'Homepage hero preview showing NIYA logo, navigation menu, call and WhatsApp buttons, 10th and 12th education headline, academy message, enquiry buttons and student-focused visual branding.'
    ],
    trustNotes: [
      'Shows Yoonow can create a complete education business website with clear content strategy, responsive design and lead generation flow.',
      'Combines academy branding, student counselling message, board guidance and enquiry actions in one professional public website.',
      'Supports real business follow-up through phone, WhatsApp, SMTP enquiry email and future Supabase-backed lead handling.',
      'SEO-focused pages help the academy target local search intent around 10th, 12th, NIOS, open schooling and second-chance education.'
    ],
    trustTitles: [
      'Education Branding',
      'Lead Generation',
      'Business Follow-up',
      'Local SEO Ready'
    ],
    filters: [
      'websites'
    ]
  },
  {
    slug: 'personal-portfolio-website',
    priority: '08',
    title: 'Aswin Murugalingam Personal Portfolio Website',
    subtitle: 'Interactive 3D personal portfolio website for IT operations, infrastructure skills, work experience, certifications and contact enquiry.',
    category: 'Portfolio Webpage + 3D Website',
    image: '/assets/images/projects/aswin-portfolio-home.png',
    status: 'Completed project',
    liveUrl: 'https://www.aswinmurugalingam.com',
    liveLabel: 'Click here to view the project page',
    liveNote: 'Opens the live Aswin Murugalingam personal portfolio webpage with profile branding, interactive 3D workstation visual, work sections, skills, certifications, CV download and contact flow.',
    heroVideo: '/assets/video/aswin-portfolio-demo.mp4',
    visualVideo: '/assets/video/aswin-portfolio-demo.mp4',
    videoPoster: '/assets/images/projects/aswin-portfolio-home.png',
    needLabel: 'Need Similar Portfolio Website?',
    needTitle: 'Do you need a similar portfolio website like this?',
    needText: 'Yoonow Technologies can design and develop a professional portfolio webpage with your personal brand, profile visuals, 3D sections, skills, experience, certifications, testimonials, CV download and contact enquiry flow.',
    introHighlights: [
      'Built as a modern personal brand website for Aswin Murugalingam to present IT administration, system reliability, infrastructure support and professional work credibility.',
      'The uploaded source folder shows a React + Vite portfolio using Three.js, React Three Fiber, Drei, GSAP, Framer Motion, Tailwind CSS and EmailJS-ready contact workflow.',
      'The provided screenshot confirms the live hero direction: dark premium layout, animated personal profile section, navigation, 3D workstation scene, CV download and contact call-to-action.'
    ],
    stack: [
      'React 19',
      'Vite',
      'Three.js',
      'React Three Fiber',
      'Drei 3D Helpers',
      'GSAP Animation',
      'Framer Motion',
      'Tailwind CSS',
      'Lenis Smooth Scroll',
      'EmailJS Contact Flow',
      'Responsive UI',
      'CV Download Workflow',
      'Personal Branding UI',
      '3D Workstation Scene',
      'Portfolio Contact CTA'
    ],
    summary: 'Aswin Murugalingam Personal Portfolio Website is an interactive 3D portfolio webpage created to present professional identity, IT operations experience, technical skills, certifications, testimonials and contact details in one polished digital profile. The website uses a dark premium visual style with profile branding, animated hero text, 3D workstation visuals, smooth scrolling, section-based navigation, CV download and contact enquiry flow. It is designed to help clients, employers and business contacts quickly understand Aswin’s technical capability and reliability-focused IT background.',
    businessProblem: 'A normal resume or simple profile page cannot properly show technical personality, project confidence, system-support capability and professional brand presentation. The portfolio needed to look modern, interactive and credible while still keeping the visitor journey simple: view profile, understand skills, review experience, check certifications, read testimonials and contact directly.',
    solution: 'A React-based interactive portfolio webpage was prepared with a premium dark interface, profile photo card, animated hero headline, 3D computer/workstation canvas, navigation to work, experience, skills, certifications and testimonials, CV download action and contact section. Animation libraries and 3D rendering tools were used carefully to create a modern portfolio feel without losing professional clarity.',
    workflowNote: 'This workflow is documented from the uploaded Aswin portfolio source folder and the provided real homepage screenshot. The inside big preview is prepared as a video card without controls using the video path /assets/video/aswin-portfolio-demo.mp4.',
    gallery: [
      '/assets/images/projects/aswin-portfolio-home.png'
    ],
    modules: [
      'Hero section with name, profile photo card, animated headline and professional IT operations introduction.',
      '3D workstation/computer canvas used to visually represent technical infrastructure and software work.',
      'Navigation menu linking visitors to Work, Experience, Skills, Certifications and Testimonials sections.',
      'Download CV button with ripple feedback and downloadable PDF resume workflow.',
      'Custom cursor and scroll progress components for a premium interactive portfolio feel.',
      'Work showcase section prepared to present completed work, portfolio items and project capability.',
      'Experience section for presenting IT administrator background, responsibilities and professional journey.',
      'Technology stack section for showing technical tools, frameworks and operational skills.',
      'Certification section to highlight professional learning, credentials and credibility markers.',
      'Testimonials section to add social proof and build trust with viewers.',
      'Contact section prepared for enquiries and direct communication from visitors.',
      'Footer and branding flow closing the portfolio with a complete personal profile experience.',
      'Animated section transitions that keep the personal portfolio feeling premium while visitors move through the page.',
      'Live portfolio deployment flow prepared so the personal brand can be shared through a public custom domain.'
    ],
    howItWorks: [
      'Visitors land on the dark premium hero section and immediately see the personal brand name and professional IT operations message.',
      'The profile photo card and animated headline create a strong first impression while explaining the reliability-focused career positioning.',
      'The 3D computer scene supports the technical identity of the portfolio and adds a modern interactive visual experience.',
      'Navigation links guide visitors directly to work, experience, skills, certifications, testimonials and contact sections.',
      'The CV download button gives recruiters or clients a quick way to save the professional resume from the website.',
      'Work and experience sections explain project capability and practical IT administration background.',
      'Skills and certifications sections help visitors understand the technical stack and learning credibility.',
      'The contact section allows viewers to reach out after reviewing the portfolio and professional details.'
    ],
    howItWorksTitles: [
      'Hero Branding',
      'Profile Impact',
      '3D Visual',
      'Section Navigation',
      'CV Download',
      'Work Review',
      'Skills Proof',
      'Contact Flow'
    ],
    technical: [
      'React 19 application structure prepared with reusable components and section-based layout.',
      'Vite development/build setup used for fast local development and deployment-ready production build.',
      'Three.js, React Three Fiber and Drei used for interactive 3D workstation/computer visual presentation.',
      'GSAP and @gsap/react used for hero text reveal animation and scroll-friendly motion effects.',
      'Framer Motion included for additional UI transitions and smooth interactive elements.',
      'Tailwind CSS and custom index.css styling used for responsive dark portfolio layout.',
      'Lenis smooth scroll support included for premium page movement and better user experience.',
      'React Responsive hook logic used to adjust hero layout and 3D canvas behaviour for mobile screens.',
      'Custom cursor and scroll progress components added to improve modern portfolio interaction.',
      'CV download function triggers the PDF file from the public folder with a branded filename.',
      'EmailJS package included to support future client-side contact form email delivery.',
      'Robots.txt, sitemap and public asset structure prepared for portfolio publishing and search visibility.',
      'Performance-conscious 3D rendering setup prepared so the portfolio can keep strong visuals while staying usable across desktop and mobile devices.'
    ],
    visualStructure: [
      'Homepage hero preview showing Aswin Murugalingam branding, navigation menu, profile photo card, animated reliability-focused headline, CV download button, contact action and dark 3D workstation visual direction.'
    ],
    trustNotes: [
      'Shows Yoonow can build a personal brand webpage that feels modern, technical and client-ready instead of a basic static resume page.',
      'Combines React, 3D visual presentation, animation, responsive layout and portfolio content into one professional digital profile.',
      'Supports credibility through work, experience, skills, certifications, testimonials, CV download and contact flow.',
      'Can be reused as a portfolio webpage model for IT professionals, freelancers, designers, consultants and business owners.'
    ],
    trustTitles: [
      'Personal Branding',
      '3D Web Capability',
      'Career Credibility',
      'Reusable Portfolio Model'
    ],
    filters: [
      'websites'
    ]
  },
  {
    slug: 'ihub-mobile-repair-shop-website',
    priority: '09',
    title: 'iHub Mobile Repair Shop Website',
    subtitle: 'Premium mobile, iPhone, Android and laptop repair website with orange-black device care branding and strong service enquiry flow.',
    category: 'Website + Mobile Repair + Service Business',
    image: '/assets/images/projects/ihub-mobile-repair-home.png',
    status: 'Ongoing project',
    accessType: 'internalPopup',
    liveLabel: 'Click here to view the project page',
    liveNote: 'The iHub live webpage is currently under construction. Public access will be available from this button after the final release.',
    internalTitle: 'Website Under Construction',
    internalMessage: 'This iHub Mobile Repair Shop Website is currently under construction. Once the final website is completed and released, you can check the live page from here. Please contact Yoonow Technologies for a demo, progress update or a similar custom webpage requirement.',
    internalBullets: [
      'Under construction',
      'Final release pending',
      'Demo available on request'
    ],
    needLabel: 'Need Similar Website?',
    needTitle: 'Do you need a similar service business website like this?',
    needText: 'Yoonow Technologies can design a custom service-business webpage with premium branding, service sections, pricing blocks, enquiry buttons, WhatsApp flow, responsive layout and launch-ready content.',
    stack: [
      'TanStack Start',
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide Icons',
      'Radix UI Components',
      'Responsive Navigation',
      'Service Sections',
      'Pricing Sections',
      'Contact / CTA Flow'
    ],
    summary: 'iHub Mobile Repair Shop Website is an ongoing premium service-business webpage created for a mobile, iPhone, Android and laptop repair brand. The design uses a strong black and orange visual direction, large hero typography, device repair imagery, call-to-action buttons, service sections, pricing flow, about content and contact enquiry support. It is designed to present a professional repair shop identity, build customer trust and guide visitors quickly toward call, WhatsApp and diagnosis enquiries.',
    businessProblem: 'Mobile repair customers usually decide quickly based on trust, service clarity and easy contact options. A repair business needs a professional webpage that explains what devices are repaired, highlights experience, shows service confidence, supports quick calls or WhatsApp messages and looks strong on mobile screens. A weak or generic webpage can reduce trust and miss urgent repair enquiries.',
    solution: 'A modern branded website was prepared with premium orange-black styling, a large repair-focused hero message, iHub identity, navigation menu, call action, service sections, process flow, gallery, why-us content, pricing blocks, testimonials and contact section. The project is structured as a React/TanStack Start web app so it can grow into a fast, responsive and content-rich repair business website.',
    workflowNote: 'This workflow is documented from the uploaded iHub source folder and the provided real homepage screenshot. The project is marked as ongoing because the live public access is still under construction.',
    gallery: [
      '/assets/images/projects/ihub-mobile-repair-home.png'
    ],
    modules: [
      'Premium homepage hero with iHub logo, navigation menu, repair headline, service promise and strong orange-black branding.',
      'Call Now CTA button designed for fast customer conversion from urgent repair enquiries.',
      'Service overview flow for iPhone, Android, laptop, screen, battery and board-level repair positioning.',
      'Brand trust message showing premium device care and same-day service style communication.',
      'Responsive navigation structure with Home, Services, Pricing, About and Contact sections.',
      'Gallery-ready repair visuals for workshop, screen, board repair and device care presentation.',
      'Pricing section structure prepared to explain repair packages or common service ranges clearly.',
      'Process section planned for diagnosis, repair approval, genuine parts and handover workflow explanation.',
      'Why-us content area prepared for technician trust, warranty, genuine parts and support highlights.',
      'Testimonials section prepared to show customer trust and local service confidence.',
      'Contact and enquiry workflow prepared for phone, WhatsApp and repair diagnosis requests.',
      'Ongoing under-construction access popup added so visitors understand the public page is not released yet.'
    ],
    howItWorks: [
      'Visitors land on a bold hero section that immediately explains the repair business and key value: fixing phones and laptops professionally.',
      'The header gives quick navigation to services, pricing, about and contact so customers can find repair information without confusion.',
      'Call and enquiry buttons guide urgent customers to take action instead of searching manually for contact details.',
      'Service sections explain the types of device support offered, including screen, battery, board and laptop-related repairs.',
      'Gallery and repair visuals help customers understand the workshop style and technical service focus.',
      'Pricing or package sections can show common repair categories and help reduce repeated basic enquiry questions.',
      'Trust sections such as why-us and testimonials support credibility before the customer contacts the shop.',
      'The contact flow converts interested visitors into phone, WhatsApp or diagnosis enquiries for the repair business.'
    ],
    howItWorksTitles: [
      'Hero Message',
      'Navigation Flow',
      'Fast CTA',
      'Service Review',
      'Repair Visuals',
      'Pricing Clarity',
      'Trust Building',
      'Customer Enquiry'
    ],
    technical: [
      'TanStack Start project structure prepared with route-based pages and React component organisation.',
      'React 19 and TypeScript used for modern component-driven webpage development.',
      'Vite build workflow prepared for fast development, preview and production build tasks.',
      'Tailwind CSS styling direction used for responsive layout, spacing, colours and UI consistency.',
      'Framer Motion dependency available for smooth animations and premium service-page interactions.',
      'Lucide icon system available for clean service icons, CTA icons and interface details.',
      'Radix UI component dependencies included for scalable accessible UI patterns when required.',
      'Reusable site sections such as Hero, Services, Process, Gallery, WhyUs, Pricing, Testimonials, CTA and ContactSection are organised separately.',
      'SEO metadata prepared with title, description, author, theme colour and Open Graph content for repair-service search presentation.',
      'Responsive layout prepared so the repair shop page can work across desktop, tablet and mobile visitors.',
      'Error boundary and not-found page structure included for better production reliability.',
      'Public portfolio wording keeps the project marked as ongoing while live release is still under construction.'
    ],
    visualStructure: [
      'Homepage hero preview showing iHub logo, navigation menu, call button, premium device care label, large repair headline, service description, diagnosis CTA, services CTA and device repair visual branding.'
    ],
    trustNotes: [
      'Shows Yoonow can design strong branded webpages for local service businesses with direct customer enquiry goals.',
      'Uses a premium repair-shop visual style instead of a basic template look, helping the business appear more professional.',
      'Connects business content, service explanation, pricing, testimonials and contact flow into one clear customer journey.',
      'Keeps public access clearly marked as under construction until the final live page is ready to release.'
    ],
    trustTitles: [
      'Service Business Focus',
      'Premium Branding',
      'Enquiry Journey',
      'Release Safe'
    ],
    filters: [
      'websites',
      'ongoing'
    ]
  },
  {
    slug: 'vaishu-costume-designer-website',
    priority: '10',
    title: 'Vaishu Costume Designer Website',
    subtitle: 'Ongoing bridal, costume, boutique and training website for a complete fashion studio and customer enquiry workflow.',
    category: 'Fashion Website + Bridal Studio + Boutique',
    image: '/assets/images/projects/vaishu-costume-designer-home.png',
    imageFit: 'contain',
    status: 'Ongoing project',
    accessType: 'internalPopup',
    liveLabel: 'Click here to view the project page',
    liveNote: 'This website is currently under construction. Once the final release is completed, the live page can be checked from here.',
    internalTitle: 'Website Under Construction',
    internalMessage: 'Vaishu Costume Designer Website is currently under construction. The homepage, service sections, costume gallery, booking flow, shop pages and customer enquiry workflow are being prepared. Once the final release is completed, you can access and review the live webpage from here.',
    internalBullets: [
      'Under construction',
      'Fashion website in progress',
      'Live page available after release'
    ],
    needLabel: 'Need Similar Website?',
    needTitle: 'Do you need a similar fashion or portfolio website like this?',
    needText: 'Yoonow Technologies can design and build a professional webpage for boutiques, fashion brands, costume designers, bridal studios and training centres with service sections, gallery, booking CTA, WhatsApp flow and premium brand presentation.',
    stack: [
      'TanStack Start',
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Radix UI Components',
      'Lucide Icons',
      'Supabase Ready',
      'Auth Routes',
      'Shop / Cart Flow',
      'Responsive Fashion UI'
    ],
    summary: 'Vaishu Costume Designer Website is an ongoing fashion and bridal studio webpage created to present bridal couture, costume stitching, costume rentals, stage and dance costumes, aari work, training, boutique shopping and customer enquiry options in one elegant brand experience. The design uses a luxury bridal visual direction with warm gold/brown colours, strong hero messaging, booking actions and category-based navigation so visitors can understand services quickly and contact the business for consultation.',
    businessProblem: 'Fashion, boutique and costume businesses need more than a simple contact page because customers want to see bridal style, service categories, stitching quality, rental options, training details, gallery images and easy booking access before contacting the studio. Without a structured webpage, enquiries can become scattered across calls, WhatsApp and social media without a professional service journey.',
    solution: 'A premium costume designer website was prepared with a bridal-focused homepage, navigation for services, costumes, bridal, training, shop, gallery and contact sections, plus book-now and WhatsApp enquiry actions. The uploaded source folder also includes authenticated account routes, shop/cart flow, gallery pages and Supabase-ready structure, making the project suitable for future expansion beyond a basic brochure webpage.',
    workflowNote: 'This workflow is documented from the uploaded Vaishu Costume Designer project folder and the provided real homepage screenshot. The project is marked as ongoing because the public live access is still under construction.',
    gallery: [
      '/assets/images/projects/vaishu-costume-designer-home.png'
    ],
    modules: [
      'Luxury homepage hero with Vaishu branding, navigation menu, bridal headline, service message and large bridal visual card.',
      'Book Bridal Consultation CTA designed to convert interested visitors into direct booking or enquiry actions.',
      'WhatsApp CTA flow prepared for quick customer conversation from mobile and desktop visitors.',
      'Service navigation for about, services, costumes, bridal, training, shop, gallery and contact pages.',
      'Bridal presentation section focused on couture stitching, bridal blouses and personalised elegance messaging.',
      'Costume category flow prepared for stage costumes, dance costumes, fancy dress, rentals and tailoring work.',
      'Aari work and training content areas prepared for course-style explanation and skill-development enquiries.',
      'Shop/cart workflow included in the source structure for boutique products and customer purchase flow expansion.',
      'Authenticated account routes prepared for orders, appointments and wishlist-style customer workflows.',
      'Gallery-ready structure for showcasing bridal outfits, tailoring samples, rentals and costume portfolio visuals.',
      'Contact and booking sections prepared to collect consultation requests and customer follow-up details.',
      'Under-construction access popup added so portfolio visitors understand the live page is not released yet.'
    ],
    howItWorks: [
      'Visitors land on a premium bridal hero section that introduces the costume designer brand and its main service promise immediately.',
      'The header navigation guides users to services, costume categories, bridal work, training, shop, gallery and contact sections.',
      'Book Now and WhatsApp actions help visitors move from browsing to consultation enquiry without searching for contact details.',
      'Service sections explain couture stitching, costume rentals, aari work, stage/dance costumes and boutique shopping options.',
      'Gallery and portfolio areas can display completed bridal, tailoring, rental and costume design work for customer trust.',
      'Training pages can explain course offerings and help interested learners contact the studio for admission or class details.',
      'Shop and cart routes prepare the site for boutique product display, wishlist, order and checkout expansion later.',
      'The contact and booking workflow converts interested visitors into consultation leads for the costume designer business.'
    ],
    howItWorksTitles: [
      'Bridal Hero',
      'Navigation Flow',
      'Booking CTA',
      'Service Review',
      'Gallery Trust',
      'Training Leads',
      'Shop Expansion',
      'Customer Enquiry'
    ],
    technical: [
      'TanStack Start project structure prepared with route-based React pages and generated route tree workflow.',
      'React 19 and TypeScript used for modern component-based webpage development and maintainable UI sections.',
      'Vite development and build setup prepared for local development, preview and production deployment.',
      'Tailwind CSS styling direction used for responsive spacing, luxury colour palette and fashion-focused layout polish.',
      'Framer Motion dependency available for smooth page animations and premium hero/service interactions.',
      'Radix UI component library included for scalable dialogs, navigation, accordions, tabs, sheets and accessible UI patterns.',
      'Lucide React icons available for booking, navigation, cart, service and contact interface details.',
      'Supabase-ready integration structure included for authentication, account routes and future data-driven workflows.',
      'Shop, cart, checkout, account orders, wishlist and appointments routes prepared for e-commerce or booking expansion.',
      'Reusable components such as Header, Footer, PageHero and Section support consistent layout across pages.',
      'Asset folder includes bridal, tailoring, aari work, training, shop, portfolio and costume category visuals.',
      'Public portfolio wording keeps the project marked as ongoing while the final live release is still under construction.'
    ],
    visualStructure: [
      'Homepage hero preview showing Vaishu Costume Designer branding, navigation menu, bridal consultation CTA, WhatsApp button, luxury bridal headline, service description, trust message and bridal couture visual direction.'
    ],
    trustNotes: [
      'Shows Yoonow can create premium fashion and boutique webpages with strong visual branding instead of simple generic layouts.',
      'Connects service explanation, booking, WhatsApp enquiry, gallery, shop and training into one customer journey.',
      'Demonstrates ability to prepare a webpage that can grow from brand presentation into cart, account and appointment workflows.',
      'Keeps the live access safely marked as under construction until the final webpage is ready for public release.'
    ],
    trustTitles: [
      'Fashion Brand Focus',
      'Customer Journey',
      'Expandable Webpage',
      'Release Safe'
    ],
    filters: [
      'websites',
      'ongoing'
    ]
  },
  {
    slug: 'hirefit-ai',
    priority: '11',
    title: 'HireFit AI',
    subtitle: 'AI-powered career workspace for ATS resume scoring, cover letters, interview preparation and job application tracking.',
    category: 'AI Software + Career Platform',
    image: '/assets/images/projects/hirefit-ai-home.png',
    imageFit: 'contain',
    status: 'Ongoing project',
    accessType: 'internalPopup',
    liveLabel: 'Click here to view the project page',
    liveNote: 'This HireFit AI project is currently running in local development and will be available after final deployment.',
    internalTitle: 'Project Under Construction',
    internalMessage: 'HireFit AI is currently under active development. The local project is working, but public live access will be enabled only after final environment setup, database configuration, AI service keys, deployment checks and release testing are completed. Once finished, you can check the live page from here.',
    internalBullets: [
      'Local build working',
      'Deployment pending',
      'Live access after release'
    ],
    introHighlights: [
      'AI-powered career workspace focused on resume optimisation, ATS scoring, cover letters, interview preparation and job application tracking.',
      'The homepage presents a clean SaaS-style product layout with a live ATS match report preview and clear conversion actions.',
      'Built as an ongoing product with frontend, backend, database, authentication and AI service architecture planned together.',
      'Useful for job seekers who need one focused platform instead of using separate tools for every career task.'
    ],
    stack: [
      'React 19',
      'Vite',
      'TypeScript',
      'Tailwind CSS 4',
      'ShadCN UI',
      'Framer Motion',
      'tRPC',
      'Node.js / Express',
      'Drizzle ORM',
      'MySQL Database',
      'Gemini AI API',
      'ATS Scoring Workflow'
    ],
    summary: 'HireFit AI is an AI-powered career workspace designed to help job seekers improve resumes, beat ATS systems, generate cover letters, prepare for interviews and track every job application in one focused platform. The project presents a clean landing page with an ATS match report preview, skill/keyword/experience/education scoring, recommended fixes, pricing flow, guides, security content and account access direction. It is currently marked as ongoing while the full backend, database, authentication and AI service deployment are being prepared for public release.',
    businessProblem: 'Job seekers often apply to many roles without knowing whether their resume can pass ATS filters or match the exact job description. They may also use separate tools for resume editing, cover letters, interview preparation and application tracking, which creates confusion and weak follow-up. A single AI-assisted workspace was needed to organise the career preparation flow clearly.',
    solution: 'HireFit AI was prepared as a structured career platform with ATS scoring, resume optimisation, cover letter generation, interview preparation, job tracker and AI-supported recommendations. The landing page explains the value clearly, while the project architecture includes frontend, backend, database schema, authentication flow, AI service integration and subscription-ready feature planning.',
    workflowNote: 'This portfolio entry is prepared from the uploaded HireFit AI project folder, README/project documentation and the working local screenshot shared after dependency installation was fixed.',
    gallery: [
      '/assets/images/projects/hirefit-ai-home.png'
    ],
    modules: [
      'Landing page with HireFit AI branding, navigation, login action and get-started call-to-action.',
      'ATS match report preview showing overall score and category-wise results for skills, keywords, experience and education.',
      'Recommended fixes section to guide users on what changes can improve resume performance.',
      'Resume parsing workflow planned to extract candidate name, skills, experience, education and keywords.',
      'Resume optimisation module planned to rewrite content for better ATS matching and job relevance.',
      'Cover letter generation module planned for role-specific professional application documents.',
      'Interview preparation module planned for technical, HR and scenario-based practice questions.',
      'Job application tracker planned to manage company, job title, status, interview date and follow-up notes.',
      'Resume builder workflow planned with ATS-friendly templates and structured profile sections.',
      'Subscription-ready logic planned for free scan limits and Pro unlimited access workflow.',
      'Authentication and protected route planning for user dashboard, saved resumes and private account data.',
      'Guides, pricing, reviews, security, practice, checklist and FAQ pages planned for product trust and conversion.'
    ],
    howItWorks: [
      'A job seeker opens the HireFit AI landing page and understands the product through the ATS scoring preview and career-workspace headline.',
      'The user can upload or prepare resume content so the system can analyse skills, keywords, education and experience alignment.',
      'ATS scoring compares resume details with job expectations and gives an overall match score with category-level breakdown.',
      'Recommended fixes explain which keywords, quantified results or profile improvements should be added before applying.',
      'AI tools can help generate cover letters, improve resume wording and prepare interview questions for the selected role.',
      'The application tracker helps organise job submissions, interview status, follow-ups and notes in one dashboard.',
      'Subscription controls can separate free daily scans from premium/unlimited usage after the product is fully launched.',
      'Final deployment will connect environment variables, database tables, authentication, AI keys and production hosting for public use.'
    ],
    howItWorksTitles: [
      'Product Entry',
      'Resume Input',
      'ATS Scoring',
      'Fix Guidance',
      'AI Tools',
      'Job Tracker',
      'Plan Control',
      'Public Release'
    ],
    technical: [
      'React 19 and TypeScript frontend prepared with Vite build tooling for modern product development.',
      'Tailwind CSS 4 and ShadCN UI used for clean responsive layout, cards, buttons, navigation and product sections.',
      'Framer Motion dependency available for smooth marketing-page animations and premium interaction polish.',
      'Node.js, Express and tRPC architecture prepared for type-safe backend communication and API workflow.',
      'Drizzle ORM and MySQL schema planning included for users, resumes, job descriptions, ATS results and applications.',
      'Gemini AI service planning included for resume parsing, keyword extraction, cover letter creation and interview preparation.',
      'Authentication workflow prepared for protected user routes, dashboard access and private account handling.',
      'ATS scoring concept uses weighted sections such as skills, experience, keywords and education for match reporting.',
      'Application tracker structure prepared for job status, company details, interview date, follow-up reminders and notes.',
      'Subscription model planned for free daily scan limit and Pro access controls after production release.',
      'Environment and dependency setup documented, including TSX dev server workflow and Vite dependency conflict handling.',
      'Public portfolio wording keeps API keys, database credentials, OAuth details and unfinished deployment values hidden.'
    ],
    visualStructure: [
      'Homepage hero preview showing HireFit AI branding, navigation menu, AI-powered career workspace badge, ATS-focused headline, match report card, scoring categories, recommended fixes and career product call-to-action buttons.'
    ],
    trustNotes: [
      'Shows Yoonow can build AI-focused product interfaces with real business use cases beyond static websites.',
      'Demonstrates understanding of resume optimisation, ATS scoring, job application tracking and interview preparation workflows.',
      'Uses a scalable product structure with frontend, backend, database schema, authentication and AI service planning.',
      'Keeps the project safely marked as ongoing until public deployment, credentials and production testing are completed.'
    ],
    trustTitles: [
      'AI Product Direction',
      'Career Workflow',
      'Scalable Stack',
      'Release Safe'
    ],
    filters: [
      'software',
      'tools-platforms',
      'ongoing'
    ],
    needLabel: 'Need Similar AI Platform?',
    needTitle: 'Do you need a similar AI recruitment platform like this?',
    needText: 'Yoonow Technologies can build AI-assisted business platforms with role-based workflows, dashboards, automation, content processing and deployment-ready structure.'
  },
  {
    slug: 'engineiq',
    priority: '12',
    title: 'EngineIQ',
    subtitle: 'All-in-one engineering tools platform with calculators, AI assistant, unit converters, discipline hubs, blog content and free technical references.',
    category: 'Engineering Tools + AI Platform',
    image: '/assets/images/projects/engineiq-home.png',
    imageFit: 'contain',
    status: 'Ongoing project',
    accessType: 'internalPopup',
    liveLabel: 'Click here to view the project page',
    liveNote: 'This EngineIQ engineering tools platform is currently under construction and will be available after final deployment.',
    internalTitle: 'Project Under Construction',
    internalMessage: 'EngineIQ is currently under active development. The homepage and platform structure are prepared, but public live access will be enabled only after calculators, AI assistant pages, content pages, legal pages, deployment settings and final QA checks are completed. Once finished, you can check the live page from here.',
    internalBullets: [
      'Under construction',
      'Engineering tools platform',
      'Live access after release'
    ],
    needLabel: 'Need Similar Platform?',
    needTitle: 'Do you need a similar engineering tools platform like this?',
    needText: 'Yoonow Technologies can plan and build a custom technical platform with tools, calculators, AI assistant, discipline pages, blog content, SEO structure, responsive UI and launch-ready deployment flow.',
    introHighlights: [
      'EngineIQ is planned as a public engineering tools platform with calculators, AI assistant support, discipline hubs and technical reference content.',
      'The homepage introduces 200+ free engineering tools, AI-powered analysis, unit converters and discipline-based navigation in one clean product flow.',
      'The structure is prepared for civil, mechanical, electrical, structural, surveying and other engineering users.',
      'This project demonstrates platform planning, SEO content structure, tool categorisation and future monetisation readiness.'
    ],
    stack: [
      'Static HTML Platform',
      'Custom CSS',
      'JavaScript Modules',
      'Engineering Calculators',
      'AI Assistant Pages',
      'Unit Converter',
      'Discipline Hubs',
      'Blog / Guide Pages',
      'SEO Structure',
      'AdSense-ready Layout',
      'Netlify / Vercel-ready Deployment',
      'Responsive UI'
    ],
    summary: 'EngineIQ is an all-in-one engineering tools platform planned to provide free calculators, AI-powered analysis, unit converters and reference materials for civil, structural, mechanical, electrical, surveying, environmental, chemical and computer engineering users. The homepage presents a modern engineering brand, 200+ free tools message, AI assistant direction, calculator cards, discipline navigation, pricing route and account access flow. The project is structured to grow into a public technical product with calculators, guides, blog articles, legal pages, SEO pages and deployment-ready static hosting.',
    businessProblem: 'Engineering students, site teams and technical professionals often use separate websites or spreadsheets for calculators, unit conversion, references, formulas and AI-based explanation. This makes daily technical checking slower and scattered across many tools. A unified platform was needed to bring multiple disciplines, calculators, AI help and engineering content into one organised workspace.',
    solution: 'EngineIQ was prepared as a clean engineering tools platform with a strong homepage, discipline-based navigation, calculator hubs, AI assistant page, unit converter, blog section, pricing direction, login/signup routes, SEO files, legal pages and deployment guidance. The structure makes it possible to add calculators gradually while keeping the product presentation professional and scalable.',
    workflowNote: 'This portfolio entry is documented from the uploaded EngineIQ / engineering-tools-platform source folder, README deployment guide and provided homepage screenshot. The project is marked as ongoing because the calculator library and public deployment are still being expanded.',
    gallery: [
      '/assets/images/projects/engineiq-home.png'
    ],
    modules: [
      'Homepage hero with EngineIQ branding, navigation menu, free tools badge and engineering platform headline.',
      'Discipline navigation planned for civil, structural, mechanical, electrical, surveying, chemical, environmental and computer engineering.',
      'Calculator hub structure prepared for 200+ engineering tools and search-based access.',
      'AI Engineering Assistant section planned for technical questions, formula help and step-by-step explanations.',
      'Unit converter workflow planned for quick engineering measurement and conversion tasks.',
      "Popular tools area prepared to highlight frequently used calculators such as beam, Ohm's law and surveying tools.",
      'Blog and guide content structure prepared for engineering explanations and organic SEO growth.',
      'Login and Free Sign Up navigation prepared for future account, saved tools or premium workflow expansion.',
      'Pricing section direction prepared for future free/pro plan presentation if the platform is monetised.',
      'AdSense-ready content structure included with ad placement planning, privacy, terms, about and contact pages.',
      'Robots.txt, sitemap and canonical metadata prepared for search-engine indexing and public product launch.',
      'Under-construction access popup added so portfolio visitors understand public release is still pending.'
    ],
    howItWorks: [
      'Visitors land on a clean hero section that explains EngineIQ as a smart engineering platform with free calculators and AI-powered support.',
      'The top navigation allows users to move between disciplines, AI assistant, calculators, blog, pricing, login and signup routes.',
      'Engineering users can select a discipline such as civil, electrical, mechanical, surveying or structural engineering to find relevant tools.',
      'Calculator pages are planned to provide direct technical calculations, formula inputs and practical result outputs.',
      'The AI assistant section can help users ask engineering questions, understand formulas and review technical concepts faster.',
      'Blog and guide pages support long-form learning content, tool explanations and SEO-friendly traffic growth.',
      'Legal, privacy, about and contact pages support public trust, AdSense approval readiness and product credibility.',
      'Final deployment can publish the platform through Netlify, Vercel or GitHub Pages with custom domain and SEO indexing.'
    ],
    howItWorksTitles: [
      'Hero Entry',
      'Navigation Flow',
      'Discipline Selection',
      'Calculator Use',
      'AI Help',
      'Guide Content',
      'Trust Pages',
      'Public Deployment'
    ],
    technical: [
      'Static HTML platform structure prepared with index page, pages folder, robots.txt, sitemap and Netlify configuration.',
      'Custom CSS used for modern light interface, gradient typography, floating hero cards and responsive engineering-product layout.',
      'JavaScript module planning included for featured tools, calculators, utilities and interactive page behaviour.',
      'Engineering discipline folders planned for civil, structural, mechanical, electrical, surveying, chemical, environmental and computer tools.',
      'Calculator page structure prepared for working tools and future TODO calculators across multiple engineering categories.',
      'AI assistant page structure prepared as a future technical help layer for formulas, explanations and problem support.',
      'SEO metadata, canonical URL, sitemap and robots.txt prepared for public search visibility and indexing.',
      'AdSense placement planning included with top, mid-page, bottom and sidebar advertisement positions after approval.',
      'Legal pages such as privacy policy, terms, about and contact included to support public launch and monetisation requirements.',
      'Deployment guide documents GitHub Pages, Netlify, Vercel, custom domain and AdSense approval process.',
      'Portfolio wording keeps unfinished calculator pages and monetisation IDs safely described without exposing incomplete launch details.',
      'Responsive homepage layout prepared so the platform can present cleanly across desktop, tablet and mobile devices.'
    ],
    visualStructure: [
      'Homepage hero preview showing EngineIQ branding, discipline navigation, AI assistant link, calculator/blog/pricing menu, free signup button, 200+ free tools badge, engineering platform headline, call-to-action buttons, stats row and floating tool cards.'
    ],
    trustNotes: [
      'Shows Yoonow can plan a scalable public utility platform instead of only single-page business websites.',
      'Demonstrates technical product thinking across calculators, AI assistant, discipline hubs, guides, SEO and deployment planning.',
      'Creates future monetisation readiness with AdSense-friendly pages, legal content and structured information architecture.',
      'Keeps the project safely marked as ongoing until calculator completion, final QA and public launch are ready.'
    ],
    trustTitles: [
      'Platform Thinking',
      'Engineering Workflow',
      'Launch Ready Structure',
      'Release Safe'
    ],
    filters: [
      'tools-platforms',
      'ongoing'
    ]
  }
];

const services = [
  {
    id: 'computer-service',
    number: '01',
    title: 'Laptop & Computer Service',
    text: 'Diagnostics, OS installation, system upgrades, virus cleanup, data backup, and reliable maintenance for office laptops and desktops.',
    icon: 'monitor',
    featured: true
  },
  {
    id: 'it-support',
    number: '02',
    title: 'Managed IT Support',
    text: 'Remote and on-site help for email, users, printers, software errors, slow systems, device setup, and daily office support requests.',
    icon: 'headset',
    featured: true
  },
  {
    id: 'networking',
    number: '03',
    title: 'Networking & Wi‑Fi',
    text: 'Structured cabling, routers, switches, firewalls, secure Wi‑Fi, office network troubleshooting, and performance optimization.',
    icon: 'network',
    featured: true
  },
  {
    id: 'cybersecurity',
    number: '04',
    title: 'Cybersecurity & Firewall Protection',
    text: 'Firewall setup, endpoint protection, secure access policies, and network hardening to reduce risk across office devices and systems.',
    icon: 'shield',
    featured: true
  },
  {
    id: 'cctv',
    number: '05',
    title: 'CCTV & Security Systems',
    text: 'Camera planning, installation, DVR/NVR setup, remote viewing, storage configuration, and preventive security maintenance.',
    icon: 'camera',
    featured: true
  },
  {
    id: 'server-nas',
    number: '06',
    title: 'Server & NAS Support',
    text: 'Server and NAS deployment, storage configuration, virtualization, backup scheduling, and ongoing performance and health monitoring.',
    icon: 'server'
  },
  {
    id: 'cloud-support',
    number: '07',
    title: 'Cloud Backup, Microsoft 365 & Google Workspace',
    text: 'Cloud backup setup, account migration, and day-to-day administration for Microsoft 365 and Google Workspace environments.',
    icon: 'cloud'
  },
  {
    id: 'printer-support',
    number: '08',
    title: 'Printer & Scanner Support',
    text: 'Installation, network sharing, driver configuration, and troubleshooting for office printers, scanners, and multi-function devices.',
    icon: 'printer'
  },
  {
    id: 'software',
    number: '09',
    title: 'Custom Software Development',
    text: 'Billing tools, CRM systems, attendance portals, dashboards, automation workflows, and business applications tailored to your process.',
    icon: 'code',
    featured: true
  },
  {
    id: 'web-mobile',
    number: '10',
    title: 'Website & Mobile App Development',
    text: 'Professional websites, landing pages, e-commerce builds, Android/iOS apps, and digital platforms optimized for growth.',
    icon: 'phone',
    featured: true
  },
  {
    id: 'software-licensing',
    number: '11',
    title: 'Software Licensing Support',
    text: 'Guidance for genuine software licence selection, purchase coordination, installation, activation, renewal tracking, and licence documentation.',
    icon: 'shield',
    featured: true
  },
  {
    id: 'business-launch-setup',
    number: '12',
    title: 'Business Launch & Office Setup',
    text: 'Business startup checklist support plus full office technology setup: computers, email, website, network, CCTV, backup, software, and handover documentation.',
    icon: 'bolt',
    featured: true
  }
];

const amcPillars = [
  {
    value: '01',
    title: 'Audit',
    text: 'We review systems, networks, CCTV, printers, users, software, and business-critical devices.'
  },
  {
    value: '02',
    title: 'Document',
    text: 'We prepare asset records, configurations, support scope, priorities, and service notes.'
  },
  {
    value: '03',
    title: 'Maintain',
    text: 'We schedule preventive checks, backups, updates, cleanup, and performance monitoring.'
  },
  {
    value: '04',
    title: 'Respond',
    text: 'We handle incidents with clear communication, remote support, and on-site visits when required.'
  }
];

const plans = [
  {
    title: 'Essential',
    desc: 'For small offices that need reliable support for important devices and common IT issues.',
    features: [
      'Up to 10 devices',
      'Remote IT support',
      'Standard response window',
      'Quarterly on-site check'
    ]
  },
  {
    title: 'Business',
    desc: 'For growing teams that want computers, network, printers, CCTV, and support managed together.',
    popular: true,
    features: [
      'Up to 40 devices',
      'Remote + on-site support',
      'Priority response window',
      'Network + CCTV monitoring',
      'Monthly on-site visit'
    ]
  },
  {
    title: 'Enterprise',
    desc: 'For multi-site operations or businesses with critical infrastructure and software needs.',
    features: [
      '40+ devices, multi-site',
      'Dedicated account engineer',
      'Fastest response window',
      'Server & backup management',
      'Custom software support'
    ]
  }
];

const developmentPackages = {
  website: {
    label: 'Website Development',
    intro: 'Launch offer website packages for startups, shops, offices, clinics, academies, and service businesses. Pick the package that matches your current business stage.',
    plans: [
      {
        title: 'Basic Website',
        badge: '50% Launch Offer',
        originalPrice: '₹7,999',
        price: '₹3,999',
        savings: 'You Save ₹4,000',
        delivery: 'Delivery: 3 - 5 Days',
        desc: 'Best for small shops, personal businesses, and single-page service promotions.',
        features: [
          'Single page website',
          'Responsive mobile design',
          'Contact form',
          'Click to call',
          'Click to WhatsApp',
          'Google Map integration',
          'Social media links',
          'SSL / HTTPS setup',
          'Basic SEO'
        ]
      },
      {
        title: 'Standard Website',
        badge: 'Best Starter Deal',
        originalPrice: '₹12,999',
        price: '₹6,999',
        savings: 'You Save ₹6,000',
        delivery: 'Delivery: 5 - 7 Days',
        desc: 'Best for growing businesses that need proper pages and enquiry flow.',
        popular: true,
        features: [
          'Up to 5 pages',
          'Home / About / Services / Contact',
          'Responsive website',
          'Contact form',
          'Click to call',
          'Click to WhatsApp',
          'Gallery or portfolio section',
          'Google Search Console setup',
          'SEO friendly structure'
        ]
      },
      {
        title: 'Business Website',
        badge: 'Most Chosen',
        originalPrice: '₹19,999',
        price: '₹9,999',
        savings: 'You Save ₹10,000',
        delivery: 'Delivery: 7 - 10 Days',
        desc: 'Best for professional companies and service businesses that need stronger presentation.',
        features: [
          'Up to 8 pages',
          'Premium UI design',
          'Service pages',
          'Gallery / portfolio',
          'Testimonials section',
          'Lead enquiry form',
          'WhatsApp integration',
          'Google Business Profile support',
          'Speed optimized',
          'SEO friendly'
        ]
      },
      {
        title: 'Advanced / E-Commerce',
        badge: 'Custom Build',
        originalPrice: '₹29,999',
        price: '₹14,999',
        savings: 'You Save ₹15,000',
        delivery: 'Delivery: 10 - 15 Days',
        desc: 'Best for product listing, online enquiry, and basic e-commerce business needs.',
        features: [
          'Product / service listing pages',
          'Up to 20 products',
          'Category pages',
          'Customer enquiry form',
          'WhatsApp order button',
          'Payment gateway guidance',
          'Admin manageable content option',
          'Google Analytics setup',
          'SEO friendly'
        ]
      }
    ]
  },
  android: {
    label: 'Android Application Development',
    intro: 'Launch offer Android app packages for shops, offices, academies, clinics, service businesses, and growing teams that need mobile access and simple business workflows.',
    plans: [
      {
        title: 'Basic Android App',
        badge: 'Launch Offer',
        originalPrice: '₹24,999',
        price: '₹14,999',
        savings: 'You Save ₹10,000',
        delivery: 'Delivery: 7 - 10 Days',
        desc: 'Best for a simple business app with company, service, enquiry, and contact screens.',
        features: [
          '3 - 5 app screens',
          'Professional Android UI',
          'Business profile screens',
          'Services/contact sections',
          'Call and WhatsApp actions',
          'Basic enquiry form',
          'APK handover'
        ]
      },
      {
        title: 'Standard Android App',
        badge: 'Most Chosen',
        originalPrice: '₹49,999',
        price: '₹29,999',
        savings: 'You Save ₹20,000',
        delivery: 'Delivery: 12 - 18 Days',
        desc: 'Best for apps that need login, forms, database storage, and basic dashboard features.',
        popular: true,
        features: [
          'Login / signup flow',
          'Dashboard and forms',
          'Firebase/Supabase backend',
          'Data storage setup',
          'Basic notification setup',
          'Admin data structure',
          'APK handover'
        ]
      },
      {
        title: 'Business Android App',
        badge: 'Pro Build',
        originalPrice: '₹79,999',
        price: '₹49,999',
        savings: 'You Save ₹30,000',
        delivery: 'Delivery: 20 - 30 Days',
        desc: 'Best for custom business workflows with admin panel, reports, payment, and integrations.',
        features: [
          'Custom business workflow',
          'Admin panel integration',
          'Reports and role access',
          'Payment/API option',
          'Customer or staff module',
          'Testing and handover',
          'Play Store guidance'
        ]
      }
    ]
  }
};

const industries = [
  'Retail & Showrooms',
  'Clinics & Healthcare',
  'Offices & Corporates',
  'Education',
  'Hospitality',
  'Logistics',
  'Real Estate',
  'SMEs & Startups'
];

const stats = [
  {
    value: '100+',
    target: 100,
    suffix: '+',
    label: "Pc's Workstations Assembled"
  },
  {
    value: '50+',
    target: 50,
    suffix: '+',
    label: 'Network Systems Managed'
  },
  {
    value: '50+',
    target: 50,
    suffix: '+',
    label: 'Websites Designed'
  },
  {
    value: '20+',
    target: 20,
    suffix: '+',
    label: 'Custom Software Developed'
  }
];

const launchReadiness = [
  {
    icon: 'monitor',
    title: 'Workstation readiness',
    text: 'PCs, laptops, printers, user accounts, email access, and basic office tools are prepared for day-one work.'
  },
  {
    icon: 'network',
    title: 'Network foundation',
    text: 'Routers, switches, Wi-Fi, internet sharing, firewall basics, and cable planning are arranged cleanly.'
  },
  {
    icon: 'camera',
    title: 'Security setup',
    text: 'CCTV, access points, secure passwords, device protection, and backup planning are included from the start.'
  },
  {
    icon: 'code',
    title: 'Digital presence',
    text: 'Website, domain, business email, forms, and custom software workflows can be planned as your business grows.'
  }
];

const video = {
  title: 'See how we support businesses day to day.',
  text: 'A short walkthrough of how our team handles on-site visits, AMC checks, and support requests.',
  points: [
    'On-site AMC checks',
    'Printer and workstation support',
    'Network, CCTV and firewall review',
    'Backup status and issue follow-up',
    'Clear reporting after every visit',
    'Single support contact for the client team'
  ],
  poster: '/assets/images/team-planning.jpg',
  src: '/assets/video/company-overview.mp4'
};

const promo = {
  label: 'Limited-Time Offer',
  title: 'Get a free on-site IT assessment for your office.',
  text: 'Book a no-obligation site visit and receive a written summary of your network, security, and support gaps.',
  cta: 'Book Free Assessment'
};

module.exports = { site, nav, technologies, completedProjects, services, amcPillars, plans, developmentPackages, industries, stats, launchReadiness, video, promo };
