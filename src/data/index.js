import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { ReactComponent as HomeIcon } from '../svgs/home.svg';
import { ReactComponent as ArticleIcon } from '../svgs/article.svg';
import { ReactComponent as AssessmentIcon } from '../svgs/assessment.svg';
import { ReactComponent as UserIcon } from '../svgs/userr.svg';
import { ReactComponent as VideoIcon } from '../svgs/video.svg';
import { ReactComponent as CourseIcon } from '../svgs/cources.svg';
import { ReactComponent as PricingIcon } from '../svgs/pricing.svg';
import { ReactComponent as ResourceIcon } from '../svgs/resources.svg';
import { ReactComponent as SettingsIcon } from '../svgs/setting.svg';




export const FooterSections = [
  {
    title: "COMPANY",
    links: [
      { name: "FAQ", href: "/faq" },
      { name: "About", href: "/about" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Learning", href: "" },
      { name: "Infographics", href: "" },
      { name: "Tips And Tricks", href: "" },
      { name: "Tools", href: "" },
      { name: "Marketplace", href: "" },
      { name: "Report a Phish", href: "" },
      { name: "Defender Toolbox", href: "" },
      { name: "No More Ransom", href: "" },
    ],
  },
  {
    title: "GET INVOLVED",
    links: [
      { name: "Community", href: "" },
      { name: "Write For Us", href: "" },
      { name: "Suggest a Feature", href: "" },
      { name: "Invite Friends", href: "" },
    ],
  },
  {
    title: "Contact Us",
    icons: [
      { icon: <FaFacebookF />, href: "" },
      { icon: <FaInstagram />, href: "" },
      { icon: <FaYoutube />, href: "" },
      { icon: <FaXTwitter />, href: "" },
    ],
  },
];


export const Category = [
  {
    id: 1,
    title: 'CyberSecurity Fundamental'
  },
  {
    id: 2,
    title: 'Application Security'
  },
  {
    id: 3,
    title: 'IoT Security'
  },
  {
    id: 4,
    title: 'Network Security'
  },
  {
    id: 5,
    title: 'Information Security'
  },
  {
    id: 6,
    title: 'Operation Security'
  },
]

export const CardData = [
  {
    id: 1,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network. Learn the basics of firewalls and how they protect your network.Learn the basics of firewalls and how they protect your network.Learn the basics of firewalls and how they protect your network.Learn the basics of firewalls and how they protect your network.Learn the basics of firewalls and how they protect your network.Learn the basics of firewalls and how they protect your network.Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips1.png"),
    category: "Network Security",
  },
  {
    id: 2,
    title: "Security Application",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips2.png"),
    category: "Application Security",
  },
  {
    id: 3,
    title: "IOT Application",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips3.png"),
    category: "Application Security",
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips4.png"),
    category: "Network Security",
  },
  {
    id: 5,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips5.png"),
    category: "IoT Security",
  },
  {
    id: 6,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips6.png"),
    category: "IoT Security",
  },
  {
    id: 7,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips7.png"),
    category: "Information Security",
  },
  {
    id: 8,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips8.png"),
    category: "CyberSecurity Fundamental",
  }, {
    id: 9,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips9.png"),
    category: "Information Security",
  },
  {
    id: 10,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips5.png"),
    category: "Information Security",
  },
  {
    id: 11,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips2.png"),
    category: "Network Security",
  },
  {
    id: 12,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips6.png"),
    category: "Network Security",
  },

  {
    id: 13,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips7.png"),
    category: "Information Security",
  },
  {
    id: 14,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips3.png"),
    category: "Cloud Security",
  },
  {
    id: 15,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips8.png"),
    category: "CyberSecurity Fundamental",
  },
  {
    id: 16,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips5.png"),
    category: "CyberSecurity Fundamental",
  },
  {
    id: 17,
    title: "Understanding Firewalls",
    description: "Learn the basics of firewalls and how they protect your network.",
    likes: "1.3k Likes",
    likeIcon: require('../assets/icons/like.png'),
    views: "1.3k Views",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "2.5k Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/tips4.png"),
    category: "CyberSecurity Fundamental",
  },
]


export const ShareData = [
  {
    icon: <FaFacebookF className="text-blue group-hover:text-white" />,
    title: 'Facebook'
  },
  {
    icon: <FaXTwitter className="text-blue group-hover:text-white" />,
    title: 'Twitter'
  },
  {
    icon: <FaWhatsapp className="text-blue group-hover:text-white" />,
    title: 'Whats App'
  },
  {
    icon: <FaInstagram className="text-blue group-hover:text-white" />,
    title: 'Instagram'
  },
  {
    icon: <FaYoutube className="text-blue group-hover:text-white" />,
    title: 'Youtube'
  },
  {
    icon: <MdOutlineEmail className="text-blue group-hover:text-white" />,
    title: 'Gmail'
  },
]


export const InfoData = [
  {
    id: 1,
    title: "Don't Give up The Game!",
    description: "An infographic about perseverance in life.",
    download: '12.8k',
    downloadIcon: require('../assets/icons/download.png'),
    likes: "12.3k ",
    likeIcon: require('../assets/icons/like.png'),
    views: "12.3k",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/info1.png"),
    category: "Motivation",
  },
  {
    id: 2,
    title: "Don't Get Hooked!",
    description: "An infographic about avoiding phishing scams.",
    download: '12.8k',
    downloadIcon: require('../assets/icons/download.png'),
    likes: "12.3k ",
    likeIcon: require('../assets/icons/like.png'),
    views: "12.3k",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/info2.png"),
    category: "Infographics",
  },
  {
    id: 3,
    title: "No Firewall is Fool Proof!",
    description: "An infographic about improving firewall security.",
    download: '12.8k',
    downloadIcon: require('../assets/icons/download.png'),
    likes: "12.3k ",
    likeIcon: require('../assets/icons/like.png'),
    views: "12.3k",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/info3.png"),
    category: "Infographics",
  },
  {
    id: 4,
    title: "Phishing Scam",
    description: "How to identify and avoid phishing attacks.",
    download: '12.8k',
    downloadIcon: require('../assets/icons/download.png'),
    likes: "12.3k ",
    likeIcon: require('../assets/icons/like.png'),
    views: "12.3k",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/info4.png"),
    category: "Infographics",
  },
  {
    id: 5,
    title: "Show Your Social Network Smarts",
    description: "Tips for staying safe on social media.",
    download: '12.8k',
    downloadIcon: require('../assets/icons/download.png'),
    likes: "12.3k ",
    likeIcon: require('../assets/icons/like.png'),
    views: "12.3k",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/info5.png"),
    category: "Social Media",
  },
  {
    id: 6,
    title: "The Five Rules of Social Networks",
    description: "Best practices for using social media responsibly.",
    download: '12.8k',
    downloadIcon: require('../assets/icons/download.png'),
    likes: "12.3k ",
    likeIcon: require('../assets/icons/like.png'),
    views: "12.3k",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/info6.png"),
    category: "Social Media",
  },
  {
    id: 7,
    title: "Ads Are More Than Annoying",
    description: "Understanding the risks of online ads.",
    download: '12.8k',
    downloadIcon: require('../assets/icons/download.png'),
    likes: "12.3k ",
    likeIcon: require('../assets/icons/like.png'),
    views: "12.3k",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/info7.png"),
    category: "CyberSecurity",
  },
  {
    id: 8,
    title: "Passwords Are About Power!",
    description: "Why strong passwords are critical for security.",
    download: '12.8k',
    downloadIcon: require('../assets/icons/download.png'),
    likes: "12.3k ",
    likeIcon: require('../assets/icons/like.png'),
    views: "12.3k",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/info8.png"),
    category: "CyberSecurity",
  },
  {
    id: 9,
    title: "Nothing on the Internet is Free!",
    description: "The hidden costs of free online services.",
    download: '12.8k',
    downloadIcon: require('../assets/icons/download.png'),
    likes: "12.3k ",
    likeIcon: require('../assets/icons/like.png'),
    views: "12.3k",
    viewIcon: require('../assets/icons/eye.png'),
    shares: "Share",
    shareIcon: require('../assets/icons/upload.png'),
    image: require("../assets/images/info9.png"),
    category: "Motivation",
  },
];


export const SidebarLinks = [
  {
    id: 1,
    name: "Home",
    href: "/dashboard",
    icon: HomeIcon, // Use the React component for Home icon
  },
  {
    id: 2,
    name: "Articles",
    href: "/articles",
    icon: ArticleIcon, // Use the React component for Article icon
  },
  {
    id: 3,
    name: "Assessments",
    href: "/assessments",
    icon: AssessmentIcon, // Use the React component for Assessment icon
  },
  {
    id: 4,
    name: "Users",
    href: "/users",
    icon: UserIcon, // Use the React component for User icon
  },
  {
    id: 5,
    name: "Videos",
    href: "/videos",
    icon: VideoIcon, // Use the React component for Video icon
  },
  {
    id: 6,
    name: "Courses",
    href: "/courses",
    icon: CourseIcon, // Use the React component for Course icon
  },
  {
    id: 7,
    name: "Pricing Plans",
    href: "/pricing",
    icon: PricingIcon, // Use the React component for Pricing icon
  },
  {
    id: 8,
    name: "Resources",
    href: "/resources",
    icon: ResourceIcon, // Use the React component for Resource icon
  },
  {
    id: 9,
    name: "Settings",
    href: "/settings",
    icon: SettingsIcon, // Use the React component for Settings icon
  },
];

