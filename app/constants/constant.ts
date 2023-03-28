export const COLORS = {
  green: '#A0E047',
  black: '#000000',
  white: '#FFFFFF',
  darkBlue: '#2E0AA8',
  lemon: '#DFF757',
  purple: '#6A24EC',
  blue: '#2C20F5',
  orange: '#EE6623',
} as const

export const WINDOW_SIZE = {
  mobile: 425,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
} as const

export const NAV_TOPIC = {
  HOME: { name: 'Home', link: '' },
  ABOUT: { name: 'About', link: 'about' },
  EXPERIENCE: { name: 'Experience', link: '' },
  EDUCATION: { name: 'Education', link: '' },
  SKILL: { name: 'Skill', link: '' },
  CONTACT: { name: 'Contact', link: '' },
} as const

export const STATIC_WORD = {
  CONTACT_FAB: 'Contact - Frontend Developer - ',
} as const
