import React from 'react';

const SellerLayout = (
  { children }: { children?: React.ReactNode }
) => {
  return (
    <div>
      <h1>Seller Layout</h1>
      {children}
    </div>
  );
}

export default SellerLayout;
