import styles from '../styles/Rarity.module.css'
import Link from 'next/link'

export default function Banner(props) {
  let rarity;
  let rarity_text;

  if(props.rarity == 0) {
      rarity ="Limited";
      rarity_text = styles.limited_text;
  }

  if(props.rarity == 1) {
      rarity = "Royal";
      rarity_text = styles.royal_text;
  }

  if(props.rarity == 2) {
      rarity = "Epic";
      rarity_text = styles.epic_text;
  }

  if(props.rarity == 3) {
      rarity = "Legendary";
      rarity_text = styles.legendary_text;
  }

  if(props.rarity == 4) {
      rarity = "Rare";
      rarity_text = styles.rare_text;
  }

  if(props.rarity == 5) {
      rarity = "Uncommon";
      rarity_text = styles.uncommon_text;
  }

  if(props.rarity == 6) {
      rarity = "Common";
      rarity_text = styles.common_text;
  }

  return (
    <div>
        <Link href={'/' + props.identifier}>
            <div className='cursor-pointer glass glass-border rounded p-5 flex justify-between transition ease-in-out duration-200 hover:brightness-75'>
                <div>
                    <h1 className='digital text-sm mb-1'><span className={rarity_text}>{rarity}</span> <span className='text-xs text-neutral-600'>Tier</span></h1>
                    <h1 className='digital text-xl glitch'>{props.name}</h1>
                </div>
                
                <h1 className='digital mb-1 text-xs text-neutral-600'>#{props.identifier}</h1>
            </div>
        </Link>
    </div>
  )
}