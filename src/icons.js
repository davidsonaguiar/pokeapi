import { FaRegSnowflake,
        FaQuestionCircle } from 'react-icons/fa';
import { TbCircleOff } from 'react-icons/tb';
import { GiFluffyFlame, 
        GiWaterSplash, 
        GiFluffyWing, 
        GiFallingLeaf, 
        GiStonePile, 
        GiChewedSkull, 
        GiAlienBug,
        GiLightningTrio,
        GiKaleidoscopePearls,
        GiFairyWand,
        GiPunch,
        GiPsychicWaves,
        GiCrystalBars,
        GiSpikedDragonHead,
        GiTwoShadows } from 'react-icons/gi';
import { RiGhost2Fill } from 'react-icons/ri';
import { MdDarkMode } from 'react-icons/md';


const icons = {
    fire: <GiFluffyFlame fontSize="24px"/>,
    water: <GiWaterSplash fontSize="24px"/>,
    grass: <GiFallingLeaf fontSize="24px"/>,
    rock: <GiStonePile fontSize="24px"/>,
    poison: <GiChewedSkull fontSize="24px"/>,
    flying: <GiFluffyWing fontSize="24px"/>,
    bug: <GiAlienBug fontSize="24px"/>,
    normal: <TbCircleOff fontSize="24px"/>,
    electric: <GiLightningTrio fontSize="24px"/>,
    ground: <GiKaleidoscopePearls fontSize="24px"/>,
    fairy: <GiFairyWand fontSize="24px"/>,
    fighting: <GiPunch fontSize="24px"/>,
    psychic: <GiPsychicWaves fontSize="24px"/>,
    steel: <GiCrystalBars fontSize="24px"/>,
    ice: <FaRegSnowflake fontSize="24px"/>,
    ghost: <RiGhost2Fill fontSize="24px"/>,
    dragon: <GiSpikedDragonHead fontSize="24px"/>,
    dark: <MdDarkMode fontSize="24px"/>,
    unknown: <FaQuestionCircle fontSize="24px"/>,
    shadow: <GiTwoShadows fontSize="24px"/>
}

export default icons;