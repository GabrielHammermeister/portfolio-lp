import MenuToggle from './MenuToggle/MenuToggle.index'

interface HamburgerProps {
   handleOnClick: () => void
}

const Hamburger = ({ handleOnClick }: HamburgerProps) => (
   <MenuToggle handleOnClick={handleOnClick} />
)

export default Hamburger
