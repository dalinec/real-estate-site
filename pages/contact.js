import ContactForm from '@/features/components/ContactForm';
import TextContentBox from '@/features/components/Property/TextContentBox';
import DefaultLayout from '@/features/Layouts/DefaultLayout';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <DefaultLayout>
      <Box bgColor='#f7f8f9' paddingY='3rem'>
        <Grid
          templateColumns='repeat(6, 1fr)'
          gap='5'
          maxWidth='1280px'
          margin='0 auto'
        >
          <GridItem colSpan={{ base: 6, sm: 4 }}>
            <TextContentBox title='Contact Us'>
              <ContactForm />
            </TextContentBox>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 2 }}>
            <TextContentBox title='For Inquiries Contact:'>
              <Text
                fontWeight='light'
                color='gray.600'
                fontSize='1rem'
                marginBottom='1rem'
              >
                Mark Smith <br />
                Public Relations Manager <br />
                659 OR 65th St Miami, FL 65897
              </Text>
              <Text
                fontWeight='light'
                color='gray.600'
                fontSize='1rem'
                marginBottom='1rem'
              >
                Janet Johnson <br />
                Public Relations Manager <br />
                659 OR 65th St Miami, FL 65897
              </Text>
            </TextContentBox>
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};
export default ContactPage;
