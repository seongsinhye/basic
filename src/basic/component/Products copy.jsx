import React, { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [checked, setChecked] = useState(false);
  const handelChange = () => setChecked((prev) => !prev)

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
        setProducts(data);
      })
      .catch((error) => console.log('에러가 발색했소'))
      .finally( () =>
        setLoading(false)
      )
    return () => {
      console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
    };
  }, [checked]);

  return (
    <>
    { loading ? <div>loading.... 기다려볼래 ??? </div> : 
  (
    <>
    <input id='checkedBox' type='checkBox' value={checked} onChange={handelChange} />
      <label htmlFor='checkedBox'>Sale Only 🔥 </label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      </>
  )
}
    </>
  );
}
