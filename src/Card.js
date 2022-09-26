import React from 'react';
import './Card.css';
import pikachu from './pikachu-triste.gif';
import Button from './Button.js';
import ImageCard from './ImageCard.js';
import TitleId from './TitleId.js';
import Types from './Types.js';
import Information from './Information';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

const Card = ({name, id, height, weight, stats, types, abilities, func}) => {
    
    const capitalize = str => str?.replace(str[0], str[0].toUpperCase());

    const img = (id) => id?
    `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id.toString().padStart(3, '0')}.png`:
    pikachu;

    const sub = () => {
        id - 1 > 0? func(id - 1): func(905);
    };
    
    const add = () => {
        id + 1 < 905? func(id + 1): func(1);
    };

    const listStats = stats?.map((stat, index) => <p key={index}>{capitalize(stat.stat.name)}: {stat.base_stat}</p>);
    const listAbilities = abilities?.map((ability, index) => <p key={index}>{capitalize(ability.ability.name)}</p>);

    return (
        <div className={'card'}>
            <ImageCard name={name} src={img(id)}/>
            <TitleId name={capitalize(name)} id={id?.toString().padStart(3, "0")}/>
            <Types type={types}/>
            <div className='card-grid'>
                <Information className='information' name='Info' arr={[
                    <p key={1}>Height: {height / 10}m</p>,
                    <p key={2}>Weigth: {weight / 10}kg</p>
                ]}/>
                <Information className='stats' name='Status' arr={listStats}/>
                <Information className='abilities' name='Abilities' arr={listAbilities}/>
            </div>
            <Button 
                icon={<BsChevronLeft />}
                func={sub}
                position={'left'}/>
            <Button 
                icon={<BsChevronRight />}
                func={add}
                position={'right'}/>
        </div>
        );

}

export default Card;