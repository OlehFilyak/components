export const Event = ({ name, location, speaker, start, end, duration }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{location}</p>
      <p>{speaker}</p>
      <p>{start}</p>
      <p>{end}</p>
      <p>{duration}</p>
    </div>
  );
};
