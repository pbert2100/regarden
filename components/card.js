import styles from '../styles/Rarity.module.css'
import Script from 'next/script'

export default function Card(props) {
    let rarity;
    let rarity_color;
    let rarity_text;

    if(props.rarity == 0) {
        rarity ="Limited";
        rarity_color = styles.limited;
        rarity_text = styles.limited_text;
    }

    if(props.rarity == 1) {
        rarity = "Royal";
        rarity_color = styles.royal;
        rarity_text = styles.royal_text;
    }

    if(props.rarity == 2) {
        rarity = "Epic";
        rarity_color = styles.epic;
        rarity_text = styles.epic_text;
    }

    if(props.rarity == 3) {
        rarity = "Legendary";
        rarity_color = styles.legendary;
        rarity_text = styles.legendary_text;
    }

    if(props.rarity == 4) {
        rarity = "Rare";
        rarity_color = styles.rare;
        rarity_text = styles.rare_text;
    }

    if(props.rarity == 5) {
        rarity = "Uncommon";
        rarity_color = styles.uncommon;
        rarity_text = styles.uncommon_text;
    }

    if(props.rarity == 6) {
        rarity = "Common";
        rarity_color = styles.common;
        rarity_text = styles.common_text;
    }

  return (
    <div>
        <div className={rarity_color}>
            <div className='card rounded-xl w-full max-w-xs flex flex-col p-5'>
                <div className='flex justify-between mb-2'>
                    <h1><span className={rarity_text}>{rarity}</span></h1>
                    <p>#{props.identifier}</p>
                </div>

                <div>
                    <img className='rounded border-black border-2 object-cover object-center w-full h-full' src={props.src} />
                </div>

                <div className='mt-2 text-center'>
                    <h1 className='text-sm'>{props.name}</h1>
                </div>
            </div>
        </div>

        <Script type="text/javascript" src="/static/tilt.js"></Script>  
    </div>
  )
}