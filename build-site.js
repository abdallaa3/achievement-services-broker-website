const fs = require("fs");
const path = require("path");

const domain = "https://achbroker.com";
const siteBase = "";
const logoImage = `${domain}/assets/img/achievement-logo.png?v=20260513`;
const phone = "+971553386176";
const phoneHref = "tel:+971553386176";
const whatsapp = "https://wa.me/971553386176";
const maps = "https://maps.app.goo.gl/ERKE6k4wPUntNHCD7";
const googleAdsId = "AW-17857671203";
const socials = {
  facebook: "https://www.facebook.com/Achievement.services/",
  instagram: "https://www.instagram.com/achievement.services/",
  tiktok: "https://www.tiktok.com/@achievement.services?_r=1&_t=ZS-95aesOiqMGu"
};

const labels = {
  ar: {
    langName: "العربية",
    other: "EN",
    dir: "rtl",
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    blog: "المدونة",
    contact: "اتصل بنا",
    whatsapp: "تواصل واتساب",
    call: "اتصل الآن",
    consult: "اطلب استشارة",
    readMore: "اقرأ المزيد",
    request: "اطلب الخدمة",
    location: "العين، أبوظبي، الإمارات العربية المتحدة",
    serviceInterested: "الخدمة المطلوبة",
    name: "الاسم",
    phone: "رقم الهاتف",
    message: "الرسالة",
    submit: "إرسال الطلب",
    formTitle: "ارسل طلبك",
    formText: "شارك بياناتك وسنتواصل معك عبر واتساب لمساعدتك.",
    widgetMessage: "مرحباً، كيف يمكننا مساعدتك؟",
    widgetButton: "WhatsApp Us",
    footerText: "خدمات أعمال وتأمين احترافية في العين، أبوظبي للأفراد والشركات، مع تركيز واضح على السرعة، التنظيم، والمتابعة.",
    links: "روابط",
    follow: "تابعنا",
    contactInfo: "معلومات التواصل"
  },
  en: {
    langName: "English",
    other: "AR",
    dir: "ltr",
    home: "Home",
    about: "About Us",
    services: "Services",
    blog: "Blog",
    contact: "Contact",
    whatsapp: "WhatsApp Us",
    call: "Call Now",
    consult: "Request Consultation",
    readMore: "Read More",
    request: "Request Service",
    location: "Al Ain, Abu Dhabi, United Arab Emirates",
    serviceInterested: "Service interested in",
    name: "Name",
    phone: "Phone",
    message: "Message",
    submit: "Submit Request",
    formTitle: "Send Your Request",
    formText: "Share your details and we will follow up through WhatsApp.",
    widgetMessage: "مرحباً، كيف يمكننا مساعدتك؟",
    widgetButton: "WhatsApp Us",
    footerText: "Professional business and insurance services in Al Ain, Abu Dhabi for individuals and companies, focused on clarity, organization, and follow-up.",
    links: "Links",
    follow: "Follow Us",
    contactInfo: "Contact Info"
  }
};

const nav = [
  ["", "home"],
  ["about", "about"],
  ["services", "services"],
  ["blog", "blog"],
  ["contact", "contact"]
];

const services = {
  ar: [
    ["car-insurance-al-ain", "تأمين السيارات", "مساعدة في مراجعة خيارات تأمين المركبات في العين، أبوظبي والإمارات للأفراد والشركات.", "car"],
    ["health-insurance-uae", "التأمين الصحي", "دعم اختيار تغطية صحية مناسبة للأفراد والشركات والعمالة المنزلية داخل الإمارات.", "health"],
    ["business-setup-al-ain", "تأسيس الشركات", "استشارة وتنظيم خطوات تأسيس الأعمال وتجهيز المستندات التجارية في العين، أبوظبي.", "briefcase"],
    ["residency-support-uae", "دعم الإقامة", "متابعة تذكيرات التجديد وتنسيق المستندات والتأمين المرتبط بالإقامة.", "id"],
    ["business-services-al-ain", "خدمات الأعمال", "دعم مستندات الشركات والمتابعة والمواعيد والتنسيق الإداري.", "doc"],
    ["documentation-services-al-ain", "خدمات المستندات", "تنظيم وتجهيز المستندات المطلوبة لخدمات الأعمال والتأمين قبل بدء المعاملات.", "file"]
  ],
  en: [
    ["car-insurance-al-ain", "Car Insurance", "Vehicle insurance assistance in Al Ain, Abu Dhabi and across the UAE for individuals and companies.", "car"],
    ["health-insurance-uae", "Health Insurance", "Support choosing suitable health coverage for individuals, companies, and domestic workers.", "health"],
    ["business-setup-al-ain", "Business Setup", "Consultation and documentation support for organized company formation steps in Al Ain, Abu Dhabi.", "briefcase"],
    ["residency-support-uae", "Residency Support", "Renewal reminders, document coordination, Emirates ID support, and insurance coordination.", "id"],
    ["business-services-al-ain", "Business Services", "Corporate document support, appointment reminders, follow-up, and administrative coordination.", "doc"],
    ["documentation-services-al-ain", "Documentation Services", "Organized preparation of documents for business and insurance services before starting any process.", "file"]
  ]
};

const contactServiceOptions = {
  ar: [
    "تأمين السيارات",
    "التأمين الصحي",
    "تأسيس الشركات",
    "خدمات الأعمال",
    "دعم وتجديد الإقامة",
    "خدمات الهوية الإماراتية",
    "خدمات الشركات",
    "خدمات الرخص التجارية",
    "خدمات المستندات",
    "تصديق الشهادات",
    "تجهيز المعاملات",
    "خدمات التأمين للشركات",
    "تأمين الأفراد",
    "تأمين العمالة المنزلية",
    "خدمات الوثائق والعقود",
    "خدمات المركبات",
    "خدمات رجال الأعمال",
    "استشارة عامة",
    "خدمات أخرى"
  ],
  en: [
    "Car Insurance",
    "Health Insurance",
    "Business Setup",
    "Business Services",
    "Residency Renewal Support",
    "Emirates ID Services",
    "Corporate Services",
    "Trade License Services",
    "Documentation Services",
    "Certificate Attestation",
    "Transaction Preparation",
    "Corporate Insurance Services",
    "Individual Insurance",
    "Domestic Worker Insurance",
    "Documents & Contracts Services",
    "Vehicle Services",
    "PRO & Business Support",
    "General Consultation",
    "Other Services"
  ]
};

const adComplianceNotice = {
  ar: {
    title: "تنويه للشفافية",
    text: "Achievement Services Broker مقدم وساطة ومساعدة تأمين خاص ومستقل. لا نعمل كجهة إصدار أو اعتماد، ولا ندعي أي ارتباط بأي جهة إصدار أو اعتماد خارجية. دورنا يقتصر على الاستشارة، تنسيق خيارات التأمين، ومساعدة العملاء على مقارنة العروض المتاحة."
  },
  en: {
    title: "Transparency Notice",
    text: "Achievement Services Broker is a private, independent insurance brokerage and assistance provider. We do not act as an issuing or approval body, and we do not claim affiliation with any external issuing or approval body. Our role is limited to consultation, insurance-option coordination, and helping clients compare available offers."
  }
};

const adSafeFooterServices = {
  ar: [
    ["car-insurance-al-ain", "تأمين السيارات"],
    ["health-insurance-uae", "التأمين الصحي"],
    ["business-setup-al-ain", "تأسيس الشركات"],
    ["business-services-al-ain", "خدمات الأعمال"],
    ["contact", "استشارة عامة"]
  ],
  en: [
    ["car-insurance-al-ain", "Car Insurance"],
    ["health-insurance-uae", "Health Insurance"],
    ["business-setup-al-ain", "Business Setup"],
    ["business-services-al-ain", "Business Services"],
    ["contact", "General Consultation"]
  ]
};

const pages = {
  ar: {
    home: { slug: "", title: "Achievement Services Broker | الرئيسية", description: "Achievement Services Broker يقدم خدمات تأمين سيارات وتأمين صحي وتأسيس شركات ودعم الإقامة وخدمات الأعمال في العين، أبوظبي عبر واتساب واتصال مباشر.", h1: "خدمات أعمال وتأمين احترافية في العين، أبوظبي", intro: "نساعد الأفراد والشركات في خدمات التأمين، تأسيس الأعمال، دعم الإقامة، وتجهيز المستندات بطريقة سهلة ومنظمة." },
    about: { slug: "about", title: "Achievement Services Broker | من نحن", description: "تعرف على Achievement Services Broker في العين، أبوظبي وخبرتنا في خدمات التأمين والأعمال وتجهيز المستندات داخل الإمارات.", h1: "من نحن", intro: "حلول أعمال وخدمات احترافية تساعد الأفراد والشركات على ترتيب خطواتهم بوضوح داخل دولة الإمارات." },
    services: { slug: "services", title: "Achievement Services Broker | الخدمات", description: "تأمين سيارات في العين، أبوظبي، التأمين الصحي، تأسيس الشركات، دعم الإقامة، خدمات الأعمال، وخدمات المستندات.", h1: "خدماتنا", intro: "مجموعة خدمات منظمة للأفراد والشركات مع متابعة واضحة وخيارات تواصل سريعة." },
    car: { slug: "car-insurance-al-ain", title: "Achievement Services Broker | وساطة تأمين السيارات", description: "وساطة ومساعدة خاصة لمراجعة خيارات تأمين السيارات في العين، أبوظبي للأفراد والشركات عبر واتساب.", h1: "تأمين سيارات في العين، أبوظبي", intro: "نساعدك كمقدم وساطة خاص ومستقل على مراجعة خيارات تأمين المركبات المتاحة ومقارنة التغطيات بطريقة واضحة عبر واتساب." },
    health: { slug: "health-insurance-uae", title: "Achievement Services Broker | وساطة التأمين الصحي", description: "وساطة ومساعدة خاصة لمراجعة خيارات التأمين الصحي في العين، أبوظبي للأفراد والشركات مع دعم اختيار التغطية المناسبة.", h1: "التأمين الصحي في العين، أبوظبي", intro: "نقدم مساعدة خاصة ومستقلة لمراجعة خيارات التأمين الصحي للأفراد والشركات ومقارنة التغطيات المتاحة بوضوح." },
    setup: { slug: "business-setup-al-ain", title: "Achievement Services Broker | تأسيس الشركات", description: "استشارة تأسيس شركات في العين، أبوظبي، دعم الرخص التجارية، تجهيز مستندات الشركات، وتنسيق خدمات الأعمال.", h1: "تأسيس شركات في العين، أبوظبي", intro: "استشارة منظمة لتأسيس الأعمال وتجهيز المستندات التجارية مع فهم احتياجات السوق المحلي." },
    residency: { slug: "residency-support-uae", title: "Achievement Services Broker | دعم الإقامة", description: "دعم تجديد الإقامة، تنسيق تأمين الإقامة، دعم الهوية الإماراتية، وتذكيرات التجديد في الإمارات.", h1: "دعم الإقامة", intro: "مساعدة منظمة في متابعة خطوات الإقامة والتجديدات والتنسيق المرتبط بالمستندات والتأمين." },
    business: { slug: "business-services-al-ain", title: "Achievement Services Broker | خدمات الأعمال", description: "خدمات الأعمال في العين، أبوظبي تشمل تجهيز المستندات، دعم الشركات، تذكيرات المواعيد والتجديد، ومتابعة العملاء.", h1: "خدمات الأعمال في العين، أبوظبي", intro: "دعم يومي ومنظم للشركات الصغيرة ورواد الأعمال في المستندات والمتابعة والتنسيق الإداري." },
    doc: { slug: "documentation-services-al-ain", title: "Achievement Services Broker | خدمات المستندات", description: "خدمات المستندات في العين، أبوظبي تشمل تجهيز الوثائق والعقود وتنسيق الأوراق المطلوبة لخدمات الأعمال والتأمين.", h1: "خدمات المستندات في العين، أبوظبي", intro: "نساعدك على تنظيم وتجهيز المستندات والوثائق المطلوبة قبل بدء خدمات الأعمال أو التأمين أو المتابعة الإدارية." },
    contact: { slug: "contact", title: "Achievement Services Broker | اتصل بنا", description: "تواصل مع Achievement Services Broker في العين، أبوظبي عبر واتساب، الاتصال المباشر، نموذج التواصل، أو خرائط Google.", h1: "اتصل بنا", intro: "يسعدنا استقبال طلبك ومساعدتك في اختيار الخدمة المناسبة." },
    blog: { slug: "blog", title: "Achievement Services Broker | المدونة", description: "مقالات حول تأمين السيارات، التأمين الصحي، تأسيس الشركات، تجديد الإقامة، خدمات الأعمال، وخدمات التأمين في الإمارات.", h1: "المدونة", intro: "محتوى إرشادي يساعدك على فهم الخدمات وخطوات التحضير بطريقة منظمة." }
  },
  en: {
    home: { slug: "", title: "Achievement Services Broker | Home", description: "Achievement Services Broker provides car insurance, health insurance, business setup, residency support, documentation services, and business services in Al Ain, Abu Dhabi.", h1: "Business and Insurance Services in Al Ain, Abu Dhabi", intro: "We help individuals and companies with insurance services, business setup, residency support, and document preparation in a clear, organized way." },
    about: { slug: "about", title: "Achievement Services Broker | About Us", description: "Learn about Achievement Services Broker in Al Ain, Abu Dhabi and our professional support across insurance, business services, and documentation.", h1: "About Us", intro: "Professional business solutions and support that help individuals and companies complete their steps with clarity across the UAE." },
    services: { slug: "services", title: "Achievement Services Broker | Services", description: "Car Insurance in Al Ain, Abu Dhabi, Health Insurance, Business Setup, Residency Support, Business Services, and Documentation Services.", h1: "Our Services", intro: "A focused service portfolio for individuals and companies, with clear follow-up and fast contact options." },
    car: { slug: "car-insurance-al-ain", title: "Achievement Services Broker | Car Insurance Brokerage", description: "Private brokerage assistance for reviewing car insurance options in Al Ain, Abu Dhabi for individuals and companies via WhatsApp.", h1: "Car Insurance in Al Ain, Abu Dhabi", intro: "As a private, independent brokerage support provider, we help you review available vehicle insurance options and compare coverage clearly via WhatsApp." },
    health: { slug: "health-insurance-uae", title: "Achievement Services Broker | Health Insurance Brokerage", description: "Private brokerage assistance for reviewing health insurance options in Al Ain, Abu Dhabi for individuals and companies.", h1: "Health Insurance in Al Ain, Abu Dhabi", intro: "We provide private, independent assistance for reviewing health insurance options for individuals and companies and comparing available coverage clearly." },
    setup: { slug: "business-setup-al-ain", title: "Achievement Services Broker | Business Setup", description: "Business setup consultation in Al Ain, Abu Dhabi, trade license support, company documentation support, and business service coordination.", h1: "Business Setup in Al Ain, Abu Dhabi", intro: "Organized consultation for business setup, commercial documentation, and practical local market guidance." },
    residency: { slug: "residency-support-uae", title: "Achievement Services Broker | Residency Support", description: "Residency renewal support, Emirates ID support, insurance coordination, and renewal reminders in the UAE.", h1: "Residency Support UAE", intro: "Organized assistance with residency-related follow-up, renewals, documentation, and insurance coordination." },
    business: { slug: "business-services-al-ain", title: "Achievement Services Broker | Business Services", description: "Business Services in Al Ain, Abu Dhabi including documentation support, corporate service support, reminders, client follow-up, and preparation.", h1: "Business Services in Al Ain, Abu Dhabi", intro: "Daily support for small companies and entrepreneurs with documents, follow-up, reminders, and coordination." },
    doc: { slug: "documentation-services-al-ain", title: "Achievement Services Broker | Documentation Services", description: "Documentation Services in Al Ain, Abu Dhabi for documents, contracts, certificate preparation, and organized business and insurance support.", h1: "Documentation Services in Al Ain, Abu Dhabi", intro: "We help organize and prepare documents before business services, insurance services, and administrative follow-up." },
    contact: { slug: "contact", title: "Achievement Services Broker | Contact", description: "Contact Achievement Services Broker in Al Ain, Abu Dhabi through WhatsApp, click-to-call, contact form, or Google Maps.", h1: "Contact Us", intro: "Send your request and we will help you choose the right service." },
    blog: { slug: "blog", title: "Achievement Services Broker | Blog", description: "Articles about car insurance, health insurance, business setup, residency renewal, business services, and Insurance Services UAE.", h1: "Blog", intro: "Helpful guidance for understanding services and preparing your next steps in an organized way." }
  }
};

const articles = [
  { slug: "how-to-choose-car-insurance-al-ain", ar: { title: "كيف تختار تأمين السيارة المناسب في العين، أبوظبي؟", tabTitle: "كيف تختار تأمين السيارة المناسب؟", meta: "دليل مبسط لاختيار تأمين السيارة المناسب في العين، أبوظبي من خلال مراجعة التغطية والخدمة والمتطلبات الأساسية.", body: [["ابدأ من نوع الاستخدام", "اختيار تأمين السيارة يبدأ بفهم طريقة استخدام المركبة: استخدام شخصي أو عائلي أو مرتبط بالعمل. هذا يساعد في تحديد مستوى التغطية المناسب قبل مراجعة الخيارات."], ["راجع التغطية وليس السعر فقط", "من الأفضل مراجعة نطاق التغطية وقيمة التحمل وخدمات المساعدة على الطريق وسهولة المطالبة. الدعم المهني يساعدك على فهم الفروقات بين الخطط المتاحة."], ["جهز المستندات مبكرا", "تجهيز بطاقة المركبة ورخصة القيادة والبيانات الأساسية يختصر الوقت ويجعل خطوات التأمين أكثر تنظيما."]] }, en: { title: "How to Choose the Right Car Insurance in Al Ain, Abu Dhabi", tabTitle: "How to Choose the Right Car Insurance", meta: "A practical guide to choosing car insurance in Al Ain, Abu Dhabi by reviewing coverage, service, and essential requirements.", body: [["Start with vehicle usage", "The right vehicle insurance option depends on how the car is used: personal, family, or business-related. This helps define the coverage level before reviewing available plans."], ["Review coverage, not only price", "Review coverage scope, excess amount, roadside assistance, and claim support. Professional assistance makes the differences between available plans easier to understand."], ["Prepare documents early", "Vehicle card, driving license, and basic details help speed up the process and keep the insurance steps organized."]] } },
  { slug: "importance-of-health-insurance-companies-individuals", ar: { title: "أهمية التأمين الصحي للأفراد والشركات", meta: "تعرف على أهمية التأمين الصحي للأفراد والشركات وكيف يساعد اختيار التغطية المناسبة في إدارة الاحتياجات الصحية.", body: [["وضوح في التغطية", "التأمين الصحي يساعد الأفراد والشركات على تنظيم احتياجات الرعاية الصحية وفهم حدود التغطية والخدمات المتاحة."], ["اختيار مناسب لكل فئة", "تختلف احتياجات الفرد عن الشركة أو العمالة المنزلية، لذلك من المهم مراجعة الخيارات بناء على الاستخدام والشبكة الطبية ونطاق المنافع."], ["متابعة التجديد", "تذكيرات التجديد والمتابعة المبكرة تساعد على استمرار التغطية بشكل منظم."]] }, en: { title: "Why Health Insurance Matters for Individuals and Companies", meta: "Learn why health insurance matters and how suitable coverage supports individuals, companies, and domestic workers.", body: [["Coverage clarity", "Health insurance helps individuals and companies organize healthcare needs and understand coverage limits, networks, and available benefits."], ["Suitable options by category", "Individual needs differ from company or domestic worker requirements, so comparison should consider usage, medical network, and benefit scope."], ["Renewal follow-up", "Early reminders and clear follow-up help keep coverage organized."]] } },
  { slug: "business-setup-steps-uae-organized", ar: { title: "خطوات تأسيس شركة في الإمارات بطريقة منظمة", meta: "نظرة عامة على خطوات تأسيس شركة في الإمارات من اختيار النشاط إلى تجهيز المستندات والتنسيق الإداري.", body: [["حدد النشاط ونطاق العمل", "الخطوة الأولى هي فهم طبيعة النشاط والجمهور المستهدف والاحتياجات التشغيلية. هذا يوضح نوع الترخيص والخطوات التالية."], ["جهز المستندات المطلوبة", "تنظيم المستندات مبكرا يجعل العملية أوضح ويساعد على تقليل الأخطاء في البيانات الأساسية."], ["اطلب استشارة قبل البدء", "الاستشارة تساعدك على ترتيب الأولويات وفهم الخيارات المتاحة بما يناسب طبيعة عملك في السوق المحلي."]] }, en: { title: "Organized Steps for Business Setup in the UAE", meta: "An overview of business setup steps in the UAE, from activity selection to documentation and coordination.", body: [["Define activity and scope", "Start by understanding the business activity, audience, and operational needs. This helps clarify the license type and next steps."], ["Prepare documents", "Early document preparation makes the process clearer and helps reduce avoidable data issues."], ["Request consultation", "Consultation helps organize priorities and review available options based on your business needs in the local market."]] } },
  { slug: "tips-before-residency-renewal-uae", ar: { title: "نصائح قبل تجديد الإقامة في الإمارات", meta: "نصائح عملية قبل تجديد الإقامة في الإمارات تشمل مراجعة المستندات والتأمين والهوية الإماراتية.", body: [["راجع تاريخ الانتهاء", "المتابعة المبكرة لتاريخ انتهاء الإقامة تمنحك وقتا كافيا لتجهيز المستندات المرتبطة بالتجديد."], ["تحقق من التأمين", "بعض خطوات التجديد تحتاج إلى تنسيق التأمين. مراجعة بيانات التأمين مبكرا تساعد على ترتيب الخطوات."], ["احتفظ بنسخ منظمة", "احتفظ بنسخ واضحة من المستندات الأساسية لتسهيل المتابعة عند الحاجة."]] }, en: { title: "Tips Before Residency Renewal in the UAE", meta: "Practical tips before UAE residency renewal, including document review, insurance coordination, and Emirates ID support.", body: [["Check expiry dates", "Early follow-up on residency expiry dates gives enough time to prepare documents connected to renewal."], ["Review insurance", "Some renewal steps involve insurance coordination. Reviewing insurance details early helps organize the process."], ["Keep organized copies", "Clear copies of essential documents make follow-up easier when support is needed."]] } },
  { slug: "business-services-small-companies-al-ain", ar: { title: "خدمات الأعمال التي تحتاجها الشركات الصغيرة", meta: "أهم خدمات الأعمال التي تساعد الشركات الصغيرة على تنظيم المستندات والمتابعة والتجديدات.", body: [["تنظيم المستندات", "الشركات الصغيرة تحتاج إلى نظام واضح للمستندات حتى تكون المتابعة اليومية أسهل وأكثر دقة."], ["تذكيرات المواعيد", "تذكيرات التجديد والمواعيد تساعد الإدارة على تقليل التأخير وتحسين التخطيط."], ["متابعة العملاء", "الدعم الإداري وخدمات المتابعة تمنح أصحاب الأعمال وقتا أكبر للتركيز على التشغيل والنمو."]] }, en: { title: "Business Services Small Companies Need", meta: "Key business services that help small companies organize documents, follow-up, reminders, and renewals.", body: [["Document organization", "Small companies need clear document systems so daily follow-up is easier and more accurate."], ["Appointment reminders", "Renewal and appointment reminders help reduce delays and improve planning."], ["Client follow-up", "Administrative support and follow-up services give business owners more time to focus on operations and growth."]] } },
  { slug: "why-document-preparation-matters-before-process", ar: { title: "أهمية تجهيز المستندات قبل بدء المعاملات", meta: "تجهيز المستندات قبل بدء المعاملات يساعد على وضوح الخطوات وتقليل التأخير في خدمات الأعمال والتأمين.", body: [["وضوح من البداية", "عندما تكون المستندات منظمة قبل بدء أي عملية، يصبح من الأسهل مراجعة المتطلبات وتحديد الخطوة التالية."], ["تقليل التأخير", "المستندات الناقصة أو غير الواضحة قد تؤخر المتابعة. التحضير المبكر يساعد على سير العمل بطريقة أكثر تنظيما."], ["دعم أفضل للعميل", "وجود بيانات واضحة يساعد فريق الدعم على تقديم استشارة وتنسيق أكثر دقة."]] }, en: { title: "Why Document Preparation Matters Before Starting Any Process", meta: "Document preparation before starting any process helps improve clarity and reduce delays in business and insurance services.", body: [["Clarity from the start", "When documents are organized before a process starts, requirements are easier to review and next steps are clearer."], ["Fewer delays", "Missing or unclear documents can slow down follow-up. Early preparation helps keep the workflow organized."], ["Better client support", "Clear information helps the support team provide more accurate consultation and coordination."]] } }
];

function ensureDir(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
}

function write(file, content) {
  ensureDir(file);
  fs.writeFileSync(file, content, "utf8");
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]));
}

function pageUrl(lang, slug = "") {
  return `${domain}/${lang}/${slug ? `${slug}/` : ""}`;
}

function localHref(lang, slug = "") {
  return `${siteBase}/${lang}/${slug ? `${slug}/` : ""}`;
}

function assetHref(pathname) {
  return `${siteBase}${pathname}`;
}

function alternateSlug(slug) {
  return slug || "";
}

function icon(type) {
  const paths = {
    car: '<path d="M7 17h10l2-5H5l2 5Z"/><path d="M8 17v2M16 17v2M7 12l1.5-4h7L17 12"/>',
    health: '<path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.6-7 10-7 10Z"/><path d="M12 8v6M9 11h6"/>',
    briefcase: '<path d="M4 8h16v11H4z"/><path d="M9 8V5h6v3M4 12h16"/>',
    id: '<path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h6M9 17h4"/>',
    doc: '<path d="M7 3h7l3 3v15H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>',
    file: '<path d="M6 4h9l3 3v13H6z"/><path d="M15 4v4h4M9 13h6M9 17h4"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[type] || paths.doc}</svg>`;
}

const externalAttrs = 'target="_blank" rel="noopener noreferrer"';

function header(lang, activeSlug) {
  const l = labels[lang];
  return `<header class="site-header">
  <div class="container nav">
    <a class="brand" href="${localHref(lang)}" aria-label="Achievement Services Broker">
      <img class="brand-logo" src="${assetHref("/assets/img/achievement-logo.png")}" alt="Achievement Services Broker Logo" width="1024" height="768">
    </a>
    <nav class="nav-links" data-nav-links aria-label="${esc(l.links)}">
      ${nav.map(([slug, key]) => `<a href="${localHref(lang, slug)}" class="${slug === activeSlug ? "active" : ""}">${l[key]}</a>`).join("")}
    </nav>
    <div class="nav-actions">
      <div class="lang-switch" aria-label="Language switcher">
        <a class="${lang === "ar" ? "active" : ""}" href="${localHref("ar", activeSlug)}">AR</a>
        <a class="${lang === "en" ? "active" : ""}" href="${localHref("en", activeSlug)}">EN</a>
      </div>
      <a class="btn btn-outline btn-small" href="${whatsapp}" ${externalAttrs}>${l.whatsapp}</a>
      <button class="mobile-toggle" type="button" data-menu-toggle aria-expanded="false" aria-label="Menu">☰</button>
    </div>
  </div>
</header>`;
}

function footer(lang) {
  const l = labels[lang];
  const footerServices = adSafeFooterServices[lang];
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div>
      <a class="brand" href="${localHref(lang)}"><img class="brand-logo" src="${assetHref("/assets/img/achievement-logo.png")}" alt="Achievement Services Broker Logo" width="1024" height="768"></a>
      <p>${l.footerText}</p>
    </div>
    <div><h3>${l.links}</h3><div class="footer-links">${nav.map(([slug, key]) => `<a href="${localHref(lang, slug)}">${l[key]}</a>`).join("")}</div></div>
    <div><h3>${l.services}</h3><div class="footer-links">${footerServices.map((s) => `<a href="${localHref(lang, s[0])}">${s[1]}</a>`).join("")}</div></div>
    <div><h3>${l.contactInfo}</h3><div class="footer-links"><a href="${phoneHref}">${phone}</a><a href="${whatsapp}" ${externalAttrs}>WhatsApp</a><a href="${maps}" ${externalAttrs}>${l.location}</a></div></div>
  </div>
  <div class="container copyright">© ${new Date().getFullYear()} Achievement Services Broker. achbroker.com</div>
</footer>`;
}

function whatsappWidget(lang) {
  const l = labels[lang];
  return `<aside class="whatsapp-widget" data-whatsapp-widget aria-label="WhatsApp chat">
  <div class="whatsapp-widget-head">
    <span>${icon("health")}</span><strong>Achievement Services Broker</strong>
    <button class="whatsapp-close" type="button" data-whatsapp-close aria-label="Close">×</button>
  </div>
  <div class="whatsapp-widget-body">
    <p>${l.widgetMessage}</p>
    <a class="btn" href="${whatsapp}" ${externalAttrs}>${l.widgetButton}</a>
  </div>
</aside>`;
}

function contactForm(lang) {
  const l = labels[lang];
  const placeholder = lang === "ar" ? "اختر الخدمة" : "Select Service";
  return `<form class="contact-panel" data-contact-form data-lang="${lang}">
  <h2>${l.formTitle}</h2>
  <p>${l.formText}</p>
  <div class="form-grid">
    <div class="field"><label for="name-${lang}">${l.name}</label><input id="name-${lang}" name="name" autocomplete="name" required></div>
    <div class="field"><label for="phone-${lang}">${l.phone}</label><input id="phone-${lang}" name="phone" autocomplete="tel" required></div>
    <div class="field full"><label for="service-${lang}">${l.serviceInterested}</label><select id="service-${lang}" name="service" required><option value="" selected disabled>${placeholder}</option>${contactServiceOptions[lang].map((service) => `<option value="${esc(service)}">${esc(service)}</option>`).join("")}</select></div>
    <div class="field full"><label for="message-${lang}">${l.message}</label><textarea id="message-${lang}" name="message" required></textarea></div>
    <div class="field full"><button class="btn btn-gold" type="submit">${l.submit}</button></div>
  </div>
</form>`;
}

function schema(lang, page, slug, serviceName) {
  const url = pageUrl(lang, slug);
  const graph = [
    {
      "@type": "Organization",
      "@id": `${domain}/#organization`,
      name: "Achievement Services Broker",
      logo: logoImage,
      image: logoImage,
      url: domain,
      telephone: phone,
      sameAs: Object.values(socials)
    },
    {
      "@type": "LocalBusiness",
      "@id": `${domain}/#localbusiness`,
      name: "Achievement Services Broker",
      image: logoImage,
      url: domain,
      telephone: phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Al Ain, Abu Dhabi",
        addressCountry: "AE"
      },
      areaServed: ["Al Ain, Abu Dhabi", "United Arab Emirates"],
      priceRange: "$$"
    }
  ];
  if (serviceName) {
    graph.push({
      "@type": "Service",
      name: serviceName,
      provider: { "@id": `${domain}/#organization` },
      areaServed: "Al Ain, Abu Dhabi, United Arab Emirates",
      serviceType: serviceName,
      url
    });
  }
  return `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": graph })}</script>`;
}

function googleAdsTag() {
  return `<script async src="https://www.googletagmanager.com/gtag/js?id=${googleAdsId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${googleAdsId}');
  </script>`;
}

function head(lang, page, slug, serviceName) {
  const url = pageUrl(lang, slug);
  const other = lang === "ar" ? "en" : "ar";
  return `<!doctype html>
<html lang="${lang}" dir="${labels[lang].dir}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${url}">
  <link rel="alternate" hreflang="${lang}" href="${url}">
  <link rel="alternate" hreflang="${other}" href="${pageUrl(other, slug)}">
  <link rel="alternate" hreflang="x-default" href="${pageUrl("ar", slug)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:image" content="${logoImage}">
  <meta property="og:image:secure_url" content="${logoImage}">
  <meta property="og:image:alt" content="Achievement Services Broker Logo">
  <meta property="og:locale" content="${lang === "ar" ? "ar_AE" : "en_AE"}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="${logoImage}">
  <meta name="theme-color" content="#06111f">
  <link rel="icon" type="image/png" href="${assetHref("/favicon.png?v=20260513")}">
  <link rel="apple-touch-icon" href="${assetHref("/assets/img/achievement-logo.png?v=20260513")}">
  <link rel="stylesheet" href="${assetHref("/assets/css/styles.css?v=20260513")}">
  ${googleAdsTag()}
  ${schema(lang, page, slug, serviceName)}
</head>
<body dir="${labels[lang].dir}" style="--hero-image: url('${assetHref("/assets/img/hero-al-ain.png")}')">
<a class="skip-link" href="#main">Skip to content</a>
${header(lang, slug)}`;
}

function layout(lang, page, slug, body, serviceName) {
  return `${head(lang, page, slug, serviceName)}
<main id="main">${body}</main>
${footer(lang)}
${whatsappWidget(lang)}
<script src="${assetHref("/assets/js/main.js")}" defer></script>
</body>
</html>`;
}

function hero(lang, page) {
  const l = labels[lang];
  return `<section class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>${page.h1}</h1>
      <p>${page.intro}</p>
      <div class="hero-actions">
        <a class="btn btn-gold" href="${whatsapp}" ${externalAttrs}>${l.whatsapp}</a>
        <a class="btn btn-outline" href="${phoneHref}">${l.call}</a>
      </div>
      <div class="location-note">${icon("id")} ${l.location}</div>
    </div>
  </div>
</section>`;
}

function pageHero(lang, page, slug) {
  return `<section class="page-hero">
  <div class="container">
    <h1>${page.h1}</h1>
    <p>${page.intro}</p>
  </div>
</section>`;
}

function serviceCards(lang, limit) {
  return `<div class="grid grid-3">${services[lang].slice(0, limit || services[lang].length).map((s) => `<article class="card service-card">
  <div class="icon">${icon(s[3])}</div>
  <h3>${s[1]}</h3>
  <p>${s[2]}</p>
  <a class="btn btn-outline btn-small" href="${localHref(lang, s[0])}">${labels[lang].request}</a>
</article>`).join("")}</div>`;
}

function home(lang) {
  const p = pages[lang].home;
  const ar = lang === "ar";
  const body = `${hero(lang, p)}
<section class="section">
  <div class="container">
    <div class="section-head"><span class="section-label">${ar ? "الخدمات الرئيسية" : "Main Services"}</span><h2>${ar ? "خدمات تقود إلى تواصل أسرع ونتائج أوضح" : "Services designed for faster contact and clearer next steps"}</h2></div>
    ${serviceCards(lang, 6)}
  </div>
</section>
<section class="section alt">
  <div class="container split">
    <div>
      <span class="section-label">${ar ? "لماذا تختارنا" : "Why Choose Us"}</span>
      <h2>${ar ? "خبرة محلية، متابعة واضحة، وتواصل مباشر" : "Local experience, clear follow-up, and direct contact"}</h2>
      <ul class="list">
        <li>${ar ? "تركيز على احتياجات الأفراد والشركات في العين، أبوظبي." : "Focused on individual and company needs in Al Ain, Abu Dhabi."}</li>
        <li>${ar ? "استشارة سريعة عبر واتساب واتصال مباشر." : "Fast consultation through WhatsApp and click-to-call."}</li>
        <li>${ar ? "تنظيم المستندات والخطوات بطريقة سهلة." : "Organized documents and steps in a simple way."}</li>
        <li>${ar ? "لغة عربية وإنجليزية لتجربة تواصل مريحة." : "Arabic and English support for comfortable communication."}</li>
      </ul>
    </div>
    <figure class="media-frame"><img src="${assetHref("/assets/img/consultation-health.png")}" alt="${ar ? "اجتماع أعمال احترافي في مكتب داخل الإمارات" : "Professional UAE business meeting in a corporate office"}" loading="lazy"></figure>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head center"><span class="section-label">${ar ? "طريقة العمل" : "How It Works"}</span><h2>${ar ? "ثلاث خطوات بسيطة" : "Three simple steps"}</h2></div>
    <div class="grid grid-3 steps">
      <article class="card step"><h3>${ar ? "تواصل معنا" : "Contact us"}</h3><p>${ar ? "أرسل طلبك عبر واتساب أو نموذج التواصل." : "Send your request through WhatsApp or the contact form."}</p></article>
      <article class="card step"><h3>${ar ? "نراجع التفاصيل" : "We review details"}</h3><p>${ar ? "نحدد الخدمة المناسبة والمستندات المطلوبة." : "We identify the right service and required documents."}</p></article>
      <article class="card step"><h3>${ar ? "متابعة منظمة" : "Organized follow-up"}</h3><p>${ar ? "ننسق الخطوات التالية بوضوح ومرونة." : "We coordinate the next steps clearly and flexibly."}</p></article>
    </div>
  </div>
</section>
<section class="section alt">
  <div class="container split">
    <figure class="media-frame"><img src="${assetHref("/assets/img/car-insurance.png")}" alt="${ar ? "مستندات تأمين سيارة ومفاتيح مركبة على مكتب احترافي" : "Car insurance documents and vehicle keys on a professional desk"}" loading="lazy"></figure>
    <div>
      <span class="section-label">${ar ? "تركيزنا في العين، أبوظبي" : "Focused on Al Ain, Abu Dhabi"}</span>
      <h2>${ar ? "خدمات قريبة من احتياجات السوق المحلي" : "Services shaped around local market needs"}</h2>
      <p>${ar ? "نعمل من العين، أبوظبي ونفهم احتياجات الأفراد والشركات الباحثين عن خدمات تأمين وأعمال منظمة داخل الإمارات." : "Based in Al Ain, Abu Dhabi, we understand the needs of individuals and companies looking for organized insurance and business services in the UAE."}</p>
      <a class="btn btn-gold" href="${localHref(lang, "contact")}">${labels[lang].consult}</a>
    </div>
  </div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head center"><span class="section-label">${ar ? "شبكة موثوقة" : "Trusted Network"}</span><h2>${ar ? "نساعدك على مقارنة الخيارات المتاحة" : "We help you compare available options"}</h2><p>${ar ? "نعمل من خلال شبكة علاقات مهنية في خدمات التأمين والأعمال دون استخدام أسماء شركاء غير مؤكدة." : "We work through a professional network for insurance and business services without listing unsupported partner names."}</p></div>
  </div>
</section>
${cta(lang)}`;
  return layout(lang, p, "", body);
}

function cta(lang) {
  const ar = lang === "ar";
  return `<section class="section cta-band">
  <div class="container cta-inner">
    <div><h2>${ar ? "ابدأ بطلب استشارة عبر واتساب" : "Start with a WhatsApp consultation"}</h2><p>${ar ? "فريقنا جاهز لمساعدتك في اختيار الخدمة المناسبة وتنظيم الخطوات التالية." : "Our team is ready to help you choose the right service and organize the next steps."}</p></div>
    <div class="hero-actions"><a class="btn btn-gold" href="${whatsapp}" ${externalAttrs}>${labels[lang].whatsapp}</a><a class="btn btn-outline" href="${phoneHref}">${labels[lang].call}</a></div>
  </div>
</section>`;
}

function about(lang) {
  const p = pages[lang].about;
  const ar = lang === "ar";
  const text = ar
    ? ["في Achievement Services Broker نعمل على تقديم حلول أعمال وخدمات احترافية تساعد الأفراد والشركات على إنجاز معاملاتهم بسهولة وسرعة داخل دولة الإمارات.", "نحرص على توفير تجربة مريحة ومرنة من خلال فريق متخصص يمتلك خبرة في خدمات التأمين، الأعمال، وتجهيز المستندات، مع متابعة دقيقة للتفاصيل وتقديم دعم واضح للعملاء.", "هدفنا هو تبسيط الخطوات، توفير الوقت، وتقديم خدمة تعتمد على الوضوح والاحترافية."]
    : ["At Achievement Services Broker, we provide professional business solutions and services that help individuals and companies complete their requirements with ease across the UAE.", "We focus on a comfortable and flexible experience through a specialized team with experience in insurance services, business services, and document preparation, with careful attention to detail and clear client support.", "Our goal is to simplify steps, save time, and deliver service built on clarity and professionalism."];
  const body = `${pageHero(lang, p, p.slug)}
<section class="section">
  <div class="container split">
    <div class="content-block">${text.map((t) => `<p>${t}</p>`).join("")}<div class="hero-actions"><a class="btn btn-gold" href="${whatsapp}" ${externalAttrs}>${labels[lang].whatsapp}</a><a class="btn btn-outline" href="${localHref(lang, "services")}">${labels[lang].services}</a></div></div>
    <figure class="media-frame"><img src="${assetHref("/assets/img/documents-business.png")}" alt="${ar ? "تجهيز مستندات وخدمات أعمال في مكتب احترافي" : "Documentation and business services in a professional office"}" loading="lazy"></figure>
  </div>
</section>${cta(lang)}`;
  return layout(lang, p, p.slug, body);
}

function servicesPage(lang) {
  const p = pages[lang].services;
  const body = `${pageHero(lang, p, p.slug)}
<section class="section"><div class="container">${serviceCards(lang)}</div></section>${cta(lang)}`;
  return layout(lang, p, p.slug, body);
}

function complianceNotice(lang) {
  const notice = adComplianceNotice[lang];
  return `<section class="section alt">
  <div class="container">
    <article class="card content-block compliance-note">
      <span class="section-label">${notice.title}</span>
      <p>${notice.text}</p>
    </article>
  </div>
</section>`;
}

function serviceImageAlt(lang, key, fallback) {
  const altText = {
    ar: {
      car: "استشارة خاصة لمقارنة خيارات تأمين السيارات",
      health: "استشارة خاصة لمقارنة خيارات التأمين الصحي"
    },
    en: {
      car: "Private consultation for comparing car insurance options",
      health: "Private consultation for comparing health insurance options"
    }
  };
  return (altText[lang] && altText[lang][key]) || fallback;
}

const serviceDetails = {
  car: {
    image: "car-insurance.png",
    bullets: {
      ar: ["مراجعة خيارات تأمين المركبات المتاحة.", "مساعدة في مقارنة التغطيات والأسعار والشروط.", "وساطة خاصة للأفراد والشركات.", "استشارة سريعة عبر واتساب من مقدم خدمة خاص مستقل."],
      en: ["Review available vehicle insurance options.", "Assistance comparing coverage, pricing, and terms.", "Private brokerage support for individuals and companies.", "Fast WhatsApp consultation from an independent private provider."]
    }
  },
  health: {
    image: "consultation-health.png",
    bullets: {
      ar: ["مراجعة خيارات التأمين الصحي المتاحة.", "دعم اختيار تغطية مناسبة للأفراد والشركات.", "مساعدة في فهم المنافع وحدود التغطية.", "تواصل سريع عبر واتساب من مقدم خدمة خاص مستقل."],
      en: ["Review available health insurance options.", "Support choosing suitable coverage for individuals and companies.", "Help understanding benefits and coverage limits.", "Fast WhatsApp contact from an independent private provider."]
    }
  },
  setup: {
    image: "documents-business.png",
    bullets: {
      ar: ["استشارة تأسيس الأعمال.", "دعم الرخص التجارية.", "تجهيز مستندات الشركات.", "تنسيق خدمات الأعمال وإرشاد للسوق المحلي."],
      en: ["Business setup consultation.", "Trade license support.", "Company documentation support.", "Business service coordination and local market guidance."]
    }
  },
  residency: {
    image: "documents-business.png",
    bullets: {
      ar: ["دعم تجديد الإقامة.", "دعم الهوية الإماراتية.", "تنسيق التأمين المرتبط بالإقامة.", "تذكيرات التجديد والمتابعة."],
      en: ["Residency renewal support.", "Emirates ID support.", "Insurance coordination.", "Renewal reminders and follow-up."]
    }
  },
  business: {
    image: "documents-business.png",
    bullets: {
      ar: ["تجهيز المستندات.", "دعم خدمات الشركات.", "تذكيرات المواعيد والتجديد.", "متابعة العملاء والتحضير الإداري."],
      en: ["Document preparation.", "Corporate service support.", "Appointment and renewal reminders.", "Client follow-up and administrative preparation."]
    }
  },
  doc: {
    image: "documents-business.png",
    bullets: {
      ar: ["تنظيم الوثائق والعقود.", "تجهيز المستندات قبل بدء المعاملات.", "مراجعة البيانات الأساسية لتقليل التأخير.", "تنسيق واضح لخدمات الأعمال والتأمين."],
      en: ["Document and contract organization.", "Document preparation before starting processes.", "Basic information review to reduce delays.", "Clear coordination for business and insurance services."]
    }
  }
};

function servicePage(lang, key) {
  const p = pages[lang][key];
  const data = serviceDetails[key];
  const ar = lang === "ar";
  const serviceName = p.h1;
  const adLandingPage = key === "car" || key === "health";
  const body = `${pageHero(lang, p, p.slug)}
<section class="section">
  <div class="container split">
    <div>
      <span class="section-label">${ar ? "استشارة وتنظيم" : "Consultation and Coordination"}</span>
      <h2>${ar ? "دعم واضح من أول تواصل" : "Clear support from the first contact"}</h2>
      <p>${p.intro}</p>
      <ul class="list">${data.bullets[lang].map((b) => `<li>${b}</li>`).join("")}</ul>
      <div class="hero-actions"><a class="btn btn-gold" href="${whatsapp}" ${externalAttrs}>${labels[lang].whatsapp}</a><a class="btn btn-outline" href="${phoneHref}">${labels[lang].call}</a></div>
    </div>
    <figure class="media-frame"><img src="${assetHref(`/assets/img/${data.image}`)}" alt="${esc(serviceImageAlt(lang, key, p.h1))}" loading="lazy"></figure>
  </div>
</section>
${adLandingPage ? complianceNotice(lang) : ""}
${adLandingPage ? "" : `<section class="section alt">
  <div class="container">
    <div class="section-head center"><span class="section-label">${ar ? "خدمات مرتبطة" : "Related Services"}</span><h2>${ar ? "قد تحتاج أيضاً إلى" : "You may also need"}</h2></div>
    ${serviceCards(lang, 3)}
  </div>
</section>`}${cta(lang)}`;
  return layout(lang, p, p.slug, body, serviceName);
}

function contact(lang) {
  const p = pages[lang].contact;
  const l = labels[lang];
  const body = `${pageHero(lang, p, p.slug)}
<section class="section">
  <div class="container split">
    <div>
      <h2>${lang === "ar" ? "موقعنا في العين، أبوظبي" : "Our Location in Al Ain, Abu Dhabi"}</h2>
      <p>${lang === "ar" ? "يمكنك فتح الموقع عبر خرائط Google أو التواصل مباشرة عبر واتساب والاتصال." : "Open the location on Google Maps or contact us directly through WhatsApp and click-to-call."}</p>
      <div class="hero-actions"><a class="btn btn-gold" href="${whatsapp}" ${externalAttrs}>${l.whatsapp}</a><a class="btn btn-outline" href="${phoneHref}">${l.call}</a><a class="btn btn-outline" href="${maps}" ${externalAttrs}>Google Maps</a></div>
      <div class="social-row" style="margin-top:22px"><a class="btn btn-outline btn-small" href="${socials.facebook}" ${externalAttrs}>Facebook</a><a class="btn btn-outline btn-small" href="${socials.instagram}" ${externalAttrs}>Instagram</a><a class="btn btn-outline btn-small" href="${socials.tiktok}" ${externalAttrs}>TikTok</a></div>
    </div>
    ${contactForm(lang)}
  </div>
</section>
<section class="section alt"><div class="container"><div class="map-frame"><iframe loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Achievement%20Services%20Broker%20Al%20Ain%20United%20Arab%20Emirates&output=embed" title="Achievement Services Broker Google Maps"></iframe></div></div></section>`;
  return layout(lang, p, p.slug, body);
}

function blog(lang) {
  const p = pages[lang].blog;
  const body = `${pageHero(lang, p, p.slug)}
<section class="section"><div class="container"><div class="grid grid-3">
${articles.map((a) => `<article class="card blog-card"><h2>${a[lang].title}</h2><p>${a[lang].meta}</p><a class="btn btn-outline btn-small" href="${localHref(lang, `blog/${a.slug}`)}">${labels[lang].readMore}</a></article>`).join("")}
</div></div></section>`;
  return layout(lang, p, p.slug, body);
}

function article(lang, article) {
  const page = {
    title: `Achievement Services Broker | ${article[lang].tabTitle || article[lang].title}`,
    description: article[lang].meta,
    h1: article[lang].title,
    intro: article[lang].meta
  };
  const slug = `blog/${article.slug}`;
  const body = `${pageHero(lang, page, slug)}
<section class="section"><div class="container article-body">
${article[lang].body.map(([h, p]) => `<h2>${h}</h2><p>${p}</p>`).join("")}
<div class="hero-actions"><a class="btn btn-gold" href="${whatsapp}" ${externalAttrs}>${labels[lang].whatsapp}</a><a class="btn btn-outline" href="${localHref(lang, "contact")}">${labels[lang].contact}</a></div>
</div></section>`;
  return layout(lang, page, slug, body);
}

function outputPath(lang, slug) {
  return path.join(__dirname, lang, slug || "", "index.html");
}

for (const lang of ["ar", "en"]) {
  write(outputPath(lang, ""), home(lang));
  write(outputPath(lang, pages[lang].about.slug), about(lang));
  write(outputPath(lang, pages[lang].services.slug), servicesPage(lang));
  for (const key of ["car", "health", "setup", "residency", "business", "doc"]) {
    write(outputPath(lang, pages[lang][key].slug), servicePage(lang, key));
  }
  write(outputPath(lang, pages[lang].contact.slug), contact(lang));
  write(outputPath(lang, pages[lang].blog.slug), blog(lang));
  for (const a of articles) write(outputPath(lang, `blog/${a.slug}`), article(lang, a));
}

write(path.join(__dirname, "index.html"), `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Achievement Services Broker</title>
  <meta name="description" content="${pages.ar.home.description}">
  <link rel="canonical" href="${pageUrl("ar")}">
  <link rel="icon" type="image/png" href="${assetHref("/favicon.png")}">
  <link rel="apple-touch-icon" href="${assetHref("/assets/img/achievement-logo.png")}">
  <meta http-equiv="refresh" content="0; url=${localHref("ar")}">
  <script>location.replace('${localHref("ar")}');</script>
</head>
<body><a href="${localHref("ar")}">Achievement Services Broker</a></body>
</html>`);

const sitemapUrls = [];
for (const lang of ["ar", "en"]) {
  for (const page of Object.values(pages[lang])) sitemapUrls.push(pageUrl(lang, page.slug));
  for (const a of articles) sitemapUrls.push(pageUrl(lang, `blog/${a.slug}`));
}
write(path.join(__dirname, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`);

write(path.join(__dirname, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`);

console.log(`Generated ${sitemapUrls.length + 1} HTML routes plus sitemap.xml and robots.txt`);
