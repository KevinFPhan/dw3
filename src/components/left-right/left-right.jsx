import Styles from './styles.module.scss';
import Button from '../button/button.jsx';

export default function LeftRight(block) {
  return (
    <div className={[Styles['left-right']]}>
      <div className={Styles['left-right__wrapper']}>
        <img
          className={Styles['left-right__img']}
          src={block.image}
          alt={block.image_alt}
        />
        <div className={Styles['left-right__text']}>
          <h2>{block.heading}</h2>
          <p>{block.text}</p>
          <Button {...block.button} />
        </div>
      </div>
    </div>
  );
}
