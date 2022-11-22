import { nanoid } from "nanoid";
function Description({ character }) {
  return (
    <>
      <div key={character.id} className={`description description_${character.id}`}>
        <div className="description_character">
          <div
            className={`description_character_image ${character.id}_image`}
          ></div>
          <h4 className="title">{character.title}</h4>
        </div>
        <div className="description_description">
          {character.contents.map((content) => (
            <div key={nanoid()} className="description_description_item">
              <h4>{content}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Description;
