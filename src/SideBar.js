import { BsPlus, BsFillLightningFill, BsGearFill, BsMoonStarsFill } from 'react-icons/bs';
import { FaFire } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="sidebar">
                    
        <SideBarIcon icon={<FaFire size="28" />} />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} />
        <SideBarIcon icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon icon={<BsMoonStarsFill size="20" />} />
        <Divider />
        <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;