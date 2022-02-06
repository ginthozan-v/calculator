import React from 'react'
import { DotLoader } from 'react-spinners';
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
`;
const Spinner = ({ loading }) => {
  return (
    <div className='flex h-96 lg:h-full items-center justify-center '>
      <DotLoader color='#cfcfcf' loading={loading} css={override} size={60} margin={2} />
    </div>
  )
}
export default Spinner