import '@testing-library/jest-dom'
import 'jest-styled-components'

jest.mock('framer-motion', () => ({
   ...jest.requireActual('framer-motion'),
   useReducedMotion: () => true
}))
