import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  // const fetchResource = async () => {
  //   const response = await axios.get(`https://jsonplaceholder.typicode.com/${props.resource}`)
  //   setResources(response.data);
  // }

  // useEffect(() => {
  //   fetchResource(props.resource);
  // }, [props.resource])
  //if the value in the array changes then the function in the first parameter of useEffect(**,**) gets invoked

  //useEffect(function, array of values)

    useEffect(
      () => {
        (async resource => {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${resource}`
          );

          setResources(response.data);
        })(resource);
      }, [resource]
    )

  return resources
}

export default useResources;