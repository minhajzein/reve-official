import { FaComputer, FaMobile, FaBrain, FaCloud, FaShieldHalved, FaChartLine, FaRocket, FaCheck, FaServer, FaShield, FaGaugeHigh, FaUserShield, FaLock, FaBug, FaMagnifyingGlassChart, FaBullhorn, FaRectangleAd, FaEye, FaRobot, FaAndroid, FaApple, FaBell } from 'react-icons/fa6'

export const servicesData = {
    'web-solutions': {
        slug: 'web-solutions',
        title: 'Web Solutions',
        description: 'Custom, high-performance web applications built with modern frameworks like Next.js and React. We focus on scalability, SEO, and flawless user experiences.',
        image: '/images/software-dev.png',
        icon: FaComputer,
        tags: ['Next.js', 'React', 'Premium'],
        stats: [
            { label: 'PERFORMANCE', value: '99.9%' },
            { label: 'DEVELOPMENT', value: 'Agile' }
        ],
        hero: {
            titlePart1: 'Custom Web',
            titlePart2: 'Applications',
            titlePart3: 'That Scale',
            subtitle: 'We build high-performance web applications using modern frameworks like Next.js and React. Our solutions are designed for scalability, optimized for SEO, and crafted to deliver flawless user experiences.',
            image: '/images/service-web-solutions.png',
            ctaPrimary: 'Get Started',
            ctaSecondary: 'View Portfolio'
        },
        features: {
            titlePart1: 'Why Choose Our',
            titlePart2: 'Web Solutions',
            subtitle: 'We combine technical expertise with creative design to deliver web applications that drive results.',
            items: [
                { icon: FaMobile, title: 'Responsive Design', description: 'Pixel-perfect interfaces that work seamlessly across all devices and screen sizes.' },
                { icon: FaChartLine, title: 'SEO Optimized', description: 'Built-in SEO best practices to ensure your website ranks high on search engines.' },
                { icon: FaRocket, title: 'High Performance', description: 'Lightning-fast load times with optimized code and modern web technologies.' },
                { icon: FaComputer, title: 'Scalable Architecture', description: 'Future-proof solutions that grow with your business needs.' }
            ]
        },
        technologies: {
            titlePart1: 'Our',
            titlePart2: 'Tech Stack',
            subtitle: 'We use cutting-edge technologies to build robust, scalable web applications.',
            items: [
                { name: 'Next.js', category: 'Frontend' },
                { name: 'React', category: 'Frontend' },
                { name: 'TypeScript', category: 'Language' },
                { name: 'Node.js', category: 'Backend' },
                { name: 'PostgreSQL', category: 'Database' },
                { name: 'Tailwind CSS', category: 'Styling' },
                { name: 'MongoDB', category: 'Database' },
                { name: 'Express', category: 'Backend' }
            ]
        },
        process: {
            titlePart1: 'Our',
            titlePart2: 'Development Process',
            subtitle: 'A proven methodology that ensures quality, efficiency, and successful project delivery.',
            steps: [
                { step: '01', title: 'Discovery & Planning', description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.' },
                { step: '02', title: 'Design & Prototyping', description: 'Our designers create stunning UI/UX mockups and interactive prototypes for your approval.' },
                { step: '03', title: 'Development', description: 'Our expert developers build your application using cutting-edge technologies and best practices.' },
                { step: '04', title: 'Testing & QA', description: 'Rigorous testing ensures your application is bug-free, secure, and performs flawlessly.' },
                { step: '05', title: 'Deployment & Support', description: 'We deploy your application and provide ongoing support and maintenance to keep it running smoothly.' }
            ]
        },
        faqs: {
            titlePart1: 'Frequently Asked',
            titlePart2: 'Questions',
            subtitle: 'Get answers to common questions about our web development services.',
            items: [
                { question: 'How long does it take to build a custom web application?', answer: 'The timeline varies based on complexity and requirements. A typical web application takes 6-12 weeks from discovery to deployment. We provide detailed timeline estimates during the planning phase.' },
                { question: 'What technologies do you use for web development?', answer: 'We specialize in modern frameworks like Next.js, React, and Node.js. Our tech stack is chosen based on your specific requirements, ensuring optimal performance and scalability.' },
                { question: 'Do you provide ongoing maintenance and support?', answer: 'Yes! We offer comprehensive maintenance packages including security updates, bug fixes, feature enhancements, and 24/7 technical support to keep your application running smoothly.' },
                { question: 'Can you integrate with existing systems and APIs?', answer: 'Absolutely. We have extensive experience integrating web applications with various third-party services, APIs, payment gateways, CRMs, and legacy systems.' },
                { question: 'What is your pricing structure?', answer: 'Our pricing is project-based and depends on scope, complexity, and timeline. We provide transparent, detailed quotes after the initial consultation and requirements analysis.' }
            ]
        },
        cta: {
            titlePart1: 'Ready to Build Something',
            titlePart2: 'Amazing',
            subtitle: 'Let\'s discuss your project and create a custom web solution that exceeds your expectations.',
            primaryText: 'Get a Free Consultation',
            secondaryText: 'View All Services'
        }
    },
    'mobile-apps': {
        slug: 'mobile-apps',
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile experiences that engage users. We specialize in Flutter and React Native for high-performance iOS and Android apps.',
        image: '/images/mobile-app.png',
        icon: FaMobile,
        tags: ['iOS', 'Android', 'Flutter'],
        stats: [
            { label: 'PLATFORMS', value: 'Multi' },
            { label: 'UX DESIGN', value: 'Modern' }
        ],
        hero: {
            titlePart1: 'Native & Cross-Platform',
            titlePart2: 'Mobile Excellence',
            titlePart3: '',
            subtitle: 'We create engaging mobile experiences for iOS and Android using Flutter and React Native. Our apps combine beautiful design with powerful functionality to keep users coming back.',
            image: '/images/service-mobile-apps.png',
            ctaPrimary: 'Get Started',
            ctaSecondary: 'View App Portfolio'
        },
        features: {
            titlePart1: 'Why Choose Our',
            titlePart2: 'Mobile Apps',
            subtitle: 'We build mobile applications that users love, combining stunning design with seamless performance.',
            items: [
                { icon: FaMobile, title: 'Cross-Platform Development', description: 'Build once, deploy everywhere. Save time and costs with unified codebase for iOS and Android.' },
                { icon: FaApple, title: 'Native Performance', description: 'Deliver smooth, responsive experiences that feel native to each platform.' },
                { icon: FaBell, title: 'Push Notifications', description: 'Keep users engaged with real-time updates and personalized notifications.' },
                { icon: FaAndroid, title: 'Intuitive UI/UX', description: 'Beautiful interfaces designed following platform-specific guidelines for optimal user experience.' }
            ]
        },
        technologies: {
            titlePart1: 'Our',
            titlePart2: 'Tech Stack',
            subtitle: 'We leverage the best mobile development technologies to build robust, scalable applications.',
            items: [
                { name: 'Flutter', category: 'Framework' },
                { name: 'React Native', category: 'Framework' },
                { name: 'Firebase', category: 'Backend' },
                { name: 'iOS SDK', category: 'Native' },
                { name: 'Android SDK', category: 'Native' },
                { name: 'Redux', category: 'State Management' },
                { name: 'GraphQL', category: 'API' },
                { name: 'SQLite', category: 'Database' }
            ]
        },
        process: {
            titlePart1: 'Our',
            titlePart2: 'Development Process',
            subtitle: 'From concept to app store, we follow a proven process that delivers exceptional results.',
            steps: [
                { step: '01', title: 'Ideation & Strategy', description: 'We collaborate with you to refine your app concept, define target users, and create a strategic roadmap.' },
                { step: '02', title: 'UI/UX Design', description: 'Our designers craft intuitive, beautiful interfaces that users love, with interactive prototypes for testing.' },
                { step: '03', title: 'Development', description: 'Expert developers build your app using best practices, ensuring quality code and smooth performance.' },
                { step: '04', title: 'Testing & QA', description: 'Comprehensive testing on real devices ensures your app works flawlessly across all platforms and scenarios.' },
                { step: '05', title: 'Launch & Support', description: 'We handle app store submission and provide ongoing updates, maintenance, and feature enhancements.' }
            ]
        },
        faqs: {
            titlePart1: 'Frequently Asked',
            titlePart2: 'Questions',
            subtitle: 'Get answers to common questions about our mobile app development services.',
            items: [
                { question: 'Should I build native or cross-platform mobile apps?', answer: 'It depends on your requirements. Cross-platform (Flutter/React Native) is cost-effective and faster for most cases. Native is best for apps needing platform-specific features or maximum performance. We help you choose the right approach.' },
                { question: 'How long does mobile app development take?', answer: 'A typical mobile app takes 8-16 weeks from concept to launch, depending on complexity and features. We provide detailed timelines during the planning phase and keep you updated throughout development.' },
                { question: 'Do you handle app store submission?', answer: 'Yes! We manage the entire submission process for both Apple App Store and Google Play Store, including preparing all required assets, descriptions, and handling the review process.' },
                { question: 'Can you add features to an existing app?', answer: 'Absolutely. We can enhance existing apps with new features, improve performance, fix bugs, or completely redesign the UI/UX. We work with apps built in any technology stack.' },
                { question: 'What about app maintenance and updates?', answer: 'We offer comprehensive maintenance packages including OS compatibility updates, security patches, bug fixes, performance optimization, and new feature development to keep your app competitive.' }
            ]
        },
        cta: {
            titlePart1: 'Ready to Launch Your',
            titlePart2: 'Mobile App',
            subtitle: 'Let\'s turn your app idea into reality. Get a free consultation and project estimate today.',
            primaryText: 'Get a Free Consultation',
            secondaryText: 'View All Services'
        }
    },
    'ai-ml': {
        slug: 'ai-ml',
        title: 'AI & Machine Learning',
        description: 'Leverage the power of AI to automate processes and gain insights. Our solutions include LLM integration, predictive analytics, and computer vision.',
        image: '/images/ai-ml.png',
        icon: FaBrain,
        tags: ['AI', 'Data', 'LLM'],
        stats: [
            { label: 'ACCURACY', value: 'High' },
            { label: 'INTEGRATION', value: 'API' }
        ],
        hero: {
            titlePart1: 'Harness the Power of',
            titlePart2: 'Artificial Intelligence',
            titlePart3: '',
            subtitle: 'Transform your business with AI and machine learning solutions. From LLM integration and predictive analytics to computer vision and NLP, we build intelligent systems that drive growth and efficiency.',
            image: '/images/service-ai-ml.png',
            ctaPrimary: 'Get Started',
            ctaSecondary: 'View AI Projects'
        },
        features: {
            titlePart1: 'Our',
            titlePart2: 'AI Capabilities',
            subtitle: 'We leverage cutting-edge AI technologies to solve complex business challenges and create intelligent solutions.',
            items: [
                { icon: FaRobot, title: 'LLM Integration', description: 'Integrate powerful language models like GPT-4, Claude, and custom LLMs into your applications.' },
                { icon: FaChartLine, title: 'Predictive Analytics', description: 'Make data-driven decisions with AI-powered forecasting and trend analysis.' },
                { icon: FaEye, title: 'Computer Vision', description: 'Automate visual tasks with image recognition, object detection, and video analysis.' },
                { icon: FaBrain, title: 'Natural Language Processing', description: 'Build intelligent chatbots, sentiment analysis, and text processing systems.' }
            ]
        },
        technologies: {
            titlePart1: 'Our',
            titlePart2: 'AI Tech Stack',
            subtitle: 'We use industry-leading AI frameworks and tools to build powerful, scalable solutions.',
            items: [
                { name: 'Python', category: 'Language' },
                { name: 'TensorFlow', category: 'Framework' },
                { name: 'PyTorch', category: 'Framework' },
                { name: 'OpenAI API', category: 'LLM' },
                { name: 'Azure AI', category: 'Cloud AI' },
                { name: 'scikit-learn', category: 'ML Library' },
                { name: 'Hugging Face', category: 'Models' },
                { name: 'LangChain', category: 'Framework' }
            ]
        },
        process: {
            titlePart1: 'Our',
            titlePart2: 'AI Development Process',
            subtitle: 'From data analysis to deployment, we follow a systematic approach to deliver accurate, reliable AI solutions.',
            steps: [
                { step: '01', title: 'Data Analysis', description: 'We analyze your data, business goals, and AI use cases to identify opportunities for automation and insights.' },
                { step: '02', title: 'Model Selection', description: 'Choose the right AI models and algorithms based on your specific requirements and data characteristics.' },
                { step: '03', title: 'Training & Fine-tuning', description: 'Train custom models or fine-tune pre-trained models to achieve optimal performance for your use case.' },
                { step: '04', title: 'Testing & Validation', description: 'Rigorous testing ensures accuracy, reliability, and ethical AI implementation.' },
                { step: '05', title: 'Deployment & Monitoring', description: 'Deploy AI solutions and continuously monitor performance to maintain high accuracy and efficiency.' }
            ]
        },
        faqs: {
            titlePart1: 'Frequently Asked',
            titlePart2: 'Questions',
            subtitle: 'Get answers to common questions about our AI and machine learning services.',
            items: [
                { question: 'What are the practical use cases for AI in my business?', answer: 'AI can automate customer support with chatbots, improve decision-making with predictive analytics, enhance products with recommendation systems, automate document processing, detect fraud, optimize pricing, and much more. We help identify the best AI applications for your specific industry and business needs.' },
                { question: 'How much data do I need for AI/ML projects?', answer: 'It varies by use case. Some pre-trained models work with minimal data via fine-tuning. Custom models typically need more data, but we can use techniques like transfer learning and data augmentation to maximize results even with limited datasets. We assess your data during the discovery phase.' },
                { question: 'How long does it take to implement AI solutions?', answer: 'Timeline depends on complexity. Simple LLM integrations can take 2-4 weeks, while custom ML models might need 8-16 weeks. We provide detailed timelines after analyzing your requirements and available data.' },
                { question: 'Is my data secure when using AI services?', answer: 'Absolutely. We implement enterprise-grade security measures, including data encryption, secure APIs, and compliance with regulations like GDPR. For sensitive data, we can deploy models on-premises or in your private cloud.' },
                { question: 'Can you integrate AI into our existing systems?', answer: 'Yes! We specialize in seamlessly integrating AI capabilities into existing applications via APIs, SDKs, or custom integrations. We work with your current tech stack to minimize disruption while maximizing value.' }
            ]
        },
        cta: {
            titlePart1: 'Ready to Transform Your Business with',
            titlePart2: 'AI',
            subtitle: 'Let\'s explore how AI can solve your business challenges and unlock new opportunities.',
            primaryText: 'Get a Free Consultation',
            secondaryText: 'View All Services'
        }
    },
    'cloud-systems': {
        slug: 'cloud-systems',
        title: 'Cloud Systems',
        description: 'Scalable cloud infrastructure and DevOps practices. We ensure your services are highly available, secure, and cost-optimized on AWS or Azure.',
        image: '/images/cloud.png',
        icon: FaCloud,
        tags: ['AWS', 'DevOps', 'Cloud'],
        stats: [
            { label: 'UPTIME', value: '100%' },
            { label: 'SECURITY', value: 'AES-256' }
        ],
        hero: {
            titlePart1: 'Scalable',
            titlePart2: 'Cloud Infrastructure',
            titlePart3: '& DevOps',
            subtitle: 'Build resilient, scalable cloud systems on AWS or Azure. We design, implement, and manage cloud infrastructure with DevOps best practices to ensure high availability, security, and cost efficiency.',
            image: '/images/service-cloud.png',
            ctaPrimary: 'Get Started',
            ctaSecondary: 'Cloud Assessment'
        },
        features: {
            titlePart1: 'Why Choose Our',
            titlePart2: 'Cloud Solutions',
            subtitle: 'We build cloud infrastructure that\'s reliable, secure, and optimized for your business needs.',
            items: [
                { icon: FaGaugeHigh, title: 'Auto-Scaling', description: 'Automatically scale resources up or down based on demand to optimize performance and costs.' },
                { icon: FaServer, title: 'High Availability', description: 'Built for 99.99% uptime with redundancy, failover, and disaster recovery solutions.' },
                { icon: FaCloud, title: 'Cost Optimization', description: 'Reduce cloud spending with right-sizing, reserved instances, and smart resource management.' },
                { icon: FaShield, title: 'Enterprise Security', description: 'Multi-layer security with encryption, IAM policies, and compliance with industry standards.' }
            ]
        },
        technologies: {
            titlePart1: 'Our',
            titlePart2: 'Cloud Tech Stack',
            subtitle: 'We leverage industry-leading cloud and DevOps technologies to build robust infrastructure.',
            items: [
                { name: 'AWS', category: 'Cloud Platform' },
                { name: 'Azure', category: 'Cloud Platform' },
                { name: 'Docker', category: 'Container' },
                { name: 'Kubernetes', category: 'Orchestration' },
                { name: 'Terraform', category: 'IaC' },
                { name: 'Jenkins', category: 'CI/CD' },
                { name: 'GitHub Actions', category: 'CI/CD' },
                { name: 'Prometheus', category: 'Monitoring' }
            ]
        },
        process: {
            titlePart1: 'Our',
            titlePart2: 'Cloud Implementation Process',
            subtitle: 'From assessment to ongoing support, we ensure successful cloud adoption and optimization.',
            steps: [
                { step: '01', title: 'Assessment & Planning', description: 'Evaluate your current infrastructure, workloads, and requirements to design the optimal cloud strategy.' },
                { step: '02', title: 'Architecture Design', description: 'Design scalable, secure cloud architecture with best practices for your specific use case.' },
                { step: '03', title: 'Migration & Implementation', description: 'Seamlessly migrate applications and data to the cloud with minimal downtime and risk.' },
                { step: '04', title: 'Optimization', description: 'Fine-tune performance, security, and costs to maximize your cloud investment.' },
                { step: '05', title: 'Monitoring & Support', description: 'Continuous monitoring, updates, and 24/7 support to ensure optimal cloud operations.' }
            ]
        },
        faqs: {
            titlePart1: 'Frequently Asked',
            titlePart2: 'Questions',
            subtitle: 'Get answers to common questions about our cloud and DevOps services.',
            items: [
                { question: 'Should I choose AWS or Azure for my cloud infrastructure?', answer: 'Both are excellent choices. AWS offers broader service options and maturity, while Azure integrates seamlessly with Microsoft products. We analyze your specific needs, existing tools, and team expertise to recommend the best platform. We can also design multi-cloud solutions if needed.' },
                { question: 'How long does cloud migration take?', answer: 'Migration timeline depends on application complexity, data volume, and current infrastructure. Simple migrations can take 2-4 weeks, while enterprise migrations might need 3-6 months. We create detailed migration plans with phased approaches to minimize risk and downtime.' },
                { question: 'How much can I save by moving to the cloud?', answer: 'Most organizations save 20-40% on infrastructure costs after optimization. Savings come from eliminating hardware maintenance, right-sizing resources, using reserved instances, and auto-scaling. We provide detailed cost analysis during the assessment phase.' },
                { question: 'Is cloud infrastructure secure?', answer: 'Yes, when properly configured. Cloud providers offer enterprise-grade security, but implementation matters. We implement security best practices including encryption, IAM policies, network segmentation, logging, and compliance with standards like SOC 2, HIPAA, and GDPR.' },
                { question: 'Do you provide DevOps and CI/CD implementation?', answer: 'Absolutely. We implement complete DevOps pipelines with automated testing, continuous integration/deployment, infrastructure as code, and monitoring. This accelerates development, improves quality, and reduces deployment risks.' }
            ]
        },
        cta: {
            titlePart1: 'Ready to Move to the',
            titlePart2: 'Cloud',
            subtitle: 'Let\'s design and implement a cloud strategy that scales with your business and optimizes costs.',
            primaryText: 'Get a Free Consultation',
            secondaryText: 'View All Services'
        }
    },
    'cyber-security': {
        slug: 'cyber-security',
        title: 'Cyber Security',
        description: 'Protect your digital assets with our comprehensive security audits, penetration testing, and data encryption services.',
        image: '/images/vision.png',
        icon: FaShieldHalved,
        tags: ['Security', 'Audit', 'EDR'],
        stats: [
            { label: 'PROTECTION', value: '24/7' },
            { label: 'COMPLIANCE', value: 'GDPR' }
        ],
        hero: {
            titlePart1: 'Cybersecurity &',
            titlePart2: 'Data Protection',
            titlePart3: '',
            subtitle: 'Protect your business from evolving cyber threats with our comprehensive security solutions. We offer penetration testing, security audits, and real-time monitoring to safeguard your data.',
            image: '/images/service-security.png',
            ctaPrimary: 'Get Started',
            ctaSecondary: 'Security Audit'
        },
        features: {
            titlePart1: 'Our',
            titlePart2: 'Security Services',
            subtitle: 'Multi-layered security approach to protect your organization from evolving cyber threats.',
            items: [
                { icon: FaUserShield, title: 'Security Audits', description: 'Comprehensive security assessments to identify vulnerabilities and compliance gaps.' },
                { icon: FaBug, title: 'Penetration Testing', description: 'Ethical hacking to discover and fix security weaknesses before attackers do.' },
                { icon: FaLock, title: 'Data Encryption', description: 'Enterprise-grade encryption for data at rest and in transit to protect sensitive information.' },
                { icon: FaShieldHalved, title: '24/7 Monitoring', description: 'Continuous threat detection and rapid incident response to minimize security risks.' }
            ]
        },
        technologies: {
            titlePart1: 'Our',
            titlePart2: 'Security Stack',
            subtitle: 'We use advanced security tools and protocols to defend against sophisticated attacks.',
            items: [
                { name: 'SIEM Tools', category: 'Monitoring' },
                { name: 'Splunk', category: 'Analytics' },
                { name: 'Firewall Systems', category: 'Protection' },
                { name: 'EDR Solutions', category: 'Endpoint' },
                { name: 'AES-256', category: 'Encryption' },
                { name: 'Metasploit', category: 'Pen Testing' },
                { name: 'Wireshark', category: 'Analysis' },
                { name: 'OWASP ZAP', category: 'Security' }
            ]
        },
        process: {
            titlePart1: 'Our',
            titlePart2: 'Security Process',
            subtitle: 'A comprehensive approach to identifying, assessing, and mitigating security risks.',
            steps: [
                { step: '01', title: 'Security Assessment', description: 'Comprehensive evaluation of your current security posture, infrastructure, and potential vulnerabilities.' },
                { step: '02', title: 'Implementation', description: 'Deploy security solutions including firewalls, encryption, access controls, and monitoring systems.' },
                { step: '03', title: 'Monitoring & Detection', description: '24/7 surveillance of your systems to detect and alert on potential security threats in real-time.' },
                { step: '04', title: 'Incident Response', description: 'Rapid response protocols to contain, investigate, and remediate security incidents.' },
                { step: '05', title: 'Continuous Improvement', description: 'Regular updates, patches, and audits to maintain robust security against evolving threats.' }
            ]
        },
        faqs: {
            titlePart1: 'Frequently Asked',
            titlePart2: 'Questions',
            subtitle: 'Get answers to common questions about our cyber security services.',
            items: [
                { question: 'What is penetration testing and why do I need it?', answer: 'Penetration testing (pen testing) simulates real-world cyberattacks to identify security weaknesses before malicious hackers exploit them. It\'s essential for validating your security measures, meeting compliance requirements, and protecting sensitive data. We recommend annual pen tests or after major infrastructure changes.' },
                { question: 'Are you certified for security compliance (SOC 2, HIPAA, GDPR)?', answer: 'Yes, our team includes certified security professionals (CISSP, CEH, OSCP) with expertise in compliance frameworks like SOC 2, HIPAA, GDPR, PCI-DSS, and ISO 27001. We help you achieve and maintain compliance through proper security controls and documentation.' },
                { question: 'How do you handle security incidents?', answer: 'We have a structured incident response process: immediate containment to stop the threat, forensic analysis to understand the breach, remediation to fix vulnerabilities, and recovery to restore normal operations. We also provide detailed post-incident reports and recommendations.' },
                { question: 'What\'s the difference between a security audit and penetration testing?', answer: 'A security audit is a comprehensive review of your security policies, configurations, and controls against best practices and compliance requirements. Penetration testing actively attempts to exploit vulnerabilities like an attacker would. Both are important - audits find policy gaps, pen tests find exploitable weaknesses.' },
                { question: 'How much does cyber security implementation cost?', answer: 'Costs vary based on organization size, industry requirements, and current security posture. Basic security audits start at a few thousand dollars, while comprehensive security programs can range significantly. We provide transparent pricing after an initial assessment of your needs.' }
            ]
        },
        cta: {
            titlePart1: 'Ready to Secure Your',
            titlePart2: 'Business',
            subtitle: 'Don\'t wait for a breach to happen. Contact us today for a comprehensive security assessment.',
            primaryText: 'Get a Free Consultation',
            secondaryText: 'View All Services'
        }
    },
    'digital-marketing': {
        slug: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'Scale your online presence with data-driven marketing strategies, SEO optimization, and targeted social media campaigns.',
        image: '/images/why-choose-us.png',
        icon: FaChartLine,
        tags: ['SEO', 'Ads', 'Growth'],
        stats: [
            { label: 'ROI', value: '300%+' },
            { label: 'GROWTH', value: 'Linear' }
        ],
        hero: {
            titlePart1: 'Data-Driven',
            titlePart2: 'Digital Marketing',
            titlePart3: '',
            subtitle: 'Accelerate your growth with targeted marketing strategies. We specialize in SEO, PPC, social media, and content marketing to drive traffic and convert leads into customers.',
            image: '/images/why-choose-us.png',
            ctaPrimary: 'Get Started',
            ctaSecondary: 'Marketing Audit'
        },
        features: {
            titlePart1: 'Our',
            titlePart2: 'Marketing Services',
            subtitle: 'Comprehensive digital marketing solutions to grow your brand and drive measurable results.',
            items: [
                { icon: FaMagnifyingGlassChart, title: 'SEO Optimization', description: 'Boost your search rankings with technical SEO, content optimization, and link building strategies.' },
                { icon: FaBullhorn, title: 'Social Media Marketing', description: 'Engage your audience on Facebook, Instagram, LinkedIn, and other platforms with compelling content.' },
                { icon: FaRectangleAd, title: 'PPC Campaigns', description: 'Maximize ROI with targeted Google Ads and social media advertising campaigns.' },
                { icon: FaChartLine, title: 'Analytics & Reporting', description: 'Track performance with detailed analytics and actionable insights to optimize your campaigns.' }
            ]
        },
        technologies: {
            titlePart1: 'Our',
            titlePart2: 'Marketing Stack',
            subtitle: 'We use powerful analytics and marketing tools to track performance and optimize campaigns.',
            items: [
                { name: 'Google Analytics', category: 'Analytics' },
                { name: 'Google Ads', category: 'Advertising' },
                { name: 'SEMrush', category: 'SEO' },
                { name: 'Meta Ads', category: 'Social' },
                { name: 'Ahrefs', category: 'SEO' },
                { name: 'Mailchimp', category: 'Email' },
                { name: 'Hootsuite', category: 'Management' },
                { name: 'HubSpot', category: 'Automation' }
            ]
        },
        process: {
            titlePart1: 'Our',
            titlePart2: 'Marketing Process',
            subtitle: 'From strategy to execution, we follow a data-driven approach to deliver measurable results.',
            steps: [
                { step: '01', title: 'Market Research', description: 'Deep analysis of your industry, competitors, and target audience to identify opportunities.' },
                { step: '02', title: 'Strategy Development', description: 'Create comprehensive marketing plans with clear goals, KPIs, and channel strategies.' },
                { step: '03', title: 'Campaign Execution', description: 'Launch multi-channel campaigns with compelling content, precise targeting, and A/B testing.' },
                { step: '04', title: 'Performance Analysis', description: 'Monitor metrics, track conversions, and analyze campaign performance in real-time.' },
                { step: '05', title: 'Optimization', description: 'Continuously refine strategies based on data insights to maximize ROI and growth.' }
            ]
        },
        faqs: {
            titlePart1: 'Frequently Asked',
            titlePart2: 'Questions',
            subtitle: 'Get answers to common questions about our digital marketing services.',
            items: [
                { question: 'What\'s the expected ROI from digital marketing?', answer: 'ROI varies by industry, budget, and campaign type, but our clients typically see 300-500% ROI. SEO delivers long-term organic growth, while PPC provides immediate results. We set realistic expectations during planning and provide monthly reports tracking your ROI and key metrics.' },
                { question: 'How long does it take to see results from SEO?', answer: 'SEO is a long-term strategy. You\'ll typically see initial improvements in 3-4 months, with significant results in 6-12 months. Quick wins come from technical SEO fixes, while content and link building compound over time. PPC campaigns show immediate results if you need faster visibility.' },
                { question: 'Which platforms should I advertise on?', answer: 'It depends on your audience and goals. B2B companies excel on LinkedIn and Google. E-commerce thrives on Facebook, Instagram, and Google Shopping. We analyze your target audience demographics and behavior to recommend the most effective platforms for your budget.' },
                { question: 'Do you handle content creation?', answer: 'Yes! We provide end-to-end content services including blog posts, social media content, ad copy, email campaigns, infographics, and video scripts. All content is optimized for SEO and tailored to your brand voice and audience.' },
                { question: 'How do you measure campaign success?', answer: 'We track KPIs aligned with your goals: website traffic, conversion rates, cost per acquisition, engagement rates, search rankings, and revenue attribution. You\'ll receive detailed monthly reports with actionable insights and recommendations for optimization.' }
            ]
        },
        cta: {
            titlePart1: 'Ready to Grow Your',
            titlePart2: 'Business',
            subtitle: 'Let\'s create a marketing strategy that drives traffic, leads, and revenue.',
            primaryText: 'Get a Free Consultation',
            secondaryText: 'View All Services'
        }
    }
}
