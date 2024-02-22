import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { BounceLoader } from 'react-spinners';
import './Loader.css'; // You can create a CSS file for styling your loader

const Loader = () => {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); // Set loading to false after 3 seconds
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className="loader-container">
        <BounceLoader
          css={override}
          size={60}
          color={"#123abc"}
          loading={loading}
        />
      </div>
    );
  };
  
  // Style for the loader
  const override = css`
    display: block;
    margin: 0 auto;
  `;
  
  export default Loader;
  