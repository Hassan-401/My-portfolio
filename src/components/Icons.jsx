import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
  FaLayerGroup,
  FaMicrochip,
  FaCode,
  FaGraduationCap,
  FaUser,
  FaTrophy,
  FaRocket,
  FaGlobe,
  FaLink,
  FaExternalLinkAlt,
  FaDownload,
  FaBolt,
  FaBriefcase,
  FaHeart,
  FaSun,
  FaMoon,
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const icons = {
  mail: FaEnvelope,
  github: FaGithub,
  linkedin: FaLinkedinIn,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  telegram: FaTelegramPlane,
  x: FaXTwitter,
  layers: FaLayerGroup,
  cpu: FaMicrochip,
  code: FaCode,
  cap: FaGraduationCap,
  user: FaUser,
  trophy: FaTrophy,
  rocket: FaRocket,
  globe: FaGlobe,
  link: FaLink,
  external: FaExternalLinkAlt,
  download: FaDownload,
  spark: FaBolt,
  briefcase: FaBriefcase,
  heart: FaHeart,
  sun: FaSun,
  moon: FaMoon,
}

export default function Icon({ name, size = 20, className = '' }) {
  const Cmp = icons[name] || FaBolt
  return <Cmp size={size} className={className} aria-hidden="true" />
}
