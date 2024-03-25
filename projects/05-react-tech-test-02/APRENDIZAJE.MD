* Custom hooks

- Siempre se utilizan para almacenar lógica que pueda llegar a ser repetitiva en un componente padre. Normalmente si tiene un estado y un efecto, se tiene que hacer un custom hook 
- A su vez, pueden ser utilizados para mapear datos de una petición a una api, facilitando la usabilidad de la misma aplicandole un filtro a los datos que se necesitan.

* useRef

- Los useRef() permite referenciar un elemento del dom o un valor que no es necesario para el renderizado de un componente.
- Pueden utilizarte para tener unv alro que permanezca durante el ciclo de vida de nuestra aplicación o componente.

* useMemo
- A diferencia del useEffect, que se ejecuta cuando se monta un componente, cuando se cambian sus dependencias o se desmonta, el useMemo evita que se ejecute una parte del código si no se han cambiando sus dependencias.