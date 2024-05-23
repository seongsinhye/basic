import './App.css';

function AppJSX() {
  const name = '엘리'
  const list = ['우유', '딸기', '요거트'];
  return (
    <>
      <h1 className='orange'>{`Hi ${name}`}</h1>
      <p>{name}</p>
      <ul>
      {
        list.map((item) => (
          <li>{item}</li>
        ))
      }
      </ul>
    </>
  );
}

export default AppJSX;
