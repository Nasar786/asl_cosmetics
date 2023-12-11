import React from 'react';
import Button from '@components/frontStore/cms/Button';

export default function FeaturedCategories() {
  return (
    <div className="mt-15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 page-width">
        <div>
          <div className="text-center">
            <img src="/assets/homepage/banner/men-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Jewelery collection</h3>
          <div className="mb-1">
            <p>
            ASL Cosmetics' Jewelry Collection.
            Our curated pieces reflect sophistication and style, offering a diverse range from classic to contemporary designs. 
            From delicate necklaces to bold statement pieces, 
            ASL Cosmetics Jewelry Collection is a celebration of beauty and craftsmanship.
            </p>
          </div>
          <Button url="/kids" title="Shop kids" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/assets/homepage/banner/women-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Skin Care collection</h3>
          <div className="mb-1">
            <p>
            ASL Cosmetics introduces a luxurious range of skincare products meticulously crafted to enhance your natural beauty. 
            Our skincare line blends science and nature, 
            offering nourishing solutions that cater to various skin types
            Experience the essence of self-care with ASL Cosmetics – where beauty meets wellness.
            </p>
          </div>
          <Button url="/women" title="Shop women" variant="primary" />
        </div>
        <div>
          <div>
            <img src="/assets/homepage/banner/kid-shoes.jpeg" alt="" />
          </div>
          <h3 className="h4 uppercase mt-1 mb-1">Makeup Collection</h3>
          <div className="mb-1">
            <p>
            ASL Cosmetics presents a captivating Makeup Collection, 
            curated for the modern, confident individual.
            From vibrant eyeshadow palettes to long-lasting lip colors, 
            each item is designed to inspire self-expression and enhance your unique features.
            Elevate your beauty routine with our carefully curated.
            </p>
          </div>
          <Button url="/men" title="Shop men" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};
