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
            <div className='bg-black rounded cursor-pointer'>
                <div className='border-2 border-black bg-white rounded p-5 flex justify-between transition ease-in-out duration-200 hover:brightness-95 hover:-translate-x-1 hover:-translate-y-1'>
                    <div>
                        <h1 className='text-sm mb-1'><span className={rarity_text}>{rarity}</span> <span className='text-xs text-neutral-600'>Tier</span></h1>
                        <h1 className='text-xl'>{props.name}</h1>
                    </div>
                    
                    <p>#{props.identifier}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}