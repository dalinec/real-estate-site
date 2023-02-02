import { usePropertyFormat } from '@/features/hooks/usePropertyFormat';
import { Badge, Box, Flex, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { TbBed, TbBath, TbRuler } from 'react-icons/tb';

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
  return (
    <Box marginBottom='4rem' bgColor='#fff'>
      <Link href={`/properties/${externalID}`}>
        <Flex
          bgImage={`url("${coverPhoto}")`}
          height='250px'
          bgPosition='center center'
          bgSize='cover'
          position='relative'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Box margin='1rem'>
            <Badge colorScheme='green'>{purpose}</Badge>
          </Box>
          <Flex
            height='50%'
            bgGradient='linear(to-t, #0a0b1cd9, #ffffff00 100%)'
            alignItems='flex-end'
            padding='1rem'
          >
            <Text fontSize='3xl' fontWeight='medium' color='whiteAlpha.800'>
              {price}
            </Text>
          </Flex>
        </Flex>
      </Link>
      <Box padding='1.5rem'>
        <Text fontSize='xl' fontWeight='medium' marginBottom='1rem'>
          {propertyType}
        </Text>
        <Text fontWeight='light' fontSize='sm' isTruncated>
          {address}
        </Text>
        <Text isTruncated>{title}</Text>
        <HStack spacing='1.3rem' marginTop='1rem'>
          <Flex alignItems='center' gap='0.3rem'>
            <TbBed />
            {rooms}
          </Flex>
          <Flex alignItems='center' gap='0.3rem'>
            <TbBath />
            {baths}
          </Flex>
          <Flex alignItems='center' gap='0.3rem'>
            <TbRuler />
            {sqSize}
            <sup>m2</sup>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
};

export default PropertyCard;
