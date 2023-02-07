import { Box, ChakraProvider, Flex, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Loading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    loading && (
      <Flex
        height='100%'
        width='100%'
        justifyContent='center'
        alignItems='center'
        bgColor='white'
        zIndex='10'
        position='fixed'
      >
        <Spinner
          position='absolute'
          left={{ base: '40%', sm: '47%' }}
          top='44%'
          thickness='5px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          width='100px'
          height='100px'
        />
      </Flex>
    )
  );
};

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Loading /> <Component {...pageProps} />
    </ChakraProvider>
  );
}
