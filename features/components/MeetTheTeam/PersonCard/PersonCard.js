import { Box, Flex, Image, Text } from '@chakra-ui/react';

const PersonCard = ({ name, image, description, title }) => {
  return (
    <Flex
      bgColor='#f1f1f14a'
      padding='2rem'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      marginBottom={{ base: '1rem', sm: '0' }}
      textAlign='center'
    >
      <Image
        src={image}
        width='10rem'
        height='10rem'
        objectFit='cover'
        borderRadius='full'
        marginBottom='2rem'
        shadow='md'
      />
      <Text color='blue.400' fontSize='xl' fontWeight='bold'>
        {name}
      </Text>
      <Text fontSize='lg' color='blue.600'>
        {title}
      </Text>
      <Text
        fontSize='md'
        fontWeight='light'
        numberOfLines='4'
        marginTop='1rem'
        color='grey.600'
      >
        {description}
      </Text>
    </Flex>
  );
};

export default PersonCard;
