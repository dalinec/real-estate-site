import { Box, Fade, Flex, Text } from '@chakra-ui/react';

const HeroBanner = () => {
  return (
    <Fade in>
      <Box
        position='relative'
        minHeight={{ base: '110vh', sm: '60vh' }}
        backgroundImage="url('./hero.jpg')"
        backgroundPosition='center'
        backgroundSize='cover'
        backgroundAttachment='fixed'
      >
        <Box
          position='absolute'
          width='100%'
          height='100%'
          opacity='0.85'
          bgColor='blue.900'
        />
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          alignItems='center'
          justifyContent={{ base: 'flex-start', sm: 'space-between' }}
          maxWidth='1280px'
          position='absolute'
          color='white'
          fontWeight='light'
          left='0'
          right='0'
          top='0'
          bottom='0'
          margin='0 auto'
          padding='2rem'
        >
          <Box className='left' width={{ base: '100%', sm: '50%' }}>
            <Text
              fontSize={{ base: '4xl', sm: '5xl' }}
              lineHeight='shorter'
              marginBottom='1.5rem'
            >
              Download our new <strong>Property Buying Guide</strong> today.
            </Text>
          </Box>
          <Box className='right' width={{ base: '100%', sm: 'auto' }}></Box>
        </Flex>
      </Box>
    </Fade>
  );
};

export default HeroBanner;
