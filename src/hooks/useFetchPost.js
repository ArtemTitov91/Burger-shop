import { useState, useEffect } from 'react';
import {checkResponse, config} from './useFetchGet';
import PropTypes from 'prop-types';

const useFetchPost = (dataId ,order) => {

    const [loadingPost, setLoading] = useState(false);
    const [errorPost, setError] = useState(null);
    const [dataPost, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`${config.baseUrl}orders`, {
            method:"POST",
            headers: config.headers,
            body: JSON.stringify({ "ingredients": dataId })
          })
          .then(checkResponse)
          .then((data) => {
            setLoading(false)
            console.log(data);
            setData(data)
          }
          )
          .catch((err) => {
            setLoading(false)
            setError(errorPost)
          }
          );
      }, [order]);

      return {
        loadingPost, errorPost, dataPost
      }
    }

    export default useFetchPost

    useFetchPost.propTypes = {
        dataId: PropTypes.array.isRequired,
         
      };
      
