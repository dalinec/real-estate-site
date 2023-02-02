import { usePropertyFormat } from '@/features/hooks/usePropertyFormat';

const PropertyCard = (property) => {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
  } = usePropertyFormat(property);
  return <>TEST</>;
};

export default PropertyCard;
