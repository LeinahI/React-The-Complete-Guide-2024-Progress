export default function CoreConcept({img, title, desc}) {
  return (
    <li>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{desc}</p>
    </li>
  );
};
