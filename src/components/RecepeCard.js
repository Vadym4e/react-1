import PropTypes from 'prop-types';

export const RecepeCard = ({
  item: { image, name, time, servings, calories, difficulty },
}) => {
  return (
    <div>
      <img src={image} alt={name} width="240" />
      <h2>{name}</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div>
          <span>Icon</span>
          <p>{time} min</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{servings} servings</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{calories} calories</p>
        </div>
      </div>

      <div>
        <h3>Difficulty</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span>Easy</span>
          <span>Medium</span>
          <span>Hard</span>
        </div>
      </div>
    </div>
  );
};

RecepeCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']).isRequired,
  }).isRequired,
};
