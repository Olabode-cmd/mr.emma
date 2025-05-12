import FreshMclean from "../assets/freshmclean.png";

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
    }
]; 