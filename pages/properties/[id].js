import { getProperty } from '@/features/api/getProperty';
import PropertyMatterPort from '@/features/components/Property/PropertyMatterPort/PropertyMatterPort';
import PropertyStats from '@/features/components/Property/PropertyStats';
import PropertyThumbnailSlider from '@/features/components/Property/PropertyThumbnailSlider';
import PropertyVideo from '@/features/components/Property/PropertyVideo';
import TextContentBox from '@/features/components/Property/TextContentBox';
import { usePropertyFormat } from '@/features/hooks/usePropertyFormat';
import DefaultLayout from '@/features/Layouts/DefaultLayout';
import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { TbMapPin } from 'react-icons/tb';

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const property = await getProperty(id);
  return {
    props: { property },
  };
};

const PropertySingle = ({ property }) => {
  const {
    address,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
  } = usePropertyFormat(property);
  return (
    <DefaultLayout>
      <Box bgColor='#f7f8f9' paddingY='3rem'>
        <Grid
          templateColumns='repeat(6, 1fr)'
          gap={{ base: 0, sm: 5 }}
          maxWidth='1280px'
          margin='0 auto'
        >
          <GridItem className='title' colSpan='6'>
            <Text
              fontSize='3xl'
              fontWeight='medium'
              color='blue.800'
              textAlign={{ base: 'center', sm: 'left' }}
            >
              {propertyType} {title}
            </Text>
            <Flex
              fontSize='xl'
              color='blue.600'
              textAlign='center'
              alignItems='center'
              flexDirection={{ base: 'column', sm: 'row' }}
              gap='0.5rem'
              marginY={{ base: '1rem', sm: '0' }}
            >
              <TbMapPin />
              <Text fontWeight='light'>
                {address} - ID:{externalID}
              </Text>
              <Badge colorScheme='green'>{purpose}</Badge>
            </Flex>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyThumbnailSlider photos={photos} />
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <PropertyStats
              rooms={rooms}
              baths={baths}
              price={price}
              sqSize={sqSize}
            />
            <TextContentBox title='Description'>
              <Text
                fontWeight='light'
                color='gray.600'
                fontSize='1rem'
                noOfLines='4'
              >
                {description}
              </Text>
            </TextContentBox>
            <TextContentBox title='Amenities'>
              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                fontWeight='light'
                color='gray.600'
                fontSize='1rem'
              >
                {amenities.length
                  ? amenities.map((item, index) => (
                      <Text key={index}>{item}</Text>
                    ))
                  : 'Please contact us for more info'}
              </SimpleGrid>
            </TextContentBox>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <TextContentBox title='Video Walkthrough'>
              <PropertyVideo coverVideo={coverVideo} />
            </TextContentBox>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 3 }}>
            <TextContentBox title='3D Virtual Walkthrough'>
              <PropertyMatterPort panorama={panorama} />
            </TextContentBox>
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};
export default PropertySingle;

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const property = await getProperty(id);

//   return {
//     props: { property },
//   };
// }
