import FreshMclean from "../assets/freshmclean.png";
import DixanAfterSchool from "../assets/dixan-afterschool.jpg";
import Samantha from "../assets/samantha.jpg";
import UserJourneyMap from "../assets/user-journey.png";
import Storyboard from "../assets/storyboard1.jpeg";
import Storyboard2 from "../assets/storyboard2.jpeg";
import PaperWireframes from "../assets/paper-wireframe1.jpeg";
import PaperWireframes2 from "../assets/paper-wireframe2.jpeg";
import DigitalWireframes from "../assets/digital-wireframe1.png";
import DigitalWireframes2 from "../assets/digital-wireframe2.png";
import LowFidelityPrototype from "../assets/low-fidelity.png";
import UsabilitySession1 from "../assets/WhatsApp Image 2025-04-03 at 9.18.03 AM.jpeg";
import UsabilitySession2 from "../assets/WhatsApp Image 2025-04-03 at 9.18.04 AM.jpeg";
import RefinedDesigns1 from "../assets/schedule.jpg";
import RefinedDesigns2 from "../assets/view-programe.png";
import HighFidelityPrototype from "../assets/high-fidelity.png";

// Verbum Dei Images

import VerbumDeiPortalCover from "../assets/verbumdei/verbumdeihero.png";
import VerbumDeiWireframe1 from "../assets/verbumdei/wireframe1.png";
import VerbumDeiWireframe2 from "../assets/verbumdei/wireframe2.png";
import VerbumDeiWireframe3 from "../assets/verbumdei/wireframe3.png";
import VerbumDeiPrototype from "../assets/verbumdei/prototypeimg.png";
// Add highlight images for Verbum Dei visual highlights
import Highlight1 from "../assets/verbumdei/Verbum-Dei-Mock-up/highlight1.png";
import Highlight2 from "../assets/verbumdei/Verbum-Dei-Mock-up/highlight2.png";
import Highlight3 from "../assets/verbumdei/Verbum-Dei-Mock-up/highlight3.png";
import Highlight4 from "../assets/verbumdei/Verbum-Dei-Mock-up/highlight4.png";
import Highlight5 from "../assets/verbumdei/Verbum-Dei-Mock-up/highlight5.png";
import Highlight6 from "../assets/verbumdei/Verbum-Dei-Mock-up/highlight6.png";
import Highlight7 from "../assets/verbumdei/Verbum-Dei-Mock-up/highlight7.png";
import Highlight8 from "../assets/verbumdei/Verbum-Dei-Mock-up/highlight8.png";

export const portfolioData = [
    {
        id: "freshmclean",
        title: "FreshMclean",
        heroImage: FreshMclean,
        
        overview: {
            duration: "4 months",
            summary: "A comprehensive platform connecting German households with professional cleaners, streamlining the process of booking and managing cleaning services while providing job opportunities for cleaning professionals.",
            problem: "The German cleaning service industry lacks a centralized, user-friendly platform that effectively connects homeowners with reliable cleaning professionals. Current solutions are fragmented, leading to trust issues, scheduling inefficiencies, and poor service quality tracking.",
            goal: "To create a seamless, trustworthy platform that simplifies the process of finding and booking cleaning services while providing cleaning professionals with fair job opportunities and efficient work management tools."
        },

        role: {
            title: "Lead UI/UX Designer",
            responsibilities: [
                "Led the end-to-end design process from research to final implementation",
                "Conducted user research with both homeowners and cleaning professionals",
                "Created and validated wireframes and prototypes",
                "Developed a comprehensive design system for the platform",
                "Collaborated with developers for successful implementation"
            ]
        },

        userResearch: {
            summary: "Our research involved interviews with 25 homeowners and 15 cleaning professionals across major German cities. We also analyzed competitor platforms and conducted surveys to understand user needs and pain points.",
            painPoints: [
                {
                    user: "Homeowners",
                    points: [
                        "Difficulty in finding trustworthy cleaners",
                        "Lack of transparent pricing",
                        "Complicated booking processes",
                        "No way to track cleaning history"
                    ]
                },
                {
                    user: "Cleaning Professionals",
                    points: [
                        "Irregular work schedules",
                        "Payment security concerns",
                        "Difficulty managing multiple clients",
                        "Limited tools for route optimization"
                    ]
                }
            ],
            personas: [
                {
                    name: "Maria Schmidt",
                    type: "Homeowner",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
                    description: "Busy professional seeking reliable cleaning services",
                    goals: [
                        "Find trustworthy cleaners",
                        "Easy scheduling",
                        "Consistent service quality"
                    ]
                },
                {
                    name: "Thomas Weber",
                    type: "Cleaning Professional",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
                    description: "Experienced cleaner looking for stable client base",
                    goals: [
                        "Find regular clients",
                        "Manage schedule efficiently",
                        "Secure payment system"
                    ]
                }
            ],
            userJourneyMap: {
                image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200",
                description: "User journey map showing the booking process from both homeowner and cleaner perspectives"
            }
        },

        designProcess: {
            paperWireframes: {
                description: "Initial concepts focused on simplifying the booking process and creating intuitive navigation for both user types.",
                images: [
                    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400",
                    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400"
                ]
            },
            digitalWireframes: {
                description: "Refined wireframes incorporating user feedback and focusing on key user flows.",
                images: [
                    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400",
                    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400"
                ]
            },
            lowFidelityPrototype: {
                description: "Interactive prototype testing core functionality and user flows.",
                link: "https://www.figma.com/proto/example",
                images: [
                    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400",
                    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400"
                ]
            },
            usabilityStudies: {
                findings: [
                    "85% of users completed booking process without assistance",
                    "Calendar interface needed simplification",
                    "Users wanted more visual confirmation of booking steps",
                    "Cleaners requested better schedule overview"
                ]
            }
        },

        refinedDesigns: {
            description: "Final designs incorporated user feedback and usability findings to create a polished, intuitive interface.",
            images: [
                "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400",
                "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400",
                "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400"
            ]
        },

        highFidelityPrototype: {
            description: "The final prototype showcases the complete user experience with all key features and interactions.",
            link: "https://www.figma.com/proto/example-final",
            screenshot: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=1200"
        },

        accessibilityConsiderations: [
            "High contrast color scheme for better readability",
            "Screen reader compatible with ARIA labels",
            "Keyboard navigation support throughout the platform",
            "Clear visual hierarchy and consistent layout",
            "Multiple language support for German and English"
        ],

        takeaways: {
            lessons: [
                "User research was crucial in understanding the unique needs of both user groups",
                "Iterative testing helped refine the booking experience significantly",
                "Accessibility considerations improved usability for all users"
            ],
            nextSteps: [
                "Implement advanced scheduling algorithms",
                "Add support for specialized cleaning services",
                "Develop a mobile app for on-the-go management"
            ]
        },

        conclusion: {
            summary: "FreshMclean demonstrates how user-centered design can transform a traditional service industry. The platform successfully bridges the gap between homeowners and cleaning professionals, creating value for both parties.",
            connect: "Interested in learning more about this project or discussing similar challenges? Let's connect and explore how we can create impactful digital solutions together."
        }
    },
    {
    id: "dixanafterschool",
    title: "Dixan After-School Program",
    heroImage: DixanAfterSchool,
    
    overview: {
        duration: "January 2025 - April 2025",
        summary: "A mobile-first platform that empowers parents, especially working professionals and individuals with accessibility needs, to register, schedule, and manage after-school care for their children with ease - as simple as ordering a ride.",
        project: "It started with a simple question: What if busy parents could enroll their kids in after-school programs as easily as ordering a ride? The Dixan After-School Program app was designed to bring that convenience to life—empowering parents, especially working professionals and individuals with accessibility needs, to register, schedule, and manage after-school care from their phones.",
        problem: "Samantha, a marketing manager and single mom of two, was juggling work deadlines and childcare logistics. Each day ended in stress—endless paperwork, vague program details, and worries about her daughter's safety. She wasn't alone. Dozens of parents shared this same frustration. The current process was outdated and overwhelming. ",
        goal: "We set out to create an intuitive platform that eliminates paperwork, clarifies program options, supports flexible schedules, and is accessible to everyone—no matter their physical abilities or daily constraints."
    },

    role: {
        title: "Lead UX Designer & UX Researcher",
        responsibilities: [
            "Conducting user research",
            "Defining personas and user journeys",
            "Designing wireframes and prototypes",
            "Testing usability and iterating based on feedback",
            "Ensuring accessibility compliance"
        ]
    },

    userResearch: {
        summary: "To truly understand our users, I connected with five parents—each with different backgrounds and needs. One participant, David, used a wheelchair and emphasized the lack of accessibility in most childcare apps. Samantha, overwhelmed by forms, just needed peace of mind. I set aside assumptions and listened deeply. That's when the real story unfolded.",
        painPoints: [
            {
                title: "I don't have time for this.",
                description: "Parents felt like the enrollment process was a second job—multiple forms, no guidance."
            },
            {
                title: "What am I even paying for?",
                description: "Parents needed clarity on program offerings, safety, and credentials upfront."
            },
            {
                title: "This doesn't fit my life.",
                description: "A one-size-fits-all schedule clashed with dynamic family routines."
            },
            {
                title: "This app doesn't speak to me.",
                description: "Parents with disabilities encountered inaccessible text sizes and poor screen reader support."
            }
        ],
        personas: [
            {
                name: "Samantha",
                type: "Parent",
                image: DixanAfterSchool,
                description: "Samantha is a career-driven single mother with a demanding schedule who needs a quick and reliable way to enroll her daughter in an after-school program because she often struggles to balance work commitments with ensuring her child's safety and care. ",
                goals: [
                    "Find reliable after-school care", 
                    "Balance work commitments with childcare",
                    "Ensure her child's safety and well-being"
                ],
                frustrations: [
                    "Time-consuming enrollment processes",
                    "Lack of flexibility in scheduling",
                    "Difficulty verifying program quality and safety"
                ]
            },
        ],
        userJourneyMap: {
            image: UserJourneyMap,
            description: "A journey map following Samantha's steps from downloading the app to enrolling her daughter—marking every point of emotional tension and finding opportunities to create ease."
        },
        howMightWeStatements: [
            "How might we make enrolling in after school program fun and easy for parent",
            "How might we help parent engage their kids while they are busy with work",
            "How might we make enrolling for an after school program quick as a rocket",
            "How might we completely eliminate physical contact and paper documentation when parents are enrolling their kids for after-school programs?"
        ]
    },

    designProcess: {
        storyboard: {
            description: "We created a storyboard to visually map out Samantha's end-to-end journey, capturing each step she takes to complete the enrollment process—from discovering the app to successfully registering her daughter.",
            images: [
                Storyboard,
                Storyboard2,
            ]
        },
        paperWireframes: {
            description: "Before touching pixels, I sketched five variations of the enrollment screen exploring layouts, CTA placement, and program visibility. The goal was to achieve simplicity, empathy, and ease.",
            images: [
                PaperWireframes,
                PaperWireframes2
            ]
        },
        digitalWireframes: {
            description: "Translated ideas into wireframes featuring brief program descriptions, testimonials for trust-building, and flexible pickup scheduling that adjusts to each family's weekly rhythm.",
            images: [
                DigitalWireframes,
                DigitalWireframes2
            ]
        },
        lowFidelityPrototype: {
            description: "Created a prototype that guided users through real tasks: finding a program, comparing options, enrolling, and paying to test what worked and what didn't.",
            link: "https://www.figma.com/proto/example",
            images: [
                LowFidelityPrototype,
            ]
        },
    },

    usabilityStudy: {
        details: {
            researchQuestions: [
                "How easy is it for parents to find, understand, and register for after-school programs using the app?",
                "What are the biggest obstacles or points of confusion in the enrollment process?",
                "Do parents feel that the app is accessible and inclusive for their needs?",
                "Are there any features that parents find particularly helpful or unnecessary?",
                "Would parents use this app again or recommend it to others?"
            ],
            participants: [
                "Two males, two females, and one physically disabled parent (wheelchair user)",
                "All have children aged 5-10 and have prior experience with after-school care apps"
            ],
            methodology: [
                "Unmoderated usability study",
                "Location: Lagos, remote task completion for each participant",
                "Each participant completed the key user flows using a low-fidelity prototype",
                "Sessions lasted 12-17 minutes, with SUS (System Usability Scale) follow-up survey"
            ]
        },
        sessionImages: [
            UsabilitySession1,
            UsabilitySession2
        ],
        findings: [
            {
                title: "Brief info below the Program title",
                description: "Majority of the users wanted to see a short, clear description and key info before clicking to learn more about a program."
            },
            {
                title: "Different pickup times for different days",
                description: "Most participants wanted to be able to set different pickup options for each day of the week."
            },
            {
                title: "Making Installment payment",
                description: "Some participants expressed interest in making installment payments for flexibility."
            },
            {
                title: "Option to pause current program or order",
                description: "Most of the participants indicated that performing a single task to stop or pause the current program was important."
            }
        ]
    },

    refinedDesigns: {
        description: "We reworked the flow based on usability findings, introducing quick-glance summaries with ratings and flexible scheduling per weekday to address user needs.",
        images: [
            RefinedDesigns1,
            RefinedDesigns2,
        ]
    },

    highFidelityPrototype: {
        description: "From color palette to microinteractions, every pixel was designed to prioritize user comfort and control, creating a seamless enrollment experience.",
        link: "https://www.figma.com/proto/example-final",
        screenshot: HighFidelityPrototype
    },

    accessibilityConsiderations: [
        "Enabled screen reader support",
        "Structured screens for keyboard navigation",
        "Chose high-contrast colors",
        "Built inclusivity as a foundation, not an add-on"
    ],

    takeaways: {
        impact: "One participant said, 'This app feels like it was made for me. Finally.' We turned frustration into relief.",
        whatILearned: "Empathy reveals what data can't. Building trust is as important as building features.",
        nextSteps: [
            "Localized versions in multiple languages",
            "In-app messaging for parents and caregivers",
            "Dashboard for tracking enrollments and schedules"
        ]
    },

    conclusion: {
        summary: "The Dixan After-School Program app transformed frustration into relief by creating an intuitive platform that makes enrolling children in after-school programs as easy as ordering a ride, bringing convenience to busy parents and those with accessibility needs.",
        connect: "Interested in learning more about this project or discussing similar challenges? Let's connect and explore how we can create impactful digital solutions together."
    }
},
{
    id: "verbumdei_ui_admin",
    title: "Verbum Dei Academy Admin Portal",
    heroImage: VerbumDeiPortalCover,
    
    overview: {
        duration: "September 2024 – January 2025",
        summary: "A modern web admin portal designed for Verbum Dei Academy to centralize and streamline academic operations. This visual overhaul focused on clarity, responsiveness, and consistency across student, staff, and event management systems. As the UI Designer, I created a visually coherent system with modular dashboards, clean typography, and intuitive interactions that elevated staff workflow efficiency.",
        project: "School administrators used disconnected systems for managing students, teachers, attendance, and events. I was tasked with building a UI that unified all admin tools under one intuitive interface, supported by a scalable design system.",
        problem: "Staff experienced friction using outdated and inconsistent tools that lacked structure, flexibility, and visual feedback.",
        goal: "Design a sleek, structured, and accessible UI that simplifies admin workflows and improves overall operational efficiency."
    },

    role: {
        title: "UI Designer",
        responsibilities: [
            "Established a reusable design system in Figma with over 40 components",
            "Designed responsive dashboard layouts for desktop and tablet",
            "Created pixel-perfect prototypes with micro-interactions and visual feedback states",
            "Defined icon usage, spacing rules, button states, form patterns",
            "Collaborated with developers to maintain UI fidelity using Figma specs"
        ]
    },

    designProcess: {
        wireframes: {
            description: "I started with low-fidelity layout exploration for dashboard composition. I applied an 8pt spacing system and a 12-column grid to maintain visual balance and modular scaling. All primary views were tested at 1440px and 1024px breakpoints.",
            tools: ["Figma", "Miro", "Zeplin"],
            images: [VerbumDeiWireframe1, VerbumDeiWireframe2, VerbumDeiWireframe3]
        },
        designSystem: {
            description: "The system was built around atomic design principles—atoms (buttons, inputs), molecules (form groups, nav cards), and organisms (payment report charts, attendance table, student table). Components were nested using Auto Layout and constraints for full responsiveness.",
            foundations: {
                typography: {
                    primaryFont: "Lato",
                    scale: "14px, 16px, 18px, 24px, 36px",
                    lineHeight: "1.4–1.6em",
                    usage: "Bold for headers, medium for body, monospace for data fields"
                },
                colors: {
                    primary: "#007BFF",
                    accent: "#F47B20",
                    success: "#1BAA5F",
                    textPrimary: "#333333",
                    textSecondary: "#656466",
                    error: "#DE3B3B",
                    backgrounds: ["#FFFFFF", "#F6F8FB"],
                    contrast: "Maintained WCAG AA with 4.5:1 or better"
                },
                iconography: {
                    library: "Material + Vuesax + custom icons + SVG",
                    rules: "16px/24px sizes, 1.5px stroke weight, 8px padding buffer"
                },
                buttons: {
                    variants: ["Primary", "Secondary", "Ghost", "Danger"],
                    states: ["Default", "Hover", "Active", "Disabled"]
                }
            },
            components: [
                "Calendar module with event highlight logic",
                "Attendance table with column filtering and hover states",
                "Sidebar navigation with active indicators and collapsibles",
                "Fees payment charts"
            ]
        },
        usabilityFeedback: {
            overview: "The usability testing focused on three core modules: student management, teacher management, and fee payment. Feedback was gathered through guided tasks performed by four admin users, followed by short interviews.",
            findings: [
                {
                    feature: "Student Management",
                    issue: "Users struggled to locate the 'Edit Profile' button for individual students from the list view.",
                    solution: "We position the action at the upper right of the profile page and stick on scroll and add clear tooltips with labels like 'Edit Student', 'View Details', and 'Assign to Class'."
                },
                {
                    feature: "Fee Payment",
                    issue: "The initial layout of the fee history table lacked filters and felt overwhelming with too many columns.",
                    solution: "Redesigned the fee history section with collapsible rows, added quick filters for 'Paid', 'Pending', and 'Overdue', and emphasized the current term summary at the top using card layouts."
                }
            ],
            insight: "These feedback loops informed refinements in component clarity, interaction proximity, and visual hierarchy—ultimately reducing cognitive load and making high-frequency tasks more intuitive for school staff."
        },
        finalDesign: {
            features: [
                "Hierarchical dashboard with smart cards and collapsible sections",
                "Sticky filters on scroll in tables",
                "Responsive 12-column grid with breakpoint-specific paddings",
                "Microinteraction feedback on hover, click, success states"
            ],
            visualHighlights: [
                Highlight1,
                Highlight2,
                Highlight3,
                Highlight4,
                Highlight5,
                Highlight6,
                Highlight7,
                Highlight8,
            ],
            visualHighlightsCaptions: [
                "Dashboard overview",
                "Student management UI",
                "Attendance tracking",
                "Event calendar",
                "Fee payment chart",
                "Responsive layout",
                "Microinteractions",
                "Design system tokens"
            ]
        }
    },

    highFidelityPrototype: {
        description: "Built using Figma's interactive components, hover states, and page-level flows. The prototype mimics real interaction and was used in stakeholder demos and developer handoff.",
        link: "https://www.figma.com/proto/typR9bvvVGnDdlcZQ0iTlj/VERBUM-ACADEMY-ADMIN-DESIGN?node-id=219-606&p=f&t=qKNv8ybWPjcQHm8G-1&scaling=scale-down&content-scaling=fixed&page-id=7%3A1828&starting-point-node-id=219%3A606",
        screenshot: VerbumDeiPrototype
    },

    accessibility: {
        considerations: [
            "All color contrast validated with Stark plugin against WCAG 2.1 AA",
            "Interactive elements meet minimum 44x44px touch targets",
            "Used semantic HTML structure in handoff annotations",
            "Forms included placeholder with actual examples, inline error messages, labels, and required field markers"
        ]
    },

    results: {
        impact: "Staff reported a 32% reduction in time to complete scheduling and attendance workflows. UI satisfaction score (via SUS survey) rose from 61 → 85. System adoption post-deployment was 94% in the first month.",
        feedback: "\"Everything just makes sense now. No more guessing where to click or waiting for help.\" — Verbum Dei Admin",
        learnings: "Design systems aren't just about consistency—they empower rapid iteration, reduce errors, and create confidence for users and dev teams alike."
    },

    nextSteps: [
        "Dark mode with visual theming support",
        "Customizable dashboard widgets per user role",
        "Real-time sync of attendance + parent alerts integration"
    ],

    conclusion: {
        summary: "The Verbum Dei Admin Portal is a UI success story—demonstrating how thoughtful design systems, modular layout strategy, and accessibility best practices can transform legacy workflows into delightful admin experiences.",
        callToAction: "Looking to bring polish, usability, and structure to your internal platforms or data dashboards? Let's build it right—together."
    }
}
]; 