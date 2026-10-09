📁 **Frontend Structure**



frontend/src/

├── api/                  # backend call (client.ts, projects.api.ts ...)

├── assets/

├── components/

│   ├── ui/               # Button, Card, Badge, Input (reusable)

│   ├── layout/           # Navbar, Footer, MainLayout, AdminLayout

│   └── common/           # ThemeToggle, LangToggle, SectionWrapper, Loader

├── constants/            # routes.ts, navLinks.ts, site.ts

├── hooks/                # useFetch, useScrollTop ...

├── i18n/

│   ├── index.ts

│   └── locales/ en.json, bn.json

├── pages/

│   ├── home/ (Home.tsx + components/ Hero.tsx ...)

│   ├── about/  skills/  projects/  experience/  contact/

│   ├── admin/            # Login, Dashboard, ManageProjects ...

│   └── NotFound.tsx

├── providers/            # AppProviders.tsx, ThemeProvider.tsx

├── routes/               # AppRoute.tsx, ProtectedRoute.tsx

├── types/                # project.ts, skill.ts, experience.ts

├── utils/                # cn.ts, formatDate.ts

├── App.tsx

├── main.tsx

└── index.css

