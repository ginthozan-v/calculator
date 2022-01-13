import React, { useState } from 'react'
import { DotLoader } from 'react-spinners';
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Spinner = ({ loading }) => {
    const [color, setColor] = useState("#cfcfcf");

    return (
        <DotLoader color={color} loading={loading} css={override} size={60} margin={2} />
    )
}

export default Spinner
