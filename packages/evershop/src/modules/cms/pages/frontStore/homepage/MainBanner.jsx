import React from 'react';
import { _ } from '@evershop/evershop/src/lib/locale/translate';
import './MainBanner.scss';

export default function MainBanner() {
  const text = _('ASL ${discount} For All', {
    discount: 'Cosmetics',
  });
  return (
    <div className="main-banner-home flex items-center">
      <div className="container grid grid-cols-1 md:grid-cols-1 gap-3">
        <div />
        <div className="text-center md:text-right px-2 ">
          <h2 className="h2 " >{text}</h2>
          <p>
            Use coupon code 
            <span className="font-bold" style={{color:'green'}}> IUII20</span>
          </p>
          <p>
            Use coupon
          <span className="font-bold" style={{color:'green'}}> IUII20</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 1
};
