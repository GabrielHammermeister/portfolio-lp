jest.mock('framer-motion', () => ({
   ...jest.requireActual('framer-motion'),
   useReducedMotion: () => true
}))
